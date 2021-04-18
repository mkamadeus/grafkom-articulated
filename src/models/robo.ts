// prettier-ignore
const headParam = 3.0;
const bodyParam = 1.5;

export const roboTorso : Model = {
  vertices: new Float32Array([
    -0.5/bodyParam, -0.5/bodyParam*2,  -0.5/bodyParam,
    -0.5/bodyParam,  0.5/bodyParam,  -0.5/bodyParam,
     0.5/bodyParam, -0.5/bodyParam*2,  -0.5/bodyParam,
    -0.5/bodyParam,  0.5/bodyParam,  -0.5/bodyParam,
     0.5/bodyParam,  0.5/bodyParam,  -0.5/bodyParam,
     0.5/bodyParam, -0.5/bodyParam*2,  -0.5/bodyParam,

    -0.5/bodyParam, -0.5/bodyParam*2,   0.5/bodyParam,
     0.5/bodyParam, -0.5/bodyParam*2,   0.5/bodyParam,
    -0.5/bodyParam,  0.5/bodyParam,   0.5/bodyParam,
    -0.5/bodyParam,  0.5/bodyParam,   0.5/bodyParam,
     0.5/bodyParam, -0.5/bodyParam*2,   0.5/bodyParam,
     0.5/bodyParam,  0.5/bodyParam,   0.5/bodyParam,

    -0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,
    -0.5/bodyParam,   0.5/bodyParam,  0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,
    -0.5/bodyParam,   0.5/bodyParam,  0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam,  0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,

    -0.5/bodyParam,  -0.5/bodyParam*2, -0.5/bodyParam,
     0.5/bodyParam,  -0.5/bodyParam*2, -0.5/bodyParam,
    -0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
    -0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
     0.5/bodyParam,  -0.5/bodyParam*2, -0.5/bodyParam,
     0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,

    -0.5/bodyParam,  -0.5/bodyParam*2, -0.5/bodyParam,
    -0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
    -0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,
    -0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
    -0.5/bodyParam,   0.5/bodyParam,  0.5/bodyParam,
    -0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,

     0.5/bodyParam,  -0.5/bodyParam*2, -0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,
     0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
     0.5/bodyParam,  -0.5/bodyParam*2,  0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam, -0.5/bodyParam,
     0.5/bodyParam,   0.5/bodyParam,  0.5/bodyParam,

  

  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
    // // front
    // 20/64, 32/64,
    // 28/64, 32/64,
    // 28/64, 20/64,
    
    // 20/64, 32/64,
    // 28/64, 20/64,
    // 20/64, 20/64,
    
    // // back
    // 32/64, 32/64,
    // 40/64, 32/64,
    // 40/64, 20/64,
    
    // 32/64, 32/64,
    // 40/64, 20/64,
    // 32/64, 20/64,
    
    // // left
    // 28/64, 32/64,
    // 32/64, 32/64,
    // 32/64, 20/64,
    
    // 28/64, 32/64,
    // 32/64, 20/64,
    // 28/64, 20/64,
    
    // // right
    // 16/64, 32/64,
    // 20/64, 32/64,
    // 20/64, 20/64,
    
    // 16/64, 32/64,
    // 20/64, 20/64,
    // 16/64, 20/64,
    
    // // bottom
    // 28/64, 16/64,
    // 28/64, 20/64,
    // 36/64, 16/64,

    // 36/64, 16/64,
    // 28/64, 20/64,
    // 36/64, 20/64,

    // // top
    // 20/64, 16/64,
    // 20/64, 20/64,
    // 28/64, 16/64,

    // 28/64, 16/64,
    // 20/64, 20/64,
    // 28/64, 20/64,


    
  ]),

  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const roboLeftArm : Model = {
  vertices: new Float32Array([
    // front
    -0.125, -0.75/1.5, 0.125,
    0.125, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,

    -0.12, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,
    -0.125, 0.0, 0.125,

    // back
    -0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, -0.125,
    0.125, 0.0, -0.125,

    -0.125, -0.75/1.5, -0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,

    // left
    0.125, -0.75/1.5, -0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    
    0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,
    
    // right
    -0.125, -0.75/1.5, -0.125,
    -0.125, 0.0, 0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, -0.75/1.5, -0.125,
    -0.125, -0.75/1.5, 0.125,
    -0.125, 0.0, 0.125,
    
    // bottom
    -0.125, -0.75/1.5, 0.125,
    -0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, -0.125,
    
    -0.125, -0.75/1.5, 0.125,
    0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, 0.125,

    // up
    -0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, 0.0, 0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
    // // front
    // 44/64, 32/64,
    // 48/64, 32/64,
    // 48/64, 20/64,

    // 44/64, 32/64,
    // 48/64, 20/64,
    // 44/64, 20/64,
    
    // // back
    // 52/64, 32/64,
    // 56/64, 32/64,
    // 56/64, 20/64,

    // 52/64, 32/64,
    // 56/64, 20/64,
    // 52/64, 20/64,

    // // left
    // 52/64, 32/64,
    // 48/64, 20/64,
    // 52/64, 20/64,

    // 52/64, 32/64,
    // 48/64, 32/64,
    // 48/64, 20/64,

    // // right
    // 40/64, 32/64,
    // 44/64, 20/64,
    // 40/64, 20/64,

    // 40/64, 32/64,
    // 44/64, 32/64,
    // 44/64, 20/64,

    // // bottom
    // 48/64, 20/64,
    // 52/64, 20/64,
    // 52/64, 16/64,

    // 48/64, 20/64,
    // 52/64, 16/64,
    // 48/64, 16/64,

    // // top
    // 44/64, 20/64,
    // 48/64, 16/64,
    // 48/64, 20/64,

    // 44/64, 20/64,
    // 44/64, 16/64,
    // 48/64, 16/64,
  ]),
  
  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const roboRightArm : Model = {
  vertices: new Float32Array([
    // front
    -0.125, -0.75/1.5, 0.125,
    0.125, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,

    -0.12, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,
    -0.125, 0.0, 0.125,

    // back
    -0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, -0.125,
    0.125, 0.0, -0.125,

    -0.125, -0.75/1.5, -0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,

    // left
    0.125, -0.75/1.5, -0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    
    0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, 0.125,
    0.125, 0.0, 0.125,
    
    // right
    -0.125, -0.75/1.5, -0.125,
    -0.125, 0.0, 0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, -0.75/1.5, -0.125,
    -0.125, -0.75/1.5, 0.125,
    -0.125, 0.0, 0.125,
    
    // bottom
    -0.125, -0.75/1.5, 0.125,
    -0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, -0.125,
    
    -0.125, -0.75/1.5, 0.125,
    0.125, -0.75/1.5, -0.125,
    0.125, -0.75/1.5, 0.125,

    // up
    -0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, 0.0, 0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
    // // front
    // 44/64, 32/64,
    // 48/64, 32/64,
    // 48/64, 20/64,

    // 44/64, 32/64,
    // 48/64, 20/64,
    // 44/64, 20/64,
    
    // // back
    // 52/64, 32/64,
    // 56/64, 32/64,
    // 56/64, 20/64,

    // 52/64, 32/64,
    // 56/64, 20/64,
    // 52/64, 20/64,

    // // left
    // 52/64, 32/64,
    // 48/64, 20/64,
    // 52/64, 20/64,

    // 52/64, 32/64,
    // 48/64, 32/64,
    // 48/64, 20/64,

    // // right
    // 40/64, 32/64,
    // 44/64, 20/64,
    // 40/64, 20/64,

    // 40/64, 32/64,
    // 44/64, 32/64,
    // 44/64, 20/64,

    // // bottom
    // 48/64, 20/64,
    // 52/64, 20/64,
    // 52/64, 16/64,

    // 48/64, 20/64,
    // 52/64, 16/64,
    // 48/64, 16/64,

    // // top
    // 44/64, 20/64,
    // 48/64, 16/64,
    // 48/64, 20/64,

    // 44/64, 20/64,
    // 44/64, 16/64,
    // 48/64, 16/64,
  ]),
  
  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const roboRightLeg : Model = {
  vertices: new Float32Array([
    // front
    -0.125, -0.75, 0.125,
    0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,

    -0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,
    -0.125, 0.0, 0.125,

    // back
    -0.125, -0.75, -0.125,
    0.125, -0.75, -0.125,
    0.125, 0.0, -0.125,

    -0.125, -0.75, -0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,

    // left
    0.125, -0.75, -0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    
    0.125, -0.75, -0.125,
    0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,
    
    // right
    -0.125, -0.75, -0.125,
    -0.125, 0.0, 0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, -0.75, -0.125,
    -0.125, -0.75, 0.125,
    -0.125, 0.0, 0.125,
    
    // bottom
    -0.125, -0.75, 0.125,
    -0.125, -0.75, -0.125,
    0.125, -0.75, -0.125,
    
    -0.125, -0.75, 0.125,
    0.125, -0.75, -0.125,
    0.125, -0.75, 0.125,

    // up
    -0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, 0.0, 0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
    // // front
    // 4/64, 32/64,
    // 8/64, 32/64,
    // 8/64, 20/64,

    // 4/64, 32/64,
    // 8/64, 20/64,
    // 4/64, 20/64,
    
    // // back
    // 12/64, 32/64,
    // 16/64, 32/64,
    // 16/64, 20/64,

    // 12/64, 32/64,
    // 16/64, 20/64,
    // 12/64, 20/64,

    // // left
    // 12/64, 32/64,
    // 8/64, 20/64,
    // 12/64, 20/64,

    // 12/64, 32/64,
    // 8/64, 32/64,
    // 8/64, 20/64,

    // // right
    // 0/64, 32/64,
    // 4/64, 20/64,
    // 0/64, 20/64,

    // 0/64, 32/64,
    // 4/64, 32/64,
    // 4/64, 20/64,

    // // bottom
    // 8/64, 20/64,
    // 12/64, 20/64,
    // 12/64, 16/64,

    // 8/64, 20/64,
    // 12/64, 16/64,
    // 8/64, 16/64,

    // // top
    // 4/64, 20/64,
    // 8/64, 20/64,
    // 8/64, 16/64,

    // 4/64, 20/64,
    // 8/64, 16/64,
    // 4/64, 16/64,
  ]),
  
  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const roboLeftLeg : Model = {
  vertices: new Float32Array([
    // front
    -0.125, -0.75, 0.125,
    0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,

    -0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,
    -0.125, 0.0, 0.125,

    // back
    -0.125, -0.75, -0.125,
    0.125, -0.75, -0.125,
    0.125, 0.0, -0.125,

    -0.125, -0.75, -0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,

    // left
    0.125, -0.75, -0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    
    0.125, -0.75, -0.125,
    0.125, -0.75, 0.125,
    0.125, 0.0, 0.125,
    
    // right
    -0.125, -0.75, -0.125,
    -0.125, 0.0, 0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, -0.75, -0.125,
    -0.125, -0.75, 0.125,
    -0.125, 0.0, 0.125,
    
    // bottom
    -0.125, -0.75, 0.125,
    -0.125, -0.75, -0.125,
    0.125, -0.75, -0.125,
    
    -0.125, -0.75, 0.125,
    0.125, -0.75, -0.125,
    0.125, -0.75, 0.125,

    // up
    -0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
    -0.125, 0.0, -0.125,
    
    -0.125, 0.0, 0.125,
    0.125, 0.0, 0.125,
    0.125, 0.0, -0.125,
  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
    // // front
    // 4/64, 32/64,
    // 8/64, 32/64,
    // 8/64, 20/64,

    // 4/64, 32/64,
    // 8/64, 20/64,
    // 4/64, 20/64,
    
    // // back
    // 12/64, 32/64,
    // 16/64, 32/64,
    // 16/64, 20/64,

    // 12/64, 32/64,
    // 16/64, 20/64,
    // 12/64, 20/64,

    // // left
    // 12/64, 32/64,
    // 8/64, 20/64,
    // 12/64, 20/64,

    // 12/64, 32/64,
    // 8/64, 32/64,
    // 8/64, 20/64,

    // // right
    // 0/64, 32/64,
    // 4/64, 20/64,
    // 0/64, 20/64,

    // 0/64, 32/64,
    // 4/64, 32/64,
    // 4/64, 20/64,

    // // bottom
    // 8/64, 20/64,
    // 12/64, 20/64,
    // 12/64, 16/64,

    // 8/64, 20/64,
    // 12/64, 16/64,
    // 8/64, 16/64,

    // // top
    // 4/64, 20/64,
    // 8/64, 20/64,
    // 8/64, 16/64,

    // 4/64, 20/64,
    // 8/64, 16/64,
    // 4/64, 16/64,
  ]),
  
  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const roboHead : Model = {
  vertices: new Float32Array([
    
    -0.5/headParam, -0.5/headParam,  -0.5/headParam,
    -0.5/headParam,  0.5/headParam,  -0.5/headParam,
     0.5/headParam, -0.5/headParam,  -0.5/headParam,
    -0.5/headParam,  0.5/headParam,  -0.5/headParam,
     0.5/headParam,  0.5/headParam,  -0.5/headParam,
     0.5/headParam, -0.5/headParam,  -0.5/headParam,

    -0.5/headParam, -0.5/headParam,   0.5/headParam,
     0.5/headParam, -0.5/headParam,   0.5/headParam,
    -0.5/headParam,  0.5/headParam,   0.5/headParam,
    -0.5/headParam,  0.5/headParam,   0.5/headParam,
     0.5/headParam, -0.5/headParam,   0.5/headParam,
     0.5/headParam,  0.5/headParam,   0.5/headParam,

    -0.5/headParam,   0.5/headParam, -0.5/headParam,
    -0.5/headParam,   0.5/headParam,  0.5/headParam,
     0.5/headParam,   0.5/headParam, -0.5/headParam,
    -0.5/headParam,   0.5/headParam,  0.5/headParam,
     0.5/headParam,   0.5/headParam,  0.5/headParam,
     0.5/headParam,   0.5/headParam, -0.5/headParam,

    -0.5/headParam,  -0.5/headParam, -0.5/headParam,
     0.5/headParam,  -0.5/headParam, -0.5/headParam,
    -0.5/headParam,  -0.5/headParam,  0.5/headParam,
    -0.5/headParam,  -0.5/headParam,  0.5/headParam,
     0.5/headParam,  -0.5/headParam, -0.5/headParam,
     0.5/headParam,  -0.5/headParam,  0.5/headParam,

    -0.5/headParam,  -0.5/headParam, -0.5/headParam,
    -0.5/headParam,  -0.5/headParam,  0.5/headParam,
    -0.5/headParam,   0.5/headParam, -0.5/headParam,
    -0.5/headParam,  -0.5/headParam,  0.5/headParam,
    -0.5/headParam,   0.5/headParam,  0.5/headParam,
    -0.5/headParam,   0.5/headParam, -0.5/headParam,

     0.5/headParam,  -0.5/headParam, -0.5/headParam,
     0.5/headParam,   0.5/headParam, -0.5/headParam,
     0.5/headParam,  -0.5/headParam,  0.5/headParam,
     0.5/headParam,  -0.5/headParam,  0.5/headParam,
     0.5/headParam,   0.5/headParam, -0.5/headParam,
     0.5/headParam,   0.5/headParam,  0.5/headParam,


  ]),
  material: {
    ambient: [0.2, 0.0, 0.0],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
    shininess: 100.0,
  },
  uv: new Float32Array([
  //   0, 0, -1,
  //   0, 0, -1,
  //   0, 0, -1,
  //   0, 0, -1,
  //   0, 0, -1,
  //   0, 0, -1,

  //   0, 0, 1,
  //   0, 0, 1,
  //   0, 0, 1,
  //   0, 0, 1,
  //   0, 0, 1,
  //   0, 0, 1,

  //   0, 1, 0,
  //   0, 1, 0,
  //   0, 1, 0,
  //   0, 1, 0,
  //   0, 1, 0,
  //   0, 1, 0,

  //   0, -1, 0,
  //   0, -1, 0,
  //   0, -1, 0,
  //   0, -1, 0,
  //   0, -1, 0,
  //   0, -1, 0,

  //  -1, 0, 0,
  //  -1, 0, 0,
  //  -1, 0, 0,
  //  -1, 0, 0,
  //  -1, 0, 0,
  //  -1, 0, 0,

  //   1, 0, 0,
  //   1, 0, 0,
  //   1, 0, 0,
  //   1, 0, 0,
  //   1, 0, 0,
  //   1, 0, 0,
    
  ]),
  
  normal: new  Float32Array([
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
  ])
}

// prettier-ignore
export const robo : ModelNode = {
  transform: [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1],
    render: roboTorso,
    sibling: null,
    child: {
      transform: [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0.5, 0.375, 0, 1],
      render: roboLeftArm,
      sibling: {
        transform: [1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          -0.5, 0.375, 0, 1],
        render: roboRightArm,
        sibling: {
          transform: [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0.5, -0.5, 0, 1],
            render: roboLeftLeg,
            sibling: {
              transform: [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                -0.5, -0.5, 0, 1],
                render: roboRightLeg,
                sibling: {
                  transform: [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0.5, 0, 1],
                    render: roboHead,
                    sibling: null,
                    child: null
                },
                child: null
            },
            child: null
          },
          child: null
      },
      child: null
    }
}

//prettier-ignore
// export const roboTexture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAUNSURBVHja7ZrbSxRRHMf3sbQsoyi0+5ZtWmyWPWiUld2MKDKKyjCxKPOCsHSBIrILlQXVk1BYQRBIFD10ewh77Mn/6dd8z+xv+s3hnBn3os6uc+DLHM/8ztn5fs5lz3omkQhJ9asWErRhxTySeWjN4kq6cTgdqESpJzacXrNISQKAYLJv7zZ6fKrJu0JlBYDN19VUWAEkk0mfUFYWALj39WnAZWUPQJrFCIDkdJgTAEzmwwB0pOrKBwAb37xygcpj9dcBmFQ2ANi4FI+Mkv8aTNVWEARTm2orldntycW0da2r9NqF1LDaXQdSKyvVQohYlAEAx6EO6qIN3Od2w/YRkQIAbVldpYzA4I4N1erKwt/765dQa/0yFQcgHIM6KON2JICgfcSsA1APvcLtNde4Y6wWPV3hgfg5MkATLzL0d3SYJp5nnPx1+nzzPDVtXKJiEIs6DVl4CoLTJtoO20dEYwTUOEN5VZXbq7XuVEA+vb6aPt29Qt8fDarrl+FBGstcoN8jGRq7dkwJMYhFHdRFHm2hTfwdto+IzBRwp8ECSi6fT0/OttDYpYPUklqqzCN17B6hH3euKvPIIwEKYhCLOqiLNmSbYfuI6ABweswdttX0qKORRi/uo6fnmx1zh+jbnR769SDjfb39eTpAH/oO07Cz50cMYlEHddEG975cBG37iEisAXhQDNuetjS97TtBby4d8H7QvOpqcwzupVv7d/r0smsP3T/VrGIQizqoizbUFMhOh7B9xKwD4F9vbHrs6hHVo8/O7aLrR9I0dHALDbbVK7PQ7eM76OHpXUrIIwax73vbVd03l4+612x7DFLfRzC4yO0LzrRPklQqlfIptIHJSfumyLmX6O4OVlgaH3fbgZw8puTJxo3eNRIAbFvjogBg81nNbQDOCJDm1WfMtSlQMIBtqQxBdes61fVQy0ef5D39fkvjCCXu3fuvzk5KvH5NiXfv1IKJr0pePFGmJOMhlMEU6+tXV/y3LZ5j9PtcnzUVADCYDwBIfWhvryvk+cGzEDzz/EAyHpKmpbgdGcsGuQ4D1e/nA8BmMBSA6QH5IfGAGBHSpIyHTOZlGybAMmbWAWDY8wMgLz+cAcgyWzzHwaDM6wblaJqpESBjMO+lPCMsPLw0zXkul7EMQDct6mNTxnribL7w+0MKZTJGv58XADYnR4AVgDQDGBKAyZgExlPAVCc71E0ARoc6PYNcXlQAOa8BOgDZ+3LFlgDkGqCZlkCkOR0AriYAqjwbM+WvwbwB6HMwDID+LWCKtQDQe1gHYJoiRQEQdD9wEdK/AXQApkVLkzRnAxC0RoQCaG1tJSgMAMf19/f75BnijQj3nt77NgAy3rAeSHOmOS4ByCnA1ykDsBkMuy+nCK46QG/HKADoGy9vQeVp4ogXYRsANmkaIbMGwDSCfBAcY6FbaydGluk97FsAHZnWiJwAxClOcYpTnOIUpzjFKU5xilOc4hSnOBWaCj5cLfbhZ8kB0M7/5x4AOQKm4wWIUpsCkQeQ6/sF/N9e37mClPxXuul9glwPP6MCwHbfevrLIGwnSaUEIOh+4EmR6Xi87AEU+/x/JgAU8n7BtJ//zxQA01FXLgDCjr4iDaCQKaADkMdaOgD5fsCUz/+jAsA2RfTDTfn2h376m9fx90wByPf9An2ImwAU9ALEdKdC3y8wne/bAJimSGQA5Hu8burhoJegyhKAbyEUC5z+Csx0APgH+QeX11rs170AAAAASUVORK5CYII='
