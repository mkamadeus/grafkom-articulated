import "./styles/style.css";
import {
  multiplyMatrix,
  getScaleMatrix,
  getTranslationMatrix,
  getRotationMatrix,
  getPerspectiveMatrix,
  getOrthographicMatrix,
  getInverse,
  getLookAt,
  getObliqueMatrix,
  getIdentityMatrix,
  getxRotation,
  getyRotate,
  getflatten
} from "./utils/Matrix4";
import { subtractVector, addVector, transformVector } from "./utils/Vector3";

import EnvironmentShader from "./shaders/EnvironmentVertexShader.glsl";
import EnvironmentFragmentShader from "./shaders/EnvironmentFragmentShader.glsl";
import BodyVertexShader from "./shaders/BodyVertexShader.glsl";
import BodyFragmentShader from "./shaders/BodyFragmentShader.glsl";
import { steve, steveTexture } from "./models/steve";
import { robo, roboTextur, roboTexture } from "./models/robo";

const models: ModelNode[] = [steve,steve];

// WebGL objects
var gl: WebGLRenderingContext | null = null;
let programObject: WebGLProgram | null = null;

// WebGL buffers
let vbo: WebGLBuffer | null = null;
let texcoordBuffer: WebGLBuffer | null = null;
let elementVbo: WebGLBuffer | null = null;

// WebGL buffer offsets
let colorOffset: number = 0;
let uvOffset: number = 0;

// WebGL element count
let numElements: number = 0;
let numTexcoord: number = 0;

// WebGL mat4 uniform location
let matrixLocation: WebGLUniformLocation | null = null;
let projectionMatrixLocation: WebGLUniformLocation | null = null;
let textureLocation: WebGLUniformLocation | null = null;
//WebGL uniform location Cube
let projectionLocation : WebGLUniformLocation | null = null;
let texture3DLocation : WebGLUniformLocation | null = null;

let viewLocation : WebGLUniformLocation | null = null;
let worldLocation : WebGLUniformLocation | null = null;
let worldCameraPositionLocation : WebGLUniformLocation | null = null;

// WebGL texture
let texture: WebGLTexture | null = null;
let textures: WebGLTexture | null = null;

//Position Buffer
let positionBuffer : WebGLBuffer | null = null;
let normalBuffer : WebGLBuffer | null = null;

let positionLocation : number ;
let normalLocation : number;

// Variables
let matrix = Array(16).fill(0);
let type: 0 | 1 | 2 = 1;
let shadingMode = 1;
let projMode = 1;
let near = 1;
let far = 50;

// Camera matrix
let xRotationCamera = 0;
let yRotationCamera = 0;
let cameraDistance = 2;
let cameraMatrix = Array(16).fill(0);
let projectionMatrix = Array(16).fill(0);

// Transformation variables
let xRotation = 0;
let yRotation = 0;
let zRotation = 0;

let xScale = 1;
let yScale = 1;
let zScale = 1;

let xTranslation = 0;
let yTranslation = 0;
let zTranslation = 0;

/**
 * Function to initialize canvas.
 */
const initCanvas = () => {
  gl = gl as WebGLRenderingContext;
  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
};

/**
 * Reset canvas
 */
const resetCanvas = () => {
  gl = gl as WebGLRenderingContext;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
};

/**
 * Draw scene
 */
const drawScene = () => {
  calculateCameraProjection(near, far);
  calculateCameraProjection(near, far);
  drawObject(getIdentityMatrix(), models[type]);
};

/**
 * Draw a passed object.
 * @param model The model drawn to scene
 */
function drawObject(parentTransformation: number[], model: ModelNode) {
  const currentTransformation = multiplyMatrix(
    parentTransformation,
    model.transform
  );

  if (model.child) drawObject(currentTransformation, model.child);
  if (model.sibling) drawObject(parentTransformation, model.sibling);

  // calculateMatrix(model);
  matrix = currentTransformation;
  draw(model.render);
}

/**
 * Insert object model to WebGL buffers.
 */
const initModel = (model: Model) => {

  if (type==0) {
    gl = gl as WebGLRenderingContext;

    vbo = gl.createBuffer() as WebGLBuffer;

    // Store cube vertex positions and colors
    // gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    // gl.bufferData(
    //   gl.ARRAY_BUFFER,
    //   model.positions.byteLength + model.colors.byteLength + model.uv.byteLength,
    //   gl.STATIC_DRAW
    // );
    // colorOffset = model.positions.byteLength;
    // gl.bufferSubData(gl.ARRAY_BUFFER, 0, model.positions);
    // gl.bufferSubData(gl.ARRAY_BUFFER, colorOffset, model.colors);
  
    // Store element triangle definition
    elementVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, elementVbo);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);
    // numElements = model.vertices.length;
  
    // Texture
    texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.uv, gl.STATIC_DRAW);
    // numTexcoord = model.uv.length;

    // Create a texture.
    texture = gl.createTexture();
  
    // Asynchronously load an image
    const image = new Image();
    image.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX////MzMw46qqDAAAAEElEQVQImWNg+M+AFeEQBgB+vw/xfUUZkgAAAABJRU5ErkJggg==";
    image.src = steveTexture;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
  }

  else if (type==1) {
    gl = gl as WebGLRenderingContext;

    positionBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);

    normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.uv, gl.STATIC_DRAW);
    
    textures = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, textures);

    const faceInfos = [
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        url: roboTexture,
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        url: roboTexture,
      },
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        url: roboTexture,
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        url: roboTexture,
      },
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        url: roboTexture,
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
        url: roboTexture,
      },
    ];
    faceInfos.forEach((faceInfo) => {
      const {target, url} = faceInfo;
  
      // Upload the canvas to the cubemap face.
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 512;
      const height = 512;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;
  
      // setup each face so it's immediately renderable
      gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  
      // Asynchronously load an image
      const image = new Image();
      image.src = url;
      image.onload = () => {
        // Now that the image has loaded make copy it to the texture.
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, textures);
        gl.texImage2D(target, level, internalFormat, format, type, image);
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
      };
    });
    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  }
};

/**
 * Initialize body shaders.
 */
const initShaders = () => {
  gl = gl as WebGLRenderingContext;

  if (type==0) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    gl.shaderSource(vertexShader, BodyVertexShader);
    gl.compileShader(vertexShader);
  
    // Initialize body fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
    gl.shaderSource(fragmentShader, BodyFragmentShader);
    gl.compileShader(fragmentShader);
    programObject = gl.createProgram() as WebGLProgram;
    
    gl.attachShader(programObject, vertexShader);
    gl.attachShader(programObject, fragmentShader);

    // Link shader variables
    gl.bindAttribLocation(programObject, 0, "a_position");
    gl.bindAttribLocation(programObject, 1, "a_texcoord");
    gl.linkProgram(programObject);
    matrixLocation = gl.getUniformLocation(programObject, "u_matrix");
    projectionMatrixLocation = gl.getUniformLocation(programObject,"u_proj_matrix");
    textureLocation = gl.getUniformLocation(programObject, "u_texture");
  
  } else if (type==1) {

    const vertexShader3D = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    gl.shaderSource(vertexShader3D, EnvironmentShader);
    gl.compileShader(vertexShader3D);
    
    const fragmentvertexShader3D = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
    gl.shaderSource(fragmentvertexShader3D, EnvironmentFragmentShader);
    gl.compileShader(fragmentvertexShader3D);
    
    // Initialize shader program
    programObject = gl.createProgram() as WebGLProgram;
    
    gl.attachShader(programObject, vertexShader3D);
    gl.attachShader(programObject, fragmentvertexShader3D);

    // Link shader variables
    gl.bindAttribLocation(programObject, 0, "a_position_2");
    gl.bindAttribLocation(programObject, 1, "a_normal_2");
    gl.linkProgram(programObject);

    // look up where the vertex data needs to go.
    positionLocation = gl.getAttribLocation(programObject, "a_position_2"); //positionLocation
    normalLocation = gl.getAttribLocation(programObject, "a_normal_2"); //Normal Location

    projectionLocation = gl.getUniformLocation(programObject, "u_projection_2");
    texture3DLocation = gl.getUniformLocation(programObject, "u_texture_2");
    worldLocation = gl.getUniformLocation(programObject, "u_world_2");
    worldCameraPositionLocation = gl.getUniformLocation(programObject, "u_worldCameraPosition_2");

  }
};

/**
 * Function to calculate current transformation matrix.
 */
const calculateMatrix = (model: ModelNode) => {
  let rotate = getRotationMatrix(xRotation, yRotation, zRotation);
  let translate = getTranslationMatrix(
    xTranslation,
    yTranslation,
    zTranslation
  );
  let scale = getScaleMatrix(xScale, yScale, zScale);
  matrix = multiplyMatrix(rotate, translate);
  matrix = multiplyMatrix(matrix, scale);

  // Transformation from model
  matrix = multiplyMatrix(matrix, model.transform);
};

/**
 * Function to calculate the projection matrix. Arcball camera pointed at (0,0,0).
 */
const calculateCameraProjection = (near: number, far: number) => {
  gl = gl as WebGLRenderingContext;

  // Arcball camera calculation
  let cameraPosition = [0, 0, cameraDistance];
  const targetPosition = [0, 0, 0];
  const up = [0, 1, 0];

  const xRotationMatrix = getRotationMatrix(xRotationCamera, 0, 0);
  let forwardVector = [...subtractVector(cameraPosition, targetPosition), 1];
  cameraPosition = addVector(
    transformVector(xRotationMatrix, forwardVector),
    targetPosition
  );

  const yRotationMatrix = getRotationMatrix(0, yRotationCamera, 0);
  forwardVector = [...subtractVector(cameraPosition, targetPosition), 1];
  cameraPosition = addVector(
    transformVector(yRotationMatrix, forwardVector),
    targetPosition
  );

  cameraMatrix = getLookAt(cameraPosition, targetPosition, up);

  // Switching between projection modes
  if (projMode == 1) {
    projectionMatrix = multiplyMatrix(
      getInverse(cameraMatrix),
      getPerspectiveMatrix(60, 1, near, far)
    );
  } else if (projMode == 2) {
    projectionMatrix = multiplyMatrix(
      getInverse(cameraMatrix),
      getOrthographicMatrix(-2.0, 2.0, -2.0, 2.0, 0.1, 100)
    );
  } else if (projMode == 3) {
    const tempOrthoMatrix = multiplyMatrix(
      getInverse(cameraMatrix),
      getOrthographicMatrix(-2.0, 2.0, -2.0, 2.0, 0.1, 100)
    );
    projectionMatrix = multiplyMatrix(
      getObliqueMatrix(45, 45),
      tempOrthoMatrix
    );
  }
};

/**
 * Draw model object.
 */
const draw = (model: Model) => {
  initModel(model);

  if (type==0)  {
    gl = gl as WebGLRenderingContext;

    // Use WebGL Program
    gl.useProgram(programObject);
  
    // Retrieve buffers
  
    gl.enableVertexAttribArray(0);
    gl.bindBuffer(gl.ARRAY_BUFFER, elementVbo);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
 
    gl.enableVertexAttribArray(1);
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);
  
    // Initiate transformation matrix
    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    gl.uniformMatrix4fv(projectionMatrixLocation, false, projectionMatrix);
  
    gl.uniform1i(textureLocation, 0);
    gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  
    // Bind and draw triangles
    gl.bindBuffer(gl.ARRAY_BUFFER, elementVbo);
    gl.drawArrays(gl.TRIANGLES, numElements, gl.UNSIGNED_SHORT);
    
  } else if (type==1) {
    gl = gl as WebGLRenderingContext;

    // Use WebGL Program
    gl.useProgram(programObject);
  
    // Turn on the position attribute
    gl.enableVertexAttribArray(positionLocation);
    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 3;          // 3 components per iteration
    var types = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        positionLocation, size, types, normalize, stride, offset);

    // Turn on the normal attribute
    gl.enableVertexAttribArray(normalLocation);
    // Bind the normal buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    // Tell the attribute how to get data out of normalBuffer (ARRAY_BUFFER)
    var size = 3;          // 3 components per iteration
    var types = gl.FLOAT;   // the data is 32bit floating point values
    var normalize = false; // normalize the data (convert from 0-255 to 0-1)
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        normalLocation, size, types, normalize, stride, offset);
      
    var cameraPosition = [0, 0, cameraDistance];
  
    // Passing variable into the Shader Program
    gl.uniformMatrix4fv(projectionLocation, false, projectionMatrix);
    gl.uniformMatrix4fv(worldLocation, false, matrix);
    gl.uniform3fv(worldCameraPositionLocation, cameraPosition);
    
    // Tell the shader to use texture unit 0 for u_texture
    gl.uniform1i(texture3DLocation, 0);

    // Draw the geometry.
    // Draw arrays with Triangle Fan Type
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    for (let i =0; i < 6; i++) {
      gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    }
  
  }
  // calculateNormal(model);
  
};

function initEvents() {
  // Set initial value
  xRotation = 0;
  yRotation = 0;
  zRotation = 0;

  xScale = 1;
  yScale = 1;
  zScale = 1;

  xTranslation = 0;
  yTranslation = 0;
  zTranslation = 0;

  xRotationCamera = (document.getElementById(
    "x-camera-rotation"
  ) as HTMLInputElement).valueAsNumber;
  yRotationCamera = (document.getElementById(
    "y-camera-rotation"
  ) as HTMLInputElement).valueAsNumber;
  cameraDistance = (document.getElementById(
    "camera-distance"
  ) as HTMLInputElement).valueAsNumber;
  near = (document.getElementById("near") as HTMLInputElement).valueAsNumber;
  far = (document.getElementById("far") as HTMLInputElement).valueAsNumber;

  (document.getElementById("reset") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      xRotation = 0;
      xRotationCamera = 0;
      (document.getElementById(
        "x-camera-rotation"
      ) as HTMLInputElement).valueAsNumber = 0;
      yRotationCamera = 0;
      (document.getElementById(
        "y-camera-rotation"
      ) as HTMLInputElement).valueAsNumber = 0;
      cameraDistance = 2;
      (document.getElementById(
        "camera-distance"
      ) as HTMLInputElement).valueAsNumber = 2;
      near = 1;
      (document.getElementById("near") as HTMLInputElement).valueAsNumber = 1;
      far = 50;
      (document.getElementById("far") as HTMLInputElement).valueAsNumber = 50;
      calculateMatrix();
      calculateCameraProjection(near, far);
    }
  );
  (document.getElementById(
    "toggle-shading"
  ) as HTMLInputElement).addEventListener("click", (ev) => {
    shadingMode = shadingMode == 0 ? 1 : 0;
  });
  (document.getElementById("model1") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      type = 1;
      initModel();
    }
  );
  (document.getElementById("model2") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      type = 2;
      initModel();
    }
  );
  (document.getElementById("model3") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      type = 3;
      initModel();
    }
  );
  (document.getElementById("perspective") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      projMode = 1;
      calculateCameraProjection(near, far);
    }
  );
  (document.getElementById(
    "orthographic"
  ) as HTMLInputElement).addEventListener("click", (ev) => {
    projMode = 2;
    calculateCameraProjection(near, far);
  });
  (document.getElementById("oblique") as HTMLInputElement).addEventListener(
    "click",
    (ev) => {
      projMode = 3;
      calculateCameraProjection(near, far);
    }
  );
  (document.getElementById("near") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      near = (document.getElementById("near") as HTMLInputElement)
        .valueAsNumber;
      calculateCameraProjection(near, far);
    }
  );
  (document.getElementById("far") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      far = (document.getElementById("far") as HTMLInputElement).valueAsNumber;
      calculateCameraProjection(near, far);
    }
  );
  (document.getElementById(
    "x-camera-rotation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    xRotationCamera = (document.getElementById(
      "x-camera-rotation"
    ) as HTMLInputElement).valueAsNumber;
    // calculateCameraProjection(near, far, projMode);
  });
  (document.getElementById(
    "y-camera-rotation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    yRotationCamera = (document.getElementById(
      "y-camera-rotation"
    ) as HTMLInputElement).valueAsNumber;
    calculateCameraProjection(near, far, projMode);
  });
  (document.getElementById(
    "camera-distance"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    cameraDistance = (document.getElementById(
      "camera-distance"
    ) as HTMLInputElement).valueAsNumber;
    calculateCameraProjection(near, far, projMode);
  });
}

// Get Canvas
const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;

const ratio = window.devicePixelRatio ? window.devicePixelRatio : 1;
canvas.width = 1200 * ratio;
canvas.height = 1200 * ratio;

gl = canvas.getContext("webgl");
if (!gl) alert("Your browser/machine does not support WebGL!");

// Initialize stuff
initCanvas();
initShaders();
// initWireShaders();
initEvents();

resetCanvas();

let currentFrame = 0;
const frameFunction: FrameRequestCallback = () => {
  currentFrame++;
  // TEST: rotate arms xD
  models[type].child!.transform = multiplyMatrix(
    getRotationMatrix(-currentFrame * 0.001, 0, 0),
    models[type].child!.transform
  );
  models[type].child!.sibling!.transform = multiplyMatrix(
    getRotationMatrix(currentFrame * 0.001, 0, 0),
    models[type].child!.sibling!.transform
  );

  drawScene();
  window.requestAnimationFrame(frameFunction);
};
drawScene();
window.requestAnimationFrame(frameFunction);



