import "./styles/style.css";
import {
  multiplyMatrix,
  getScaleMatrix,
  getTranslationMatrix,
  getRotationMatrix,
  getPerspectiveMatrix,
  getOrthographicMatrix,
  getInverse,
  getTranspose,
  getLookAt,
  getObliqueMatrix,
  getIdentityMatrix,
} from "./utils/Matrix4";
import { subtractVector, addVector, transformVector } from "./utils/Vector3";

import BodyVertexShader from "./shaders/BodyVertexShader.glsl";
import BodyFragmentShader from "./shaders/BodyFragmentShader.glsl";
import WireVertexShader from "./shaders/WireVertexShader.glsl";
import WireFragmentShader from "./shaders/WireFragmentShader.glsl";
import { steve } from "./models/steve";

const models: ModelNode[] = [steve];

// WebGL objects
let gl: WebGLRenderingContext | null = null;
let programObject: WebGLProgram | null = null;
let wireProgramObject: WebGLProgram | null = null;

// WebGL buffers
let vbo: WebGLBuffer | null = null;
let wireVbo: WebGLBuffer | null = null;
let elementVbo: WebGLBuffer | null = null;

// WebGL buffer offsets
let normalOffset: number = 0;
let colorOffset: number = 0;

// WebGL element count
let numElements: number = 0;
let wireNumElements: number = 0;

// WebGL mat4 uniform location
let matrixLocation: WebGLUniformLocation | null = null;
let wireMatrixLocation: WebGLUniformLocation | null = null;
let projectionMatrixLocation: WebGLUniformLocation | null = null;
let wireProjectionMatrixLocation: WebGLUniformLocation | null = null;
let normalMatrixLocation: WebGLUniformLocation | null = null;

// WebGL constant uniform locations
let mode: WebGLUniformLocation | null = null;
let ka: WebGLUniformLocation | null = null;
let kd: WebGLUniformLocation | null = null;
let ks: WebGLUniformLocation | null = null;
let shineVal: WebGLUniformLocation | null = null;
let ac: WebGLUniformLocation | null = null;
let dc: WebGLUniformLocation | null = null;
let sc: WebGLUniformLocation | null = null;
let lightPos: WebGLUniformLocation | null = null;
let shadingModeLocation: WebGLUniformLocation | null = null;

// Variables
let wireIndices = null;
let matrix = Array(16).fill(0);
let type: 0 | 1 | 2 = 0;
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

// Normal
let cubeNormal = new Float32Array();

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
  gl = gl as WebGLRenderingContext;

  vbo = gl.createBuffer() as WebGLBuffer;

  // Store cube vertex positions and colors
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

  gl.bufferData(
    gl.ARRAY_BUFFER,
    model.positions.byteLength +
      cubeNormal.byteLength +
      model.colors.byteLength,
    gl.STATIC_DRAW
  );
  normalOffset = model.positions.byteLength;
  colorOffset = normalOffset + cubeNormal.byteLength;

  // Store buffer data for position, normal, and colors
  gl.bufferSubData(gl.ARRAY_BUFFER, 0, model.positions);
  gl.bufferSubData(gl.ARRAY_BUFFER, normalOffset, cubeNormal);
  gl.bufferSubData(gl.ARRAY_BUFFER, colorOffset, model.colors);

  // Store element triangle definition
  elementVbo = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementVbo);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, model.indices, gl.STATIC_DRAW);
  numElements = model.indices.length;

  // Store wire definition
  // wireIndices = createWireIndices(model.indices);
  // wireVbo = gl.createBuffer();
  // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, wireVbo);
  // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, wireIndices, gl.STATIC_DRAW);
  // wireNumElements = wireIndices.length;
};

/**
 * Initialize body shaders.
 */
const initShaders = () => {
  gl = gl as WebGLRenderingContext;

  // Initialize body vertex shader
  const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
  gl.shaderSource(vertexShader, BodyVertexShader);
  gl.compileShader(vertexShader);

  // Initialize body fragment shader
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
  gl.shaderSource(fragmentShader, BodyFragmentShader);
  gl.compileShader(fragmentShader);

  // Initialize shader program
  programObject = gl.createProgram() as WebGLProgram;
  gl.attachShader(programObject, vertexShader);
  gl.attachShader(programObject, fragmentShader);

  // Link shader variables
  gl.bindAttribLocation(programObject, 0, "a_position");
  gl.bindAttribLocation(programObject, 1, "normal");
  gl.bindAttribLocation(programObject, 2, "a_color");

  gl.linkProgram(programObject);
  matrixLocation = gl.getUniformLocation(programObject, "u_matrix");
  projectionMatrixLocation = gl.getUniformLocation(
    programObject,
    "u_proj_matrix"
  );
  mode = gl.getUniformLocation(programObject, "mode");
  shadingModeLocation = gl.getUniformLocation(programObject, "shading");
  ka = gl.getUniformLocation(programObject, "Ka");
  kd = gl.getUniformLocation(programObject, "Kd");
  ks = gl.getUniformLocation(programObject, "Ks");
  shineVal = gl.getUniformLocation(programObject, "shininessVal");
  ac = gl.getUniformLocation(programObject, "ambientColor");
  dc = gl.getUniformLocation(programObject, "diffuseColor");
  sc = gl.getUniformLocation(programObject, "specularColor");
  lightPos = gl.getUniformLocation(programObject, "lightPos");
  normalMatrixLocation = gl.getUniformLocation(programObject, "normalMat");
};

/**
 * Initialize wire shaders.
 */
// const initWireShaders = () => {
//   gl = gl as WebGLRenderingContext;

//   // Initialize wire vertex shaders
//   const wireVertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
//   gl.shaderSource(wireVertexShader, WireVertexShader);
//   gl.compileShader(wireVertexShader);

//   // Initialize wire fragment shaders
//   const wireFragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
//   gl.shaderSource(wireFragmentShader, WireFragmentShader);
//   gl.compileShader(wireFragmentShader);

//   // Initialize wire shader program
//   wireProgramObject = gl.createProgram() as WebGLProgram;
//   gl.attachShader(wireProgramObject, wireVertexShader);
//   gl.attachShader(wireProgramObject, wireFragmentShader);

//   // Link shader variables
//   gl.bindAttribLocation(wireProgramObject, 0, "a_position");
//   gl.linkProgram(wireProgramObject);
//   wireMatrixLocation = gl.getUniformLocation(wireProgramObject, "u_matrix");
//   wireProjectionMatrixLocation = gl.getUniformLocation(
//     wireProgramObject,
//     "u_proj_matrix"
//   );
// };

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
 * Function to calculate normals.
 */
const calculateNormal = (model: Model) => {
  const vertNormal = Array(model.positions.length).fill(0);
  for (let i = 0; i < model.indices.length / 3; i = i + 3) {
    const p1 = [];
    const p2 = [];
    const p3 = [];
    for (let j = 0; j < 3; j++) {
      p1.push(model.positions[model.indices[i] * 3 + j]);
      p2.push(model.positions[model.indices[i + 1] * 3 + j]);
      p3.push(model.positions[model.indices[i + 2] * 3 + j]);
    }
    const u = [];
    const v = [];
    for (let j = 0; j < 3; j++) {
      u.push(p2[j] - p1[j]);
      v.push(p3[j] - p1[j]);
    }
    const nx = u[1] * v[2] - u[2] * v[1];
    const ny = u[2] * v[0] - u[0] * v[2];
    const nz = u[0] * v[1] - u[1] * v[0];

    const normal = [nx, ny, nz];

    for (let j = 0; j < 3; j++) {
      vertNormal[model.indices[i] * 3 + j] += normal[j];
      vertNormal[model.indices[i + 1] * 3 + j] += normal[j];
      vertNormal[model.indices[i + 2] * 3 + j] += normal[j];
    }
  }
  cubeNormal = new Float32Array(vertNormal);
};

/**
 * Draw model object.
 */
const draw = (model: Model) => {
  initModel(model);
  calculateNormal(model);
  gl = gl as WebGLRenderingContext;

  // Use WebGL Program
  gl.useProgram(programObject);

  // Retrieve buffers
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, normalOffset);
  gl.enableVertexAttribArray(1);
  gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 0, colorOffset);
  gl.enableVertexAttribArray(2);

  // Initiate transformation matrix
  gl.uniformMatrix4fv(matrixLocation, false, matrix);
  gl.uniformMatrix4fv(projectionMatrixLocation, false, projectionMatrix);
  gl.uniformMatrix4fv(
    normalMatrixLocation,
    false,
    new Float32Array(getTranspose(getInverse(matrix)))
  );

  // Phong shader uniform
  gl.uniform1i(mode, 1);
  gl.uniform1i(shadingModeLocation, shadingMode);
  gl.uniform1f(ka, 1);
  gl.uniform1f(kd, 1);
  gl.uniform1f(ks, 1);
  gl.uniform1f(shineVal, model.material.shininess);

  gl.uniform3fv(ac, new Float32Array(model.material.ambient));
  gl.uniform3fv(dc, new Float32Array(model.material.diffuse));
  gl.uniform3fv(sc, new Float32Array(model.material.specular));
  gl.uniform3fv(lightPos, new Float32Array([0, 0, 0.5]));

  // Bind and draw triangles
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementVbo);
  gl.drawElements(gl.TRIANGLES, numElements, gl.UNSIGNED_SHORT, 0);
};

/**
 * Draw wireframe
 */
// function drawWire() {
//   gl = gl as WebGLRenderingContext;

//   // Use WebGL Program
//   gl.useProgram(wireProgramObject);

//   // Bind transformation matrix
//   gl.uniformMatrix4fv(wireMatrixLocation, false, matrix);
//   gl.uniformMatrix4fv(wireProjectionMatrixLocation, false, projectionMatrix);

//   // Retrieve buffers
//   gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
//   gl.enableVertexAttribArray(0);

//   // Bind and draw wireframes
//   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, wireVbo);
//   gl.drawElements(gl.LINES, wireNumElements, gl.UNSIGNED_SHORT, 0);
// }

// function createWireIndices(triangleIndices: Uint16Array) {
//   const wireIndices = new Uint16Array(triangleIndices.length * 2);
//   let j = 0;
//   for (let i = 0; i < triangleIndices.length; i += 3) {
//     wireIndices[j++] = triangleIndices[i];
//     wireIndices[j++] = triangleIndices[i + 1];

//     wireIndices[j++] = triangleIndices[i + 1];
//     wireIndices[j++] = triangleIndices[i + 2];

//     wireIndices[j++] = triangleIndices[i + 2];
//     wireIndices[j++] = triangleIndices[i];
//   }
//   return wireIndices;
// }

function initEvents() {
  // Set initial value
  xRotation = (document.getElementById("x-rotation") as HTMLInputElement)
    .valueAsNumber;
  yRotation = (document.getElementById("y-rotation") as HTMLInputElement)
    .valueAsNumber;
  zRotation = (document.getElementById("z-rotation") as HTMLInputElement)
    .valueAsNumber;
  xScale = (document.getElementById("x-scale") as HTMLInputElement)
    .valueAsNumber;
  yScale = (document.getElementById("y-scale") as HTMLInputElement)
    .valueAsNumber;
  zScale = (document.getElementById("z-scale") as HTMLInputElement)
    .valueAsNumber;
  xTranslation = (document.getElementById("x-translation") as HTMLInputElement)
    .valueAsNumber;
  yTranslation = (document.getElementById("y-translation") as HTMLInputElement)
    .valueAsNumber;
  zTranslation = (document.getElementById("z-translation") as HTMLInputElement)
    .valueAsNumber;
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
      (document.getElementById(
        "x-rotation"
      ) as HTMLInputElement).valueAsNumber = 0;
      yRotation = 0;
      (document.getElementById(
        "y-rotation"
      ) as HTMLInputElement).valueAsNumber = 0;
      zRotation = 0;
      (document.getElementById(
        "z-rotation"
      ) as HTMLInputElement).valueAsNumber = 0;
      xScale = 1;
      (document.getElementById(
        "x-scale"
      ) as HTMLInputElement).valueAsNumber = 1;
      yScale = 1;
      (document.getElementById(
        "y-scale"
      ) as HTMLInputElement).valueAsNumber = 1;
      zScale = 1;
      (document.getElementById(
        "z-scale"
      ) as HTMLInputElement).valueAsNumber = 1;
      xTranslation = 0;
      (document.getElementById(
        "x-translation"
      ) as HTMLInputElement).valueAsNumber = 0;
      yTranslation = 0;
      (document.getElementById(
        "y-translation"
      ) as HTMLInputElement).valueAsNumber = 0;
      zTranslation = 0;
      (document.getElementById(
        "z-translation"
      ) as HTMLInputElement).valueAsNumber = 0;
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
  (document.getElementById("x-rotation") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      xRotation = (document.getElementById("x-rotation") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById("y-rotation") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      yRotation = (document.getElementById("y-rotation") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById("z-rotation") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      zRotation = (document.getElementById("z-rotation") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById("x-scale") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      xScale = (document.getElementById("x-scale") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById("y-scale") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      yScale = (document.getElementById("y-scale") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById("z-scale") as HTMLInputElement).addEventListener(
    "input",
    (ev) => {
      zScale = (document.getElementById("z-scale") as HTMLInputElement)
        .valueAsNumber;
      calculateMatrix();
    }
  );
  (document.getElementById(
    "x-translation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    xTranslation = (document.getElementById(
      "x-translation"
    ) as HTMLInputElement).valueAsNumber;
    calculateMatrix();
  });
  (document.getElementById(
    "y-translation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    yTranslation = (document.getElementById(
      "y-translation"
    ) as HTMLInputElement).valueAsNumber;
    calculateMatrix();
  });
  (document.getElementById(
    "z-translation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    zTranslation = (document.getElementById(
      "z-translation"
    ) as HTMLInputElement).valueAsNumber;
    calculateMatrix();
  });
  (document.getElementById(
    "x-camera-rotation"
  ) as HTMLInputElement).addEventListener("input", (ev) => {
    xRotationCamera = (document.getElementById(
      "x-camera-rotation"
    ) as HTMLInputElement).valueAsNumber;
    calculateCameraProjection(near, far, projMode);
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
window.requestAnimationFrame(frameFunction);
