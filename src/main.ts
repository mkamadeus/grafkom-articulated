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
  getTranspose,
  getxRotation,
  getyRotate,
} from "./utils/Matrix4";
import { subtractVector, addVector, transformVector } from "./utils/Vector3";
import { cloneDeep } from "lodash/fp";

import EnvironmentShader from "./shaders/EnvironmentVertexShader.glsl";
import EnvironmentFragmentShader from "./shaders/EnvironmentFragmentShader.glsl";
import BodyVertexShader from "./shaders/BodyVertexShader.glsl";
import BodyFragmentShader from "./shaders/BodyFragmentShader.glsl";
import BumpFragmentShader from "./shaders/BumpFragmentShader.glsl";
import BumpVertexShader from "./shaders/BumpVertexShader.glsl";
import { steve, steveTexture } from "./models/steve";
import { robo, roboTextur, roboTexture } from "./models/robo";
import { robot } from "./models/robot";

const models: ModelNode[] = [steve, robo, robot];
let currentModel = null;

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
let projection3DLocations: WebGLUniformLocation | null = null;
let texture3DLocation: WebGLUniformLocation | null = null;

let viewLocation: WebGLUniformLocation | null = null;
let world3DLocations: WebGLUniformLocation | null = null;
let world3DCameraPositionLocation: WebGLUniformLocation | null = null;

let uniformModel: WebGLUniformLocation | null = null;
let uniformNormal: WebGLUniformLocation | null = null;
let uniformProjection: WebGLUniformLocation | null = null;
let uniformTextureNormal: WebGLUniformLocation | null = null;
let uniformTextureDiffuse: WebGLUniformLocation | null = null;

// WebGL texture
let texture: WebGLTexture | null = null;
let textures: WebGLTexture | null = null;
let texturesDiffuse: WebGLTexture | null = null;
let texturesNormal: WebGLTexture | null = null;

//Position Buffer
let positionBuffer: WebGLBuffer | null = null;
let normalBuffer: WebGLBuffer | null = null;
let tangentBuffer: WebGLBuffer | null = null;
let bitangentBuffer: WebGLBuffer | null = null;

let positionLocation: number;
let normalLocation: number;
let cameraPosition: number;
let attr_pos: number;
let attr_tang: number;
let attr_bitang: number;
let attr_uv: number;

// Variables
let matrix = Array(16).fill(0);
let type: 0 | 1 | 2 = 0;
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

// Animation
let isAnimated = false;

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
  drawObject(getIdentityMatrix(), models[type]);
};

/**
 * Draw a passed object.
 * @param model The model drawn to scene
 */
function drawObject(parentTransformation: number[], model: ModelNode) {
  const currentTransformation = multiplyMatrix(
    model.transform,
    parentTransformation
  );

  if (model.child) drawObject(currentTransformation, model.child);
  if (model.sibling) drawObject(parentTransformation, model.sibling);

  matrix = currentTransformation;
  draw(model.render);
}

/**
 * Insert object model to WebGL buffers.
 */
const initModel = (model: Model | RobotModel) => {
  if (type == 0) {
    gl = gl as WebGLRenderingContext;

    vbo = gl.createBuffer() as WebGLBuffer;

    // Store element triangle definition
    elementVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, elementVbo);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);
    // numElements = model.vertices.length;

    // Texture
    texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.uv, gl.STATIC_DRAW);

    // Create a texture.
    texture = gl.createTexture();

    // Asynchronously load an image
    const image = new Image();
    image.src = models[type].texture!;

    // Bind image
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
  } else if (type == 1) {
    gl = gl as WebGLRenderingContext;

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);

    normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.normal, gl.STATIC_DRAW);

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
    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    faceInfos.forEach((faceInfo) => {
      gl = gl as WebGLRenderingContext;
      const { target, url } = faceInfo;

      // Upload the canvas to the cubemap face.
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 6;
      const height = 64;
      const format = gl.RGBA;
      const types = gl.UNSIGNED_BYTE;

      // setup each face so it's immediately renderable
      gl.texImage2D(
        target,
        level,
        internalFormat,
        width,
        height,
        0,
        format,
        types,
        null
      );

      // Asynchronously load an image
      const image = new Image();
      image.src = url;
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, textures);
      gl.texImage2D(target, level, internalFormat, format, types, image);
      gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    });
  } else if (type == 2) {
    gl = gl as WebGLRenderingContext;
    vbo = gl.createBuffer() as WebGLBuffer;

    texturesDiffuse = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texturesDiffuse);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([255, 0, 0, 255])
    );
    var img = new Image();
    img.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, texturesDiffuse);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    };
    img.src = "./models/bump_diffuse.png";

    texturesNormal = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texturesNormal);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([255, 0, 0, 255])
    );
    var img = new Image();
    img.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, texturesNormal);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    };
    img.src = "./models/bump_normal.png";

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);

    normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.normal, gl.STATIC_DRAW);

    tangentBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tangentBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.tangents, gl.STATIC_DRAW);

    bitangentBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bitangentBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.bitangents, gl.STATIC_DRAW);

    texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, model.uv, gl.STATIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texturesNormal);
    uniformTextureNormal = gl.getUniformLocation(programObject, "tex_norm");
    gl.uniform1i(uniformTextureNormal, 1);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texturesDiffuse);
    uniformTextureDiffuse = gl.getUniformLocation(programObject, "tex_diffuse");
    gl.uniform1i(uniformTextureNormal, 1);
  }
};

/**
 * Initialize body shaders.
 */
const initShaders = () => {
  gl = gl as WebGLRenderingContext;

  if (type == 0) {
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
    projectionMatrixLocation = gl.getUniformLocation(
      programObject,
      "u_proj_matrix"
    );
    textureLocation = gl.getUniformLocation(programObject, "u_texture");
  } else if (type == 1) {
    const vertexShader3D = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    gl.shaderSource(vertexShader3D, EnvironmentShader);
    gl.compileShader(vertexShader3D);

    const fragmentvertexShader3D = gl.createShader(
      gl.FRAGMENT_SHADER
    ) as WebGLShader;
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

    world3DLocations = gl.getUniformLocation(programObject, "u_world_2");
    projection3DLocations = gl.getUniformLocation(
      programObject,
      "u_projection_2"
    );
    texture3DLocation = gl.getUniformLocation(programObject, "u_texture_2");
    world3DCameraPositionLocation = gl.getUniformLocation(
      programObject,
      "u_worldCameraPosition_2"
    );
    // viewLocation =  gl.getUniformLocation(programObject, "u_view_2");
  } else if (type == 2) {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    gl.shaderSource(vertexShader, BumpVertexShader);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
    gl.shaderSource(fragmentShader, BumpFragmentShader);
    gl.compileShader(fragmentShader);

    programObject = gl.createProgram() as WebGLProgram;

    gl.attachShader(programObject, vertexShader);
    gl.attachShader(programObject, fragmentShader);

    uniformModel = gl.getUniformLocation(programObject, "model_mtx");
    uniformNormal = gl.getUniformLocation(programObject, "norm_mtx");
    uniformProjection = gl.getUniformLocation(programObject, "proj_mtx");

    attr_pos = gl.getAttribLocation(programObject, "vert_pos");
    attr_tang = gl.getAttribLocation(programObject, "vert_tang");
    attr_bitang = gl.getAttribLocation(programObject, "vert_bitang");
    attr_uv = gl.getAttribLocation(programObject, "vert_uv");
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
const draw = (model: Model | RobotModel) => {
  initModel(model);

  if (type == 0) {
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
  } else if (type == 1) {
    gl = gl as WebGLRenderingContext;
    // gl.enable(gl.CULL_FACE);
    // gl.enable(gl.DEPTH_TEST);
    // gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    // Use WebGL Program
    gl.useProgram(programObject);

    // Turn on the position attribute
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    // Turn on the normal attribute
    gl.enableVertexAttribArray(normalLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);

    var aspect = gl.canvas.width / gl.canvas.height;
    let cameraPosition = [0, 0, cameraDistance];
    projectionMatrix = multiplyMatrix(
      getInverse(cameraMatrix),
      getPerspectiveMatrix(60, aspect, near, far)
    );

    let viewMatrix = getInverse(cameraMatrix);

    // Passing variable into the Shader Program
    gl.uniformMatrix4fv(world3DLocations, false, matrix);
    gl.uniformMatrix4fv(projection3DLocations, false, projectionMatrix);
    gl.uniformMatrix4fv(viewLocation, false, cameraMatrix);
    gl.uniform3fv(world3DCameraPositionLocation, cameraPosition);
    // Tell the shader to use texture unit 0 for u_texture
    gl.uniform1i(texture3DLocation, 0);

    // Draw the geometry.
    // Draw arrays with Triangle Fan Type
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // for (let i =0; i < 6; i++) {
    //   gl.drawArrays(gl.TRIANGLE_FAN, 4*i, 4);
    // }

    gl.drawArrays(gl.TRIANGLES, 0, 6 * 6);
  }
  // calculateNormal(model);
  else if (type == 2) {
    gl = gl as WebGLRenderingContext;
    gl.useProgram(programObject);

    gl.uniformMatrix4fv(uniformModel, false, robot.transform);
    gl.uniformMatrix4fv(
      uniformNormal,
      false,
      getTranspose(getInverse(robot.transform))
    );
    gl.uniformMatrix4fv(
      uniformProjection,
      false,
      multiplyMatrix(
        getPerspectiveMatrix(45, 680.0 / 382.0, near, far),
        robot.transform
      )
    );

    gl.enableVertexAttribArray(attr_pos);
    gl.enableVertexAttribArray(attr_tang);
    gl.enableVertexAttribArray(attr_bitang);
    gl.enableVertexAttribArray(attr_uv);

    // gl.activeTexture(gl.TEXTURE0);
    // gl.bindTexture(gl.TEXTURE_2D, tex_norm);
    // var uni = gl.getUniformLocation(programObject, "tex_norm");
    // gl.uniform1i(uni, 0);

    // gl.activeTexture(gl.TEXTURE1);
    // gl.bindTexture(gl.TEXTURE_2D, tex_diffuse);
    // var uni = gl.getUniformLocation(programObject, "tex_diffuse");
    // gl.uniform1i(uni, 1);

    // gl.activeTexture(gl.TEXTURE2);
    // gl.bindTexture(gl.TEXTURE_2D, tex_depth);
    // var uni = gl.getUniformLocation(programObject, "tex_depth");
    // gl.uniform1i(uni, 2);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(attr_pos, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, tangentBuffer);
    gl.vertexAttribPointer(attr_tang, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, bitangentBuffer);
    gl.vertexAttribPointer(attr_bitang, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.vertexAttribPointer(attr_uv, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, numElements, gl.UNSIGNED_SHORT);
  }
};

const resetView = () => {
  xCameraRotationInput.valueAsNumber = 0;
  yRotationCamera = 0;
  yCameraRotationInput.valueAsNumber = 0;
  cameraDistance = 2;
  cameraDistanceInput.valueAsNumber = 2;
};

const downloadObject = () => {
  const a = document.createElement("a");
  const file = new Blob([JSON.stringify(models[type])], {
    type: "text/plain",
  });
  a.href = URL.createObjectURL(file);
  a.download = `model-${new Date().getTime()}.json`;
  a.click();
};

const loadObject = (objectString: string) => {
  currentModel = JSON.parse(objectString);
};

// Camera position related inputs
const xCameraRotationInput = document.getElementById(
  "x-camera-rotation"
) as HTMLInputElement;
const yCameraRotationInput = document.getElementById(
  "y-camera-rotation"
) as HTMLInputElement;
const cameraDistanceInput = document.getElementById(
  "camera-distance"
) as HTMLInputElement;

// JSON related buttons
const loadJsonButton = document.getElementById(
  "load-json"
) as HTMLButtonElement;
const loadedJsonInput = document.getElementById(
  "load-json-input"
) as HTMLInputElement;
const saveJsonButton = document.getElementById(
  "save-json"
) as HTMLButtonElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;

// Model related buttons
const model1Button = document.getElementById("model1") as HTMLButtonElement;
const model2Button = document.getElementById("model2") as HTMLButtonElement;
const model3Button = document.getElementById("model3") as HTMLButtonElement;

// Camera viewing buttons
const perspectiveButton = document.getElementById(
  "perspective"
) as HTMLInputElement;
const orthographicButton = document.getElementById(
  "orthographic"
) as HTMLInputElement;
const obliqueButton = document.getElementById("oblique") as HTMLInputElement;

// Animation toggle button
const animationToggleButton = document.getElementById(
  "toggle-animation"
) as HTMLButtonElement;

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

  xRotationCamera = xCameraRotationInput.valueAsNumber;
  yRotationCamera = yCameraRotationInput.valueAsNumber;
  cameraDistance = cameraDistanceInput.valueAsNumber;

  // Set listener for upload button
  loadJsonButton.addEventListener("click", (e) => {
    console.log("asdasdasdasdasd");
  });

  loadedJsonInput.onchange = (e) => {
    var reader = new FileReader();
    reader.onload = (ev) => {
      currentModel = JSON.parse(reader.result as string);
      console.log(currentModel);
    };
    reader.readAsText((e.target as HTMLInputElement).files![0]);
  };

  // Set listener for download button
  saveJsonButton.addEventListener("click", downloadObject);

  // Set listener for resetting view
  resetButton.addEventListener("click", resetView);

  // Set listener for changing models
  model1Button.addEventListener("click", () => {
    type = 0;
    main();
  });
  model2Button.addEventListener("click", () => {
    type = 1;
    main();
  });
  model3Button.addEventListener("click", () => {
    type = 2;
    main();
  });

  // Set listener for changing view mode
  perspectiveButton.addEventListener("click", () => {
    projMode = 1;
    calculateCameraProjection(near, far);
  });
  orthographicButton.addEventListener("click", () => {
    projMode = 2;
    calculateCameraProjection(near, far);
  });
  obliqueButton.addEventListener("click", () => {
    projMode = 3;
    calculateCameraProjection(near, far);
  });

  // Set listener for changing camera position
  xCameraRotationInput.addEventListener("input", () => {
    xRotationCamera = xCameraRotationInput.valueAsNumber;
  });
  yCameraRotationInput.addEventListener("input", () => {
    yRotationCamera = yCameraRotationInput.valueAsNumber;
    calculateCameraProjection(near, far);
  });
  cameraDistanceInput.addEventListener("input", () => {
    cameraDistance = cameraDistanceInput.valueAsNumber;
    calculateCameraProjection(near, far);
  });

  // Set listener for toggling animation
  animationToggleButton.addEventListener("click", () => {
    isAnimated = !isAnimated;
  });
}

// Get Canvas
function main() {
  const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;

  const ratio = window.devicePixelRatio ? window.devicePixelRatio : 1;
  canvas.width = 1200 * ratio;
  canvas.height = 1200 * ratio;

  gl = canvas.getContext("webgl");
  if (!gl) alert("Your browser/machine does not support WebGL!");

  // Initialize stuff
  initCanvas();
  initShaders();
  initEvents();

  resetCanvas();

  let currentFrame = 0;
  const frameFunction: FrameRequestCallback = () => {
    currentFrame++;

    const animation = (m: ModelNode) => {
      if (m.child) animation(m.child);
      if (m.sibling) animation(m.sibling);

      const { ax, fx, ay, fy, az, fz } = m.animation;
      m.transform = multiplyMatrix(
        getRotationMatrix(
          ax * Math.sin(fx * currentFrame),
          ay * Math.sin(fy * currentFrame),
          az * Math.sin(fz * currentFrame)
        ),
        m.transform
      );
    };

    calculateCameraProjection(near, far);
    calculateCameraProjection(near, far);
    const copied = cloneDeep(models[type]);
    if (type === 0) {
      isAnimated && animation(models[type]);
      drawScene();
      models[type] = copied;
    }
    if (type === 1) {
      isAnimated && animation(models[type]);
      drawScene();
      models[type] = copied;
    }
    // const

    window.requestAnimationFrame(frameFunction);
  };
  // drawScene();
  // window.requestAnimationFrame(drawScene)
  window.requestAnimationFrame(frameFunction);
}
main();
