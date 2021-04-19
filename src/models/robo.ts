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
export const roboTextur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAUNSURBVHja7ZrbSxRRHMf3sbQsoyi0+5ZtWmyWPWiUld2MKDKKyjCxKPOCsHSBIrILlQXVk1BYQRBIFD10ewh77Mn/6dd8z+xv+s3hnBn3os6uc+DLHM/8ztn5fs5lz3omkQhJ9asWErRhxTySeWjN4kq6cTgdqESpJzacXrNISQKAYLJv7zZ6fKrJu0JlBYDN19VUWAEkk0mfUFYWALj39WnAZWUPQJrFCIDkdJgTAEzmwwB0pOrKBwAb37xygcpj9dcBmFQ2ANi4FI+Mkv8aTNVWEARTm2orldntycW0da2r9NqF1LDaXQdSKyvVQohYlAEAx6EO6qIN3Od2w/YRkQIAbVldpYzA4I4N1erKwt/765dQa/0yFQcgHIM6KON2JICgfcSsA1APvcLtNde4Y6wWPV3hgfg5MkATLzL0d3SYJp5nnPx1+nzzPDVtXKJiEIs6DVl4CoLTJtoO20dEYwTUOEN5VZXbq7XuVEA+vb6aPt29Qt8fDarrl+FBGstcoN8jGRq7dkwJMYhFHdRFHm2hTfwdto+IzBRwp8ECSi6fT0/OttDYpYPUklqqzCN17B6hH3euKvPIIwEKYhCLOqiLNmSbYfuI6ABweswdttX0qKORRi/uo6fnmx1zh+jbnR769SDjfb39eTpAH/oO07Cz50cMYlEHddEG975cBG37iEisAXhQDNuetjS97TtBby4d8H7QvOpqcwzupVv7d/r0smsP3T/VrGIQizqoizbUFMhOh7B9xKwD4F9vbHrs6hHVo8/O7aLrR9I0dHALDbbVK7PQ7eM76OHpXUrIIwax73vbVd03l4+612x7DFLfRzC4yO0LzrRPklQqlfIptIHJSfumyLmX6O4OVlgaH3fbgZw8puTJxo3eNRIAbFvjogBg81nNbQDOCJDm1WfMtSlQMIBtqQxBdes61fVQy0ef5D39fkvjCCXu3fuvzk5KvH5NiXfv1IKJr0pePFGmJOMhlMEU6+tXV/y3LZ5j9PtcnzUVADCYDwBIfWhvryvk+cGzEDzz/EAyHpKmpbgdGcsGuQ4D1e/nA8BmMBSA6QH5IfGAGBHSpIyHTOZlGybAMmbWAWDY8wMgLz+cAcgyWzzHwaDM6wblaJqpESBjMO+lPCMsPLw0zXkul7EMQDct6mNTxnribL7w+0MKZTJGv58XADYnR4AVgDQDGBKAyZgExlPAVCc71E0ARoc6PYNcXlQAOa8BOgDZ+3LFlgDkGqCZlkCkOR0AriYAqjwbM+WvwbwB6HMwDID+LWCKtQDQe1gHYJoiRQEQdD9wEdK/AXQApkVLkzRnAxC0RoQCaG1tJSgMAMf19/f75BnijQj3nt77NgAy3rAeSHOmOS4ByCnA1ykDsBkMuy+nCK46QG/HKADoGy9vQeVp4ogXYRsANmkaIbMGwDSCfBAcY6FbaydGluk97FsAHZnWiJwAxClOcYpTnOIUpzjFKU5xilOc4hSnOBWaCj5cLfbhZ8kB0M7/5x4AOQKm4wWIUpsCkQeQ6/sF/N9e37mClPxXuul9glwPP6MCwHbfevrLIGwnSaUEIOh+4EmR6Xi87AEU+/x/JgAU8n7BtJ//zxQA01FXLgDCjr4iDaCQKaADkMdaOgD5fsCUz/+jAsA2RfTDTfn2h376m9fx90wByPf9An2ImwAU9ALEdKdC3y8wne/bAJimSGQA5Hu8burhoJegyhKAbyEUC5z+Csx0APgH+QeX11rs170AAAAASUVORK5CYII='
export const roboTexture = 'data:image/jpeg;base64,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Z1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAM/AAAABgAAAAAAAAAAAAACAAAAAgAAAAAFAHIAaQBnAGgAdAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAACAAAAAgAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAgAAAAAAUmdodGxvbmcAAAIAAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRv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PSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGNyczpBbHJlYWR5QXBwbGllZD0iVHJ1ZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOkNyZWF0ZURhdGU9IjIwMTAtMDgtMDRUMjA6MDI6MjItMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDEwLTA4LTA1VDEzOjQ0OjI1LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDEwLTA4LTA1VDEzOjQ0OjI1LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzBFNkY0M0JEMkEwREYxMUI4N0Y4RENCM0I5NkIwMDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBFNkY0M0JEMkEwREYxMUI4N0Y4RENCM0I5NkIwMDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMEU2RjQzQkQyQTBERjExQjg3RjhEQ0IzQjk2QjAwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwRTZGNDNCRDJBMERGMTFCODdGOERDQjNCOTZCMDAwIiBzdEV2dDp3aGVuPSIyMDEwLTA4LTA1VDEzOjQ0OjI1LTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZAAAAAAB/9sAhAAKBwcHCAcKCAgKDwoICg8SDQoKDRIUEBASEBAUEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQsMDBUTFSIYGCIUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAIAAgADAREAAhEBAxEB/90ABABA/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkKGBkmNkUaJ2R0VTfyo7PDKCnT4/OElKS0xNTk9GV1hZWltcXV5fVGVmZ2hpamtsbW5vZHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwAtIwsV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'