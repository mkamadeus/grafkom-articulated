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
  animation: {
    ax: 0,
    fx: 0,
    ay: -5,
    fy: 0.1,
    az: -1.5,
    fz: 0.1,
  },
  child: {
    transform: [1, 0, 0, 0,
              0, 1, 0, 0,
              0, 0, 1, 0,
              0.45, 0.375, 0, 1],
    render: roboLeftArm,
    animation: {
      ax: -50,
      fx: 0.1,
      ay: 0,
      fy: 0,
      az: 0,
      fz: 0,
    },
    sibling: {
      transform: [1, 0, 0, 0,
                  0, 1, 0, 0,
                  0, 0, 1, 0,
                  -0.45, 0.375, 0, 1],
      render: roboRightArm,
      animation: {
        ax: 50,
        fx: 0.1,
        ay: 0,
        fy: 0,
        az: 0,
        fz: 0,
      },
      sibling: {
        transform: [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0.45, -0.5, 0, 1],
          render: roboLeftLeg,
          animation: {
            ax: 50,
            fx: 0.1,
            ay: 0,
            fy: 0,
            az: 0,
            fz: 0,
          },
          sibling: {
            transform: [1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        -0.45, -0.5, 0, 1],
              render: roboRightLeg,
              animation: {
                ax: -50,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
              },
              sibling: {
                transform: [1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            0, 0.5, 0, 1],
                  render: roboHead,
                  animation: {
                    ax: 0,
                    fx: 0,
                    ay: 0,
                    fy: 0,
                    az: 0,
                    fz: 0,
                  },
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
export const roboTextur = './background.jpg'
export const roboTexture = 'data:image/png;base64,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'