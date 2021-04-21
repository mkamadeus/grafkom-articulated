// prettier-ignore
export const robotHead : RobotModel = {
    vertices: new Float32Array([
        // Front
        2/6, 6/6, 1.5/6,
        -2/6, 6/6, 1.5/6,
        -2/6, 3/6, 1.5/6,

        2/6, 6/6, 1.5/6,
        -2/6, 3/6, 1.5/6,
        2/6, 3/6, 1.5/6,

        // Back
        2/6, 6/6, -1.5/6,
        2/6, 3/6, -1.5/6,
        -2/6, 3/6, -1.5/6,

        2/6, 6/6, -1.5/6,
        -2/6, 3/6, -1.5/6,
        -2/6, 6/6, -1.5/6,

        // Left
        -2/6, 6/6, -1.5/6,
        -2/6, 3/6, -1.5/6,
        -2/6, 3/6, 1.5/6,

        -2/6, 6/6, -1.5/6,
        -2/6, 3/6, 1.5/6,
        -2/6, 6/6, 1.5/6,

        // Right
        2/6, 6/6, -1.5/6,
        2/6, 6/6, 1.5/6,
        2/6, 3/6, 1.5/6,

        2/6, 6/6, -1.5/6,
        2/6, 3/6, 1.5/6,
        2/6, 3/6, -1.5/6,

        // Top
        -2/6, 6/6, -1.5/6,
        -2/6, 6/6, 1.5/6,
        2/6, 6/6, 1.5/6,

        -2/6, 6/6, -1.5/6,
        2/6, 6/6, 1.5/6,
        2/6, 6/6, -1.5/6,

        // Bottom
        -2/6, 3/6, -1.5/6,
        2/6, 3/6, -1.5/6,
        2/6, 3/6, 1.5/6,

        -2/6, 3/6, -1.5/6,
        2/6, 3/6, 1.5/6,
        -2/6, 3/6, 1.5/6,
    ]),
    tangents: new Float32Array([
        // Front
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Back
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // Left
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Right
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // Top
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Bottom
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
    ]),
    bitangents: new Float32Array([
        // Front
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Back
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Left
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Right
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Top
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Bottom
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
    ]),
    uv: new Float32Array([
        // Front
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,

        // Back
        1, 1,
        1, 0,
        0, 0,

        1, 1,
        0, 0,
        0, 1,

        // Left
        0, 1,
        1, 1,
        1, 0,

        0, 1,
        1, 0,
        0, 0,

        // Right
        1, 1,
        0, 0,
        0, 1,

        1, 1,
        1, 0,
        0, 0,

        // Top
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 1,
        1, 0,

        // Bottom
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,
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
      ]),
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    },
}

export const robotNeck : RobotModel = {
    vertices: new Float32Array([
        // Front
        -0.5/6, 3/6, 0.5/6,
        -0.5/6, 2/6, 0.5/6,
        0.5/6, 2/6, 0.5/6,

        -0.5/6, 3/6, 0.5/6,
        0.5/6, 2/6, 0.5/6,
        0.5/6, 3/6, 0.5/6,

        // Back
        0.5/6, 3/6, -0.5/6,
        0.5/6, 2/6, -0.5/6,
        -0.5/6, 2/6, -0.5/6,

        0.5/6, 3/6, -0.5/6,
        -0.5/6, 2/6, -0.5/6,
        -0.5/6, 3/6, -0.5/6,

        // Left
        -0.5/6, 3/6, -0.5/6,
        -0.5/6, 2/6, -0.5/6,
        -0.5/6, 2/6, 0.5/6,

        -0.5/6, 3/6, -0.5/6,
        -0.5/6, 2/6, 0.5/6,
        -0.5/6, 3/6, 0.5/6,

        // Right
        0.5/6, 2/6, -0.5/6,
        0.5/6, 3/6, -0.5/6,
        0.5/6, 3/6, 0.5/6,

        0.5/6, 2/6, -0.5/6,
        0.5/6, 3/6, 0.5/6,
        0.5/6, 2/6, 0.5/6,

        // Top
        -0.5/6, 3/6, -0.5/6,
        -0.5/6, 3/6, 0.5/6,
        0.5/6, 3/6, 0.5/6,

        -0.5/6, 3/6, -0.5/6,
        0.5/6, 3/6, 0.5/6,
        0.5/6, 3/6, -0.5/6,

        // Bottom
        -0.5/6, 2/6, -0.5/6,
        0.5/6, 2/6, -0.5/6,
        0.5/6, 2/6, 0.5/6,

        -0.5/6, 2/6, -0.5/6,
        0.5/6, 2/6, 0.5/6,
        -0.5/6, 2/6, 0.5/6,
    ]),
    tangents: new Float32Array([
        // Front
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Back
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // Left
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Right
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // Top
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Bottom
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
    ]),
    bitangents: new Float32Array([
        // Front
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Back
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Left
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Right
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Top
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Bottom
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
    ]),
    uv: new Float32Array([
        // Front
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,

        // Back
        1, 1,
        1, 0,
        0, 0,

        1, 1,
        0, 0,
        0, 1,

        // Left
        0, 1,
        1, 1,
        1, 0,

        0, 1,
        1, 0,
        0, 0,

        // Right
        1, 1,
        0, 0,
        0, 1,

        1, 1,
        1, 0,
        0, 0,

        // Top
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 1,
        1, 0,

        // Bottom
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,
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
      ]),
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    }
}

export const robotBody : RobotModel = {
    vertices: new Float32Array([
        // Front
        1/6, 2/6, 1/6,
        -1/6, 2/6, 1/6,
        -1/6, -6/6, 1/6,

        1/6, 2/6, 1/6,
        -1/6, 2/6, 1/6,
        -1/6, -6/6, 1/6,

        // Back
        1/6, 2/6, -1/6,
        1/6, -6/6, -1/6,
        -1/6, -6/6, -1/6,

        1/6, 2/6, -1/6,
        -1/6, -6/6, -1/6,
        -1/6, 2/6, -1/6,

        // Left
        -1/6, 2/6, -1/6,
        -1/6, -6/6, -1/6,
        -1/6, -6/6, 1/6,

        -1/6, 2/6, -1/6,
        -1/6, -6/6, 1/6,
        -1/6, 2/6, 1/6,

        // Right
        1/6, 2/6, -1/6,
        1/6, 2/6, 1/6,
        1/6, -6/6, 1/6,

        1/6, 2/6, -1/6,
        1/6, -6/6, 1/6,
        1/6, -6/6, -1/6,

        // Top
        1/6, 2/6, -1/6,
        -1/6, 2/6, -1/6,
        -1/6, 2/6, 1/6,

        1/6, 2/6, -1/6,
        -1/6, 2/6, 1/6,
        1/6, 2/6, 1/6,

        // Bottom
        -1/6, -6/6, -1/6,
        1/6, -6/6, -1/6,
        1/6, -6/6, 1/6,

        -1/6, -6/6, -1/6,
        1/6, -6/6, 1/6,
        -1/6, -6/6, 1/6,
    ]),
    tangents: new Float32Array([
        // Front
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Back
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // Left
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Right
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // Top
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Bottom
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
    ]),
    bitangents: new Float32Array([
        // Front
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Back
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Left
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Right
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Top
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Bottom
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
    ]),
    uv: new Float32Array([
        // Front
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,

        // Back
        1, 1,
        1, 0,
        0, 0,

        1, 1,
        0, 0,
        0, 1,

        // Left
        0, 1,
        1, 1,
        1, 0,

        0, 1,
        1, 0,
        0, 0,

        // Right
        1, 1,
        0, 0,
        0, 1,

        1, 1,
        1, 0,
        0, 0,

        // Top
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 1,
        1, 0,

        // Bottom
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,
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
      ]),
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    }
}

export const robotLeftArm : RobotModel = {
    vertices: new Float32Array([
        // Front
        2/6, 1/6, 0.5/6,
        1/6, 1/6, 0.5/6,
        1/6, -3/6, 0.5/6,

        2/6, 1/6, 0.5/6,
        1/6, -3/6, 0.5/6,
        2/6, -3/6, 0.5/6,

        // Back
        2/6, 1/6, -0.5/6,
        2/6, -3/6, -0.5/6,
        1/6, -3/6, -0.5/6,

        2/6, 1/6, -0.5/6,
        1/6, -3/6, -0.5/6,
        1/6, 1/6, -0.5/6,

        // Left
        1/6, 1/6, -0.5/6,
        1/6, -3/6, -0.5/6,
        1/6, -3/6, 0.5/6,

        1/6, 1/6, -0.5/6,
        1/6, -3/6, 0.5/6,
        1/6, 1/6, 0.5/6,

        // Right
        2/6, 1/6, -0.5/6,
        2/6, 1/6, 0.5/6,
        2/6, -3/6, 0.5/6,

        2/6, 1/6, -0.5/6,
        2/6, -3/6, 0.5/6,
        2/6, -3/6, -0.5/6,

        // Top
        1/6, 1/6, -0.5/6,
        1/6, 1/6, 0.5/6,
        2/6, 1/6, 0.5/6,

        1/6, 1/6, -0.5/6,
        2/6, 1/6, 0.5/6,
        2/6, 1/6, -0.5/6,

        // Bottom
        1/6, -3/6, -0.5/6,
        2/6, -3/6, -0.5/6,
        2/6, -3/6, 0.5/6,

        1/6, -3/6, -0.5/6,
        2/6, -3/6, 0.5/6,
        1/6, -3/6, 0.5/6,
    ]),
    tangents: new Float32Array([
        // Front
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Back
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // Left
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Right
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // Top
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Bottom
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
    ]),
    bitangents: new Float32Array([
        // Front
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Back
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Left
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Right
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Top
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Bottom
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
    ]),
    uv: new Float32Array([
        // Front
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,

        // Back
        1, 1,
        1, 0,
        0, 0,

        1, 1,
        0, 0,
        0, 1,

        // Left
        0, 1,
        1, 1,
        1, 0,

        0, 1,
        1, 0,
        0, 0,

        // Right
        1, 1,
        0, 0,
        0, 1,

        1, 1,
        1, 0,
        0, 0,

        // Top
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 1,
        1, 0,

        // Bottom
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,
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
      ]),
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    }
}

export const robotRightArm : RobotModel = {
    vertices: new Float32Array([
        // Front
        -1/6, 1/6, 0.5/6,
        -2/6, 1/6, 0.5/6,
        -2/6, -3/6, 0.5/6,

        -1/6, 1/6, 0.5/6,
        -2/6, -3/6, 0.5/6,
        -1/6, -3/6, 0.5/6,

        // Back
        -1/6, 1/6, -0.5/6,
        -1/6, -3/6, -0.5/6,
        -2/6, -3/6, -0.5/6,

        -1/6, 1/6, -0.5/6,
        -2/6, -3/6, -0.5/6,
        -2/6, 1/6, -0.5/6,

        // Left
        -2/6, 1/6, -0.5/6,
        -2/6, -3/6, -0.5/6,
        -2/6, -3/6, 0.5/6,

        -2/6, 1/6, -0.5/6,
        -2/6, -3/6, 0.5/6,
        -2/6, 1/6, 0.5/6,

        // Right
        -1/6, 1/6, -0.5/6,
        -1/6, 1/6, 0.5/6,
        -1/6, -3/6, 0.5/6,

        -1/6, 1/6, -0.5/6,
        -1/6, -3/6, 0.5/6,
        -1/6, -3/6, -0.5/6,

        // Top
        -2/6, 1/6, -0.5/6,
        -2/6, 1/6, 0.5/6,
        -1/6, 1/6, 0.5/6,

        -2/6, 1/6, -0.5/6,
        -1/6, 1/6, 0.5/6,
        -1/6, 1/6, -0.5/6,

        // Bottom
        -2/6, -3/6, -0.5/6,
        -1/6, -3/6, -0.5/6,
        -1/6, -3/6, 0.5/6,

        -2/6, -3/6, -0.5/6,
        -1/6, -3/6, 0.5/6,
        -2/6, -3/6, 0.5/6,
    ]),
    tangents: new Float32Array([
        // Front
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Back
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // Left
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Right
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // Top
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // Bottom
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
    ]),
    bitangents: new Float32Array([
        // Front
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Back
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Left
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Right
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // Top
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // Bottom
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
    ]),
    uv: new Float32Array([
        // Front
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,

        // Back
        1, 1,
        1, 0,
        0, 0,

        1, 1,
        0, 0,
        0, 1,

        // Left
        0, 1,
        1, 1,
        1, 0,

        0, 1,
        1, 0,
        0, 0,

        // Right
        1, 1,
        0, 0,
        0, 1,

        1, 1,
        1, 0,
        0, 0,

        // Top
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 1,
        1, 0,

        // Bottom
        0, 1,
        1, 0,
        0, 0,

        0, 1,
        1, 1,
        1, 0,
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
      ]),
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    }
}

export const robotTexture = "data:image/png;base64,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"

export const robot : ModelNode = {
    transform: [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1],
    render: robotBody,
    sibling: null,
    child: {
        transform: [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1],
        render: robotNeck,
        sibling: {
            transform: [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1],
            render: robotLeftArm,
            sibling: {
                transform: [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,],
                render: robotRightArm,
                sibling: null,
                child: null,
                animation: {
                    ax: 50,
                    fx: 0.1,
                    ay: 0,
                    fy: 0,
                    az: 0,
                    fz: 0,
                },
            },
            child: null,
            animation: {
                ax: -50,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
        },
        child: {
            transform: [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1],
            render: robotHead,
            sibling: null,
            child: null,
            animation: {
                ax: 0,
                fx: 0,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
        },
        animation: {
            ax: 0,
            fx: 0,
            ay: 0,
            fy: 0,
            az: 0,
            fz: 0,
        },
    },
    animation: {
        ax: 0,
        fx: 0,
        ay: -5,
        fy: 0.1,
        az: -1.5,
        fz: 0.1,
    },
}


//prettier-ignore
export const robotDiffuse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAGcf0lEQVR4ASyUVYLkzLGFk1Mq1dBlNOMqzLgD40JMT16O34x7MTN7prtLpeT0F5q/BlqljIw4caD19775BTv7tNYa20oyWo+ppjIx2Nr1aKXlXVvLO0r0NEPr2YfR1HRlvHNOqTmHVpoTa4w+D7u2bvQ+W52zUSo1SvectLPWLy0nbnalxpjGuKmNNWPUUnKRXsbUfFyuz58e/rEsm9bqD3/N//8/15K78d6o0aeOMU411NRzzNaq9y6npHk1s3ExBA+YWpkSJlXgUtPYs0YZ522v3Tpb0pNxIcT1ftyDc9b7Xitg2LS3Avy4BDr20Ydys2fr11kObb0NId8eOR2TfVvwQWtdcmYXBQV6skpwtk821/x1ziht54TbCkhtvB4sm1jNxziMZycltENmo5jRAx4mhTbfb0Y72jDl2J/QKG7PpTQuvVUqVc/LZSuljNEZxinbtgLz01lTSh29eucHOKwBgY8B4fhSTwAl3bwxqXSYQC/rQy15zBnCAoFGC9+//P0/PvD/L1s3E26Mgkn0hXfW631AYIPqECcfyHax9zxaX9aVPoMKNjZmiWsuTLSAhAO0cj5OrofQe2MXirjuxGzI1SAIf9C2lqpmXy7Pa2sdxkddri97yQ1VgoGpXoHtujBQRgeA2JKWQr6BSFBZjcHAQUVpzhsEWi9XFy/6J9/9YtkfgUmZnmixGGPVaQKuOlQsHeLAbJCQltoAHcTex5RuHHAVuzi30B4obl3YCmLE9taxuTaO/vwVzx07rxGPM66J1XpXvU0YDbGlGyo60SDx5rJeU7oTwt/88fED7/sPemAvzPXWV+DEdnByJoJkuSpKh9ZaWOiPaVqvbc4ufFMs2riCBka8zg4hrCQN8IS/thqiIAeHAhXq4icS7yMy8Hda3VPWerjLc9UILmw1lmNlkZ2bUC6j194GF13gAVpCr4W5rRZQA+ykmeEV2LCthSCFF7kfl63nQyGmx5MuH08K0jVq+px3v2zkv6eDcXDCyszU1qpRIW9MFZAAKgXt5Fo9btqv5FBsSrXqozbjIt5ycevlDorRyIXs8lbHsF6P/Q3BOy0QJvfkcv3Zb/7+0ff/L1TCJH3ID1FBRPk2B3wCCAyezPRiZSVPBkouPLkzMWwxVEM/0lJSImbaaMLMsRJxongveEyq+0CjZXvOKaOnpoUDKhTDUvDRhMsoe9eG72yl9eKCxYrL8hxiNPbiaLKXrMFmAlqZmjPIXVxJztQM12V/iC/+0371Ex8KmJ68X65MFcDMENSaLsYGxKslIwSjUA6qajpGqwi2LFcl8hk+fWKgjW8TbcSPhKzFdRlN/E1KZ2vsgGs5lP9n0/LBih5dGcY4G1brYlg2Gy7eh1Yz0af+4fX9X16s++NfmdtaNdZBOiBxlZJbgc6Eb7SmneeQ35TYglVZptYyasW41i8Fe+EpniUeOpH82TAjHMGsyHn6seS7s3A7ea4pm9mQ8EyRqDxJVU0t3SEq7zcYl7fWcA6LGnDubbEjADRHfYymDeURGaCCDgBmEUUdHmQonAgy4hZYBe35O+WpISLOJUV6zFEz5iAPNOEG6aK5CK4xUw7XZ+TZby9Qj87eLbUeDD1ub6wxXK9MHMVaR3OakdgQYq15QBEpENi8QxdMJB16KbLCnG8eysurhAvoOATwrMCKvR5A5BKfcjzxVvXOTuyLEXq+Iy/dcBGMQR4a9d7Yc1Q6H9YFjVGZzR2GHTemQx+nmo3yAbHQRqJdiAZpI/YgzyKl8z5enrmwKvipCQ1gkJfCv196q9pJqN7SCGneO3jCP4CcpPO4+cuzwbivf+ajx9NrQGBrqqGj3h/AAWN0EWBNKIMYZJqnYpAOltkbO1dah8gGy7LltMPFmDouFw69c+V+w6h4CNw2ktQgLuF0NOdX5wNU05M08ZMFSQ/NBTSZgSkNn8PM8Y/X++aLCos1Fmx4F3/PPnxYW2W7R5htrbEErGEsRiMvcafzmVCGiLNRCoQKK5SDB3Ez0LVQ1ihtidindAdVl+l4hnW5o0fLQMIfTGMiIA13a2YjjTLWFfy3bjAGxRAtqyGJ+KliBR9CrU2L1uCBC9TbYMAYy1/+UCee0/O4PUEdBmQCeZBNRUZgs85WWgoulJax/gRMTaSUFejs1414UN7TfYg/M6ZEGmSlM18d8Sv76Wztgx99Wm2BjfBzgljA8hKMTMd/QpQQIGl485j/5Wq7EBVkINSFRRFjFo2RnnyIAF3QSzQV+1eeUIR6VsZH3PLL2mt1TqyMrcECeLesZ4SaX58BGPbYDrPxwDx64354h5BaS2sdd7VaYYy/7FWPXeOZtFNT0x1D4i4WaOkJ9LQAv3femoBneF9zssrgRux7ef6v9isf/wDhQ1QXvSS8tXPlibcAMXqZHaS8Fm/RuucMXGBBA3ugeq0VFXuvrBOfvdLis0q42Wm5vsBC1DAAOVunKg2RzWJu2WFgmIw/wDoRnpp8h1ZuxWVjdePEnQ+Px3/+x6t8HCjl/UKXsGzammN/6LXQmXih/bLKrwQaA4wOxIH187GPVviqtSnHI5VkEp1R88TQAd9qAryemp4xLn12eg6omN1ai0oYgs3pwMd5BxuzT+yoxU+cD8iZaIjNmdXkCR9Tb0Ogfz7uWIdVGQBOjlrJ8ESZDR5yjfVAwvMIBl2YFdpZkw7v/LrV74iADzC91ZJwgsQFABh0PW7cxtDsTrd03IJ3g84+9nJnexbG8TiG9AG43B8ybPhFHD/Y1LaWLPyXRAcK6vl7RJ1vbi0s5o7soh3q4HDFaktYFlbQEmPxNLeC960Uv0Tr4uX6EuxQJP8oECQSUbRANaYy+v74D3lfm0RO7FHFWCwvmZffsAgF5rw/7I+vrehmyLkxOqe9phsOIT9wS2gsi7vA7laCO2BZ8pd2NRX3y/0RWcQ5cSUkpCVu1zGM/vF3Pl1r4ibTuDPpzWQhmg02Yqp54zz8GazQJIPOakxPEMfUdLRoIKAn04Yx3rp8vxFy6dmLOS3iCFytaAjWhBuMhhD0RL+aD7du9nQkNMERSsEoBiAePJR8/Oxnv3/3/244BNVh3tlY671l/AeJxocIqoBsEIlpXCQk/KeH5hiPQzpOwuDOEZ7CH67bcynxDrBkSyM1Z3ctlN35Lkv1xhkigccZf8oGvROM9Uwy16GGHhxAw9tKo+UZT5SM0WGpOecoLOUwrOdlNK2nEdV5zwj4Ee5ZkkqJ1HBL0MO02WZvuE2iOORDdcrpir00TqLlzsVle1FREGsCsubS6rptaT/0zFP70Qt3lfUk1bhIdy1bSCYqOa8VgYhe2h/8ujWx6Tz/uBB8beXnv379vv8O+5EhzSGJ9bjYe59Ljn6tLUMjczmAjd6S0izIbYt1GI3Y8IpPEB1vqdmJUFivlAw9uUpQNYfGDhTpwziLWR3mph6CWmVlPul+CyuuGz4swC9FuAUSIh/3PYhuZkiYOzuia4iX1ocVbg/jl1ES8lm3TOI3UKnG56/slz/+vnli8vFi4woMrRkdQTtPX/RRJRIN3yTsZTAVKunJp7P5nEDkf6IRlhVn8RUiWE+yQa5lK9VKYj0l0r/Nq5/KLtS3RhAhhb8IOYcgwdkl7SBErdE7nL5+TP/xb89b68Bjbj12wmkhKKxgWZ+/9D6AmsjB1vb833u6g3ievYCJ9I4CiJ4VbdAIalgNeRmrz4i+/a3PokPM13GhNizJAhMZiCaUwZl3Xl7R0EUqqehzuuA55L13gcsWdvirFVvAACV4N2FTS0ujKG2FbOR8E/JOJbALi1AGbJTm5QQMpOe7tU6aA4z9a1ZnXr1zFTlbwR4SLa1r5bm2mo2yYi/633dMR9eSd2ftNP5MeDv31fTnwwP9UMqHWCENqC4Qp5qPEDeMeBw3HH07tAKzx+cO1ZgV46oMqbkwy1hS80JiERd9iivejZcQVkPfZYt4HRy8FzzC++l+1uqk6Pb6r8bIFR0isEA4xGBARIfGtgiyP/497Y9wy+5jsIBupQi3lA2MfXiPtzYhh6Vo0qvsSFna2QV6+aXMPGsDc7EahZJubPCDb/2TRrNAcJ1djrblV2TZHrrM9//DzMy4gDAnawjsKrCbMDMcGPDIluZ4nOcpnVz8xpZeaKiurvZPvZ4nkW9du6MyzvYSBslrwSnZOZ6TwaeAcVbJLgJLJL109AWvwY543fZ3mrgwC1LGfLGA4icsBQZwPt8FHWva03BZSjubmsdk5gRNlFCZTjvD16B8+ft/fPMNX/tp5BZ5ZMuThWOEpgfgTdq07FUBjQgL7CsFsjobAfYtC7cN6SFKeJgdcQmHt21Q/JEsiq8JSXWCFAhtUAwUwWOtfMaNAmcF5ZFbGMSYPCWeKkopxOevQYRsqsVsQxrAz9CH3mBSNoGRxx8Xa3d1OeHR6FrxTUMlXJN2grdhzTNplUUUm+HjSNwWJbs12u5m2FYKTdR3zgCm08g8bYYbQm4+jnZBoVIEunlLX5s0mk9jv9mO4wHjQZE5bNPvkn4zucytkaFgGGiX//hvj1/zRbkur4FOKkSb3vCVePRYVEjwaFWesbpYvir8Ym2MCrRGlAC5ubinEV80eAhwR3tOuLBGErMCpEn40zxRxEh828JI6spuhQLrFiF+/nsRjD/YcShFBtHOXhMrdh1JCt1AOlCtVwJvwXFVbSGYWBrKL//gZ4PlLwqW0kdM9rQIQTxd2o57UncuEbFxMHWHLcN84AlHazby/uERjIeryKY8nEHk8VjZf8HFLd9cY2Ecbl8VoIsT8TGBQujzrK8JpSlsm0GHNR1qxv398/W+xWEEDukuKTweWA6dghWUC3CbHU/BfqyPOCNZt6OSaIN/aehxs8BCreMAiyY9G7LYLrg/j/gz6oj9biJRUR9CqLmDXYK96VEEy7WAxcMcEk/yNZBdQsR93QizAkgdVb1QhChKrs4p+MQRB6+EnIj/4VBWA9MguXDhUlOlurjlC+u+3rY/Zi9QFHcYRh7TG7CjtFCpdIK6EFuSycriM1zdNSyCwpgeAFyUxDclzhH+h/1N3fbUCnZHjxE9Jv6XgLYluH+ar/rL4xOfKGqRYdy9o3n13BKSKtItvmAlTjufj30zCH8qM71GS8wRgbopKhnFjStodm4RNZzrayvx3zJpS00+zaMaa/r0eXwSRivpsSMN4KG0/I2prEUJqc3+ZoE/kNTAqwq4QK86nY7E46KhVYFBm1gi/Pd+/pvh7hiAro1/sBMA50PpU2WKh5nT4dnYSYcWkQRXJbYaFqVML7Q406WpSt1aREAqdcZgGoel0IatKSoDBJZ6Iq6OxNHrkaaT7NYNoXM+Pc9Hi/jx8e27w/SZT91ACHgy/L43QqgeqkGESIH0EsdYq053hsWVX4oWJOJZt6i9LApsBM7IeRncaG5uioJJBMS7k1ErZTJO2ZRKSa5CQHwx7sEU/XYfGWAjnfvgRXIvLeMmqiLoFbsqqM11KETEVuppuur4mGLODCuyDPzxWsUzzM2t2a5YPFY8ZY89RvIXHQD4OhoD7/BJtGkVEtmDLl+RHAX/D9d6sO2IM3pBgpv+p2t6qkMCVyihzGLtYX93PLznpmQC/bkp0RTpB8pMeoP/eXf49N1Ay72hQRe4MJ2Dy6WxAVPp61RX1nQ7wOFj3+5gsZROrxoRPAlAC6doJxfHO1EP1hjQ28oMQasWZhUwIFpMnqIqYIVPaIFcjcSs5vC8whVFfp4XYSFlSHlKzNiV0nd8fA8pocmmXX7zb/98dXN3wdypOZl0CUXtsKv+7I9+KISJjDywxun5sKQOO13CVtO/t3BBbh5CQmpWjA6A82LkTWx2Vs2Jggmnp8T7t4ew8hoynLlJZECXO3IPKzXtVunWSaryWmLLfFHPYvd+j91hb6w5Ht7+x38+f/3XffFCOAbI8ZncBnjE6KVgGIM7SujapSKG2L3IPeQg+TdBKXx2bVQa2Ro340PSw7Dz0EZaZdpMQf/UQJ3ojt5QElmzFLWQ+sO7zseMBqWagBP2fUlrB/JRhVUAwQD2sN8MCVFOVSZtCV32Y89+s5ucIlsrsBZgxFLaHqBdiTycjH6Qy/IAcAssUtes5q8O00WQUFivX/nC/DJv+s2kp9dcKweOOumI6YQ3QV+OoM6xuVJ5mZSJus2ACGs4rk37TEIvzWbHlf7u3x6/+jmV4q4bEvmWEbhWRG0np24rBa05YYpRvfrgOJnxrfUwAlYnuW14gOtIp0mFeWavjJB9YC3cHEm5drjK3EBCBTIIOY5zTRPpCU5ZNyL6WvWAyE/jBFZn5OdoyCRCn6UgS9DJ6rOtEeGUSS6zHZJTn7bbq/KrP/J5Mh6li3VZjBSU4FamuKvbDau9uKu1ww4589QpE7rGGWcmiZw7fy4jaIx+CT+LpkWa6pQJSJjHkTjEj4pGE+dQ9FBdZ8gPMgkDEAY/4S5YdVGR3z9MX/7KFyd4mlTYB3AescPwjhMBJxmm+CEVk9AB9YDM0nV8QjyUlamb7nPi8t4rSANS8o++Hqb/cbqU0bVmxYhNo2/CwgmUxBB4Z1OlUzO0Zh3MRypnpKvgYyus7u01IyVZcC46o7ZVtd/OUJ9MMFzSnNDLmmM0X0/Mg9jUVs60IkFEEU5gkid3S6YQSxnhgq6AoV7Fj8Q4G0kiJaUSYqGuaziSdQQDf3idN9s78FMxXgZEXrXm/CXT7UBLbSoqATYFJj3cP552SnrAbWUYnXWqu6cUePFG1CuVDbG0E+IUFRsNehUSSBXyzK/eNbBikaeArMNReRfc1FN15yRBId/oV4qwoZ152B3xMZ8UUth5tqQjPbc1AdNMTmCtilXAapYq0yHTrB6f7idbnSqfyFy6zXYaH8mA8us/+iXibLPdczaMmTC1/y6KkrYamF5zCjMC2ErAUFaPvpHmgcJtWIyBKnDRiibsVAJCeM0GU/ZtK+Uy5tTFecoK+QJffdYuFTbcsZ8bCR7AiX5md657eP7wiU9exVuT2Ygl4htRMj8mAUcE9fycQbRPZFhVCSOSOWNt7oBKWrtqQfFQkk9MAJ6RBaPUrXW4zZYgTZ9kdi0KXuXRuJCEOWppZ7aYYKy5UBfNtNJUymgYqwqZQdPmsbA1HExO9ZQsVCwi3nVtIm0rLR0X27KlF5+OQHVnKWt5TEheOmCKCkZf4ib10BIhmkRFPR3u+YLM59Zcih6XhLfDPh7NJav3usX3fqgyZj6DFARo07BczGa/RMj5pIKPEuSb9+On7vr8WqUlWypPrcrn3Rs2ktpXQd/Av2VVaFtZ3rEFCUORcWwf3WkaH+BmIkvED2tsJTBTjmrzh9H+AP3BDGGPR375s7Za9WvgJuEfSP1g9K9Vghn2ZeJu7kaLVlurkvqYGs0Hl5VGamC3ZmeqX0qjilh+7Ye/mPl35Pyo4mlE1SnyDy9Wn2DnOuUqsZomOj5gFwy3CBd910fxqJzFqvjqIW45WV5q/p/4W8Y6av52C7JSlZBMR3NoobzyLyuJwBml/t3j8VN3AzEGjBOC52iwQJ2ibYLM0HRIDLJKW5eQzRhYSGD51KEJGH6tJKS8lZ9FSGCkJa9GdFgMnxQUH0oSQkoBXZxPq9IpqtqgZxaRTRsCaCGsSQzzPr8ywl6anqXDBnlMl/CJ/IHnRWz8ijjt6NXCYtJQ6+Uer0pY60wjTsqXHWfOwERVms/dTsYv982H6sf0Y/m8LKKcoy0W98Yq94wbt5utLIPzF1GXhpiuFzUZdY6JUSQVgSvKb4KDm0ToJMAgOf/z5nHXWRGOx2fmrXjBGnXRw0o64a82HkBJtESTzUouPS2ar+UiQCZxD6z1wx7Wh2ClShELSozTdla1r2Mrdo4EvXJu5XA9nZsCJ0ThUEt6pQkkKr8SGfphfhEpFkfTWnJAvkxynDe7qzSlVidXwEThsenvm/KrP/y5aXxaRUZcgp6TLSq4hshQelEYo/5bHGPoShHaZW09JdKw/FedjW/SJHl94BP7doF2l2IdS5hJzA8XyGlEYrLTvAT4q4wLinic11c0cHRdOPLhYfrkJ/YnQtbjU0DtOtKibeA8BBQhQi5ZuDSBPuSmfFuZSGrJmB7oRa9mSSIMvouDE0CUKUfC0BiLjzoFZPpYSlco69QXzjS+5+qh+wCwABPboD8+AHMhTkvcFK2c+mnTLDG7iKDGVolfQamPok1LPfT3Th2H5D+yeQc321QAM4pv+27LAliC1MO+iIPeNF0vS7X9EJ3aIOM/S93gtPiH70Wk0ioyApNmGGlpkJtdRWk1I0gEFpVo3sPUqsbhgpbF09T3A60zMASgvHnztEPAdI7pvbjPckG25FjIBk67T6P1z27gVXoWU4grrqxIADawJjqVvwYQUh308EROIrw65VDpp5xSSYTzBYlb6C7lXfxiaXsVSAhbvZwnjABU0NZHtBZSuQC3gPinuxs2250w7G+flPJ0gZUieZBXyi//wOdqB5OLAm1qF0PQR9m/iH+CWUiQTaEhH7WSPjgJ4GbCJ7bACvMpAghDUBHDCEtZzaxzoQwFhZt6hkMpv9wk5QwbTst2VAmeS/lTgyezee/hMH3q07drZ1hWfCxTReVkSAnMsoulMIMZTqK/xWCzgP0yH2VQekUdxhOn8fGFiP7v/16Tmdsb2512g7X7HYNxfwBifecT7PRRd3fIiqW6/JATBoNL092EfychFn2JaLbiWR9W6lERecOO/Ckb+WYIVoaX9YvLlhZUPh4eecBtbPFPVPNL5DU1NBmLOgrpQIjwJ84lRFgK3kI+p5NTHbYVrhWSKguptgYpAfzN/prYE4ayiAGgTHMAG9puRwII4VGQmWSppUaMpdqjqKgOO7tqqO3/827ctjwLayJTqHVcyiRXkopeyeIEt9INuIC+2fk6riLWg4+GJhQBw+up0iXQ/ZqT+6tsLXbEGqAbXmdx/pfPYYBC6uwDEVMuL8+HjEep/yP3UpwQwsCrzf8Fd0QRtSMWa8hh+/I4bK1kbMXk5cpcbbFZ+cXvvQs1VH6VrL8YLuZfU9vhZeyygJaqsBgs1HCBtbGmj3lYIhG1SyYQJswdCCCoRoRUu6WAn2odDBW3T/ORowi60detTQEPMF+OEVXbfwt554fH091VO2W+BoRAiK2SFkF/Y4gI55+ICKlucXYnkapbxYdhD/4B4Pmy5Y61g8tdlYORe5dEMQaJPlORRQTldn9tFSeP9zdV2DYiaWbPPc+ARE2MQ8xZi/JLRSxQZ/ogf/Gyis1kHWZcGv0UnHPdD2nmaFpO3r1ps7935UNH0iEitMLcVFEPCGj6iL9dBBOfHEhXJ+Ijz6ILyYTZCwV6OoIsOW2nDIUEztZhsCQYrM8Gt99fqIdt+/z0HhPJAwsJ5uid0sxbnGYaT/oXth0F6Wnkzscz1d5kxvtWWdhFyLDVCiNILBM4S7U0T6jG+VVY4BJf6L7j8YRuypoUZbhKfjpTFiCjSqPVanbngDNg1RTPjOmobFVGuNA1CUQjMen88XKRYx+fnM/KGUrO5rBTHhFaWEWDsDCK64JPxjh2zeL7n/zBd72c5pw8YNNIy6rInSa3bfulsbP0XZKeQ3Ni/IHGBLhaZzB0uoiFmVR5H18yjVKloa+3D3+OdjgXlaUhc7TC0hQf0NGikh6UJ7CFHl0vmKqcz6n+/p/efNu3fs3obL+N2DoTarj1OB5IgEj8xV/d1JKs3MMOGoIoX5ObqW+YjOoRgF+HqaUyQN3udnx6z0ZEJ2FOWeMACNULv7bIqI73HGY6EVsxYlpgbZe0J+sAkIjcyEXHihN6IIBDrpJ2AsdLCSLnZIYYKwTY1tnn4zxbRTg6XWUaKA2zaS267YkD7GyucoCEe4kQzHertD4swSL8e2FFSj+2gI4LpBJpJEplSjuiBjhhqkilh3fchg/hFWxMBnEzthif37d1Rxkahj0H+4u/fXM3HMOdiH+GOa+3Vx0Hn+YzU4YMDc4hAhKEnEtKGCNcLPiw/8i7IMe67bwLvEinCFqCq2K19ZK0x0G4EDsvvogYo5THfwirkGcLGs+gr9FekgmUaC64ADfPO8KywrhuyDFfkaitLQeHh6SYRDUBgx5QfvMnvqaOvpkB/pkXqPWiYyW3cTbUNvo7zDIij+rOJUJ4IkMXWi6TQiUSnaKwGmI7Hh4YaS8/mOCFTmnc2Wf52DIWtcUiQHL/zIiMLCIpYUARnODK3OT+4XT3iT2xyKY4fmnvThiLkEy9435AV6YhWwEkeMz11uKZvhmfn/CTNaoq49M9XgFcFRWdjNbcm8Xz23otK3JEBGEaDbjbbcuIMmZqWpta/Wul5iDcN5pnejY7+CXU0dNU0ohKSgvknkht0llxSP7kibpCG6QBYAz1GUokJ4d6tVuIRLdS+kE2sHrYkKZ0OCyyi5AZNhkLEGicwHEhnyLOBLMXSgZQYxFTRZw60WsxYQSPTRCD44Kp4E77T3wBU6YItLCvbhiID1bo+30EZXkMd337/nC9XSe4K3Sgvl2T3CQdZ2k6TjL3/QYQMcccuvuKvJpT6Yr2xSTkk04rpUyD9zHXi2U8syb/JAKY6zs5lb+QtQEpFc0AeQ2xSLuyKdZiyS3Mlk/0gpVHjFWosIPfBtQKAcCGXehZCvKZiFIv9mgd1b78xk/8/yrMEBPrGPcQkiQwaiOWAkIQck9tDbtWJxFX8mPJEiTOqNfmr4pqHnYbYUH87aFTpIUAL+SLaDyfcdUYumrNSC+RTIjQ6PwhwM4D+ODx8OFzn717NSa3oIBsqlTD9oZSQDTAQzgJYoVaoWxywr6ZwUmlLVZEuT/D2wF1rg4JyUQJo3DtrqMiORcjpCPkS4f4Gk9AQmhUvCPIa2lyBQrXkgZOJSuvz+0wvGqsSk4JPjXAzxyqRh6yDr/Izcz4A9fidxxmEYbNFIIf+l5eTjaXQP5I2Olvuz3GNF4WkzWl2dCrGDwZV5MbfdfZIBpnzge9u0mouElBoNmtwl2NA92Rbn56brn27mp8PsBALtEQERnxBkaLojBjtaYfJEuh1k1jV/Z8XF31q6fD3Kn0SE6HTQcjJcfGUX2W6/FkvbSI+WHlKu0aBA8ExlLGB/GtwG/9SlM78+L0fM8uZm+aJScDZ84qWZLJJF55UsUM9V25c9KqtHGHR3BqGu83u2urcUlwJl2XXEperXmQqy2JtMiMMDfgBRAnzdrtrvzuz39TU5srjAIwdYs00XJgDDVQGNthYMV2g9C0ZT8KJXFWhfYAtp3/bOMIRyKuwDK+4OQqXJ1xBqLBgpxcOXZE/2LxjuilYUIIH7ZXw+6aJIYvCiHd0nATfD0HKEhndin2dtSGu1t1GwIIGsLunAgoG3ZX+9tPKC5sd1x+d3PrBfasuWvM1+r65pbOqfckG/pdzqySs8o0z3aWCocKtdvub6m8+92V7HLTN700iT34mk8qtpyPGHp7fS1M2NnaWVHdNVVPCaJUDEA4mw5b7+UiwMn+ytaQWsouPbbwPz0yPITgZVSPZqyxgkRloKbG98rpBLCSQqJOZ08fWcMJK6ddOzdzbIQ7Gg5S6XUcuHF3pQ9hqHImhR8pGU2vQ5NE/cd+rFFM7XbXyNX/S8RZJTiSbGc4SamSCoYZzfYOzPabN2BegXcwz96GV2E/eSdmZuy+1VWlVGYqQ/f/vhjo4emSEiLiwA+nqHXN3rp7eEcRV8Clh4FtQMvBduzZDqfp8u5bYz56PB6o6Zv9AiuVVYqY4JBQkIQ1kqwG6qGEPBTLeyIYTilMZxW2GlO1t4oR+tA43MwhIRxUY5M2aQCFka5km7Fe+UiqggSCrMpe3T+bLb/2N1n6mygjjmQA6sKV00g50AFtq3skAnNbI0LgSFfyoaZnp0XGebxnrSN6aP/kj345Qg5ISrhlQO7WbFL1Q33V6CrY5FA2WLM3SnZSBcES+ceVegz1G0z8t7QA7c5Sutuc915fBSbX5dSl8R+PVAmFlkvRbyIEIBLhHA9s/n21EFobSpyOijyvtb1ZpkeyD1rUl9wgtZBietWCZWjWpmPJUXqOEaICxO36nHgyKbr2NTIEcGhRvIMqZdrZPM26cQ9EDlrQEIdPAwt5BJ1UfWVcV6NbhUQAVmnWZ9yPwKZzl6uXBHS8yArCq0493WZqJMqlXDdYXNeDRSy43MjcZGmIFECzJIloKPbpUKOnz57Qt9HUd+pliw87pqJYC8EIimdOeZAzhkTwfM7m0EbWKlYsrx7PX372dr7kghktl6DLxEqfW9rleNxjHMZLOUllyrFAAs654Hle7+7vc7n1grcB7qVQFID5QppQQSxzvidLAMIHTasMJAeNl7nHcQa6ZfIZCKWYB0CNC8c1pUOV8Ale4w+APa7ETteBEFpMJujnN9AyLXSGFDnAFRB2jWMcptMpsS/7sFq6cWYmy417cE46H2ClmkyQFg7kTNHidj/gUEZj++d//FsUhXR22Y5IcyLcXRA2aVPIws4IgLM7E+GUY1QbeFH3hUek0RiOkEt0ObWpPMD1//739dsffn67b0ivYKauJu6HOQ/MGlPNWnJ3o/mrqbJ4u2o0vxXYxgR2OGAakolo8OnSV1UqAOnBeFSbaVcN4E0ZtqtWZorp5MekeiD9nM4dWg+UbRuiX3KeTeGAQSypFqdyT10h3RibVbL5RXa8qMcErlaztKtdrJrbFtA1dQdxAU28hWKeGtfIsF/WKZHsotDfgpsiIiAYiaTf+1CI4bbqEYSYwODX2M9VHQGpPGvhpuAFsmUWzB/bQqRQCIRGaF50FCzyr/u//of/++mvHwKRAGyAsi9xcPHcW6F0Jv8suW+8lBu7fIPNpYfO6idebno7idLImaKfQ2arAJHF76UdJad4XK2MAyroXGIB5pcCXxsaVgN5KQpqukUxXGdpx060nrRphAYDs+IsgQvd1AZsniCbq3BGojHNSUBXMsm2BB54iaeMbgfAHcHOrl9PmokFxKHJPYvj3VtUuU3tplA7Jqs3yYp/8Os/eRV8QRGVt5xW5oQcDSusYVn7s3VV2yGUBXPg7+XiQ175IE/CIkH1Y1ZwZ+R0Hu4f2msWaYzqWNqvxNbAD8ynKEykLLhvDhj6M6lYFaRZWnAYfxdRp4SUfWq3TlND4h5BS5QS5IBAI2v9PE/cvKJrvo5AtTwLvzJjo5aDDfEYY89WHw30aa3sTNmAa6aUyPhNF6BvCZkoCrXLKAaBU+wu9NAAYkic1/liW147Ip4AS7TKam+GCSjlko1YTYPZ2zT33J2gIaz2nCMYPaL1TqnEJ1yg+kkIVPPvVVQDxEmvfaP0rWBLaqtArSg0Il9dtlfPl3eOqUAe1LbewGZ0XeqJphVHwh5ed3+pcH6Fz7SA71x3YEQqaUQlnFpjFS8GNBY/w0xFgAbshtugRn+RA66FmRCklkVoIjr0ERH48W48vuWGotEqvl4xqok37GSDfIi4oNAG1bcWlJSOem74u1K8udNvAMBABS7N0jTV3X/VpXShuMLoCmihDAnNW1Lr6Xmj6dpS6SKHrtRWetNUw+c3/885jIPxjNeYYIm6HfQOdkVVdN9i7TO1jcw0qOrfFKzstrkaX9ZICc4LyFdJ7J17jBTPcqiRheKHkqVe8j751EzSJ8VXsgaZ2VVF09klEQtH7jdY2IEiCDYX3izypMI7B6SjGLvKP7KKhQxWWTzQNHqFwOdV8AIs3VuGrtMbEo/meOR3LS+AHbw/splsi9mqJCw8SqLhYCx5IXJnwAuQZ8cHbxJtJlugFRys2iQlCq0aD0VrGH304sxuJqqsIoxm5liqNUKLPeHKJ0VXQ+cq4E/hvhB3VI+RULVxzTAD0CPU3K+f1vffPSK5o68YSOaXklqk7dA15rbhjyvZp6WX0PudNB2plWrcavld5TebvG1FEBZvowAL5zTObJI/cknsyH0nGubpRBTTdbGLpNAjpEQFdJ7kHNYixaHcOpe7Vg8tS4DaZc97U/ePzjwWFt0mtAhagZMNlDBiUWm1WlZV5bC3CKTMzK024GAwuah0I+VPSml4j5udKlQw9/x7v/bl8vQKWbZmYNMwm3OM3t35M6U0+/sHGBPL3xrs+4EmrxWrpmIAgtyJ/tbwNzUlPsanNNbtduKzkoWtCGldEvTrpkln0FQujLayyi7ahv1AO4EehF5AK8IVr7ekREqymjRWCTUqJmN2FQwr2T0PSnZBabRN8aXEsxxrNSGdBYYepGxekJyVkFbpcB3xVy8hAkrBV3QEHvm4LxexpJiaeX9hUAXxem7pi1A4kh/wgiIoQoRISsHiIau/wkqCEUMKIF05PampAdHVKNwZlRvaVgGtOlEi623ZttI1VhWxgkmEhuq9WCbR7sen7fMvPsxJujliTkedqktTiTvFox6pquPG7G0US/lEcAZOteAhhGFwPXIbGlnT7qOHnE6iggVz34irndvGhP5GxAXzu4Jy1Gywh45D4oI9l+3E92yElMG6evPp9VUzanSa88sTma0U6VtMNApKEH6iQ2M4ArAPOostJ+Jxfv4RqDTK7jcI/F4e19OT4g6SpuJ80i8uRS+GaACqYmz/9Jtf1g9FHjw9PXY9BLAl4zTgWtQB04/cBISohkDFzNi2/cYKvlafIMLhJTVPN03zabl+/PnXdw93OGvOcJBGQtoDA0dDsJR9ZNkArCEIkxCmZdqD7ntROqVq6wXDEslmnyAJtNDMb4CUXZiQNgCD7KALCrmv6tvQPBHq0OrYtfcNSQlPt94IQCf+v+NYAApo8M3iOrwicQkmUv3aJfmNVKJU2MEPo9OveHLDFeJQUOOiJ2OHRZO+Mz/fBTFDR80Nl1Yck70tXOA6Ef+pkfLvXKF6Pmmd0QhswM1A7ILF7Fglj9rtOUh+U/r+BZQMfdFt/udf/u1//8LPfpifYnKJLpyuA1rQXQWIDk22ztksIw4E5T3nRA3qlgyNyq4tV4HFjay5HwFF8lBmSqWHyr36+ixa59R7Qu2Kio78p/rK/ItiWAJ5O5A3EGIBXDJMhUEPFJawog05eUhyG5mbQrSImGc+Y+PK6qARUr7lDlwHTHV3Z1xTfT2H6NB4Y7NKDZC+6kZo6Z6aRb1tarK1LJsGjIS++AE+azt2Ru6JtmO4yQdhgVRlpX0ZbvgX8HsFVSM/MyhtGPPzCJLGu0RlmrCFkibg1HrBHHQ6X44P7+y6QixUfdvZuxS11tXOK1psmwLuRx5UX62mUnY5f9dyDrdAurcA64TxNXkE2QT+t+zju1LkGcHh3s7nN3RF5BCyCO+hzJ0lTbXfIMfPrpIwrj41ZDM5qUDmJ7Fz1HUAkrnEtxo7omYlU7GV8Z1KXP1C1gkfd+kJh6n6npBIXDgSHCRDHUvIagEelLx2Tin8PvJSDahq8rCLBNvJe3CshkI2t5t2Te1HEoIcVDY30PPV9p3mWMH+/786ffTB/WYFWzSsFTXJ/KciX1u+Mb7bbUVzruioT4xPBQVgAgbVEDurXBksoeOs8v1iKWpUlaWQMqlYrJQIdh6IC/FbthfLetcgQr0HhCC9KDxReqx0h7eLlI3ogGrfBgNMIOjWKNvd1Cl0qo5FJjlwYVe+9c7zHxghoj9IW5wms878I6IhUrwwL+dKs559F9115NwOCilkgFQ8+m1aMSlWF4UCtDz5QNESMRujhoJyoShc8Mo/b2VRzmQRwu2SBkLfRvP4sn7+U79wQ/GyOmCsHBDlEviRfJlSO2pf6hVTf2/nU3W+FkUeXDa95ZN1RR4SCkm1E5ayS1F7TIXGy4pcJte2gcRWR3tFfMKMzz0w0O9Y1LTWIN4ae6l97Zpreq7cNugGldQUPL8l1gIm4LaW0BEXosfL5oWlp9OdQrgyidSppeTcqk63qqCBMH7rIZxbZUOl7mZiaVvNDPxuUivQFqCeZ1f6U7mhlUyxNUP+CRzny+qdI0QSnU/52qSbXPBv/+XxZ79k1B8XkCsOe5RGJTEiH7xxoBMV8w6VrviaDb+20fqA8mg3jgiiIKShshJmFIVFb9E6MKrHFIPnrVqw9CixRS3FA0b97N86CvEEc0CIIFfKThYbCW0eGfEsBdjCJCXispamUivnCNSzKAyQJFZypJpONW6HxptWcVsUN6LmAsju2B6DkzkDYxzu3yn4JcHK5mnyICUD/NKn+XakSMB2ymV2yrkkYvWqlVwKszZYQJdpR/wAwBMdvdLc+kgUBoDi24zwjmvDke3R6vZqNpsQDtQAhnz7alSybQ2eHONVKRXvovqw1PGSytT5L7T25D72HxoB0CtuzDS98fN4TiYW0PQG9OkA1zpZBBlcslO0k+tU7Psb+418B/g64n7CMxytmwyaoqKEajwtRnkxm+V4r53fwvBMq9Ci2KlNJD5eyQdWWVLFfTJXaZOqFbAUwp5LuAGJDlnE1QuhU/BmnAh3uRr8KKqcKiGdye2DHJAauAXOmNNkYbv3QKt5Of/1v0+ff/JeU7HUWmzpZ7OvRc7Ji6VbNfv66rXkM5vMVg4gC0uXa1xNP3Qb87mOZNucIyj1vjhgycCxsTqoX0dGpNDgbQSdnJzC66uW2v2VCWLTdUVAqXYVba2VQhqVkeFOCtqDvAf/M3YgQd8f37p95wNWpyLi7I86uaCcT6fqlUN7hGL0HEbFVM8Pqo452O6wxAAeeNLVR/7OL32SAxjvsJa/6wLO4GxVtkW1CNDQpMFANuw4Pnqs03OSzvNjpFRzhw77ZF8PiJgwr7gpHErz8O57OcdOPuuqjJESiN1PkEbMLWyCqK5B1WifB9iaPEcRKRGh43vWZXUDcgebu0sOWdBCEvW4U4oIRG96zEFBp+nkYFQq7FyvGnRatMRjoEBUQ1R3t3kgYEi1TAb4XcIMGEKxoZ2e5DS+BfV0HhqxWwQUN7e3dRTCProDbWXo7EXcOcZESkDkXpIBv/m60kdWiNkElKQPIMXHiVLpE0z9nnP68DqGiEnSncCXaueLdNhRfXqvbo8szW+qQpWsY0e9frk83GwpvZyOWPSj9cf797AFqquuZ2DD+E1QxOEFmnsOkVRzDvpNNtSZPW1b/y0WW7Skoc5pLcZaFUQ4Jxrxh1oshcnOtbAdXxb8etJUKn5Kyu2uAyHNRQ8P7+UEvDy+jjggTcgSjvzC959Pj6//+7+jRItWPimKzCbApeD5JhQ0giTdcAgQ6V2qHeiAg2xIgoKYgkfihPVO37gwtUTWryy1TW+ZDPfy9P9di8ceFzb1SRQj+zkllBnf8ZgM/s7j5Y7FHAUE57R3+FqUqZ7sX/E757Mt9ffL02l79+Mv37rdBU1YZvQbrWCwGG3ODHoP5XdsO4WlEMbgXwJNRixmQ6EwUVrckqa5HPJAyxiKBL+E0lkrs2xLXiBOvAo12DwhZjYUEMLEzcYi69c4g3J/gKlx0PSiswQAyNeZG1uVfuIYrE12W0KUPlHbIqUJKD6k9NLcy5+OXwWfrbpaESqCfTG7YhiwkeDk2Kiw1eqsOcuCynsIWzN1pxJw1Yam0kktqmPcK1bBG3PStY33pdGtGFY7qfVv/vHxJz/mfB7u7rHzZ02fnxIeQeKTrCS9CGwb0wysrXyNwyDoTP2w2MXaA9C7O8ZH6s1byuV6NZzJz9EXXBXe5bMUlRSfF1SGIsJia30nOM4YVobmovatCLUifnZjNhiWBthox4ADJ552h4cgpx2HuyNwZiM5kWVKadrveB0mrjjOwkwZ3SkU02ysaZ3HESZeeZvo9iGv/vHxf6LbGEA+FlwQf/bNL9ObUwRTtl4ccsQHcCS8MAzwSmDPE2YCtfQzM1brHBT7qHMHnMdG5JA55qnaxF4/rp999VM5wG1LlMRgyrxBLtSonNN8tClaI2KqrlMFWi8vyFNZBexa3Mkqng0uxho4ir4xUlfrSjDzvBp+T3OCHRWckVwehCq1ovOUAOTkDpS1MoOb+rvt+P+quCxG6fRsZ3kzkuCcV8Ecxt1k4Rg2j7VYip3kIDppbGEu4jKTedrGiXF45/F2gf2WkAzmADpU0D0gSLdOh7J0J0ig8rnzDQweFbDOgEK52R+YJpsYTyNy2iw5uPBCT/KP/zn95KfH1mTCQ/kskmuXikEniFaGZGFSmsODHTxMS1PIi0RDER7jUWFc3AiUDhwMWbZcwIlAgXUIAkZnlYFoQeyJXPlysrffA7TtWLS8GQ5sqCQhW2e7s/qOw5nqC1cCglaBgAgWAvnoGJVjz5pyn5Ju6Ja/ldbhhDli8gSM6uvU+2h+FjW/On6xHCJnLPrrxwPCzT/8ta9yt8/Prw43tyn4nL9FlA0QO9hQcnpxbTsEivIXDzKzqBQS6Pu1Yossm467w7qBJr7Ltom8ti0r2y4O4InKm91FTSJMrrVSbf0gvaCufwcZTosj98wGapp0bJIPoz0Bhk7+VpTIOGYMEblC8ApNV1e7EGNpUcPeZffnZhxPxEWFSdaNHxvbARjO7h9MHR5aNNpZDdse6jEJbUqMD+IGbsuvUcRo5iQrqDdBd3s4Cs+Ss4NGOHyBDlYT2CIrZIPf+0Fi6jgyXdmeXoEq4Bpf0n03jkXEoyBn16mn3HNvTUzGUQ9Ll4qUruF0dkRoFvHVm+2jD+6cxMYvzli1DbD2mFEXCO+NXFdU9a68EJYKuI/O2+ktZk4uTBjrtEBYT2H1cuY4xlfaAI6ZAlg9EoM4Hm3Dd2oO0wuyS/ndvYL5vbLE/bdOEpLFlgJ1VAtc5+h4mLsICDQV7qoLNP0D6D6iKJTNyulJjOAq8CH5hU8hS54KsHEoAUQbzBVC3g7CrpOk7zMV4ssWl8idG8VpXn2XKiii2Xyny9P0uKg0UtjF55SnHrfL1Eerad5aGUDmlHttCmaZaY69q2tW9T9SqvOJqe0GIfT6CLNmteBEgmyvS8Xsa8ixVKAMA7Bfq4KaysEBqBAhsvMKzBUUiOWrpSudHllRC36eFWwruDZVtUWnPo/5DtcqqL5tVHAQTwUcWX9w/XZRQwGsgdJhkNjfeXKYmNtIJLEDgZhm1DoEKnI4+CxMFmd4q3RPY9cK/OVN6qR2Z7HVQL1MvkVTIwWP6kpE6SKnGfNfoTMBuK2efh0wXqIAAcGpYf6CPXj1dPnwvbvNGqyqs/R4UKvYy63opHr9dNTzlWtZED5qctDE052nR/WO2n8Htd9URNAaovisvdHPsOJWAOjUFWBzq414kd80uFSNPNgDvr/aK1UFayPSPRahSL6tUfrvQHP8TLxG2BV55j6vHEVcm4LtxcRFEMFcBcLrG+vI4HWUbxWQ67haih0xu0UPSWaD/ubmqQXH/XFTfx1oSZqed4IR8UHAOffezKyqRjVIaqFlZlljZi8OmWGZmZmZ6e/9c3l3eMY8Zg9YMspitZqrqyoz7z3nBHwQsfn83qzezRnbVV2ZN8+J+OB9n/cBHHCPtrV8Dhz0RSWlGdotnCIybsCAMofYoTHYYRhLojRfVXgBoO0fviqf/4EfHv2OTYaZLxz6+RaZhInNrqJF3eFOhU34RciiggkeZjiDcNHk5PuxpTmGgakRlShJQRCTijz41fGonG0Yn23rSt9MJSM1lGoeTFCB9rdFhVno61EPCCTaqJDOATGgjAOcgMt6FLfaGIBh6iBsyBIo+cz4US+V3w+SqOIKZnyLlV+H4ZkvKYcw5D03eMiJ+CUXYUk9w3BqsMnx3r+15BAx89aHs0oV11Km7zqnZNsm/g0Oaq7CTTCautT1WMP+zM+//L4v3jWanrq6zimvOg64aS1ehM4SEC4lSnWThR+Za4SLRebeSSBVFEShXaeig3mFcaUSm7oKA2216GXJKKm7VHumwtP/MVs0AOb9O/N1Xfs6xXsYCvQV35m1GNu4TNO5Ak9rZUvDK5qmbhUnMdG63OC0D8DueyRbAGYqBkc7mjQDnjD017qjbMcuBAMeF9v/53/u16jHx3NKngL9VFXe8HgLBI+uLfAoha5AOBmmST8d/wkhd+ISqkrO4qjQ+YFavnys3/Wl7xt9hqHgn16/fPbOJ/1w1xKxkRH+7AK8vsOMFUmmA9SM/dmMQRnRi6tiYQIgEDuDJHe0Ou/LOiO9P6o1qWrOKjurCfrj2WwLqPldlEu7kkj68WRHPcoeR3EPHUUTX5GLzdNOb5HSBB7boUdrL+foQOFa/i7hJCP61A2PI71pXK4Qaqq57wDs6BDEmQabk+GUMBy8SFv1eE47LUgRwKQXJoXYyK3WGZ5TRngBs7JdHfeDmRrX2np7vF6ezvfPoMqFX/z67Qe+90VldFV3SQjMSK9r9WNwtoLeI5LOgs0RTNJafIy8+kBfXUx/6HCXoKffD3wSGEVj8gJ9aMdzKYOx6mBH9S8XRw6Iw+hoOD3Q63eSKSMgNhjUkNmdCwSLF34U9ydTaoxM0ib3RfpxiqhqcEt06nx2RjjOxZTnXne7CekNJM+9CLkZUvO5pnVnwt1P929cIT6Bi/iyw0HblrmhB9ByV607pPWm+4eFa3PKxoBoiFFQBhqKIKgpCmA6bvO2pWZe82c++9kQ+i5I4cVMjpNfKk2zj+6EZkixEdJ6He4eRPOb7kJ/zsuldREjouj6Acp4Fhk2Bp2OHKUd0DWOopG8ILP/3gkRGW1OJFccBNd7U4Jo3mo6JUnZZsQPIpAi1sYBfr0lM9hoDr0GSJRd6LflUrd1W2ftT+dY9+rwcsXntJG+p9ILdTwOjzcMiSabriDGKFxaMqMGq6Tq29ErUKuxIVXxmxVxhxd00/m8zXok9y86lY5+mMZlvip2BKxdFZRuVBnN0nS1J2lHpPRrvf/oaXtx6kDbwG4xk+qkTW3siiglwydPNTPaO6qaTix6IDIUY6ibP5r5Ou5VjANHTy9raHI9MHFS3X+7vIrTSTsh+Ib+mpM0uyAAXS2NmiGtYw/kTbKTAHRnJ11gXgbDtXHgdabzwl4Qu9ymQTGr8yUl+Rrl+Xz/ycYZ9VC1/nJ95V3UZPZQUWjkNCkc5qvMyFxI8yWX3B1d4xoNHP6F/9qPbbfHgwl/hXBe5VF+EkqM34ZNSfVXokrW0af2S9AvrdixLDoVomvWfGxbE6MF5B1L2j//Pd9/PkXiW4SDpWWm0RWTnhkRQgrNudTmi77NJFbOdf0JlnGynCFxMfrz0agALatWVa6q8Yz1ZcIlWluB2nZQca5YwySMyzFyEkkLdpnx1Vj9YGcgRyGOuu7FTYJvITnLGuNg3i0W6CThiOZXwbzppUYNwdBYVdhhTGXVmxYBwPp0sVoN8zGzvZ0hXFu12hD3JN3SWgQTrn2pbKn1ntNB6gU4WIwXWL5HzTpQkEE2IcoeJ+n+SaiaGmd/ULSZn/qFl9/3XROexPb6xAanlJUhgCTCOYVxMh9VndY2ZcM+v+7HdP/M+8FQpvn6utmb/nQCXxD0bk7uYFN65i2mRqzVtubVZO4A6Bpf0qZFDUnw7OhACBz2XjYrBEhgPkUV5OG54MlHqw/OsVs/LXC56rll7LjTmm6vXRzCdOct5tT3aAf0pTq0YDu1aD+el/nisD7QGgzYnven9v/zX/wN23yhhRA1Dc+CUNLSaST02gepts2sS9fNInILvFHounJ724a+X9etPTgmWF/wyfbXj/sXv//7ZRNvm0t6c/EcXT+aCxfjGsUpwJYpzd6GcdIzVbu6RhcKUzmzsDx0flDfu77KHrk3N5Gy//98uBjRI2Qjm8QG7DZG1Y1BGGfb98H1ro9lNa6L2cxl2H0gYDh04+yuMjjEaU1XUMLgfadDG3cjVZgSLqki39Q2rEYoNKdvCDq+c6qwZW10NM7OPMRD+ukEBRxUxK1nCyFml5QnBM30y+Kh3IrfMUK1WpacFyNF2rjQdM/q+6vYpK0MQwH4wljK9rNffv09nzvRzna1rNY1sc/BIYwvRctx6CihN4anzxxN+0p9grD3BNlbzhQ48HnVFdSZkS9loTWVIWbTmiOO00wpBhVunZGCUJAfjU4T81SljLPCD8NnjOZY5VJEAeHZk4xxKIfmSyLhl73rxG12TQf2LMK5tUAFV9YCgHnS6EN/d5pnxwKzsgrWmdzF1PtgpPfGF+idXXPWIGzE+g9IlzY44ATSeV/qbidcxW5gx25iWUrT1HXRyIaMPukb5cKuq1VpY88/8d7pdMLN3END1lUA41yG3Rj8wsLHBFZWmOtNbC0thWCdpaSrZmI0jEr/6SfZDjfVQQ9UTmCIZgvuwQ0FnjjhM6uYS7v9Nhf8ttzMMggq27pdHmXLAyRUbAZH5kU/3e+MMhoMdFvB/wznhpOy3ADL676ZT4SMpdKy3i4HaE/Zli7EhODdIhHWdN1rGYZzTZseKa3AfmgJuuHUCd8QhUaP1Lk4nUw1os2sGbk3crjMeZLotBqaqpCtWC8ihNHQupf7MWa0UfwUhSe2YHQvH9dPvHOiXhWvCZGn4D+aPa1rcZXVkfuybfLH3Qv5awUirGFUPaxH1Tqafqft0AbWWBc3c5Cc4zv+B63OFxzkaeJxk6cK1zxRbP6DitX8yyj+nIAvYcpY+7Im9d9TXqWgp+tqkBP5zqnl7TScJtgveek/0XA2+/L0Af7kSngweEAMjr1s602SNLjsFRrbOj85Lxm3RSOqFv2//8e/3+mjJ+oHndPn+/fk+7fctuVyvn/HjmorLUCu8aOExVE0Je1ywrYMad8Quxj8siZdp233qS983/39Xc5S5WnOx8oQjCB++VEW3TMlzU6GXFXVzkFEDnoOmXa8+ESD9+BODWCudfXYgyxrdD8C9rNEQZCYCWado9vWCjPBNhRlDLrSVQPIlA4t4tLHCVyS51NW58Sz0EoK6jpUUGXYjsAX6vzK1mK7ySjaCgAOKVIBMLyINl57y46sBmAwIwn6nJZJsbcI0DQeivWANhOGPVOpw0lDeKWJ0np5SsvV9xP++D1SSn1kI2PKD/goah6ksL/oAGeQrF6ZWJV//FPv/7Lvf5GL+rSci0jjaZNqT58Tn/q8YUOrudaWLzbJtqkixkGSbZijDtq5g24vya6UdKW8oZIxc3YMquuhvAjumULhdz40kVBek3WJjsaaVFPymThcWtpNiImcSDiv+X6S3ZX5+fhh37fKI7Xo2GG6X+ZHFRx7ixaHeA6tnGJBdmaQqm6+cc0uyw/1jdCWgGI9MATq1P/FH/sVag33wxCPXI5+CHbwHHC1Q/CZc2LbVK8H3wIg4FKpL+n30qqu8s2Wm66Vfv2gwUprOr34pGuNytcUeM5komTrarBeVRelHSkUUfBl2jBeN4PLI+PuVrnFdB4sWyWjQXBUyWoDKOniogOmpY4sIUx7cyy35ROfemfbklECZdQ130QzgOJG1clsqh6hF1MDM0aBndsyD3LO2mobj5qDEyg9TuN6m/dWoy0Ox2a+7SEqgDj4QPHFyyNjKQTX7F2uOaqdYJc1rbpV6ZKOPrR199idhx1/qzB2ewU4d8otXebNY91fiI5rJDQd9KjVLFXrdmJ027oC4DY2W3ScbHs9omsS3rKXa45xdzx9xhvCrPLuEJ1YUdoNlGEFmPHtzKdr8CVXe8YZv/MZ8sH0V6XOYWnRAg1KaUL0xDBuwzAWFRH+4Ki/XW+f/fTz5ZY6t+unHZ2J01EtVzq9qpqfzriqazpSLmRk9Nj4ZnKlYcWSIYu+QnZ0LnT4D5iHSLduyUR5MnJtfbsXbD11OsYQIdtpSNJSxnvszIgdCFV1vm//8v/6D1cRy54YYiedNNRHqN0q/6/lAwThvorQ4Sb1Gl8HBkYCv2olBXrFhVztR1pue3PEGBUVHGTTRwOkffZxpavHLaibrhfiGv7G6B22tLz1b/ID3bz6Kl3QDF9JZVpV/KnZNQ9Pt6vYzhgqSv33M7/4wRe/6zms/aYfhpXbJurYy4jKzROzDqcX+sPmzLxdaio4eJqItGAV2osaIK69aNjp+ihqXYyKu7xeHHNcERC2i+tikta5F76ZawNUFsIkvA94TtstlzbGpiR6P58J3MY4+tTjssjI1qxNqx00h2kLAQYQucKPCoNZvXqNZUQvjdP9nlZJ4GUegxVpYR7SitOC2XykldIWEv/8qGE4MaIqsZ+QNLW4iAIHt51Rf1po/Vg0b0cmBdk5SPLcgL4zVJcGKrUSKOrU8MH/wpc/+sx7Y6dCcR3Pz7ZNFnf0iTD5RMowk2mZM5CwjUGvjFwbbIkLFeMhEDnIZdH0RrCtEjclLQx/NZVJaxYvJa82ZzpIg56mB2ZAOF9XsbqhEvZ4l2gQ8oYK8cX59Qet86lW1IGDpe7gKG2Jhlox4sbIAfWM9EEqz5aAlpzmdV1bAlnrvmOk8LrmwuxQ2QJk1Olx3d78LYfKGMShSuJJ5Oqs83U/mrwtJWVlf92etHlyJhR9nm8Xndy0Acs6qzpqm3VN9OB72jZkM+V6fV1StaCRSp/zjfefnt3zaY9GHwfsdV01/NLtY/YSTbcs13W+lqK/brvNHG847zfdzpmybXOar0fnyMg4LEZEpy9GS0gO9IVcN+xdd6jxGtTC3167LhLiPWdxjP22acS2rdem1PnytEnn3rGxnf55f5t9htrwluZbU3cNGwVQX1vf53XLBQuq+XZU0ruZw1SIpapct6UcQvCUWNz6bb5IIpikLNkkydeJC6MuN3tZFMh5KEGZ0mZbFr3N+VasxtiPbVs0yU+4UJnaVOVT3hXgvpnQVHTJUu2vMPp02bZdE0YxLt//4PXd5NVOTfcJGK1Dz8Qwp1Wzt818JFHOWhTe23xNSUqjDbS6QnJMCm95yghc1vkyX17WvUnXx2256a/e1pxX0TkSb8SqeF4iJmI9A4eCwcdN76mU9fp6m+e83Nbbk5j6f/K3fZ9K8LTBLHDVcnWQxZi3K+OErmL5vc03QSaQug5GyXE6y0uZsHUr0/vp7EJAMxAFdvMKXdtBsZaot6bFTLxaqlmJv5algYXautDg8Vtqgk2Jc0PK3jWsWTM3Tml+dTQaLRusgWa/4LJmcqetbvPrubmfduacWHVjAo5/ugoejUK265q2abqDc9EoSz3IhEPx0c7v67w3uL1v6zDdcTBHGrLbeHog3SQQRmthMXVLK54KfCmzL4GwAKjQSjFMDKu5u5kz92FsIKoCqB8fO+JjOAnFjYPL/puV+IegpdphnE3dXIRZT3m5MvA6zH4PvF9CJIjhwg44GVLDbVlKwg13kcSesQw6VTCVUgq8sW1W++F0Z0aMKJe8rQcHmNYZVzc6jaSvh95Np1haxTWoq2v8R6+vz5/dObg7XjZbY+xPfhicMCiUvfHEWCxrhAylkfmDt2el04kZi7iDPCJxjfYGI83OxtE2z/Yab1MEtl7kDcYWNWX1Bgh0RNjheZrX3CiDeGP/3KvY+Pf/oV9xe/0+TpGLEfcRVmr8CX6Luq2K2iqWn07KG/7dAlg4z0Rq18dnVwgY2dYO7q4n/90hnWwZmmiXjCc/nCtO/344p/lJxU/nbOCa15uLOlM7QHTmOy5EzDPoSvETboWg608Y+exoiETOMm8UxzhBHfnokt95pp3JrOrYs0TDDEFdFYvLiWnXNXqbtB/DcDbFSdvU6eFdE4vtYt057iw8SbfVhS5tKSjdY8FBfreYFv295GoJXY79fHkkiDYc6oB02Ksv2paMSziGGuGAmIV03FPRohBiNsyV6aoFpJoMHNP5PQu5GseJ5IveIpLKcnNRcE3RSl2BYSqXUgt2bq1ltfiFrM2/CdDrJyBPRrzQ94vm3NW8Zhi+RoGtMJONTaR3nZZadOuiF99gJXpuoWbPM1Ndr52wXp9uxzvP5cRmZvVSo6Z5TyvTAZ3EdospD8F5iOvKC0RzexJIv62Apw6/RC0k1cysbjPJgrmoIbzaF7Qle1McOVf6wnwSVWUlm42nQm+UBqSt0uyCPbb5Eoap/Zf/O7/fu325PPp+1EBODiWpirko16FVDNhYsmZ1lmPnDcUXJe4kwRuJf+inxp2lJli0JLRTsqbI2ywaiYEgh9NxnfUEEcX7us3x/IxLKnm54KfYC8KDq9Tu+JTK+zfNecs5XQUJM4FXhJ5xXM3iZufg21Ldt5z2ttm+9TR+8VPCj3u6yUP/0Kct1QL9jolSqztv3MsKIhellEvbMJ7FvdvljyARXa0W0fXmn6UqvD1iqVnaODQqslmrNCFqWhDixNiDBS+uDXpjoh7hn8WcT5UMGuW9rhqWYacFb6KDunygvgiymYmijjLDxc8eQiYJM6qPYhhMVMMtGiGVdGZPn9OGOLjB27a4JgguwRoal6hqo5qufWvrYv7y8n8X2nhV70jtK/+5/ryuV/vJTU0dfFUGKjJLt5coTxABlEkNAwDX3f39z3/1+oM/+Hkod4NInfJ4s0hPQQcNvqNV21hHn3G3KAhVlxpgGvohF9CXRcYiGiYhfRbUY2wLzFRySWgMDxs2c5+rEEJajZFzK+H45eXXyZNWjoJ2iFqX0g/P3J/8nd89P360HwpuIM6pgOj16kiEz0xQVYUNK2mCqYdaOR3GMm5Xz7E3ZsymmDB1dVc/nFogXxe9DHcNhyaYpIH2rdXggk71MLSwHbW3bFZKky7rmLxVZDvz44dJWSZ5B9Ol+C4qdtOCC8ki1xNd6JBj1QGU0zB++Ljen4ICGLmyOu6PhhNgvHsGzWeFAAeZGdKFxY7baMD1JzLVxK4jBKDR5Y7sxbVBm3ZZ9r3KeRMSuApfhPkhDh73eqD3ns2BJHJVStd8eW3UfwrijFduZ37JppxsNHIeLBoDY6hsskeu+2ArA2OOzkQTGK6gWSGMBckYOgrqJX2MjvKTFWyEPBgy8FgoljFvbCgh5Es7KuK/mGcM4+E6THe6wzud9Hl+UntqUTRdpxIIhoUafQLu0SUqwO/lq/n+HKII+osxhkxg6ISIeJRQ6rAF+PCBuVELPFkUtnr4C1IQzdoPFXuLEKEtiYXO1oWoWCySLW9J5ZPQIR9lhR3VSaNj7vv+9vTK+d6sh3Q6Ex5hpK72X/sf/MG0XExE4nVWKTTXDBtc2+DDMR11Q9IaG+otQjvUjMK/01FqcbvStkZiaPNyNLIjbUB21IQewES5CN9krpA2QRbnF+/lZZG8BtEesS4QF5CoqM8VTB6lyqtbQ2we1kYqWviMki6ldeVKW4d+UHzlXq/rcU3+c5+UHU1/etY0dX56Pag5idv8pPu9k32DWDfOG2WIhN0jr4vrJyoZzc+n80OlDQnRTChgKWMWgB1x97HWpHLBYbMNIgkQ3jjKAzIKoo1OQUE6g8nJQoNej4P0Ml/Eho9j3/frPMuNWL9fX9bYYHSnB7xAXiHp3x1as0BssOXMl1Sc77SkdB+mPk6HDatYhh1nLfTe7uCneF1l8Ccxfi0wt0moVpm6mw9AlZ/AcPdiuz3G6Qy3WbfKenkdprMG8J2/zU9BgVotHirhZ37hw+/73k9RfDH51scTPAjF1WxrB3oP/Gl2DStCGDFvU3fbuBY40IyL4JOik0wlD8OQZGoCjcoAPTypvPhzq5e+pwSPnF3Co6EssxAnVYRkgDopK5bbE1fi4P7k7/i+g7ElRQph8Xi/DNPJE+ClYoCKX4dPTW3nEecfByE2OkLEEpNZIh6Gad8kY4sa3/iOazfvtfe95BT0IXIYZKYq2bKMRCOkXIRdVAwSbn58n3jnkuACMZ9ajED4GxcUJuKJCEbE1rygG4Jt7p7fTy8v+dm9GAQcTqGfTmzRFERcE9SQ02xuRapr99pSJbt4amicO6Rkm2g2p73m6+tvo1voAgGMiKcUkG/Z7kkd84F+16t3Agk3dzdtFeg6nhkQba01vqETYfuGsAvS+ngeprMKyLrj05+Y1+7mWsGFYFHFOcaJR5GtBTcXSI1IKT4t6cNaPodAGbpbkoQf8gqqO2wvaE/xnJR4V/kreDpYZEkHGGoGe50X8H19/QEJzd4EMXBvO0rwg300tZ2eIs4X++vX88NdD/ET/j1BSZZUvNeK3H7e87aXvNwuzV7W23WdH8t2y+usbqRkRJILMoxGn9Bi0rtO7Q0RYLQfBPJR2QgBECK/97G3g5RKYTUfE0zHB+nItSUzWCpxgH/id31fmm86w3T/C1lk0l6gO+sUxCesx5ZxjNMD91RU2hzpsB4dk92mnJGuBQJSibHMgvPl5NOpUOM1ILza7GaXUSPo+HJ99BgP4eaphymyVBAJfVXjYjLZriduVaMuZcrqzJLUGpVUSlmBFBQAy6LC8cPHN8aA570sW8q+bZIiclM/nLA5eQjojBso0FTpCnfQCdRW14Xp/PxQE7T14zktM2RarchhGLJg+2LaWaPTiaFwetixckRFk+xj9ArK9XYiStfGIYdpharIlpaj9fF0ftDBcRzanTju40pWIIMGtVVopg+KT/5Bk5Pl8qrvTxmdO4CcGoiW/ASBCvyy/UbdjzQU+rFcwNJs7hWdM9BP9FaCRIcWFx+LvlRNWzKzJGHcJW1vBvPaAE1TGCRdHz88cE12bbNg5JZVxB/r7Tqezi+ftof7ka+AgAHCc9qEl3Qa2a7gYL4lhwXFYyt/J6cSCJmopfE1XHRCuvdGbNnb7bUehQrgVUcbFs0mwW1r2eardA0cB2iVNB7RyUXPs14v0+m+DT1ZR1hBev9GEfYF+kKL9/UEiIt1+uE3frFtqkRGSKX8eKplw7W4C1GHmZKog0M96KoadlFm0O570IWuj6P6d8YTMY6H0VHUEHcWSOPjyHHIVXcUTRto301/bYnk+LbKPiH0ylxSR9Uc8+3aNBX7ZDHzkJ8qvW6Qr/8I53Z/favvvXNvZuu1VOmzcrGz6ijK0jrdP7eGJIFkW6heJy7AkpZb27bwtxVLezo9a1o/jArNhS4/ilWbzHCulXRBznu6s/1btX4git0hm6bmgQ8jArMCD6Y4nSXnw4slpdX+6mJeV8WkLa1QSxIvYF5RPmG9pqsYZz+T3jPVr50ggZVQGVJVjKzhcFRnOWOig5+Ynpinsd4+jvJXA7TjikWqsnq0llOnQT4sbnmrABvD2jM4FXtAuL6CF5xmo/Lax3RMiRBd9633P7qfNJxO80WXM8K0GAe12iRkHqR7NGwnXRHUUVnqDkUCG9USPSeIAdZl63IZ4qkz0pe6cOOMqnPo0ExzacNTgl6mzVCETGrGhyYmC025Nfh6mH7d/fHf+kUNGtIm1QWFdU4bIfLPxvM7fRxpvSf8TaGFUEpyflDRCHpZaFBGnTkGBe7cIbSBjX4kEnU157luM6RuNByM2dGshE5WeK0HDtMOXy5aQI0KRN2qodd76SczagmaK0cm9FsBugVAByrXNSL2znXtnt15MHr9BqzinZmguDgJm0Q5PoynQy5UPe+1UQkRlfggurVlLleVOt75dV0wQZUVuwX8497TGs1dG0OHaJAcdEvkTTWoA1rCs4L3CpNgntiZ4t47D23dHDpRS3NIt9BR0WQ1LsYGwjFgQ7XZpay49qyCGxIEF1KiRoIMQpvhkVnjd2YKdbMe88Z1CxGFV0sgFfYvKmCcN12oWViqPkE2gOZn29nY3tFz9kNQiTvgLkzSXx/Up8C000Nom9evbnd3IpbjoNq3HHKgfyIaKXlE+6pxQWdWB2PX98MgbyVo8dBhLI4NeGDtdHiMML4aCIXR8hrMSwZo64COTCsGeJoBaVrukLzeEI1eRXpHPmF+4O5P/Lbv3ubLeL6T2UHXkHvub9ePhA6kZdvmPS/QyFq+25jzal4rHMChAoWPw9kjWyGS0iOrb8wNjZkP9EIcoA4viNBMLSGUGAVVzQrhWloHKn5Y6x3xGRAS27TN6mkUT6uexASQROiZ6pxUHJqBtC3j0L+aj/feeWjUganoYDvtPpzw/5BiTYZ7oN+Obvt0/2JZZivpdcZj38s4Us7MkDTrti57WbtO55b+C5/Qxu4ejdu2gKiigeeg3bH2rxBsttvjhzuYtAoSvNZs9yInEKRNuAFeATbhp/aHCvFW7lzVO+FFolFPMlKx+WtgNGZRedC7t8VCTgkSbXT3YpmfS8UO2Hj5toT4en5I221b5AuPCL5qmYpqOuBQpvra5GCeiCpGyFlh66E35aHR2DCHPE6nu2++/+F77z5gP9nRvGh2xFBCIO52e4VCVaOVyl1Hibcty6Vt6nx9UqWLkatFDXTGSqJYdZ6/btfnN0odEAy/+aATwxGHaZKjpiIdQ3fv6Abli8k9Nq0u6oZyf/i3frFrYeohPjDzS0x1IgMzXxABdR21KUZuNjLslOOwoNwwM5xGxBi9DNiwygUaqKAa3jhWfoinMItmCkwbaxxI3ambrpG06j7RsAMwEcnfaPtHIAAI1VuLTAAEXf3BuxiJ5meCA4z90VN5fhdq0SoRmxT1vZYsUGCMgw7V5TYOZxu4Xp6eTnf3sjejLLOSvWhwOJWql8W0eEGu0QsebRDXkp3zHbt2D5BvdPnWUVXioL+oZjsCIa1H21YxtAUiyXsZFwIFJ6uJfKuarQyeLCUOHZY0bsfRImZ+a+1vNhCO3WmJ3ySc93ZF47/QARN5nh44jA8BbWFFkdyFwTq6Q4/n1uk/B6YKHNiosQBtWGPoPMW/4gz2/SA+EouSM06Otha07mS70L3+6HZ/ik1TWcTa7FKc9KPUz7uWY6WOPxBFQjvARqXraSpHyGOusfE3rnhCcyl6jBDKHREsMdIsoLX/+XGaGTOgeGvVZJ4J1EwtRxJmF6cd6xD3R37zd+VN6Q8MDXT2OplPWEa8pM2aP7OEpb0wwhoVVWeHIL4pbhg080Iu4/nCTkd16WPPk4stO9JDEKCPFGsKIFGqAx1AUNWX6yuVqSHq+DQL96PDpHZT/465T4MOk+O5ZLT53aFpOSmzSacpIqzLbf/kJ19UtVzOQF9vSBd7CT/gFPtRyRe+V2CyhIvY4HEqhn7CJgzqS97KNuO+0ZuRaMVYZsNPicGQFAIBQ1WjwlNO6JfRgYTA9pMK4nVRxGw/lZyB+dc9ywmUOgRcHDKclQqKFHHdOEx0q0V+PEa+gEesDH0SEux/ENPW9A0YRpjBYxeiqrrlyVKvGzRucNjAT0CEIHFlqfZMgcCisbyt1unhs4dHva9OJPlWdQtKcZm94Ui+XnNaIza0EjYBc3/w8umdd++71uM0BXEfEBZjc2dWv0zoN2rsoXVCom3LFZUumzEMzBGVgxhfPbBjELBGLvxmlAaMDp8Xdym49FTcicOk4MDw1p7M2k4lKXZ+b1v3z/6mTwnM5rYN1Fh7FVGNOV/Xa9CjjsSbRxI6Q/SEatx6QheNPdK18s7X4Z2TEaq861QzcIToW21L4wLtP4U84gkD1HYiBRRqLevgIP/MPFvkAVzdfWPC/5YsqWnroqM35T76So1kDYn5jxn68Xitn/rks22eG2CTdZ7bZvexPyD2qQnDF4hB0R6UWaJP7SUukUIcdr6Ik0lqupHMASt2kmXIH5S28nbXP4wiFzV432KqL5ZOXjot9bv+7pmBoZJQDSff4XjeCrHhAPCMYDt4DcG8t946HGLkBAby9h6rGGVarkfK69sPtOoOrBhGAK1ABtLJsOjQYul7F5HCB3N9VeaxNuTU6lA+TadnXYz68F0Ux8Z7po0ZrvhkyVWIuVVkGklHCwBXwPP5+XEI51Gjr+JKLdzpfPrgw+tpcJ6TkZLe2d0rSSAlihcBVnMYY+xwAGsZ4TbSW86D0ZZIB3OWUR0xtTf9VubuhQicvR/YJ7GyPh2luDaq6/em9bRhOgfJYwaNFMBDE/zbv4dcadGj1/naahs5A2+dj8CgjsPYafbe0MsWefMaErxXofKcX4soWVnLmj8FP4kplQbg/MBWFWojH0VQCJLIXMU0hp5P6ZfbcsXzMPXDeb6+LnkzQlIMg1rtXp6S4BXasxqVgwDYxehxs5oXpYov+/jsfjD9qEmNqqpbP53ObRgdZB4coLLo/qeHbX48RKHaLT6VgnSW19VwUiUE2Ap6GWVqAkwJvjnsWEXs9JHrfGubQ/iY607nd2tadkHRArNVtAvVXiCrCMXXVJVRlCgCKYGRL5pP0fnRFndWB+K1UQDlhfMA07WuU4aFBUY4J8uGfrozWkbHBo7DyDab+v4srx7pkE6a62/LcH627wXrHW3A1x+9//jBtzQBVxmj2k31GM4OAX29CnR0z2Iyd8jCVeKO3vcqXHE90R2FE5MTJ7J8+OHTO89P23xxrTOlETlX8plkR69lW8RsLYLdtc2cuEZYhPkKeGXMESuUGfavIWpwprYEX1vDx8TrdtO2XcyOQFQa0D3s6OQ6jMkDnSB0ZSqfTg8NnYCsEdP8ZGZM/E1RT8Vm7+TqCNGBmM4G0luxhKxdTbQ++sceYLtZCmJ/q9E1vW7r2VJvfTl1Lm4hjt5ygWIQsratQFRBR3rK/ThgpGFVY5R9bBi6rqGIp+3mgrB7UBRl7ajUOR1wa8pd45i5l+v+4oufjd4FTRbx9oixH84PaVl1rWN5RASTiO939y+27arPkNYEyK3mIU4+jvCamJKx5wS9k+TqgjjxtalB+ECPmYLithFwKNVLXkXLHOD26X0EfRjbRXa9NMh5sIba+TAF5WHFHrG0wJ3mlWAe08zmZJaIEWybABaH2Ffg/Qaye98PuK0mCWRlI3FiNJ4OSfyukxLVs6IEqQlpcg6MKXEm/tiDv8KxaZ34RVXPX4oIJtBVqLH2sDzVlIwova/4lTmvR5UbNj33MfT9T//sN77w2YcGITWo4EHn0N8ur6PvNW6gpmhA3jCnlitGW/PedsN43hEcmkM9Zh9EJ1I1ctWZ8QfmMdbQg/8jomkwijN01RubVmMEwiiqZBW6WGCQV40+/rn/2o/VbXYUhSYdxGEiS/tCQqD0bOAzBJSHhPxC+9THRbYRGC/LxE8zATT8RoBgBkRbpIMGwTjENVwdyXjjJkL3YKm4aR2m87JcfRhWnce7esPpbk+bQZLSTzEnKpp7bZ2i78RYiE58ouut9NE1bWVv1A8u/oe//72q35FRfuXx7lmGxM/Aq0m3RwxphYSqt+78kdcwnve0VHXJ007X2LKfA8cSBgf8CvEwW8wwzPMluFAUmTqBe6lRkZ3EeNpuV3viPP22AW0w6Y8aRziQpmEIQ982niDU3W4b+6YaGJOgA5FMFkkiVGpiRRgrvakWLiUXOQlsEhORkArYhaFhZiyGj4YAHXqoaHbz43hWF+QCGSixbFIeq2wm9m+czltKRyNCoVFvLGS2pPxxTLovddVk2vetaSh1Mqbzw7Of+Ls/86Uvvut4UKhtDOjaxruHHf4mJAvPALGa1tZyynRMVv1rP8oHRARLzIJKRu3EqSqJYtS9pybqqJEHsiEwCCHQNRAsADmAlANv5uQGLhlAWYktfAODfvFgfGJVStIeqi7SlfpBrwEjoOA0ULR5qkMwSvsYfSsSnx6QEL3AJGJxWJOWbVUNADxn4ypFwx8UevKfUksupfnOPML5TlfSbkS/BqJOHO80OGSMCqSoCofSH5MPbXE48Rp0tl7IulZEynWI/ra1L57L7TTnpEd1epGypIb9cJfSbFHscRyn04v5+tiPU1mvgCxa2NP0TCMLZnyqHTHf9CHich7UrqVt31bbzyBGZRjvq6XNApN1WPwKeww6HcJwUiT3eD/2GHiIHz8Nd/cHQjMj74IOd43XyEmnPv5iqo8wPQQpLzpHKabxP8TgnFnhDvYlVBRHNx+AgOoxjGeNHdh1VBq92kcRdlWZOBfW5SJsWvbBq7jow+mw3XIc4/3zg1BHMkHM79ppGRxwDkJvfHVrNrCtjb5FfdrLMfLpmp49OzvsBm10BPM0aF5O4IqlBuIOpOKClYrDCsm+gZ9vkZsd9r3/f+6LxdDbw7aNH7gMtZ0seOEAA9ClutdhnA5U1FhWB/1XTLV2pluiaP6J3/l91guaXwMG3Ni5FGWDEoA37Lb5Wv2cUXlSTmgh8Oc631zn5vm18rC2RS5aNRtvFHRFXtjOeagQm07HgGkewG/ebnl+alu33l4XMd2zjf0UXcBtk/XlO9FC6BUTd27HOXq5XBvlCGV2fKuNKFWAcPSUj9PoH5fmHPeAq2nFvHicntHiZ1WuadUsxscN76O8zuoEHt7ROBGTCLg5Dx1ECRUwsU8ahKkGrWTvuMiywDoSq8DMmHPsXBTYNwwak3VBzhrqvKkOlyfVPxANynY9is7FIna7uLFYEnX4TDdZdg9BrR4AVwiR8HhnroZa8bihdIERrOry7xSZKojScgW+O9bl1h5MHkD25EkIe0zZskRy7DmrR+ef+9Nz3bHy5BLk3+6FuXhWweO9zohUWixjxrtnitfGNliY5flFcEHsSaU6eIxi3YcfvH5232uEy1hHNsdRxzAsuFMpG1IbVBaCQ7CQOZqBptkhYrRvypQ9dt7bIMKxsr3DTwlEqODLeyDNBQZAa2l8Cn1bCD8goTXrVww+ExvlQXXfBGX//tvjBy1GBrG/W9eLZhlIsbpOe2k/JA3UtHxf2B1NGM61qBMv2+bgnQft0ZX5QHZB0YINUtSUZRK2Xi/iohk9pe5e9JUsQAOe5LrdXKdgwIbi72Bgu8xXkuwndjwC2X0XEtwdeUkinKyKOoT4taf8Njxo6BsSH7qU67ce6/d8/t1O1/osDLyNIeiYIfRu6Pvx+vhRdzR537sYSbpNOBKLGyzHPO9hxeK/oI5fvPaUq8MuBCmzBrpCP2qmE3W52ABEB5mIpbp/9z58bHztBZ2x5moMba1tKXPTBuuS1Ncy4lWVqyfTaVIznJpaLEHp4/AAwQMUUXtdZxciPh5NGIRGdB2TYD9st2tbtxaCkPRwaIx1eBvE2+3b7QpJpimbwX0sERqNHRYQV1gr9ZYFODat4IemAuttOtr8UMp6tC5dLgdUImHtolcIrE1HeP3tb3z20++qCtCNJGyLw8vR1KJQDoMWt/fYDQUuT2MWtYtsrVo6oo6oB31s8njEz8euWMe6ERy8wySTaaAaY7KiBQZiVGxXOkiuvO64b49OvD9pcxVN8n/+T/2WdJuPQ28RvlTEyVVf3+nxbc5P6nr3amZgkKiP5fL6/p3PQB6Ubbx5ErbNvlxvwXV7I5RDVf6m4Iz+/OxQ2edce3Sxl8nN7UnP4Uhv5q/OxcvTR6fzc6w33vokgxLdYn93HOnYuY7pIVD99eaQYlabppkC4A+yL8r6k1qRXdwEUKiMPqBShhBAaVrZqTa5cyNc6LnuHBu+L9ttLxUoLR85tzGCrOpiOdpgc3mGTLElNqsfexEmzKZ82zTbp3kXOYqGQaUg8wd97MapAmxUDv3Ej//k595rSvGta6APOq9dg6s9grKSS+zjoedffKv9BiHvTiyPBos4mcL2BaZgQyqeKNfkBcZ+KjWbR2/D9YSxvcRcDgdmTCx3JvellKpVdfdMCkmzi1PVWlX2lI3AP2UWwUjbWLkY9ckbC9A/o8FtdDwJgzp2s+d0QuqabV3Jcz+6VjqvtC2H+QejD2HKCW5b7Sky5PahA65hrKslTjkphAZ3nB3rLtQ8KoLrjpBwV3TLBEleb9nsmxL6zEOFfiT/8zRfXoXh5Hz31W9u3/PFFyUXgV3//H/tx1TOej8MdzqEHIxAPpZiNw+nw8Fmb86n5dICtOla7Pq8WmqvrmlwK9UOe1HbEsaz91E3KcMZwAZJWNbrLWLH9/Am7Omo67yoOFOlmMf7Z+t8GU8P16dXp7vnzb7flktX6/DsPTmkkt6l+CdQ7v3t7DAQYimKrBYHMfbxdG6bLi9XFwfDTHZy2kgz27ZVDOe0JgWm29gJ7ov2m8yZ9etohamIs4Tf2E7AjO46i44SfhVFmgfXp8+vzHroYWRtkofpjFdPJ+pEgxMMDW6p+zDEv/sPvvr9n+2zcAFD1YiLJf9UL5c2AsZMMEoCCQ05l7VrPfX3x8hvI07hlmZH9qjQfdcKq8W3HZkYV2NZ+/EurzPykdD67u2wel27cfBtyHkxczG3126YzJydyg23J+C7LkbX4VbGKUC2OU2FRU40Nd1ufph2ebDpiVmKPaR/lcvIZbBqyysZoToUHHR5vBY1g6Vg40gtRZ5zFAwBz+aPZ9Hi9QulJ5rXkIFdU8sR7KBapQqXSJTldHs6+KekJqqL45iXa9s1//CnXv26X/P51x98Qx/v//Gf+ZVKAzg933fcZxnyybONOa216mXfDZTop5OFWNmkpmlk2JZSGk+ny+uPAicxY45gOY8qbPYDfdrxpuTQhuNbDQ8vDlmy5nx7GacHoIkEzUO4p++cXDRiLElOzu9+/vvLMnfBFe3vvqRFo5841l267G1eZfzp+v50PkicbQnwkYiM2CrlL1i93rx1VydZ1mw6m6asO25B5vM8jHdHY54g0LeYxVMLsdYZJINs7Jz0USMmr6O6bPNye93w2jWyqHRTLa2mj2W5lrwwSpmao/z4T/zClz7bccwFy5cmmSKmsjojeJLJjOJZn9Og97yuqkmQfuVaYTggE/ciUcLPG3cLVm6sktrxGBRbIw5SZsm4gEFhR+xK05l5GNYj5n9DMZ3SrS1ysNQe7FzjZGlBM3Qkada0k62YOTgq5Huwzm9u6T0tXRztIAiq/gdhPLA5HP2umfPlddE53Tb01mG9PHbecb71TdPK/5CooTDda7y4U9+Tz9BP9yXd1BeB1LMha2Ov76hOJ7AOCIsDBUOzBAmn50SY6SGlRPnJn3/6ke9//vTRh/ov/6//3K/WOBoD7BZe+YGfRItiKKIhCH1fONeH6R4VZoXhY3nLqQ/hcAFdGPhTTjlt492zVmShFfDrtnN7nu/fzaVst1eW2LXenva8YgGgEnC4e9HWcn16qZyzu2fz06ua5JNx/+KT5LEFyCHQWlrjdtQ3Yk4dVK1lLoDAgrfR4/YWRxCGibmvyEtASW6bH9O2DlIFqDqSjaPzHaedEs9jMLwZc/YNH3SOL2KUrGfVM4VUA4klqyPSYL9Vm6FHGbZZGmtNAFBFa92DULSt1uvf+fGf+55PHm3Xt6FXJBLYjvGWDV3BcmaJNBgcKEZgVsZ1HEzFJgPdTm3YIuSac4EiO7Te1ZTtBjASQQsU8zZSKWggWuWq1CeZcbTj+LBtV16omLlVg/A4Xx+Dc7tZFYboWvE+RJRiwMTMWw5LSlNS70Tyvm6PUcYftycv89pk1qJiqopXJ+WNCBromtXYWbUDS5c41WVTX+vwR9KxLX+XI+9HNyhca1MvUjYNdvI2nR5Kc6gDrnK8y7noVcJgNZcqUw9v29bHQZCM2Ingq5qrHj/7tduP/NBn0rJpZ/7R3/o9bded7t91YXR0MKL1V7UL0Ik0a7TUsYBGe11mHQbWVtcSnZ/nJ6fO/n4vCWC49tPZRn2t0+xdotLx7HFHRPXX65DYUHIBrUPtLL2Py+1Jn3u9BDxk0H80p4d325b9Kbs00VFZKy4vV+8hgUDrN1rLeL7zceqnMafMdOwwelynGqbX+ZdlGoWtwLzXJvS9ZZaZS67vlUorC6ptwYm/aAkehzjSAwRgHtG+77enj6A5ipdbEdkyf9NpWKX/imlbwjBqHTCEZ3H2DTHw3/jWRye/4jCydZ0+gEcnHce7Pa+a/HftKAi4dh93BV2I0909BUJtg+tMRkfiGGDHjtJXn2oUzauSXF/A7jAoBzrjojjSfEvzq+X6CCW41HRr9mORDeNFZ2YcW024e5QhWv1vuUnQ72pZJY+W082jYNpdGZjbcmmPonKi6XTE1mPL8zjcFfOAwPmwixGFrcaWHQt3x05hT2vZD4g2ChOJcUpphRChY+X07D2Iw7o6DufH84My/6bzus4RvjeMOq3p71SPCXPLBosq19pu9Idy4LUAONvHb3843wVxtLR0/sX/6o9mGfn2HlKlkBmyEt5OK+FaNGKabeM07RpvbqZMbXguJvFDajHsVca/mM0nBUb4UXwYsd43gKnSoMhY5yvozZah9BwomKbT+U3oqu4fF3RO5NKC6ud1nh5eaHSt+73ihTT340lG/pLzbRbaZeThkhYF5XZx36UnzKq85Ss43r3wMUA43eST3OrDWx4MKETqTAREIxWIZkBcu82P3z49+4QbTtBvVMmut9foejrKfTU52gAFCaVmScNRNKDtp9O2LsYmwpuQsL1DmuMYw4//3Z/9rodlSdXpMR590FfzGEINE19NSIAmzOjyNkCSDh92hrVWiXlnnvYHygPdA9A/dTABuA19vzcAYJ1uRV0OQZJuuPcN86xVgB4jF3qqAqlOFLH19qg1RwMhKNBHS/1gxoGXh/h86y5eJ1+wCBVg/hbViar923IpZDnnplbpB2IfujaTf6fnCdKEDtbRf/eAwkW8JvyzWkjKwmTX+WPit5qowHCGR0EFvlxU7dh1jSnOcH4QXY3xpfYY7r4MTJjQHPkf/cwHP/KDn2paHXbuT/++X6GJpotm22/hTMeh3Irh7nkczri6GEdjVA2tmF6vvkeOxzX6E6aTcn6Jiibe+mkK/clIKVgsqfxVaehk5rpdHkX2kJ93Hu6eFZUiogRLeYX1gPBAAWQZ0phmn2GYYn/W5IDWattunev9MK1PrxxaVBlsMFw0glDaLgKycAQKcSSit9/rTnS7RWF7NBwKCtdItdEtvK03QSbeFwC7RLbu3Sc+j/hGC5f7umLyIIEUs9e1P92Rsa9E9cayYzO/s4r/AThmqGIXpzsHBt5Pp1/6yjfDsXinqcg03GWaVOlzRzVzXRyH0z3NW0+t2Bl5pBV/7F4n2DhqM4q8PAosDLEHgJLngHc68wQgn0N/AgvXcdUiPmR2K3uN29O3C0bc7Z61KMQs3HSI4I+VFmEbHWEkR6dDHYtpyWjW+aaJoTSQTxqGBPC6ZTYCtua1pUJbtKiNHg8IHb3S0ijGs6Hxsth9clI6zWQNsd8Fz2tZM/TXtsctq6imHE7MsGymq6pSbrjoBBqpcAjsCF5WDOc7eUWKJTPr4NlxSJwvvrUYitopvGt790Gdm5j2/8J/9cc47GEx+V6T1zh4Dv5MqhQdksq22E87WJTSaeohjGUv16ePeiUjIH7fri4MGFRpTiGCl9K9TxIma3i8qS6yGcSgXF4BNc4P54fl8khqjieaYN22S9/fwXTUx+qHUxyGUnfvvHwCoVSAUofb08vow0Fmo++69fqojzechOgzVNbRElQdDqd7lmzynVvWp+BHUmwRNzCElNeuoPcp3R7bzvWioyB5Aa1jGhDpLUscRkydGhLdsg6hTV4Sg7z8Z515BZaiRvFKES8M1zlK3SGbhvFv/9s//YUXW2Gev6wKwxvGXt1FPzpidLvWvOA6Te4E0h8ujDDkGnhwzqxL5ZK9Z+Rf0CXIVvHwc/WvSAbsDcJ+yXK2pBeCYL56NW9O3jPsNoicBRecCjIj4qQok23rkJmbtE0gb67iPUtn4wqGhFDHgMJ1HVGSsHyN5qgmP6VWJakAsV4jsAOTdG8RzlDl1CjTi8bWqcHNDBx9GDaESgZUIEDXpmPf7N5FI/ZInVvRuyI9N8qGPBDGO+oUw38zOS3NT/7c6x/83uckPMQ3SfGfaTG7gWXpzfL7kEnnZZzOxlKChRaFF+zZcuEp8a9vZNGmQPLYf2sctl4Zqs/yFDqdBStB0qugMcYR0KmG+3ToB3g+amAZqbq8iV4hJ4/2kFFX11oAvzpHnLA6IDDC4ULHlHFbVszrjm3bXBwcifJm6V4I7NfgQNGOPe4m4ndo3hN7mFhs6EP2lGp2sX6PpwdbBAT77Th6CE6J4/kgXFZ8OOVFPODAoyi+Fjz79vpDpvdvo4IL3oN7znEYyK8OFnwbY/z6196/78u6FXpcD6tMYYHY3cjxvAUQk5nWeIq4DiuoBlI6PDwtd64v41E1UMoqB2GGrifIRS2c8SBch5gmytE7J/HdqM2W66OaPfIjzHMlxB524E43Lzny6dm7cbovJQ+okPUWSvEMUzUJzcKXLR2HvzFuy2PT4uXvg1FLTOWMoXLQ60QHpKET+QYNZRwsZZEadRiJNivP4LSteBDh+8AvCevWBQMsDPl2NAC45fB/hDNbr49PaClVwzlLHA0oYNx4inH42ref3rnbSVlt3jjD/e5G4ZAJuhbBtIjK+AIBA5YGiaqaP02140nnhBa2h7WwXF6/H4dz1oQyeIdD2FF5T30LMLHcHsfxvpSkoZXa6KuPo2UxSGhCn0q4i2uI0aZl9+ty1VC2Pzedi+PY1DbndRzvZFy+J7MF7hRSlPrTfYJSyppPe0p7U3uihQHCaxzOHMmAJ5gw6m9Uus3W+q4st4PQFyouy9WMHRwc4NQV9LZL63U83+9l3QHwrDOzs8HsSvRnuS6QpLD3zSxD7MwUAaP2sjrv/tbf/Aff+8m6rKp3C+ElKidIojQJGEdqN56mXcdrjqNG79gZCX6SrEKdcSSfd0UFopMvnJ7TTW5gjvsu1O4B0psok3Zt1rq1XTT5hPRrrtU6yYl6eirbZtKtMOjpaWqucazYyG+GMzhJiiI1Xy/vfOpz0Fk0IZLGn3AduW2SVTOMZ429LDNOh7e3YUic7gQ57jwiU7EiD4BEjPMpoiLxfMhjLWjioDYchniS6wGoIEJUQSJ88L6k0rR8nZIRrIOOiJzSObyKRXya5Ov6+Ivfar7vc8O6Lqfnn27/xf/6b9PhtBszsqEhlkFiP44twesbgXYKF1BCySlM523d3oZP5pVztO2nc+c0PTFfWBF79kP1txVqnWe9aWTbdiEvFxgBOrDTcvOcDYXACJTL27pex/FO/beJhF0rfMD3eTdCxMGQPm4qHroY45YWid3q5hqX8TnUSjoOSqAk7asaifugYeS1LSJI6qPmRUUlKc+izlMBb8vFRf4Z2koIwetfy7rM492z9fJqr1VOY7dZ5/q+j/fPpe2CEvtmiXhyf70xSAktbSG9skmanG9pmcdx/Lf+zs9993sC6uPQH6oONuvhmkbUVHKyCj03m1andYtjX2fZw+aqKUYd0NIOs7nBMkgx3SK0bVS/Ned1GKY4PgD/KRNOcSyubcFmCAJdJVKX15gMWNR/haEQwUt4JkFJrRgAMipEv+FixGGAkprluC1CWlzXNw4zC7GPdMwFvpSTi32RMwo6GjSlQf81jhz9qWuacNJjpASr8l3N2k4aquaqNgPqHFpVfOsphxiEyT2fA/cgVtCbVtG8EVpyT5CV7XG8U7NByNpy/ejnv7p9//fcMQk+v5kE/xMYUYx1vXVxklcdkhz1eTW5LjRY6Zusx5/uur1abH9l6VMuj1XWlkECNiV7ixbGs5trSqi5nRpBJMXolK0ho+x3HuL3iv2J7CHm6+N0erAna5GoTVX7MT68yNsq3JBTd53nGAW57jnLmWe8X/OyJ1nPiugXx9vllb4FGOiWU0AcuMkBqtiT7Lzu5XS7jHdy5lmvjw0JdcNwL61tkPGBltB2C3GC/Bcs+Xm+vCKhQSxRDX1Pp7bzJYnoy5lw0yXjB2SqW1rXjpUcw9kFL31ZCH/7b/299/pXLeHy6kTRO6nqExGyFZeuaXPRusdrTfBuEA/iKDxAAKXOYKWO29+eGwNg4TGwQf1bLR75XERFYdOJN5EkSpqr0GvQoW7XW9vI+NWYaLq2iP2Ujxi1+M59yJUusp36aVzMmkPNqdSey0VXHOMgS0lSl8gNCEH+QNS2OwhXZn5d5JAlpiBWaJ0mJ7LxKqbngtC6QyYV9ti6PkoCniFNqDsyY9B+mOguJD8cpxOGQttObJFNLaC6wNzes+D1Pf3sL82//Ic+qTSJENp/8b/xO/phaHxQk9T6+fbYn+72hA0qSnRxPkT4qPqE53cKVpvbcpMsmhmNZysb6bTv1bIwzK4oldq8bqWuIUxB1+JVPoRRfrStETsOnfiBNvrYZUDS9xMmOXXX6DSII75X48ev18egFnZpu1ZGQzxpxMd10r1023EPz2nuXBBVa2/Jte9bP3gNCw/AY0FFdLdxL2tS5yDFSVqeiO69a7lBjpxc3283qZzbEDEgwJeONub6+sPxdG9miXoyRwtoVwLkZ3NgxX1Axb2Z2Ikp1MWyPPk+/s2/9m998cW6bdWbcV0r7YShFkMcTCR/1KwueRwtR7m1EpesFIw9i0qmMLIrttDL6sOLfhvMZwALD9qq5Rrk6ZQxX5Dv5Xj/DIxci5DJvcSAFbSU2JwKAiYDTHMSNAvkds/MyLucUuyjTGcpvkvZ4ORGzFCj0bNDCFtO8j23ZEvzYINbsKXF45CAT5bWvZ3ZsuVkCZk5/o4+mG6nNTobe8/DQpDMkIhsQTVVBeaqBh2cFEqBO0D5FP+BdZClxRH5nqdp/KkvX7//i3eHCd///P/k3yOCG0SabUtxnJpaweCNRxPkCWvkE3IlkNjwStsG5+RmWW9Swer97TB7O6nD9EkW58d+Oi3LLUJrkZyAZEx1jVJIure2WGjUdGOgI6MnsBF6UXc4ngV0oj4RDoATcqN6sd/SdhSZffPc9PwwFY15vjbOj+AzsA8d1p0yf3btLnBAmYezxj0hSKB4pLqt89Or8zufdL4Xwakl9E4oqyj1ab7wTIdWx5UQ5SwlrgjbDo28Q1eq3wD5QYrK7dbHwQoiHB0rAmI90r/2F//aJ4aXje919Tn9sqFmLbkfzsYsDL4HzNZZLFmMrgI0pYwmrXBqa/LjvY/RnIjNpICCyL/11FeY5KpumAxITLscI29+SNlxMVpkySjoPYv0Ads3rbeoKoDZxbZiXjubbHc836t0IsRXNGEgm/YQpRxDq50cZYlmje5vPxn16QGAhycpDA4davNVZvFRODUjM70LDR5g2CYcBM3ZjpeOMeBuaU4GeclsgWQ2n0E59Z+cpxtuTEKA6yEeYeyQoe9/5iuXH/nBT+ckrN/9kR/9xDJfhCyh+UCGHGrZNcVkPWEt1Pnxjk3s120p61WNndwAXlbVJ70+HHRE2eRzQpO31ePhU7X6cIEdh1MXxV8PyoIe+vEkTweWjqaPMkXydw+ScXU+aOoLyi5Kwl6C7bGjbgr2EPuaxotUiLYrqwIbW1w6ivLQOzF3b68qSrSUZoDIQwhm66gcFPyppUZc/5EVaTjev7DJ/F5FlJ2vT8MwlVpkcdef0/K0LeJs05KK+6knGDh0dUOJm9n3d/ornJcN4ySTFU5urT5t5sYJCvPtV7/8lSlsML3CsiZoNjrykcsdGRm0RbNIT0OfB/NKBXAcp7IlaS+HQQzt+Sooifgf0/Vjk6r5SVkXE+KhyVTlBGdYHW1GKGdTAt9PRVNzl7fND+Ku6TIRe8Ztt6dOU2q1DV4QyNBT5m3LrWtgP3AxtrRM5gcFRGkjJ+SLhzz57J5RYanQYlVXnFUtwWcBogk2tyWh8amGHNp2pTdowbULf5CjDiycPg0jOyQ78joZp8b3muXi7CKvCsok8r7UYVt1/cFj+sIXP6eD1/v2X/3v/F6BblAgjRElLw38Bvrp7k29i/0TDlFMI6G8d0feNJuAuc60H543uIAF6pjWBKtrv6fskFyoe1alIKh+S7e+P2uUy9w+FVULtOpP9y8+fXn80HUtPp538giihZAKOwTNpHAUNVsKDdpsmsPt/HY40h0dc76mrOXYp+lOWzHX4XyvioLSt+aN4d252ZtFzsZysdSuAJDV7HCZU0lREGrI6w1LyF4Wd1hbSmoj8vC6LLN0ryHiQRA2Caw7zVZLghpRiXtYOigGzPLqX//L/8Z7p4so8TInlN5T9sgNBFy9K9ktEiAbLLfCnOXFR8R9yXfNMl+nu+cSTMfJ2MXEMPMYkFlCQdiNg2QcaaW8lDSNZ9RtwU7EikuKHY3Hgf0J1tIgGdJYGobICV14wtmMzrVMdVLg6YLnIYzlgyhExWqATkr8hJUQZ/BRYhjFnOUPmuUbCwbZOyJvPje4B7qzjK4XdEgaJtd2myCmU9NSOxCqsGqR3DdkpEOnh6bJbEcHpTAx/gcMi3aE1z//9fVX/MgXpABOuf2z/8N/p/puwbox4GsSx1PeVt1cecPuL3I8zNpttL/4BewMLzZdvU5VeNdp66j/2LN3UV9C144+hUiC2IN2w7CnpGLUnEjjqd2TLE9qKlnZlwcMPh0RWay5g69kuYjWhasmZlgicv+6qH3EFLs92jdDiX48qYU6akPEtJ4rloleZ95q9GxOfYlepQiB0IapVmvDsqaKfbWnW8qZMft69+I9y+vGM3JuFfQ9LJcn51rJkftTP57ezOOCixleZI9duBnqqzbt2nWTfKwpqdXH1qTiL/75v/LQvWp00x8dSdaWun64JrjYaTJQ1UWAXdIgem8DIOUKj0ereMKUdPtt8DhicFrBwF+6ARCayBFaIieZXJT1pssB61LX7DiIWQZcFoLXWrJB34RQltt2u0Scfa1Sx2uaMbsL2hKN3hk5c1lzd4J5TDHsCKb2g+xHLSFB8h3GlJpCYNdM9dsfwKAMdpws6WFxct0Vbgtvujz7sYD9KBbRG9C4mN0C+dBiEF8bifQXQE9RSCR/DT3Vo0KUIVPrjiEHJP7815df9r3v5lqmu3faP/c/+nfKL1dPNtakVc5UV0ioJELUT/qqTgoyNUCxz9j2xnhy+KtpVN61/XDa8qJ1IPJ9TyR3qx0CcWhLt+3y9PDOpyqsMSnomGKs86XjJu5gU5blalEKXmqPGSIA4z0eZfARpZpqL9oTX8WbTEfeJfsQZDN3flyfPhruX4Q4MIBLPvjC73OD3HvgSLbDMCW2es3FMVObHz8Ig2YO43S3XBVjgRQ1Kffl7SPHwJ1OeWcIYOWiPvY6d0F6lJyrTLC3zfUhLzNWOQ6GBmQSZsP9+dnf+uv/9n37mmany0nOqc/vNdOtxQ19Y0JyUjacWemD6Ve9JijkRlDXrFqjsa7UHQnO4UktMGcHI9gtt4vaErpbLzcnXAWgl+ELLW1cThnXsFCkVHr0YQgmxaZbMI9BE83qa3DwCacnPpwqVF2HFQIgBE2BHIIdplAjs/1hBqzFAGofDDUxO3XlOzkR4KsqsS72PUrgIuQQyJHsfnncTudn5N0XIhUT4aWeV1C9Bp18ZkWVLcGT52B5bRqUDzrpzF2r3f/xly+/9ld/SSeG798kxHz/8viBD5GPJDmL2aPv5iLoxX01pUjALHFvu/P9CxfGooTGpNXQNvx9wM7zY5qvm9axTkzO5k5uM61TTM3rD13bvllqKS3E0qAyM8CrZHC0cZierddHYONdERvQdJuGJJ/bFfLZ0OEDrkk+J3wYz3m9iO8ep/ny7enuxfjwibbzmKQm+chGZQJE+K1HScPDO03TYvmkYjFTSACuygNivT2SHrAyDajj/Ts4D2vpsCFFRNlLvr1Wkdb5oOPnOCqXmOgopCcpY70fh/E+nu5b5MVOI8QHcbBj/+Wf/fLkFynuZQ7enqKjU3R9VOckhnk/yD+nVlMMEoI27jq9JmU5Zzsy1Qo76lV89dqCZYsufWi8VE09M6YOcSzLz6zPKZ1B0XYsg3Sjin15/1w4o/RlJqVvBKpEOVo7gm4bKjPJqbGGBpJ3gm5wfTT5S/CDDg/5qQl/9H0f9CHbAClIopGOOo+hsIXaEuqlqcvH9X0DDVloGIyGjVC9/s0zJ4nMQaF3OHY6KxElqIAr0XW4qmDzo99pDBEid6nH+vY4Xj6mz3z2EzpV9ur+zB/4lZ0wuJW3uHZOY34LsIjS/manS1DRXeu28MnabbksrNHjyKom1ktOCykVTQij7weuVoIF4Dvo8uyceG/TfSba0Yd+vHumYbCM32zyMHZhXF59oyYVDKL47bLqqllWcwGlj/jxaoIfR2LFtDJwxmstwmC4u7765jDdKfifeTaXvGiSeVtQ4jWYeYmYvsrPPmmxMjJM15dWiXYdUh68Abfbk8RU11fberWsaRNx4wqxHG0bT3fwWO+xchClr+GMl6rmqEEj803HJxe9HlFe03ytR/76V795jvnplqNQPr2g02mc19Q2ksM2rU/r6rweHoJxJsQsYE9MCeinvP7w+Di0RKjFG3kUXCMSZx3JwCBEDKveqNt6UEmUbU1pUf27zg3Ut+Mo8+3pwD35dH7e2UpqW/Cfhr+aNE7SuCBdVkx0jIeLXS4lLR9Pp7J5DfZ9f5D7hI0gJawxiLvO9iotO4bKFCdcGxaltGOyBIhJObfbheG9G+5asq+FranocrJ5RRG/aG6tD4BZLqbvVO+yxe1PSEUQ3rvm5WN9950pL7MG3n/+f/gH1XDEwMV3NIdAU2gkseab970aERZT3ra+H1NevOvj6V4xq+qZJaUNHI1lm3Ne0rYN54cOv2IxmdaL3CCjMoLM/Ec+56dnaPDWg8hg1NwRg2BIYyWJN0bJhlGX4BGhm32PQbFetlPBJiTu9N537epQne6ZRoXgcn18ePczy+1R0bm1hH4M/bheXlODBHGZ0op9T2fF4v3zd0k+fhzv3hHvoCfaWiJhTcqOXCoYfxzv6npbr681LTrUX6rahshoKA0utmLOAoeO6fbYBTsp8w7KDshT+/781/71v/Wp6cPLJfeDjurLrRLz3E6jF1hOhvs4aXSKMvAQp60NppSUJGO97Tm9qV+RET5ttyuQoiwYOma3GCFaa5vEcCWHAbMmbTiLWJSARVSlwrRetxEEP0E3gqR2NTP4U1xFRKXeGzRP2HlNKBVhS1uelbEGQec2OAtu3yXgxO6RyReKpR0H16DVFfLyqNXc6BhmzOIbZ64nlsHbQQ8T4oS33+FwsqEikA5JZsCDUg+9tIeNav1D7EB4uLr9bPCKQdCg0pFjt1PI/vAPf/7DX/nLv+uQ1H9s/4//gd+w1yats8Dvo+Gzqm8exnG+rXGIgSoTuxWNeltLjmk0kZE1g1hYIl4vy+ogYwFKiB4sl89t1udG7o2jbTmdT8u6wuoO6kYhYLHUD1L4W8C4uyB3Bdm0+d5DM2lj7Dh1oItAxYneY/2u00F18JFDcFWfrA34QN2WNEyD2tY4ZTy4RZFnMgJCEGB+60TPuofmcQjH0R3SWsN/ghYmQxb0YDUvFNIADDrvhMwIkWk9AnnlY7x1L6V57US97hUaGdqOl5FS0w8q215+9LrdC06/2St2O41TuK21V9SIDnLy7KIGXkxbZKCgu04LiJzQrLq5PdakufLxdtDjBRB5HioLBYqDqtkKVcJQed3GSu4QwsP83ou8SZWgAYvE+wZJah+q7wRg0s7gUDfKhgZhx76uKyM8txP/E+IohN4749g+Pt6ev/OQcwJc9OpgiWaPMUJoMOmCvJ7AgWQqxQ+UIj347qgsYnV60ZB+ixs0ayBHmB12WpJ2gLY3Dpm0w9jUu9ZyqDQX7zWD6uOwzTNOkN1t3p4/v0u56Ef+a//937Nvt5xEqzqdH6oNUxAgY5/CV5efCtWRODP8N/3oRRLBrFt+b/fgJySL2h4u+JZBxoEM3EaY0H2H4fyin8aui3pk4/1y+aDzfZYnioQA9RCj7uiUoYezhb71XsE0jmaYNNHMZQtOjF9l8o33Zh4qZg52+0Tb7q0MArRKGnIIde0qsBZvOUpeDVHA+KgQVpUufFnVPy50Np1DQinVSOirVgOs0y4c/I9CgWqhIWl1SexCh0xYiCn0RhHYAflVc1RuxZZd1LZSH9LmBjyNHZMyAVDeO7GTBFxirK1x4WETaLMlLqXQcR34Q3VW/BzYcVuaUBjvzAoOEyGnUaDEFYP2elC7BdSOQZ2m+/2+b005IKJWmxiCtYbG/NlwV+5P93/7b/3DH/3NP1J2rGNhztpL1Sf2ZlGMHkBoYYtNQRIu1PotYxxdd4u9EJcJBYL6dfBRS8TYFdopQwdjUgLgyM1BqC6d9Hx5TZkVNEsFCswQbRrpGV90IWLfk5uazWHrEHvCAzd5uuGCEl+3R3+6s1mTtAr/5K9514y5GxdTSszCMn193LctlbJDxxmm++V220UHnjADS0kFT9X4e7o7dm8xDRppCf5SzKA+A4SIow1VNJ7U+F7OsgqAmefL03Z7zGu6vXz/6fUrYeGCm/bOqdltSPuh64pS36GiWOerwQg5S5O3zLOK1GNfbtfletmW27pc1/ma5tuKRCMn+dFum/jiLOWiAVBOmNYtkC7lFqKbH/8cHfmwSpZ1Pjo362cux36sqyxE85bSqr9xS2upeZkX3JoPGRPWY9FEs7ld1YsLu6/tpkckqkUbBsL+VQilVfRBnJz1p3LSuG5bN0Gsm1qFkgiJXWZ9NDmz5/V2K8DCzbFvS6pZzLydEXraCkI5an1dOn1JG8nvYb5diOytgBM7ptPVAt9TytgFpFIyFDgS2dHprrentumwE20LcBtePTUOw9e/8eEXv+97jwPCfwiwkBEla5yMDknPNr9ZpiImFjNp9tu2kGadnSDErW5rwxFLDYPHvVjRW85WsWTdSlyttbJTVNHpMZo6VJrSvXG0i6oFvEtbYsioZ1BU0W0yz5ifDhVSLZCm7DUhFkZZwhIWv16ftJGq1rb7I7/lu+I0pfWaZCfEgaEHdanb2vZ9DNi6WzrIUakApLBJaRumu44sfcQPgah+COpHI3uMXXMGloglCeg+jYPEMTt+ifAIyu0NeD+c1DZ1ohsEI/yc7ojlaw9eyTBNlBkrpK6BjCfxZPphID1sI7iIdFvnkFM4i5oLHLFAaQf1ulTCAtjw1u2ilguiXl3rJGJIJAmW91Zi76mPQWA0tW1cVO8bRxPjdXjmYaKPoTn3tDF4j7dOfXa+qczqenC6luII87NaROE2JAdejfYeFJA8np7hSNlISWhiCcwAdSHQytDRqdqxlKSWABWLfhHjH1RGyFRaW6ZNab3ZK4eGIPNQ0XtgeXU07kx1pG/eFnnCMvrQG5Q4BDDt5cvrs7s+rU/IXOQDQeZf7iD9WXwG5kUDPjFJHRFRsGbZXKuaWn3tEHdAWPKY1d2JbwfoCZjR4UsQLUcZT7jghDDd51KGs+bQSJToJzXV0eY395BGnLxT690w3kHpD5hWZgRAkjFT6GWH11st1h0N7p/+De+l5VJK2ckins4PSuWX/KeXbzMOZProrQOUdrQXrfKFIFoamktUcjHChsDpGFG1SQvSD6dG9XDdllvoBypUaauLPCrwzUVqdNR8e3ypkc44HQQyExbfY9if94aF4iMSNz1u2GZBT1122B1ypzum2BNgsKoOIIRiyFUpm3srijuCcyT7a56PxaTuAQeTPqttMnGICiSgCzozKli59Rsp0qToJflhxMQcDgzghnYpocKi6b51aEqqB0qBnq3VBec/WxaJxXsRSYrUHSZdqZtMj5lAUcMUm+J1BpTo125Jm4S7ZShrWmEd8PuW5z1nXpBLeolqtPS/mLEZr6YDeTjMsxxUwPGHC2IPxbEh1d0B/mM/fu0bT5/97IsDo0LdG6SptnT8glYY4h5Z1x7jl818DCyFqaQsa6rzMxXlNVlGC36pfQSo7ac77z1ONham2x0oMvXToAcJemnb5fJStFbwflNKgQVzwLG1MHi/IKypbz364bXiLqGlQ+b01fAr5Pa7+2d/46fFZdBcQ9IBG351HCwS/sIe4XiSH8RxGJnENc6Z1yQQvq4nHZAackkbYN4eXkJbzYC1grhGUIjKrV8QCvRwIrFEWN1SeXj3U8P9s43UWF2z46Bnt22Nri7cAvdS5Ml7CwGvqLyKe3gcVB2bzGSQ2Lw1LnZB6e0Q0SB3UBUrbK8V3x26Ei+eGxxOoqUQWPgZaZB9w+/Ly819zB3AzO1otIITm0PlnKJ+6C+trBS63HmQrQF2muhSqlUEk7IsoIsLYhK4dGKc1LAOF04muVhKEsAQjWMnyPvt6OSNpWbXNYxIPea92NMT+KWBdxH/gshXc4rtxyk43YfC1JG5EkdrEhl0xSFCx1PYh8xKUMaKE0UWRBxPw3Tfdu03vvnRp15M63pJK4GItXDkMyjsWkAOBzZPvFAcFf8BJ8fGZKaJ1SRejxEggXkW/63V/VMLeZtAnHKd3XKWvY+OM9cxsFccQYsmUwMcOjTmBWwF0VVmu+KMNrcLRl+6Ro2NzLrD4KKGfa126wxhSX5K7p/6de/yFF0czug7095wyb7tdGTbRkxs6seRMH4ZpmuH4dolqK7nSGDcbGQSic1K1uUEWyaXjXhy+YTq01lgBEo4nf8UHnHQM7UL04m4ciFmUp2tiebMKRjHUrWJajEbjOffWpzrRpKlLilXyNLZwGUn97zYXILcWaDrXi9PSnZYwbp7fQ9DQJ9HeD8yee2xgrU1wVjG3bUxZ6XhtnY2hMjCdZnobIvM2TmEOvY9GJcmlJwErfYtnDDBWZuChnDjszNYba5OeK1RIns5RIngtbCspP3GCoaxBZJDxS1AnQ9pACIEnuoI6G9gJWHrODZofLvj4GMXQBsYutVsCPWmWlDRxrsjq1Vwvvvog8t3fffnuoBOVbatJ2MK0ce/pbU7bB0MLNgpL0mqLA32EGZwIu5TPx41s2SEcmzzLQwTrzfD22EMxnzD96e3tzFMFGWpMBIOTo2KTmdRDDv0JDrGdIdviy0G+COixMmxipvMwsCJeLVQ91UOk//Mj35mF7Ptfrl8VLbbMN1lZWVXLn0VAev8Gvdtb6OiVm1Q0V3KouxPZ0RSUwdECO9SNV7nOz55MQ6pIqCxuzC5A0O3HRaweR03+H6dWrIWj7TQWZFmRDFKRkN2TuWgNRv42VPkETmcVMN0uAQTCUoIBfhJtslLiER28pkw/GhVOVg5wSHyMcub1e251juGl5TdCBKiuN+qNXcgxY1hv35BkBbMb6QxcfX4KPbd19vrDqsVYDFsMD8mAvC3a6HDWPTlEMPCLMV5dB2h4tJLOEtNpTrR1YHr28GHtdQCQHfIdhzw5BN7p8OocEB2Nvo1RaLiLXaV8qZIpKrOxn5rhOs6yx9ocmpDHwTe3X3tmx++986ppTJc1/nA9Bx3BsmyI/KXbVvfwnHrQj2848/rxYWm8BeOd9S2Fh6vZq44dwQ1M9q2E0GKLdAjJWXS3b7T2WN2JnoV6u324ABCBzNrHEHecz/IUEN8JWbYGseSzawSncIvwLPo2p36mHf+//zP/ZrmaG5PH8QgC0GNTkXbXANhxUqtC65m9R9QuH3Z5JlqPi0NVNvTwwvVD0ebNYzMcgUDa6dGb1OCw0MRXymUzXQQ0j8zcMdgEQsTXVzb6vCcoYDmCGw1TTRBg3ZmoRyqexe8UQ4rCdi4ntS3gVl29JAXbVmlpO1IvEK4oixm5UmikjeJVIDrgXEccHcNuMQl2lOLBXQpL1Wt/32DxKuWJc1bLTOKKj1igcKlmrf9JnmKR7h9OM6hPvYZCyMElgv28kqMw8VWd66kOU5jEOniTw8xhMPyUgHcoo4YVjaHKDzcQMSMvmqMQfliGrcv9tNUDMAL0JUDYZlZmwPjpkwoqgMdDqkWC2iLD/ygzekWwrhjE2QM1H/rJ37pN/2a7z2Q8PM/qqLRwH0Q+Ltta1Pkuu77KHKbZlVsRXHvGqGuyHn1DhorUJFrCzueKmecsFGC/TiKOpzECwVqB5StC995M/tw3RCbpCACg3Tl0u7CcntUZc5W42qslrVcj6MPkSO/bMtFpQoZjd58Ff707/3hy0dfD75vJHWbNeFjeppzqttcgEujeFfq94Oc3VkxOB8ZayP0/Z6TvXJqEuHWZlipRhB3dkqIzplJAXud+WjGYrDHbcEfop8ukb8aDiBtPs0URbkgn4YilfujRt9r0M7QnDY171l/aiOnzOLTqC52rzNASBzF9N7J5PTccsVZqO8bT64GTjXxy7rirbRggtMW9HUMjj1d/q4XA3k4TgKsFJFCJbCtc6Qid/BMpQk2k3tcomChlm2+jac7el+cPPivvh+QH587zOU7kOyGgQPEu/6Q9/ispFdcmWAIR8t9YblL/qApu/AThyY2OPQYCoNonA0o+Ls4EfUJe1rxRUQvtbIfXyAcq8ribnaS5xqxVNrj2+8/ffIT98vldQjDAWNsOI2ZIUOaZamE6wwiDQ2VtoaBAqGoFQ6pqDjkjuLpXQroJa0qHsVwYFekz01LBDpB0Q7hR9Ip1MnZIQwDFpHN7fLhIZfyV73Iua/RrDpLNqdq1NlnMJHCBCQxkxuSGd5o2liz9dNvkuK/W+2s1FhJHHfcv9Q0xHB9fK0RBm44uMOeFykkdnPNxsv7iBEKA8bt67IwbkD4Ax+A78Ixr2Oz0W0QhWbYeMWHXgBwLToPyiF6PMbOOtiSGF0qUnV4iNBsUw95EzWNGhoXCXaeBRIAQVibXY99GKeP+wtoJEzukPVTnYew6/sfZp33cbTt4Dr0o8zerMEFyc2Y/MQ4joIRsSIsBQUgCZaiCkMJ7vvxaEhi9YN4QS5Ilw2hZz8KD/ZtwFvoe+bIU5A1hm5LSbo0+3UKCOx8tVMDklKW3HGwelZzIjLjYT7LxBb4QVI3MBN0YebJpRNCPE3spyXegNr5lkvM/tlxiu7ECGT8Zxxx5eY3TWBGDh2McEfMAX7hK+9/+sVgjbsqDIFDK3qAXQU9HBZWrXSeUCo2ilVdygfFME15tvQa4Etvyc1Ora2GNlSbXiuG8kjfqY+C+U73cZTVWppveZUdgZyySHCTlTJpDzI4YtDDDRyLvv4h6KaDWe28JUZTd4rWq443y+vlTRP8otAZcCRk9U9HsSgLEeCWNUb1uHgPaf6c8JYyNDpECJIgvVSWDcEbkRqOb6uOUx0CTIwA3FlpEnZPqJPXHd1q20ItzvMs3gTFLgBMQ0tazDue7a0uQja/jOeDsqssNlQ3Ji0gJnidyg9jkEOv6sDsrEnQh9PJelRjHHGcl4NGkhMXYx+4wvKBQravEAd5j8pE3wA1/l7qKxvRE4lBj3QYjAabV8BOcHFdrnrylljaD1YcHxDlqAV19lqeM8V74+jnWOucl+gMM0ESkf2AZblgFKON+a4FaTDHZvNj3kyN7jsU3fRDxsbZoSu7j5teB2vy4IUeQL/mnIim0amYLmKRfPNbT596d9DQjHraqMXWV9CEiIc8ifrKBlbWyZ2KAYKCXAwMZ6Jl2BNG35H+slGltvCuvTkHi3sSo+LqiM/CzEbkxaZqYuPQOeAUvNLBwdagWdxzpvoFCCqJ6lfRT8AVqHP2NpCtbWHoMoJoG/dnfu8v2/R63LZe9Z/TBvddb5cbRDT74fSgaQJqHTraWb8H0gG8i47sMBacfm7EDx2aI0x4xjHGoap87SMEh1/XYRnRsiMVOfkYEUlqH9lkwU475ghSWkIKQCHQgWazLWmpFWzRNRzbAv4+lhg4elprbqu+QtvY9EDpZiGCIvLHGTTS0+qstex1K96y7qs2+oDNVs+66Iy7W1n9DFlzTan1HbSwCmJVeNdbkMF4sKbXvDuL5pqZ7PSK/gMcrOyUDY1jFJ2xQNMgxVz3yI0NlHx2MMEO7CC9UhEhdAQnkJOecEjtXnGIgQk6s/rSpdQa8NDBCQp2jsmIUt7gqtyL5cyxiEnGvu7b4rz/5vuvP/upF21HD68NQAwZSb0d5GoZheg6KDoEjHAFiAlGXErWizM+j+tH9R3UaTHEbZnN852RohTbBlgVdJsV8HQ4TRALtqYWC1ClCNdVLGFNTaapt3mOpG1+yFkaLz2PXm7BNoxCZd8YjmKnjPt3/gpZ+tj53UK7a42cakbjIGJeLWDSM2110egRA30574dJLl82sLSVVMCqOOkPCj5NK5VZ2QuNFjbfNYSkqVX1UbSqLvQd+nNdFHHiSti9/5g2TjLFOJ5Z0qElARmKdcfxCZ6Cf+TbINePxalWSOxIqilsapQ9N0R5Z92hq3n9ThwVJBjP8ezI4G9g7VLEA1bARATsj+jRyBvtsK02z1pnXv5chYpBkBQz677arfW0zyOtabo96WUwjZLdO+NkMQi5VUDr9l4Fie0cEFjk/QgSErcWCelcYY40K0dwC7lM0VLXBVfwt9hqaBv9LdgJrgSL2+TGYbbu8qJpMd4qba7yLtiw6d3hIn/r2/N3ffquiqNGYWk7sIPQz3jNkF8dt9wbVtjv9pQlKZCCzKTDe1r5g+xmwA/uTUJns7kpYptg6ZE877SsXj9ltEMH44WKykGkaJOkGbBGLIDMC/dd7448MhGWOOOaTW5rPuW1QpJ59t6n3R/+zZ/tjj3gfA8wvLUAahbSzahFtUocRBIOcbheH6OPIfYcEI4pTZR4gSEiwB4dAG54Trlo9s+h3eklGLFJi+NVXdL+kjXNnYMYojS7lhwv22z8Mn1MAc9pzQThbaOpIk+6CpvaFi4EQA/ErEBIsBt25jUdTjIFVO4w4w0NhsfJURup6hGrszAy1PEpnFYbVb1a1U62U1yXUwzRzI7UaXQfh17RCzVdDHFwCqu7kU4lOjFM9I5DXZXrcH5O3tvg6FI089ch2Jk+HX2pS7CYOvaMOYhwGkR6a+0JwNAQxtPB2nLy8yM+mRGyjQUo0vQ1WZ3ZaKJ6y2jnD84C1GHmI9SCvqQABX8637tOyorp7u6XvvrBp95TGI+BS0TPWBGnypuBY+1Y+Jz0FAUl7/J/D5zK2v1Ho5rE931KGlxSNTS497JAYUP0w7ATsnBwxUG206PWiNO12yaJn3wE+74f75qjYueoFQCAIcE3znZywKeWk5oXXTtxJAp7370G8IfrjpSy+/f8CpmMtxij7/CAmQgenXrWgk3Xylscj6PZ8jZNd2m9NTpdqq1gFeI160jgNBJ/FY6Knc70VySZOTAsSJGW+hTioMOD/9EHeRzoY3iFVC/Xx7Ll5rBTvIeNUDo0qTS+JEUZc+Zj6AYfffFMgG6s2kOB2up5ULP0psDglmhpyzR+SrdrRb+ivHcF5QqkA4lSH007JZEA5orkVXecblymJa+wVq0vqIztd9c2erVeS1NHidCw3A+n4CKcTaZITEJNqMWaA5VHcC9mURg5Tfa3fZsQJ71mfWijf9ZqdKNt28zJopPNzry93SfAxwd1Bs96GHS7ylkjbyBYcrwKPoo844KU1uiJp7v7Vh3/qXGBKV4ouAlN57tf/PL7n/30MwoHLVNcGIQRMy9vYK3qJkMNbOE1OEziCyh+FCpyhxZE75Ht2uy7x7USSLxxTAftCqJHl24KngsxoTqd6zD0Dbx5jAJSqfpttg4P4tCHoS8IeAq5OBzF0ceRG4KjEgt1oUNB54X7w7/lczWtFVKA2GN+rDKsVRG5NxVeLnJsmEkN/Hg9VHz/LB5C9TSSZ5Hork+W3221Ne9VtmfzcrW6AJGxkCkLi5b8QF+YwRF26qInNCKcCUSSKdCoiRItlE2gUKPrJhbHnU29omxqAa/4Cr7zfehHJQ0P5wO31TiNhCC2/fRQYbYx/Y3E48kjpbIcdefBpXOYI2DMr8Q4IyQDzhqxD9Iwe4/xeTGTUM3gqnbOtsoFUfGBtcTTQz+drIcR3to02/wkkZqF668zzsTg14KYRb/D6cQ11TyIdprjoq8rHPaIfdTxHiIkosgZqpgZTejBQDzjcBe058N4Mmcc58l0G07jw/MQByHaaVWMQ+zX+cmrznXz65ctGi6xBS6vDGn12Bx97esffPqTJ/OWIibdYr2VfkczaoWJW+YnQxoMxfJxaltVRxTfDgL1DVUm2fFIN3Wcw+qB/Bc12WhKvt4612ZwVWsLtZZkAnCT9o36SZnqLtItaDpumYjbMq+X165rnGylr9x+kp5zXeANLMOEUYvZsjv+b//xH0yleJVHC2bl9zbnF6gC9J1zisGJy7rr86kjHAaFSmj7eP0904ma5BAm5TxwhA4tDb0FJMMq14xsl1Yfv6e3zSVdJlOJICCaXOEk7x3ZhHQIjg44e60LR0mCYrDQag9EIcHtsOQ/Fs6bxktTWHNlw/pPBY3s4mrxDJKKPoPmN4Jl10UtOEXFRriavjWYDmhvpZhq7Boz32/z66KirerzcGmnudc7PLgKO8bYsJWSZsyEV6vA0QG8DMP09OqjfhyoqcjU51jdqQ8bArF1rwo/tUe3M//etUmQK2mvkzViplE2BGw4aHaRDud+mPSXarms0mvhqGWuVAJ/KQ7TMiuMI0HsQZNQ9kPTurzhJL6E/r7kWasWE8K/+W/+1K/7kU8fCP34envDTULRLcIqhqEKWFB2KrQcG1zjy7KgIIO+4XzZFvraM3/Ui9813468tUHq9aMWO4+gbARgtJBR37OdjohBakeoFBwwzR2GYWQCwCERgnpu09SsVySBJ0b4DR5HSjzgVeJB9Md+6xd08pGIJsgnQWFvdh9PkL6yElAAEsRRq5Zc2fRAVBbRI0NtVdhN7NxbFrbOYIWhdxj7Qh0PLg7c1MAUiGuEN/t+uHve+SHG3oEmdV5QKX9dJuKhaWlVCSg4SYCCJ/MwnWXAOZ0731s+nEXV+vFE7IKbzg8aYoDnWr0sUxNZIke5QPsu3eauR5+QNk+XnEsxml0MfRv7GKKhJcMkY3Q4WF6Q73CCGxLMXdSrOuoAMbCO9ULBzcVKgoxddF+2H7gYFQ/BlbUl90HYDkCKit1A1LbZU/uoJA8fAV5wDux0POWqrhG3ImfGw+aug37crfLHPNejamrm5I2lDIGyMnPUucK9FjrdEt6Mz8SHwShXh5EgIAHn2r3rhntcErTdtb/01Zef++wzip3QdZo685EjJukFVNMaQG1qxxUaDNcHKWuJKbBRgMNNbL0+HRVlgjbhoBs7jPA0u0xMgXWTFlQDuHVetycVVDlbb2MpPjwcRpz1cEEdC5MQVQ30ga3+Ex5biq6Cd6wSDpAj9qJDf6pWTTpjjPPt4vtpPN2nNCvf03UIFyg3HaBN34MBCw8JxOhCDzbPgsNMXYRqwB2iEs5OqJywXVuv4icBQVpT0vme8daAGUUZTg8lZT1cK6xLjidxu5XZ0QY6sEK3pCOn6ZqU18CP2tuOib0lwXjmNdJVtV6jiobtHodzGE+y8lSUsQ4r4nMXb0Gc2kX9jqIH3WctnOtqv3D6VlNl7C4Ncdt1vfUhGvlIiIb1JBRyKDDUk7UUh5oS9qJaSEzc0g2yboRqS1InY3ThPGRBwzaXuYikJPQoQutxA4dLR0QAEVq21hxrBGXCKmihZcZC6KJjGNk4p/HWYZJgj1rXBuc7xuIq+UQsK8mSBVXR7UXKpj6a9V1QW9995esvP/9dL0qp/NUULa0abrioWJhowXIEE+9urqn4iAm+BN5R42IhGmZSH1AbozDldTeVbLhKFij5A+TEIf6RbakScbpDZ1bZ7NpXLTYMAbIJtqFvG4+GPGbyPmIXe5QAtH9GmiNqn1y2k/vDv+lTeZs1aduPrq0t0sRdXfZkuHo/Kn405aJShywb2FyyQrHoLqdDS3XzjnBdL0RtA47eAOuS3jFjMtmRXdYIsor3sunjJChS7m437YbxvFxehX7cths8taDs/6oNiQtIZwdpp2nLvZkrokMTy1o1mHDrTlqhFsfZuuVl1lbUTWJ+15gPqZPWOsRtIQJAdVindB4rUgsOQwfNYI8sGdx1yK2Rz7DILX2vRWPUf+tNpYSmNBcnXHIfRx3XayVjPwOXOGq0eXkJhUlYJJQBZeeYi23QqSY2v/pm4ch6VlorLqiXAw6Ooa9ATtLYUgGC98kAS96s0ngksVBln9G+IQLsqTZHBhRm3q5hb7PeZh1hse+Huy6+NcOSuHGd+9NZ2kK6769//dufekHpTOCSYVDV+HOHbde3pRGydLsJhNLBcz6JiA5nNvaDxdkxDbbSjOFACEpx1AnE+TcM3gscN8ogwB2BYowmG4YYOvgqzTT2KuZKjdIIzim43LpcPD0WLiliSjKbg5/LqKH9P/3JH7w9vRqGs2FlSMvW0/SwzY8VejPxW638sLalP5+OQ5M7SlwxFLCS7Ul/anDS3XT88CmlHwXlbGDk71WaMp48f7oc6mVKOly/V+Fubjwz/9o9kqIuTnV9Cv2dyrJtkza/KGEhL0sp2+nuWa0F7tCQq8y4NSutYHw1RU2RRFjf5qUKkedwbI5MSAe5ME0SZ1uGtkWWowy2atY7wUlcdHMEzmE4dZxlSUVLFw3LEz6QteHVCybAaW9RgcbLACnXzrHe1vejJZfYgnAdeMfhjMsQPGHZbV2WDZ+kvqlVtyvGovq7YBCknGUPXPe0zsMgIEU1m5dDsNxpaQio34JFJvZRjn2a6TBYl3AiVQuKM6JuwPhaHZXrtuvjvh/T6VTk+tataw59tF1/yJEg/OIvffMHv/uhqE/J4heIKdi3NpdQ5n2jq/7oSr62rddBYIy3zrP+Goh9qgmokJq6bYdNm7HbLFDlk2ot1yi016dVZVjfj7VsOl9Ahimgqlg5Ok00XDo6BxI6ANzVllhWF2LKAi2UoHC09WhrErmTW72Myi+8AgS2/fnZG1H8H5SvSd//vX/01e//3Kjnuy0y3lGokzeyoBeE53dQOM2qOn+0TVZg3rmo69ugInpQGvYvHAybpZluBsmSQUNNRXVA11WG/pTTiu2a/Oc4AgfUCT2k+YOdundh0p5D4+ecKvlttrC9AxjHo9Sm8pYHi05TLtB8bCuACcCI5H86jGn/ZSCOBKnhlnJpvqLk6Ms6t771YcSSWmdvY7o1jRVVh3QKwV35g6DXB4FLmPUaHwl3rQsXdDCu/4EJc4z9tkmPor7ID8L6ctl5La4rP/NL5Uf/iV+1zLcYowvj3rZmVdJyNxmR1qwZwORWFDa4spH32NL+5XWFNJqPo9Udu206qkFztdoYgQkyn+40UuXi8PG056VkDXkMxBvGh1xWLuph36WIYDygENAm6GGZ3xu4rRpW5zp9naN0vFPXuEPnw7ZdXsllejpnOGAEgDfKVpLPiEbfw6TB1nx5PHa05dMEqAV10ulQSMu8k15ucRgCjkMkJow0y0YOf5ZPdv3gG9PD8x1qphJiGvbLIWGNHT0aLsrXMCSZufdAq2E4PbT/1//YD5S0PP/UF37iJ7/5K77vRdOoM5O9T97E4SFIK3Av65AhJQl7KV1A6zYf+2E8sA4MOCO1VNgy7aNm6WpxejMNVo9/HPghIJDt9I82kOJ9tw3EtbwXD/UF6+02zZretcxXIsOOZX7UrerliTJM55ItvN4YB2BstjGEuzs0rG1ar6o6lJa81WY3vx1rzwg4mXSbIQBveHi+H9bLS4BkIaGA6qJtIkUtfexVzkJkQf7HgEw3aKLYbWI/+RizxJwleozqmWsWxsxI6RfTrmAIpS38M19dfs2v+hKq9p1G2bHBdqvRz/fP1UlDkWpUTy5UaqJpCaqn4lyul9D3DCSqxmFpC5F6AwKm6wMQNL47y7WLo81ZGbZQ0juXmHiqF0fgu6OBJ+lo6cc7/dxtFWBFSDUSCb+u6xtnwX6cuv6OrD61yZ3SA8QEub1+v23a4f65D/72+qM3/5Cuj3Hg1GscUV9r68LdwzuXl9/uuna+PJGXfPYy74C14VQ+yjxgvgbnGlzgwe7wy0A15vohrRvJsXJiHUcWJI7zTRF1vyApQRplguZFxJM9HV10/9Rv+kQIp7733/5o/sSLwQr8LvTyHsSjXGww1OZd7GEv2mzSniXHEgNBQ7KlGZVaR+i+Gm2dyNZcqlZTjdrL0tASR2z4R1HkmrKVlLrQH6rcqSJCFHTQdNP5QQomF2hh25Rup9OLRWipTltERqSc61kUegOvEVU9Ygi28ipzA3HeozQP/XTfgFGYriCe7oMedKDWxIZymW1Uh3PBLSvyYzdiExwNKWDUEeStMeNsvYmNypJbclvMoaTDJKas83x9DTmCrImkM1jtHdplBaxI4397+XR86t27Q7kpCfpt5yPkXDvAlOO2MR9ct/mJ2HDWh6QhqVBRDON4UAkL40sJinXkCUvGAnWxPxAYOB1JO5O+QhyYZJ/7oaAdYwCY0m0XNRCFF9DzwSOwyavCsZv9dnsax1HlRPCXj97vp6lrzaZuladikMWB0jhzUS63PHq3YTzbxwHP1RYY757LqgRLnvPzd0NkmoHgRBeRoBdBXuPpzg+ytIlyJ3CijndBBarTaHU83bsQNcl/9uIwCyvYcqYJ7rojrSu0SBXZHfyMbZmFRvzJ3/VDMWihf/SY3n0IO9Bao/Yiq8Zk+tCBUtMIqrRgWqSdME5nqUgV7uk5iRZFgGVx0O3e0GAPRwm5IJoN+nrd1Q1rEsndbthgteV5wEvVDYjAPM2Pja6uZd+0jpfba9Ia726PHw3TCduPol5OG0kTVlzRO3h0ydFel7Slda55qVDZluvFtSLoQrHKnXTDmwU3kbPS71QUDnSCIEpVY1FG8PAjcGhsUfMIyAqK81cTVncjse1lQ0DYN8QhCl0B0rXJoetE51adqtbIbmEFCIgov++vl+6zn35Rq7YZpgZuk72HGhgRufEgwj6tESmrObbbtcrN6dYoym0SSgsX2kdiWmAfaCS/N4EEN+mBcIsL/SCn+dNd58Pw8G4DCKN13d9prAvJzuZcwt88E0PmNgLY+1MRYnEIT+QMf7q8jiEi0KH4LJXTYLOM1PXy1LaKM7t/5zNH25T16voBC9cPm6I5ro8qzcN055xO9DDdnaWvakxrFcIocrumncq0rNum59Z1g6AFhUkr1eF8Jyjc6YQEFTtSmhkVx7aLp7sHw0I98nm9EWbSwq/Ufr2BQX/tCzP2f/m4fvbznzn2RheQvhKRsRbkXVJHEjJZhUA5VThXklHPrn9Xz9GMp4ejbYZhKBwbxKPLNZNTxMERk5EtVfi+o0rctvVg64hDy5yQUko10nJ59XbOQ4ZWPQrAvEqjMN0rA6ZpZWNaqmmmynbrurjNTxjFkGUEH0OLox+NbdEPY2W82lDua2p7YIk6v5LklOZkvj4Sn1o0fNAYMuX1SuucJWe5PQYX90LIM3u15RNjiWgkC3d6eEdPmerEQcGXWzr9gagT/UkHP05YHBq3nNZa0uPqPve5Tx7QsG2wZcheH2LOa/S9ZUfLQIk4D3lktDWA2L5xHZYvL6wJ358jNvFm/0Y6i7ZEL4h51hADj0ozitP1KIyosVDuMN5jtDGkrMJVp14t5gXdwR82LknDEEo0ig4fGmTVe05WFqoc0gnSDvFuvr4cT890WzbH9cOvTXcvRIuMUR1IF2MIuie1B5I2HrbHmg/sZTw/V5BKP+n15qVsa4sHFuNwbaiy3bb15oO897oGGRZ+0Q1zm2E8kykiLre2XBDXWKoPQWn7m0os9CMhBof79/3BXwEI2Lz/0e2dO/HnMnJm4q5M8KXUVDy1VUpiGlMoA5QkJZH1XnQKuo/NZMrukMEoXi7EVGTWQNvnoEt8pxsjwFWDPREWfIzM9juQd6/Vz2zVe6dlZDFyewOdvSm3R+1DlpTNbmUu5AJpkBIWa/DRtswjScAloFtqSEwcYMtoP6f52nX6nHJdtsxTVUgj6D6iNiJHTSIMrZpEfyza2LamxXYla5PkdaZJ2OfHV9t8qXUrKqWQQm03HHlft8exXF91TScjrb2Rz0rVHTvG8LiGz372E2a0cVgxGfouEAkaBlKb9Fx9GBu8U2CPTrUmYSA6sHTiG2xqabBRNOBDIsBWaOyOu8mWcqDRP6DvYj3mKTV1DG7ztanb0brpdK8fx9j41Yff7IfYuF7DmbTazL45ypY2rTzUNyB7EDfFHdRk2jU6s2paxBRWL7qen3/KxDdPr749PfuE77pysLP23PUnkLEKu8X3ahLmvG6wb+o43RvETOqZJluY820dcIKjzIPYipuDhorDti39cI7TOSiXxAL7Tqbf6MexlEJgu5yx3Z/63T+oNbSXDz5cPvnOSDb9dqgOvglJdEda57TcLKiCBrwdT6eKIND1I8tlL3VtdCoJTm6Z3UjHxOc7SjUlsonDaMiyoRnixMHv59g+QAY28zmSoISRQidK2TnIJwKPJ6aMpieXCSsNRNnWvK6SIG36qKJJKbnN5tmDmnERtjrSD1TTaIivelyYaLs3eZP4U7ZF2EoeqEn0D7D7DTtqal3XZbm97vtBRnokkUAlsSqudhLATT6MLTiBahj8R6kPyX5EXI907sS+8jlde521qa3768u27v3nP/dZWSGJwHNnI7OIfDEomWpVKC1cNyDm4tq3odlbUo5iDOAKxNFaHhRWKMc4PTTOldvFSUynmEApGL16F3URxoqBY8yWE00y6GduioqLvp+enRTDnNo9O8ZkQj+bfbm+GoYJJEyoK5xQZSHzsgYkb/Hy6tv8c0vOmui1OenuvX/xSWSCpJ1uy+n5u3m5COlvZFXtfK9uqnXMdFdZ+e6HaDLjqR+mzokFmrcbEbZDGEYclnRXqE+VjnnH/L0DWmzj9KCk8XVO80UKWDVhm6K0ggb7rn8Tk/pf/lHoTc3PfPnp+78o5XurSUE0OW8Lp9cSpqQntOS2KnvKDcjfOYPP3Q60YiYOQQhdRv/k0C70kndA8Nogxwuy1EQ9tigHuuDlDrKrSDO+rtli9P2kU5YnlcX4FW1eR1HDGJNhOG73gTY/6lwXi33TOUqMz6GVEdd17fgKRlJvLHJ5x8gbV8pDlsm4kTFmzvMsqiOK9VrTwZiXlLteKQSgrvuemZDsnbi1NgpVLjQ4Qdkr7t52Qeg3Fwj9GpCXlMVG7kJK4sMNsa/NMfbh5z8cftNv+OHldm06/j+d8rJn5d8cF2AVa100zCl4L3mqhXRYZ1d2pMzVOI/7ei27UELpUYRSnkQMur3qp/tK/qmbzi3HJ/xQwXvmxYIdp54091yoe9JLJBt8XeS93vqh5EU0E8jGZvEpHNbHo5SgtlDT3+X2KBoF2TM8fDEy+vFePQ+aEFkz392n+VK2JU4PO86Ngt2QwIZh6hQCELIuVdLEXMfARz3JeH6QaU3Jdbu5/hwYJmrOk9Ve6m5fZxQr+j7ErguSAXfOUE11+pnixf2RH/vCkeY9zx8+HZ/7zLMW9nk83e06CxuVp0dpOAhN9oFAQALIGHzRVQvVGwq4iRLZuGkvECjkDnmruLVs8B8FFcHVkYBQyYLXHTliJSleXkPq7o0nEdfLR7E/ayoJDUk9dE6o5jf1na4FnMHho2S1v3AV3FupZDee7gSSHq13sjTthKep2POuP0hIhG0BZwsGeF7USBDR7EiqkysbdHmtdUtKxJIspttLjavshIDKJl2BesQ+5dTIqRiH8fEegwk0D4cOnbKt9aj0lDLJZmy5z3Pyvrus4fNf+PSBWww0MobTtKiUZyI5SAimnKTHvC1pkcc/dhdufHjHkazKbMnUBHFnUI3nwNGUcnRNJIaw7pK/CEh1bd0h0gTz85JRYT9AkA4RGFSZymlbR0lyJY2WjHu5CQ9CniPqG7YLmow7VYzL40dN23LcAo0Lfo139/SZumRyUxTKxOGyywRhuYynZ535jhlNr3U9LAYuTAvNwltbFLoFNa5PSTj7fHvNM8klq1phqtyRXszclxoB1We3SxJAyl2DvyEzRGcP9//zX/4Ny9PL092Ln/r5V1/6bPDTs+32uvN6HA5NsoZKnGGU/mCrRJLAHz6SqddVCBV1IQo2dMhRjKF+i1GSMfaGhJwhjjhNQJGAZk28/cBg+a0DhBLJ8UITVK9TiV0XCThyUZF9IImHD0fO6sA4Lz/4+i+YzaiTLWZzfvGefkDd9kYdQkpbSct3tlZZl+PAOqpBj8gM7S2znxBqtHyb3joGcngtIrYAEMNSztxrGshhzh4L500jXj/cUaaqQ9e28+0Jvau30Mi8rrgcNOogMQUKrvmF9/1v/s2/bF2T3ClrmecnqPZgxNZeW4yM8/jht4f5q25JIu9l2U0574Prx+12afUV2rJtxqVjWCaTn0P0Sel0LcLHBc/KNGMRmnsLR6JD9J0XvBuGnOfgB4bcKvb0Q0zJXaXcxaF2z8uVG2Ba5ptaqXGUm+d4MnXh0I+5bo15TZltSavuLgQyL/QKdDyrD2bnxPH5en11vn+2rHOnJwpzE6jtoAMwVbE0JD5q79X1SFs8Pd+WJxMNW6tg9hymesd2W9ruHacYH0f1P//v/+JvEA7YHD/9lfl7Pzv0wzmVrSecCyWnviGGIlFrhOKBAgW3URx1pL+26D/OafNqSjlhVKFob3KmUud6GyAEH6vIZ87s1qh5NAYex5PMjHa4X00jvJwCbDzfZx38A7ieJl/bfNt1k2XHDK4VZUMf2G5hlcLerbebBpQxmEUwMTk7w/iMyKPr++GA4uDgnOiia7zTNk0dfS7uaAlLNpk72GlMsYHVlJgtZOUCNW9QwUncc9uyQsuJOzhdxicd2gtFXpbBDFm/xREEb2HxX33pf+2v+2HZ0Kumi9hCbbiv7vqKFPU6EInNG04PNvCLzj89fRj9mPPc9+Oyrb5zp/vnt9tjjCJF74IldANjdLm/uVRP9+92qFjU44agJJR1FtV+1RBavU0bNSl3XZZ6O+ZtRZSn93V0QXUhuVtN25LjZvZ73bIs5m/lRIzZ5WmZtzie5cKCXKDkhX9WDrHZKCGgzf0IIVdkGUI7iTXc89zFScWSCpsty9swUuO1XEWDrKvXmwlu8EtUpAuE5apMlrY1Z8PvFEIU8LEh9azi17KrkV/dn/wd3+99eAO+fuv9pzeaNx1/dJhsa8SmuqnWtFy5Xbq9JMhV3IIlr7fXx96k7dLIucYkkU2uVfUJzshBmwfDw47MmM7U9Pjg0UOgKhqD97qVvGf0Uzo9MXAyqO04tM5wLNyhDT3L3QVbPzIjjtvlSYYO1JE1bdqcCEK7fpQIPWeVSuTHMtGSODioh5OJJyh72tMmQincSsgnupI0txehRGe/LX0klxpy6dU6cgboHSNCb1bnJnJiCDXdSLH1h8V5BG/NIk5YYknpIinYv4np1Fzr3Re/9EXvxv78IOcBvV0MEn3EqHRC2k65NpzLQo1bq9SqOsmMV+ZO9890x4qcIXrMetEcapjuOxfLdlMrabVNPXqFjR5ZNu1FoCc3Van7MD30Am0PVkIQAYzZsIQRuG/Mjy+NESgURNY4ez/065ajyi41dTsuub2Yv8MRDF09iaQ03h/NPt29C67Wq48jdruUEjXqMp+iNSdMA4qo/K2j4RzeFCif6IJi44IfPKBCls2JphaQOIF0a7YwSwJQpGmxglzh+OeHZqfi5bbb8+LHO42D9sb98d/23bD6tqe5eeehtyEU2DsRp5GUJabueblJcYc+BO376vsB1IKggc7DtrXC1TTpjiPbeB+ZoRhx3gjwcbTKjE6r7hZCV0xVaOJu7Lk59NTxhul0X/UFhIea0RUmCN6pUWs0wHeYEwZRfSBjA3ai/zfDVMYXybj75jgpqaR9Yud1WYyTNET65ZizCsWKo8ZDGGIQOs2Wa7Sm03x7FL1Cu+620TejTXUUonRGuAFI5+W6sh+FG0PItMB+oUMUtAFjWfUAX/jS9wjXixqHyzB5nHyvdX9+9kkzKTpw0k7rrJuNUbqpdWxBTOc76KIW9BuIaoq7daJNK29xbBFKWho8jw8o2L7rYn+C81LpQbtSlbKBKbTQatKDdGMYbZZpgEow30eYoprEiPxIZlQXevVg44MDRYjwptanV85H4V1coQJqQmjYKSqiglmVNOPdi0ZGlwpK9DFgMtmHKOr47fJaWEinXi7rnBWY5oc7h2LY6lVQL9ef7hr4no1pQ2Ger+tFJT3VCg8c1S7+du2/9j/4d5Tt4kP4hz/5jTd0v5TywbFmhEp8l0zJgXVsFZotodcwNpgVO8fJzW+o5vJlHX7szRRRpSTr/mh0jqPPyCpyUN/oxO1Hc31unKE7MONah8gDogRRgbolZeVVSWTJei6tN9UrbsP0jl27LcrPwiNCEgUTmJuTQoCyprWB66qy8ZYbHuXEBB24KSKV8LShO5z7Dn51K3Vbv3N9iKOmkNqshO3bRYIb+CoHG9+6BbNitdOAVgurs1015CpWXHR6JknjoEP67qbm99fnv/m3/WZ3yA4AS9cNPQ0xgHm1FO6cEpyIFWSo1wLVwIv7xET9sVeph4d8P07y+5wfFfECu3GvqgRW7du+H0V12WVctUlKhg8WYwE3DNMyXySS7KfgOg0Z00YoU4dhcJqfPiIH8jyOE2GFon8vr7/dn59rz+MFb8STvK3INvH78IH8v4s6bEwXtWDMyrvtMMYSZN2SSmpJ3foKeUvzdTg92PBUHxXymMMVCyEK6wS9uPFZalYtoIpUN0jiqVdBdi60H7vfyT17F5n0zRzg+1ychun0zW9++PzOiaFAoVkhVLZ4v1hOQZAJ5qiWACYg4ISDZ1eM202gHXQ27iarJaIZumuBiVlh7rPiLCgaUM/mY5t5so9xPkLjEyUrYIrM6E1DPvwJmfAyLWutXGHUBddvkdJxPNtJTKaadJX8/FAPudb0GgoOOu2woFEZWt+az+h6lWgoNYAJqOkWAi8Y/+EHY8hCoaBkMrB2atdOmjjKonUP/UlmB+ZLRePGbZNzEn1gywuS/wyBihjBgqpYX6Fdav/dX/pebUENRl76eLKIJMfQV1MT74Y4NR1iDs13gDg4lRocjobzs7zNbyANnFc0GaRGF3Q7nO4zY5AdB18MEIp1osobbppRnrJFRnGd/L8UJnd+JuQeA4Q3OSZvxtszc720refzQ9OJzyPaBgxFSSnO9woa6zXQHO7e64dp/3jAzGx7CDGGfvL90J8eLB0cUW0/PrwbQ++HwWu/SeCidxEHdMAqZqT+C+Khtdg9HOItIu9SoXjNGPGKRIMxMgbgfjg9V8u7zX4YS6o41d81TAE0uJBL6DVtm+rwP/Hbv4T8qXz7o6d3H4Z1vjj8wYV+4C7mMMlRG6HqXw6KPKmxw8QPEmE4OCrh4SQb/puxgvkxSVQpgrsqYopLmU7idoY0UjopCaLpbDKIWDG5k8UzUJlrV1E/7JjMUAVuM4zRrmEaOfTTgbMT6jOJ6FUW65ZXFxPjJPSDaYZS78mWyetSuXlw9Bfp0scoK6iabcxsY666MWWjZkMRVnZ6ffRwKd0eHZ1iGKb1+gpHuoaLot/3zGBy5NvocINR40GAmGBoAuvWVTO7p9x/8r2HUoXDtIeb59fgNDdx4CUClKdNXm/mySc6ESNkKEkDvbs6Rc7lZw2pd5yCYV0u0+mhfesVzjsSaoYHSz/BRhNSBFajzqHrpNllpiEr0h34v5Ut7BnfaAmq13UNflK/Dutsma+Y7i9lnVWWLfPy9AEZYtSK26plui2hP70R5dSyb/MlrY8ycdCIuDRHma+PvmvnVx/hu1Eb8PddNNudSCvJeubrIy6LBftNTbiaVlyYYXqgzsE3G7KmXu311QERs27bSF9kk1ygGs03u35EinS0/9r/8N+Zb698CP/oZ9//0mcEV1sKCcxi1dbbfOlcQL2F7xy+wI0RFbSyBXFYUtUhdAVDC9UPVT07xgEYLer0rVUFtICjtPLQDyJjS+TMPnaiytATCMzZxS+ClBGNGmB23l61WbXYVwtMNkfrLIvZE1CmPHzIjQM1o3tTAZ6WRifBpMshZ/DrY7NwWX40l4tmQmbT5GT6u+mAQb6sDp6AkyJpoiXb6YOEgAmuZlJyxs6bQEAX/LbO5KdYWI4N+MQtIgB3xeK3XZbSaXilEc9lf/a7ft9vU2ZZTjjY9Sih9Uu9VtMuy0Vj0W2xtCTR+/pRqNIyE0/YxXFM89KPk6jLbQvE1M1PL0MIXIPuLbONpEc2IL0Rvkl6vClpWTgnF+nOkzxbxnHYlqV12n5t64bTfVEfv6c0d/qJYbm9FP9CWQ0F2z3fUGFWqRY7Gj9tSjVmUZU3QHNpK0CrhI6WsL8FP2CrRwtUtpVJQuzvyi59HL8xWFvokC6pJNYLdrks0GJaRNJvqTQY+QzmJKCYZ/k9Dx4kIEzPasnK6WpwgvxL//N/etOEz/+b/9ZP/dD33DVNhEu8y1ISJuYwnEHcMFqhs2GQ6U19u2O8rjqsVV9ydF7YwjzHUcudmr75To0u6DAlzWtkydJnRqHeY2MG/zll2Ypw5/c71J8GO0s42sZrxU6LE76mrKlWkDO4enKyvjn6e7ZvS3iZr5oVtCbqTeJ3JPGFMLRqNBHvMkaqOkU6UwPn76SqYxS+SUyUwW0rCsDGjohG1srxlKDHpO3J7SrEZbYMzQ99AvZeaqoYpUEuXNYy9npVLx9XCZZ9p/1Ymmt98aO/9ddvyw3WUUfPUPD7lh6HlEueJWrixFSxn+6N2Ubn3aKAu5ASIlMtU8DSzQ/NXpQedfdO2ub19piur6Zn7+JrorozL2IQthTlaoGQa+pboxbHgEhJ3Wl+7UmywPvtqBT6+soiZor4dPfOp2tVXb1eX72luzIFXC+vpvtnwglCsIumaY8QRzUGqmcCQBwDCuaqbxLhx4fnbRs0qivVTNk0u9AUIgKpqZKk7en2CskZAbfZHlowktYD7ZeFWFPXaNawp1UwmnI07tT7/dn/0b+jbXRY/t0f/7kf+O5nVef7ZhgY3BIm5BRCaOE1FXVYjhWBEngYknGtarXrhEIiXDQDWQUXM8hWR4GxFF/SQsxbANpqdOsgBltb6qbnQqpFR/e0zhfCzwaNijVvqtYGNcyb+HjHASaAVUxybZC5gRpqBHDbLJAMrHPHnjJOp+12He/VFB7eq2bali6OaFuL5t8M40ztIKQrRBOd4dKz+vHuyJshktLvM4vW1GKb0eBNHHs4ISciDizYtI9pTasgyz6tW6676jNcq3PVuNI33Qf57nf+vt+VlqVtu/X2OMiVzTUkinXm/p5E6pbVbrqRv9SzD/26Ptbb0vUiYMY4NWBcKrPkq3y3XB+B0UjY3uY+9E3nLcUjr08uTi0m8XUXgKGSUoBes62reVsQrNR5ZMfr00fbNvd3z4+cdKULSZyNq6xXSUL1Mt+MeUb/0pvnVymbj+Pt1bfv3v1UmZdyVO0u/IUqkvhtfvIO2GO4PxgXQKAymS9qE71PtYHiw8bIKSOErRVSd6C5VTRTAq7gSGUvWbpM20AMQ9lN8n4XZAG63Z4Esv35/9k/uV1F6f6HP/3VL332dCCHMu87Z9MouIdZBhsBCM+v6dbH0fiRpJsYEwY4tpOKgtG9yn3cezzTh85c/vC4KywRmRxWUFGK+4yKgD3LwsliqhHoEpQXy9AN1BIY3swxCTfHnQafy5SWfrgLo1pnWv/S8sePw7ylVPuKjOmBt3l/DXe3legR07KcZhs3mqupC4NuWPgxIpov13A6q42Ge0jL2nKA5WE4FTNqzonxLUpFjuBSy9PrR+cCajKXSz2PvZHGU67zdjzc+W9fz7/xR3+teW+JeU5OqmwythmxSHJu2LaLIGnsjxhf+pz1adfrq67r4vjgQjDdDRTxW85Z1QBMELN0NiBVzSIOwV3Tbtu12Zu0PoXT827PGFn7hgOrU5epyB+HU+96fT2c7panV3fvfEbA8V52sQyWHa8U1w+3j74Zx7swniqLe77IZkuI5K7FGqeTzA0kP/xuUuwPxDf4E+vwEjFGSRZMPAkpDBAONgDoJpUUGFlaAIXV3gBoxflxmR+P4wBAFNytwTMmKESyDx3H4YEcqabFFAvKdojjmxLon5T5j+9+/O/+0o/8wDvrsnaAyrKdYFlw3+P7FSDEguxLXXbIlQ5H0X5dn6wZ1f+yKx2RlSz6yjAINi4YGyElwEOKCSXDfGFV63yJ2lHa1dZSN7A4zG2GdDomHFxpxsesdEIGpYGEi/xmQjhpXGoSg4ixv4DWadIczWlVYcQnOYucXzvZ0gM3ndWaa358tYwTM3knlawI85RkeVPvGIaSZq/o39d7OfrTqJP4aJRh3Lb9eN80nD1AEmDHjmCLblmR7Qrd2y7X6kKbt/3+LupgXvM0uG+n937n7/nt6/La+RMcO748Gp+0PA3TPbJjMTT3tHH6NA4vFmOmLLeLnto2x+ne9+c0vwr9pCq9HxS5qf2sadqetsZ3t9cfxOGu7Y71IsJF3ZZWus1ZOUCHFBd72U7P3ptvj00ubei9lvf5jQ5JHP1x0PMZlREGNehpm5cw9Nt8lUUSKExl/YhtHfwO80Vp9VQTTAAkRaMtHq03UO8krcVTy6+OcN/5+sprD+qoTenW7JKh9cOdi31UEdtoVugEVO54F6h+2+USgMZA97Y5oad1BXzbWsirEZEj4dMiP7X/p//Ab9KUWEgQ6ZRdBOGuxEyhdKibBgfMTXJS8qnjnfW9Oqp1ueoo3VMDIb2B7II36gbuvuAF4g4M6UtRkbHvxxB9I5kRMygStWCKI2nELt5LP74dJZmqzTGAxabGpVyC98aYOGyyXTZ5k9RdywKkg3h6m+UdNuu9Xq7DoK0lbFiNS+OdyyKuTujuixIayU0peQlhUFg0Z3zXn77+jZfvPEhRihBE3iL7do3juXV+FQMixCgLHbwWuy1ls+HGnd/CykQCbcoK875f12vXuL4P27YF7/ZDc2rIUXpl2L43sX/rNpfr3sdBl7gyMA+LQ21LakRgkrcnFtC7JgZ5E/SG2ylJskgWwDSotJacc386AxB3VeNSLOxRKpkDPUQg8UGV5xTjlhJmvGMR/rubPVnTBs36aiqNd0z3HJhH3vUDXOgFgklmeabg3JTrXCvpB55woCARUnc4P3RNl3Hjaj7OGdFfoes3MGLbW5uxqc94Oknmqys8hG5vBLE43+14/u2weiFbqJgjEXDHSUyFOo9TPm7yoWipFVrVqFFNZjNOU/tn/4d/aC8Kw9JT03ODvhpcul20aLEa4mgWwNUPQxY8Y425Kpzp/rn05iJzy/kgDAOpvllVWtfWlMJo/dONUkSPoMiamB2BeeChNapFjFu6ormLZsNqGPJ60xuF3n0I0oxBbfRmvD9jpLWGknpWTMeqp0YnjmWqR+Zi0V9BGiGaJm4WiilEbc4BBMmy08beKc2w3pXr2MfhZ79y+/7vfqayx/M7xXAc6jZjTiZkglpIhqfcUR8HT7ytjAGvoEarmSMasdO3p3rZURyQsCJPc/BL53tsm/y26m/PKI9D6NH7qS3hyJdrHeE0SysrjVH9CWwr0HCJPGEBq+/vp7OlYddUjqbgQhfokHKMg0WgC9FzHqrurGPVE7AnT37NSfzHNjN0RhVKFbzxbQP9FjiaRe+ZNF1q3p70mplqWt833oHOu5RV1nZG1cQnnIXOALIlnTyMGo7sB/WzRJhzPp7e/+bzdx8cUQNBaV1VN/+xe/jtBBt3DMSREHAKaqJP26Zmg5tIeNRwruJZdiCcRZ9Tg7Df+QPKhZd8VtHNUiSg7NzpazEcUlehhxU6pLuNaXY6eQsPWgS4c0SAVT+cfaeo4BapngcgJ5xHtk1qSVGUyqXwOEyERZOuk2Z6eK6ZPCsJeEdWgYyzoV/gpZPzVpbLIX4bVgpMG0xp4IPDNE9/3sxa5d2iwqOxFaZlWrJOaZLzKEN3vdptEZbS8VmmcwuU7gDzpXDYtldzeXYODkZdC1KUlwvOOtlUUMZ8IApyg4JlxPqNSWdne428ci2wQo+UtluHhAktbyfzbRdoBDFOTIumft7hH6qx4LYuAOt5h5oFoYg7+mNRkWvFQldQChKLrDG8K4zkSilVA2CtCXB3zYg6/eW9OQnIdIPaLKWtwsxTdI3U84ZlaU1ReMsJXeMaJiqGvhvsqMdSM0R3laBvuTBQWugPaQfJrzb/PFXwZonOnSzzVhkBiT4cNPVTNIEFZO1Ht1xfjxMshn5ycsRI9LUZ5T7wIOolOsOKJ4psZL5jnMqZhFYxb8Y1rmlh2Anv4E/8zi/hYSS5l8hhQWQjMwzUEtPct9vVC4ok6HU3jkIVtX4w7E0LcOm6b6sEfoDK23zVqiqp7AW/dcVEC4HaxYwnN1Mc9IhpR7rNRQBVquu8rpcyz81eyeJfPAW9SU5NwKT1rfba4qn1G/C/HsitQTJGbbwTwmzEyeao/XjuiL6jyAncgENrFwGrL/Q9r1MMikrnuiPbJR/Ev3q9PZzaynQszVcm3x4zCB19pSQUQv22XY+9Uj227Drc0rPsy3fwJTXHLXh2g1kUMdVpW40pINoSKP13jLzxyBoUVExyogoAQS4xTg9GTVUMc97QprV5vWImvLPhzG56R4MnV4XC32I+QpSOMPsUsCWrDpuu2Ix9OD/rnAjGFKME4nMCmh0gMUr64IjWE9OluB9Zg2rLGzw6MwjdFCdVaFe3tgJIANYfncLPbWorbkuW+7wdZyJc4KwjDRZUCMYz2gC9GJ8TJ8Dq4KXKyAOHOflqIdjwponrGlrqzRpOHa+wsHT9ymJtHR6eNdCCuyBe05sN8IOtHMDHUpO1pzSO1JT4bG3LJV0f07Y0R5HUtSiNfru+xNRSxF2KsKjuYRidi/Dkcb+jdSaketkur1FLubTc0vLUmVVq2xGPUwmiNxMobDK94xwHegr+gN5hB6oUKl1H4VH68SRiLi58y+3qlFNz5r7T6jLvk6E/d4yf5Z6Zsjnryx/XOM9ktQIi1+7Yt23d8b0yPk/fn5TiP47f/Oaru6HCkDPv9B6y4eqY4pnLg4qWMFBZYcZEM3RwTtQ9dRj2a2yC9qcsN6cnIMZiptko602M1KoMXalG2yP4nrWyBq8XvJO4bDFKpJjJ7L/Jq/ZAFT2pCF7vpZeoBRctZwispvWcjsZKshFxHIaAaalNu3FkQFHf6sPDZV4ddh5WYctmAqYROuZFVi55k1Ydm+W8rRR1Wvjr9WXb2Y4KOg46/X2tbSWOTPNZ4e81PCfJHSGT729xRE5Phh0llnlq3NPLj6bJnPYayq1eC7cfNCQBkBZxhhmfGe049eynQC581zH/G6eE+7fJ6g9yHFetGSc9QMP43YfJe58E4ZmFJVL/VpbZegGYREBcSy6OdVt5tbk/PaTrq5qLeCaVABICXzGCLHGYltujD4N8dteli4OOEbhv7cFCZz7ZwfYxQo7YGr3iE+XyFbyFHjtSWYd+ImZHebRkcTUeXy2OZFo/6quat348r1uCoESbJ37LJl9HJcarjy9UAmm99MPZS/Cx+P5M/qFOSOsTSB3eXFP+8c99+ENf+mSD4rHkW9epMONqZSQGimfYhdxK8mab2VDOGHtLejOinAB4xmH4YZmvpcHdB7H7u2RKKKq3TZI081LGAEqIoTnWmPLLqJSsztW8KM2v02YyLWU6X3YMAS0LvpRQANULUTcGi9mLMBeN4n8YTXKvxiiWBbI48JWAcWEo2kyMBS0PoaU6si9l2TDmjmxhUo2tB21dTQNir78XwXDPiBBsjfhnujdhGkKfwb/74b5z7nK5fftrXz7FNoz9zufxfB0MmrzF+sNK8yDaualVPuQ4MRqlRY6/tDECXvm+k4ixcgUQoeWf+y//ZjWZ8SRgYNuM+aOhKaNm2SBfX4sUBOA+nO6jko3XpiEhgrwgu9Y1qjx2k95oaAdTeeNgRvdVOlnRTWWbcxYG32nS4eq2SCar7yCGk5gIwhhySyGoS5m0dzExy4bpjS+pKBQIerOxozNXZ33Ls68IXHyF+FmwDNrrhra6CSJHYE6M75DmazlXukyuA1tb5vOs46ZWCXH+3k9+8we/9Lw93iY8Q5tTKodwIUY1+tyCYvDiZ6BTdIsW10X5+5mSPQ42Tg9KV9gIAqRHylrEehk8op0odv0R11HZk0/Vjx0UfAF5eBMF2gObIYr9a+ocdbFMJpB7YUy98xC7o5h/ujyIOAZbrJBWU7eCu2vFm8LbIGDdbJxPy3Lr+1GrXC7qrCSUckxkY0qiW+LnnLR9oM9Q5GumuW0rxg06ngVYE2WA+tE1WE5ZfK1uA0xdVWsx8xLmwZ0xb/s3f+kX3nlQySD1GV9zGO/NaD4X0ufl52fNlgyw+nHSpUp2ERBDUarSbjzMHcaEKhHlnhzV/dE3mmDIQy1lGcQZsf/UiR6VyCpL7+je8AHVUSX5dtgOM1N5y3RMis8vkqvm5B3HAv4C6pI1cDl60qEJfUFwjEdZ1+LsyOYhyF+W0XbWtmIBC9u2pEoP5dBsgeniEsnsmFwzQzDPtsaJAa/yFKq9JzQJP00CJjAlBHFiiJtF7MFfulnnR0y++hWOtEhIDDpqTa8u5Q0MKkBNco0tyNH7EFqFv51KMNYW+lTc5M0XtoDV257wcKotSkiY0MIDtJwnfSVSzNRkiYtWIMyB6uHdNFqxBBECQr3qNC9nHuzTSi7f6fY8egPhFGzORO4d1YduKH4bv6APYhNDTeICZCfadxKxOMUPuhk3jSe77vCjHszNymaFMvzDJLOBDtNCbNJMHYUOBxOLB84dBSGdBCvNhjYsfeAE+dcPusdBoirWdETDt5fHj6JzLan46pWliLyJ2QXJZrk9lSKCY1pvOc01beQbdKoky6o+Lq2CDSRgudUKvRKKmvU8coXIaeF6dTwjSHOch8wUD3vBy9NHqgLF+nJmtiNsVYkRaAJJyjhUIj3k9WZvS+S5tu1jzEj0acw8BAo9MODY2ghRbUEFMZQmiEkVpNcGW5EjcR43db019Igw0khfwzrdPow1Hhi2iaSkjsrK01L6flD9B5FaBxX1A/kVOHwBRxS0GrUp3FsO76oCwTU0R/0HP/m1H/jeFzbc3ckziUhk9PkPK6ttMngYR8Okq4actGbmI5hFS5MjsjXDQ9vDEH1aYbsfe2F0mt0slj3BOqvwT+VJIb8ZVLxJhnZia5rrsCMwC57bYJJOCoPWS8j71pYP0orH9bYTxioFnAwD4PbsCJoLeT9nk8IpiurtKoy2MCws0Gmq4zqKJdo8lcwEGmjU2PJXQ80XdIv7WVKisAk8vP5vTRGYOKHHtlheakhQo5y2YRw68WuE4z/dtlfvf+08BbXDR+1YJ1hZOhp6IeM6wqzA90FHeeehjAmaV1QL8hd6lAMyqRZgHCa84737Z37jpxrsAMzJ2TyZqZDE/dxZoKGXlE74gNckCDuwEUujqtfZ98pQQY2/awzs1HbXhHda+vAbX5eaxIkBmst2UHEut8fpdNePdzmtkF5EYQM23qve0GFO7do889XCBhnsCUdT9KJyeXPnxcLQBABC2G76MQ5q/ZGaRBjE2UTQL14P2+1qAHTTKI2GeHlpVQnrFbfxdP8eOdy3o1RhWVkCy8eleXEvxSDnNaMmm9VziQTiWW33Nrt8EQ9e5p43KSjYioyfeazSNN/tu+pUmCBlXS7NfkCB1qHAbFvR4rqpu0YJhzxkC9PriAdtjh3a/ERu9tiPk3hQJIFzrjdor5uOE3JZJJA1VuK6CmTU9chFQp6iG04PAXl4YEQqHPHjRsX+4YBYhh1y6+XDUwLGRFW/CoDP5dib4SRz3P3YSUPSfzb6sLyoYDcQvhR2yClQQlWCEnUcBaEyr7HiTBsJWw0Q7W65PvYxBt8RpMJxqxVbFSKWluvlUVzxbbN2XGUc8zgJRiitLdVpx7OVuGLobttilrXtv/Lf/l2rjEvV8tdcTs/eAWRNLWyQIvBQrVKM4zZfGmBI+iEtPna80cyOQbzZ2WY0ok9jv9gPg7jjYfCqCDoHKJR0riO6tzkRpH/WbvXKqKqR2EnLsDVHUZEBu6gK6tg9tG9TLTvo43La95pR4FeXzT7b6NZwx/WRdJvJO4gD0qFFlo19InwltBTu2zyX5bUbZKaSRTsLsyLf8pe/kb/03c/URchawrJJAtm9tLPHjlV/0uvPaW/sDQZpwwkzNoja4t2pxxqrRDo+oYXsdq3mgxb112E1ZcFqrTc9vg4m/qzVNlbx6RLO1MSm2FS6I0F09ANdKrmhnQNP1K3IrIn6xqsQ3tabpQqoRqLKUmfFz28J9upCz2pG1lo2onQKYhrGRAAue2NnpVQ+xp40NYLq3kP6B1KnSCWm9C/rbAnysZ/UNrjASxT5VAccqVz7YUoaCeUer+XV+1+9O3XSeyAqcm0gjvs7Uf5Nwn2D3P/StiFvN2WtVnzzG2Pmxqhs1hz7nkGvyxr+7NOzd9w/9Rs+Ic5wSi3stESWmA4rmNfeh+3xNVVNBtjWj9I4Rq1b0MJqqeI9xjgSbgseBtXeTK8obGe7rSnXbSlplZ41uLyuCS9OjSTwDQeGj9Z52yNQUSEiQG+1I+rfOExnKG5tx2fbAStIuRsF4bGe0nZh2rebalb0JAYlhvtTlPbGShfQiTfQenlNV+Tafuyk8b9p6FYWisLm5SU9jG9zVgYRXZkcteqGzX8GGnYANmv7od9pEhu8QVk72Y4JC187UEWokoQqKYovJJkiLREgmUzDdKWYNE+cJRX6GHsw0bO5KQ6KjUl5DvqTTRI2tlADi5A7gZxJbNgk7TczBOD05UpIeGfVPN9FF6I+Hngzamw7nbKm1xSHMmJJGyUToEFnzO31sCxB7MMONUIH7leOdSS/Ey5oZBbc9lJTaK7hOVEdjTsTYvhPw3Qntto6W5LXq48+7GNLW3zQZcFHxmhD/9oFYpQgTmu7lg5j7VpWFoSeNgWqwOKDNqwAkJBm07xpgr+rgYMQYq/DpguEs7YUhYLe4/nko6a8CKJ7LDJpYEJQnaOcFZJrCYoSt1euW3KNF/wEl+HAHVY3A0TcFhKsbAu6iJkN6rjQK5KVWFwwWd0tRhPg2IvGKAQw7lSLwhW1sPJ1ue1cDpamptIBlFC3ehx54blTPT9QR4FT0bblvFLwrHIY5mCz2oliFBAVntm3P1qenVr2XNyY0aiVEl5egTWDedToqDM3VVULjm/BZIAv2cpbdgRz7xvCo/U7IbSYb27XamVQHmQN2kSdSvweb8mNCvFuu2E6GTcRxq6WGhtMr4OGWLc71mi3QUYBDmoqGkLDBho1GJwOCvrF2HSBJEwNyGHcDyNEy5HzBSxG6GRmGIdBfBigRejLWu/lwfQ0YgPixGBX/FPzKOhgVMvpMapjtl5YEkej85EKfDCuop/C99PHlr1Xm7CXdB77KHBTj7ofJwCxXfJAcpBkGb9J9m4xa+oMd9jvso49HCsEsFG4Sk3Ktrk9vVTQYIhvBmE/8JYXE6ON5To9lDVoUhM67LM8LQbxVwlevtdK2VZBtp7GHz863dvUi5wqRU+qn4BBCaauhSInmiVWa7QCQJOGaX9LaW3WI3R+u9RJhOvQ17oOoRnTdf06VFBQEAc1KLuxYQXCwn0lIX2dL7ybhpHcxj2cmCtzr6u0G2zi04A/SsDADMB11IQ62t37H14exuoJXFC/ui4MxDRX7nRuOVsGCJFkwL0JexFucXDIVfYrVIiqmToxmgZgNziJWlwXpqV6BFgK6Jv6GCgC5damS5XQRK2JtGqvci+6TvwpvW9WoeczEKbUawZGIE214xnzYBLydlIZB5KjdG/vTSXxbtsZlgoeMkyRQBSF+GtDBKxlQAKYN1PUcQcwQGANuMAkG5FUMRV/y5+FWaxWa56vR9ZwgzXVgpYOeZ3tKNT+3PTP+9tyaC31uDy9dl09ZFd7CcFZAPvH6VL4UkaNxzG3q7yFLg5qzMxj4mhlH1+UHjsq+0/6+iOOJ48uuf3n/6s/dqhoEZcYb91wUCfusPxQhevsderfieOlncK8DaBDgtU0DKdUMgQpJ/fdpEtTIAZkv+V6bVVnM7NlACHLNx7ZKpays94LjSzwPzbbRthSNQlMDb+y9cEIWAEmztI1eitcTUEmNmm1lhHVgbJ9CJAT9mzoRIg6QhjPMtmRDI8Gsdt1YHys6lC4Rgzy/6ii/v3sly9vUCCWeGiRuDcoLLk0dJGQTW+MnRknv6ZUBrZpDr0scYjd9piudWY4KUaNuLuxHrXd90ZZXS6TpqN1SZOKbFIiByB8QI/GCk449BxOkvV0TR8nXOoZcGCknFeFC4GtQIoEz+hiH7FjgchUhGsxayM8YbBJKtbFBHtUna+oIBZ02wYl+/2oXEqZ9slLPsEdJyhCc8AUsWs2JgjVdNqZb2pAOk6HHlfciwjYgFErAIQoDS29h9NFpyKm0clRl9J+9ad/8sWzXt8Ww7XpdIdIplhwgeA1WO6BHD5uD6WqQh0NNi5sUcVvt0chOuTPNkwnpQf45/4rvzldL3aoxjity5OTwV7YUJoafMHgE37SMFDwVNy3h63U0bqKtoU/rKvc3AL3zomVyZO0SEoDoY2o6D72s+b2UMXKmP0wMg9iiBZaBJRuw/KZmBwW0FL0DhITCSrwBqS8HuRqCVVozA3Pmgfdk4UmlXpAFibUMDomyVCqoiwDd4D+FxqmTeuDM++nfuHVF7/rdJQs956np/PdfX9+rgkGZh7M1LaO4UAA62yaHRdUecczWHUAPNYI6Je1wbSqKp1cjGowLIxyV1Pb8ldbKKtBH86a1GNH1jwq0+B2UTxhF9DWUZKDJ9Ocd0frqwo80dTJCTUuRk8LXmjKPdYfGEIeugrSLN6ok95yPfQbtAoxpwlYvCgHpgMCw8LE25YI6k3FB0kZhQYMF3NY2dFwh9BLy+JcWoUfkJsVnTdcSw/ETFkC0pYdr4PXH77/8Ox5raoh19p95Wd/5p1nOG5T5ikakHEH+10jDEAR33RHui1xiAaKO04N2SMrf9+pua9NHNRnWhugt++8+6d+7Qtco82nLIk31nYzqL8gdqIYG8SBTHZnaY2p4JU30Z/mxw/JEpYyzmYIHKNVOLpNXRBs2jCcW7Xa1FBQ/TaLWIHLrCY4acW0CMgSk3EEAKHtgBpAAL13t8fX/dCXslvV6/V2W455myRs9FqG9pqoRFCSQpiPHMOwi0Ar9YXKd96QRgEq2ZPle5a8EnPCf9CGaV9f9/fePce+V108jFpJ7ZFwIcdpyx9lc2qd7pbl8Xz3Qo1Wf+7P513Uic0PE05Y4tvx3GNDIAueAF4T8ZrhuOjzA7pb76iSBtulhJ4VcwDoaBYKFsbJIFFpTUKwlCoVDetFCfh5PfQ2733fd9awFWn519vrkgs9hIB9ZQWQQJNzGjWpLAW/TvvboUB7szQUsz/NruvNXJVaIVohRPer+Xnfn8w1HkqvV1I6FGszC3rD9g3DKF3VMGzzVZuNBpp7RuVaKVUsS4VV3lE8D7r2m+79b37QwbD1TjpsMeNpwgGfA+ckPoV2J8IC10VazOt31Dhc31bTz2XZZCdTeHHCLUr7z/1Xf4s8pluNSI4KcaBp+um8YbSvsTDWZ6UeYRiD6McZALWugsnX4XTvw7Q3xbtoYvnKbNxBOdY7Zj903swuaWGxgiNalAljUR9vbvFvT31V/AED6wNmeey4Loy0qCdOEgQXC5kaGDqYupT8cmeI7XR+xv0gea5yX5pOdvXMzNFWl7qnGCd90xhlE4ljVmsxWM6JkcHc9ee+uvzA977jmLkA25ZdAr9pu10C9rp7lmmXysiUG+8tV7xQYsn2Yrlhn7Ef8AgEfajaUZe11wZZST1yMnzK9E0U2ZIyWWw33wKWqRhvOqFVBcOPVUtG7kNnprwIfMm2TNg+y5pK39qMXcl9iP2UJDENPP/d6YAHpcV/tCOcjCmwfsERhq3USPz98WCbzHfkvj2ZRQ2+ifpS/ajq3IjoUN4P/ZBBg2EEXFCSoMpikiAOLN6PDWEOTPH3OE7oKHSR3m7LV3/+57F+bUgYqH3o+tiWchBIHbj+QSCs4mILsW8LV5QOtRCVjrHBu1HtY4VDJxep9v/9n/t1MHuLJPasDm5JFhPQQRjvDhGnuuV26U/3BFioJahZHCy81pyVj0FOetWJsDtiL67BBBUUaNsBmZFOg0cspLEFVQBukdOqqjbsvHHTV7fAun57Thy0pFwph0oXsVNUAKSsSCz+Eqsba4wDMN+i9CiUZr4XhdNiBWz0bLUTdTb3FGdIoeDG+Ws36XSp5Re/evvSFx4U+8fnb/jM2iQSiB4W0SuWtfww1ipThiGOJzmYb7OM2tNmuWnYAy6hG8uxqe13XRXu3ne0C52WV4Pkn3AaYi/MvLG+VdbwtwCVHK0lGI7bLNG2aazNsIjkJTkEk7M7ZASBMJT55BqmSih5MK0wL9TKXL9sqZRlT1lvp9Mx5MwUUBLhAma794MENCgMS0ulxw/vOOML6ciJJKjqmGGVNNMciX4bNTEM+nwyfGZ8oA2cYXy97bvV4FHNOpqcZt/nfHz5Z376+b0XKAehlMtLf2Yc+mVZ+z5iS2PFsMqzcTztyLi93DpuJSXhquQik2XmaFH2Zt/86bn7Y7/tCwzhW/lI6qi8uCCWOUQP+T7l9XYcGot2zHE0TtuF36fbxQ+y8jLLa3IAsnknLaucmddlbj9OumUzFyFfltmNJ6gabuJNuUkFnTFLBtx+ezuzN5uPVxgAOPimb40925kNxg4am+zvkpjDBTMP1PxS+BJdB5SvEEdGeEK64IEm77FWbfQB4HeP+P3jpIDW6dVT+sQnnochKnumwz0KM35Ou7TN8iLfG0SlSJYJLFuOXT09ApSqfB5QRd+Pre9kK1Yl0xG8q8Tfc6TzU7vW0SXn1GpR3q3LDUKoyLAO/VoIgcrQSzBxvUgEw3Bt3dbW6M0yqzsHrwIXr87B970F6DadH88PO/O5Vux2jcALpuHr7aKhIVMINvIaFbandIycNqxETlYnY/9MyqUWnqbRZZ1JyFQN1o9SXYa+x5dJRm6wEgVLoECQ2lgnfc0NJ5qoO8jqRW7nSNWM3IW254erDN4fP3rfulDvTd3ljnbvGnebtVty3s2xmAy7OoyT7kH0ypQPkxfY2OLJED5WVplHU5bp8f/9P/H9lrfSYHTGnLXXgkNBogB0BLMNElMd/DtmJybko0Y0vGw43S/z69D5A0BLNB0XiyrRre5iwpW0QMiCkoeQisQxRWh2R1cBRrs4GF/FdQoUKuutoRNPErC7Dq8PHEsRgyPDp6+somYwB8B+pzOtsFyTVFo0RuVVkyziZE/ldUjWXaVBVnvj1TIKkC5ZLyAoTlnn2bH7zv+jn/3wl/3gJ1g3vqk6gHmAR1DslAzcsRxUNWOWYnZFWBhUQqXen+8UrtF6OnVOYx2Mo8prFwTSQ/UBctBmNqiNmKad4RiW3TpU23zspqJtAOG9TsqAbb1uKz1bp3HA4aJj0KxhLVpnDM3mQ1jQCC5E99UQYaMJ6+za0OgV0MvJgWvzMsrdiZ70zZ6jIskI6IW7BWheEW0bZt3Z9iC80bgnsaGle3z5/jCMZqb/Fv8jyEh+WHKqXP10akFZuuYQCl+20J8lzo7D4+X6/pd/VjLx4IZe1oDrUlUhNGXsQwgu1yNED4CpbcAUsqNS6yyC7PL0chxPcTgf+359eumYvJEzG8uxt/+Tf/L7VUGGYcu5l3QSJzpaMebq2SE0NuReX4yvRCpKL9+OIagaowRSL1WPPvgKxi4IrQ1oTGllBTu4TYNJIvJZp7WaQre2nNAOrN21DlmtoSDtMA3f+tbr8XRqzZ2EUVqSGL9vG0nGNA7vIw6ZrK5D61jYtobKqqNaNK/qm6Mgc5I0t6CdJZBnXVPbVLar0Hp5PCgTTJiMZeKvqbk7DbCgm60c8tLa1pxZCly7sqwc+mWrUBaFAxYjI2SjKOO1nyR6Hk5DL0W/3oHvyrpigK5KAAc1Heu1j13d1dzrszdicW1bjRqyMcJ0h4fm0xG4LTsZ36Wyn3pfKQ6LauwyjcNtMW9TfBDbFGXeoXD2zEmkBlz5Ghn2jWJ6iuUuJw2bx1HscZu1xujff//l+Xx/tId5xuhVu32IY9Gt7kptevxWttKk+TYMGPbjYRx1siyysmg76rO2j54yWOthXamQJXc6vMWPcARkoR1911UGxu760Tf7YfAeyp3QaoCDoqZRmWil8sOoRFp9GHOc3sHuczkarYShcBQuawq+g1cfWvLG2r/0v/inKjGdw6gYFZgzA0CesQwUZlFL5aQ/HC6zsgZaLhzJYdebixvPlBRhQmppmB5ffqtrGwmXEAVFxXcObePSct0pOtdFBk8lrU7TMQ2xMf5WGwrfZtjzXHJ5ePeTf/Ev/Zu/5Td8qabSxiBEkYoopcV3OlNtHun8d3xZcovJMEgfdQ/LMUvneeqCV6Mg0ognLKNQdCaYWBIh4ikZsPc4zFP62IERuia0ftfmWSNiK31U+NIH1jvGSFdAECm5OJ9G1WO0aEcX1A0HV3NGxD9g4gCZlJJPxYda/yKpZ4xm6WZOdVaPwfFUy9hYdg4Ycq2StOOeG+uuLCMtprYRjOBlz9js2ZvK3o2HB4sW86qxInk3q80GqiaF6I7fKCV+29BV9NPpH/7df/iZd2Ir/9172FD49X7sQyjnxtbpwO9D2db1+gjreD2gRaukFJ9SXr8o+VLT6bbO2yp6pQq/ne5WNiLoWjWdF2Aw3vfEz2iZdl60RbnsDAIDuGGwo3UIgjVUrSqJW0Xo5Wz8IhSSLdhJL4RzOKtsQc7Byav96P707/0ReXvKy9cuYs0It2UBY+g179BiOmjFWqgvLilqUwM2GbSHSPLhnZhYnciJLoy1FHrQ3E8PacMlHMT39vqlCCqE9GcM8+fHl0Lo9maX79KTV4etNKjb06sQx6QBzdi57itf+dZnPv0C8W3Bvk8NWV43kxTuzRHEIxIau6ZV1qBJc+i0iAiuqDzGujQX5Bos14OvDz+5xXVQhFV56nuXVk1Pt+Uqk7ZGcCfN2ZpEX5pT2o6Sl2XZYWEDCh3bfGuO43Z7yluGWa1mLqW3qSTbfM0pmSVoKUZMZhK1bWmet3UVAK3pHtLHnNd1YXC0FXm1zPq62p8ih5PHurTSDviiq28QgCAzU2H/JTHc6MJ8u+wlY0B2YBPSFYmdlrJtzO8b/eycK1pQvGj1ZOZ5PhhxNoeWmmT4Wowlxulb3/zgfNeHflrnZduyJpibLrdtTbUe23Irtd6ePlpvt5pLPD8Xw4LeQq6tcqRctnURCga/WlNiLfq4LtdStPEkeEP2KSeveNIudRLs1qyTN9dykEULnWyTBdOuJ8wqqtvy2Fbc4dGab/O85+32pJkXuEtyYRAiui4prWXN2/xYQAskDzgO94d/7Itdg167qSh3OpSUGOajKbZYBG1NXNaFIEaz5VHeNZ25WKkqnI4i+Q2ejCGa9Wfqz/edH4zcKOJHiNv1NQ67smgc7p+LrkxrG0736nHkeaZsqZoT2oU0TPe/8OVvvXMPzijJ/WpwwcFQ1ujgxpaxHKiOWY/FBvJrF0GBVozSLIvkGIdNcZlyCa5pw1Ss0zQau0lzm9JF23I0YGYqUz4dFZPOs2E0rl7XGjcW6rEZQu04+NKmW0YOJV8vQwqIQeYFYZZ4RL9oOIU9j1crfpTx9MzCHZSO03ZBPZ9r4JCBkwZdVZadRowVpKDC7ddxvRBDj7GcjUS2dPOdM6UR7qKC42wqB1NQMVCoDcMmqnkHzanAttghZ+bH10/35zFnwbs9GCWJ7fiD4Fq5i6C+tDC206yk6xDH/vQwjJPuWKxTYMIPx9ExdfUkTFfUL7d6NIN8np+pySzyxKa2FButpFWDP00PK8PaHge+TS3ilsR3ir2NvSqbw3kTfgRqVLHOACoPo65g+jSqAshrbYhU+w/8O36l9npNx95mCJtZ6c2JLtPyeAHg+x4eRIVToGqTRtOW1ox0w+WinkZ/CKTn7uFd5azfLmW5tSwgaKg3OSoF37m43V7fXn3QiD5BYM4urltrXFTLwcbgsub81a+//Nwnpw2DRDOJBw4qjQGj3OMqbcnmMPu6BktqRAtFYsgQ5InHfLzdj7TeVK64DvJw0rbXs57ZL0cLL8jMMdE6qXEraTYTxa5lN1uwTyvvRChxDk2g7N53xsyWVagzG0P5jk2CfEeDOKo+Z/mqrQvQxWTKiedhsv/UHrIc1bhKTYJ5hEn3CxqT20PT94IE2Sw4G9qdtK0lZ8QhkH4Psk4sKcdMSzGmh5Io/jNJrAczJEUNiA7VT8iL9Xgl2OhP73/w6v5+it4XFobUSOiGEQVkZUhqvC5TnH0TxXqTimMDTZK2sz+/42gCLy9feadKt4HvqKx5RSed6zpr3hd6YFOpBolD3aPC6AVl+jhghb03NKm2iIfTacdGVoUk9yfZ/RKs0eFE2gad2LorlkUedZ2d7YdhVpLS/6v//T/Q1CxYBn63xKMx7LlwgGkxMj9pXCc4CDwuSb5Qyzg9ZPi0aVuhQOncNdyN9ddty6vh9OAbZSQ22Mf2YexCwKBhSfDPTNIahvu8XdGoYWQGxUNNwu2StvV0f/dX/sZP/5Zf991tGMt21YHdNho1gJLqfKUdbPlugCgyxONO8DggnGRJ11HUM3FET9ikvHiRMsmDMjQEvg1mCglYqWlQe/TxVLUa+F38kt4CKEEXcceZhoixs1wZxhfaEjKFVjyCDUSNO81mW4NY5TKbSevqWktc1B+MYSTn3QR0nYHrht9jMjCo/YSvHJyJ91XetKin+Af9N4VTADwTd6JfgrCRw1sUtgMtBWvXwWladqNeGFuJdLLdDSdPbM9P/uQvfPaTJ+9CkBNH0kSpdR5/wgo1howrj/+x+GeWBH559b7SQ9p2mu42xf238XTfuiC6kWjzuS6LDBqYXVpAuv3+6+tvCyoe7uuRBManzdJpPUuLf3Whl4hnWcV9kBvuPHeKJ20KsxeQYrUN6+0yTneq69rDGMeIxZwp6EN/fuMM9wcL2rxaJQnp4mAKN4jpBKQ26rtFJJT1A2NYFKhmuUwAVlhzGvoe83vdrf14ls6d2Aw8s3RG7uv8+OpbcToPwx1XPJmkeiuy45QRS1oOnYAB2veu9QiDqJ/GP/vn/s6P/fovZhpW7p5ioYIGdWFcI2U9G3gP0WkK6MIOHkfgsYAjOInquRWzJRVob8w5jhz38QIlJwmWIpmkXQud2+zPbH7ZNtjfuo7yQwsh50UZGetN6pO6xxgYWwFetlDdfLuuqwWZ4jSovxI9PerBEFudGDwRPCSk+yGCF46q2zZzicqWoqD8AReN0O74VJb/jVktRoeafbpt1U5IeYbpY4EOqlr1B0kiUxzOd3BbPCN0mmLFb5xcPTe8iX7qJ3/u0+/0xuvUrTwqNm+9vNr3pp/EwxuHaV0Y9CIPD6oXJGNX/Ax7cpuf+vEsnA7XD5v/OK8u39FMm5pAynKVgdt4frbOj2ld+umuQwq7XC/NLpt/h2EWRLgGfUNXS3IYjljsiBQwcn3rMlRTWBooO0rSjdR1e6txzfz0ajw/d3/6d/+w3ZsuRA+aboR1LNsgn3xMHhTleM+t8+Pds6PpOEeF9pQ9eytS5fGmrbnNNwjouaRFhxY1WTKtlswehQl17i27azo/hIjLA/TAFrN/eZrON81KyAz72tc/+u7PvwcAJ5AOgNm30N8Z06syiNgNcCfqGfJfZUnALKsHN7DUjE6fwK44WFPmjYMN8NvAPCtyQhiAb/G8wRlK8aygJYo5stAa36W8OQywAniA5ZpxNguDX+cnmaeXXYA9VZ1RpOw2YF16aUdFZ8iWQX+Utal6mSqfqIAdyKlz0SuQcBSO0ZtiwVwk9Ms8k8GhjGYW1GnU1LVGMQrwI+gKVCKiMzaKyncqKBEzBA6S8p3xIheppp+mD15e3n1+1gBYP2NBClem+3f7Ybi+ejWMp5KLgzRvnsz7Tpmmq+IS+9OuDTk6xiYNLVEHdRW0J2mWl9L18sFOMzZMd71iONZ+ukchmPXBNWvz/Xg68LjGPNiRmjP7YYj9BI4sobAZDarB61oZgKoTRAZAYdpiUwdEW6UH6Mc3GWE/jAQTrN69LVs9/hk1JziVir+RzxEVCy3v7OTNO6P+hpROhBOOWlhz59XT7cXTgx2r8/UpyjU7adoqxBAuEFTnXd/n6IfTMN2ltAZSpWQL148y2GDi+LM//43Pfeqe9CF8p8mbgPlASY39qqwESiJbYNtz4d37g5EzLxum5y6YxXwt2QB7R3iQiBhpyUnzb6TpLUU8QWmW3a2omHk4nyUMYjtt25bWJysn9qriJMM+cD7AaHeV5aszRf5cg0VbdE1LTwajgpQwOCke5mwLKHR1/STjOhHOooaA8xVE1MNqQmIm4rHFvSV7Di3qeHNeEHdQbcYmAQZcq1KsUN6NTrtzMCGZKDULKDMbfmYvThav61VnOTWhztq9fPuDx8nL2m1Q2aNdqv+va7a0jXcPPob19kpNp6VrOnlm2hzax7guF4dSDxesbTjfq+ePw3x5NY5jWteacpimu/t3S55Na7FvG57BOfT9/fNPh2Hy4xT7U1rnWhfvBMjm+fEwT9hSjK5W8fcs5KR4Di9hTSjvgEY0l4qTukdTfWEZNLb/6n/v9xfEY14iawUt6Xc7j2YeoyVsDjhxm+XyOJzOmiDCgc7bhhmB6APKD2S03oYhapIqt7BlfpLmx0VjiWjbwcnpQpRuyOFNgDCgpI3SRp2Q3dFaPXiSTef7v/hX/uGP/prPtm7IRf6HaLQj8HxT1sUP486R2R5VBdWA1gG0vOsaWW9TSbfUuyaGwNavO0hfmS+vfT/w1II6zkEwLqPE1mRKNEyOwGqZWcmzDOLEWxMNuNatZA+XfhgoDm34iiUMW9MmEq0TMH+6e6b71nyeGxGZ+uGuJerGaDa72IS1Pdoi+K+6Ru5MwOQCGGy3qALcLZaTYjVvWgzDqWv1OU37meabWcMay7VtYVupfjiQWcviRX7RGmvGVt3sJj2GC1bTY9i493Fs2uOnfvaXPveJM7jQcb6/qyJm9uvyBM9n0GYIsaH3vV0eH569SOu670X1z77THk/pdt3FxQ+d76MIlIqb//bXf+GdT32hcZ2S7o8cRlk+DsN5WS/e9ezS3aIaxvG+dd1wepbF4S0K54TNjoHpguVm3DEfYCtX5CvNW7vFGBGcC2CFAx+KBUd0EAX+7P/gDx7HjugxskQ2KNrOwhB50LowNa0r2WyQ4cHP6tC5pqFt6rhs2yD20PxYyjGO510nHFxORtVtGBpwg1b/0i7z7cAKBgrhyWy10YyGvFx1MI8TI5EU+v6v/vV//KO/4XsPlea5qak2h6N0p9jRJ4uezE33HT8wjlvE2s4F6ntcjGBxecy/EPVZMqqVJFbTUwcbFQ/QBvfMwBLUKrdkLgGOYPlM07YovmDBQwFjEkQFBm3mLbugtpJ2NsCqx9HfRYWqbRsbRvOkZb1KvpMrYhe9sm2xEOzORsWw3KztoYiy1tWG/4jakINp+MSXsg6BTUV8iScgkIAwCcogO2IXJbiKqa3s4sQxJvH/IH7dkfrV/YO//9Pf+/l3ujBoVxzNm+lNiM6kCPRUY9MwyEUJuYsvdtuWSyMp7Dn2cblc2rYZ7x64Nq/DcGq8H+9e+NZdLy+btp3unmfN10S7aH2/Z3n4nJ5/ar296lwYxbK5UM8054f35BkTQoPXcuVoQ9ffLNsSROY91vXmWjSceGBpYQAMInlf5G84TF2UX2qc7tx/6N/1G+A/iomRjNe174ChWnnr/FTThgd4tfBps6yCg3Dj5u1EplWZJtu6nRn+ME5trxSDXReLcMxaswGmyhi8PFVRR4ey3dJyNafboyKlr8ebeUpHMjfrKYY4vfn1cz//1c+8O1pnZt7OBlNqfsWvpjFuo8TjtFbg5HQDjB/tEVADQOjjJwh7oUI0wrHKW3LvZCgEFz8Y2GeMV8nNqrF0jL/gLMcJFAMk3pIFVZ80xr3b8DZd5hvk1kpoUH9UMSyyPoY4wObn3yIIN1SA8mmrOfP5AeMZoOJYOZj1LTTFpG9ICh0GMB0FDl8QT0+E8F0BugUANan8Tj8MvE1X29AjapPrFyApPqD0Q9Bjm+bb77+8n6glOJLqelOkNvIP5sX6hKaO1MNdFesbhzMIxOKwtTNufOjH/vQsrVcdXiVLNnH3rOvH7XbRM4/jfLsE5Vpf43DunEhosrk/3Te1+PGOQEiBGcRr3NbHD3YYWtp1rSp+SnJpu/tpOiDyCC4bRtJS1rbuw/lUZHeiQ1Y/mR7gh4Tc0c+J4QSVRa5VinUW6TabIb147bMACrxr9IenU4cNvg+TMs+GibS31fyo1Utsi6NaaHitavKQJoWhb0QzyGE8dTGG4TzeP+/HuzDcdc6fHp53frT01eXyUq+zPb78lfc/826/EScK8VXKRBWVnNnmW1/l+SwxnrnWYWrJujKTPe9aRHDqiX2A+Ek8G9plxIG4XVIDvHUU9Vr0dPueEYcoR1Ck2hApJOyTqNnfnBm54W8DA/RY0zVE8UYb41uTIbunNZtN557rx1ak8kotq7jZtCY8qAF3oKEBSTJT68bucXLFzfgp6PsGM6KzIC3YGR3Aq5P3P7sxeE+GvoBasxBFhM2zEl0qeSjCRYDmHoIMjgwL2JaLMGXvHm/7Oy/ufehNrGlKK4EwUWwi7Ul0aghxcDrRbCe+sRJ8/OBrmq9jKNBoCr8Is5zum5pRaaciFlDb3z2L470Wa9fsCvJUEZvX+fzsveY4ltvTdL5v9n26e9hrffrwq1xBgx/PYTw5BlYC6ODxgw3KPJ3BK4UArrU7h+ByvdRtDuNdWm+CcPqT+5O/+wdbxIbYANa63fa3ommlZ0tfjEfAcnuM52e6Q7vmUBe7Fwxxj7IFZevOe1m3bSEZXEthXcSn3VMWvzr2cTw3wp4mP+hn6oET3aXpkurFY52f8nz1MaTbNcs+eizrVWaQ0/14evjpn/rFT77oDY8qSHJFrQuDVSy4wzoQFU1qsKyqwAVxR2HIuVxEsMHwFWdZQfc6FbhTzBqEPrJC3GXMnrJ5k+xEHZvCDLAgrJqjwbRk4tviBMjZHGhtRXU+Tc/wsMdkmz2g3kBypwdxy0MU09Y1TmVUp2uhH7h+1csJ/B1Hmzs0NroxY0S8xUlBPKzHMFacDQQPzJWCeC/FUhFws3JJ8/L+gM3uKIG0zRCjmlLPuX5ZnzQ5Qv5iIzDLfz8QG718fT0FuwlFhXpTvYTgOq+/yEK+1Dwg49Y+OD8c+/H4wVfnlx80xBBqNKQWY/Xefv6xzI+dQ3l7eRlOD+n2WElpCeNpe/yorFcTIm8aUaeHdz89Xx/jdFouT0dznJ99wvkw315HtWFx38WGsoly2q4SM+Iz+Rag02NRo9if7ubX38bD/LRXQUBBJ+Ho/oP/zl+73i5dY0/j6PtTSxL13vBz3no+4niKE5POS6+h/TCeXNAJByXQG/melPixPVQP6EXqKU3nu+d73mpSAXikpWwradXXPctM1MUpYAcw3D9brpc4DP3p2XZ7OT37RFDMjB+G8ed/4cvf88VPk3g5aRpSNK0t61X4Iyi4oEkmX2L8QvSyNaeR9r6bFbB5KrpAn4Rd+N7Uvh8ZVlQnRumkMkzlDX0LBFseQNbv55bQoSWyoXBuoZAsRHMjU/7nOIHE6aJYlbF+RP1zJHCtJTNcwvnx7sH5wQev/gSLT/agkwFe6ziYHezRanMPyViB28y6Bo9oYT7YvoxFaDI1Gx0ONj4NN4+qE5AMAYHqEdu3ptH6XzAJaR3qWAGm6GwocexGHe+eOxjM4/num9/49rvPRpwpVIPYxjPvVVVvqGpYLBKKzE+vD5Xyfjw9iNnvo86+6R7Bne+w5+hPzzsa2Hg613UN031/eqZ2fZ0bKsBhmCp1bro+xdOztjnW5TZO97sAwC1MD3fPP7kt1zc1Qj8+wA3bfBiPxsJoQmChHoaSGw5Q63B+prsuyGHFyS+HW//P/N4f8cE16CN1iTgV9yXn9fYoImtNQsrmWxeCmobxXiecaqyzHIhA1bbbk5q8fGvqoSNH8YCPUgOcTqdnnwo+XF5/6AD4XdMVsTd1vLlOYFkYz3FEJ9pPph+2ROE3q7+mNc0X38ejbX7pF77xuc9/IqXFSlzVi+P9eLpvfS97Tb2VSDRnE4aRESdD++MwHx5HpndrMyAzXDc/7n3X3XXgtV/3TT+/tk5Mz8Zw06JyBfNDxkDoliDJBsZhq1W39ptNb+5bB5fL98MkoDrddpi2Qop9pw9sTobY9pspjJmOqQNESB363uAdrXX0jTCy4PuTGUFmfQkhbFKvZ+4wSSbyumAKAZDLoSBQrtFARzdDP6j95QTuh3P3lonQDeN0tJ2QmvOLzvcyL/LWOne6TtvmdH72/kdPz+4idbnbchnw3qtQ89q9IUHX6MexdXGcziXJStAsBva0cXDIHF/BjD7G8b6f7touvil9Qz9VGqr16cN1fioCymOHFRJDtH24f4GAO9dtC+PYQIf0zKyGuxd1u22rovDztmJn1ITTszQ/+oiVJRJAaYAARSTTO/ZxvDdqbZqf9P/+1f/dnzxU2MndhPt3Xq+XfryL4yR9I9kSuoMB4DTGAlW9PX2oDdcyIJNZebJMDIV5THe6FcfzvqWSbuD9MpmTUhMmBcGyp6ZTEUW+LxE2tws759X08KKADBaC9vM2T+f7v/bX/s6v/pHPH7iD5bSlbTndPxeu0rlUlun0Yttuus9OD2lbhFrGaD6z2+2St2U837G3mjCcttuj8x4JokVwYm2E05KnvjeXT2gQDYhwoCamabS+mYMDJMfbQ4N6LAk/Qj9ZReB65DpC0oN363xzPl4ePxgZhqiU4TwHxMCYsZJ9gsAfsbw24WHm27gnmbeKJRTRwesDWNqFOYJB7k8uBrP1dOT7tVEKA/yJmm2efT+Mp/ucBe6tt1fT6dnRdfPrj6D9KawX01991dvjqzfNGKYYIoz9xE/8zOfei3GQ11A/3B2kgTTIl49SRejI6sXDeAYxFysYNEGDW8YPSr6Yn16pU1DMXBE5RT5W4mefn797paYnoUOj9j1JOmchNBrh6VIdh+nc+Sj8yuKDnj7SVomDa51w/DYQXu9KEixe1hX6STE/0/Xyup/ua5Wx7HT/0CDzOpKSUtu/9L/8Z9P85DBGLbdb2QtMFs1u46Q0gGV5EvjY+a5uJqlMRP3s4qZPnUSY2qyCusHF9Zc8vT7dPQiP4/SCHwp/8DhkPXAIr4/xJL3YYTZgQR8XKcy6PO0q2vRlyDPV0fSX/uLf+tFf/wOlAssiosxgYTnLwgQ6DUWcc3m5hHhel0cxtFpvpImaZSdREeB1oXd99HuXslyssVUcNLXAornxcv4xiotdF3aUAlZSbh2Nhyu1GwMn2jiiM1qo2WLbXqmFuoVQPckUhqkm3exPrz/sxesqhsbY8AjotrOaTVNcYjUOfM5EgoCmAbPD2xjZNoaxsYUPanvEo27bsqpnIyBDQAeZNmqK+AW5XfX/uszDeNakpR/QjaERGUSOwIci99NJ9wkYYoju7//4T37ihR9PZ91Lg+TOpo8NKoMnNdXsUr0U18E1rrGPXeMQ8qNNiEORU3dclpvqiCLRFWWyuuFhemZmo+rgh7NxLrQnr68sbdf30/L0uhYxiNPt8c3ZL30co0BhR5ePqMONytAst8fOd3fPPjXLKVqHkMb/6o5Gc75pJCHst+tr35/bv/g/+yfX66u9Vk3sa2IbPziPuUrZl/k1YELRwQNAJtfO4Jbl2sqN9czCrVK1hXB7/ZFqr0O57RQGMjJqGjecn6HLeju9k5uxmIxzP5xRbIiO67yUN3mG9zeOHjllmq/Ts/em0/2f/7N/6df+8i+oaMPA7yhF9bHX2E7NEzp9qTH2ViiEp+CP/ZHXVHIQOi6HTWr6KHbGeE5pjmFqvM/LEocRktzqguJPHGcboTUy6hiGSQAodBk4hh7GAVcBkNZRMHGAlWDIhvE1WuhWkVR+471Y0Hl96xaqAt51cv0mNV+HOm1AZsaoYssQ3IZx9dGKJ7csFx97tTEYPJiK9cCJ3nV+UyCkaOQWCbGus0ndj/ZgdkkFqCHM27/FrLLASHe+sXzshJTrojuUVZr1t4cQ/v7f/7nPfWrMOcnwsObx9JwtPTaF3nabPbNqvH13ndl0YGaQmhnb0TL4frpX840VLrlJPq8X4xyb1agovfhOaCSK48aR107HQRORF28pMZtQ4KTO5EI51J/2tNiVu96eFMxD+WRfCciuhiABaoPx1vXl+57XMdy994YN+gf3tBw0mOfnn6x7Xa+vakosiCCCXvCCu4YJquM+Xz4sOT+8+ynn3DLPLVwzhzmTerGaGpWBGhbGcZJ27PrYHFlnUhXL7nZ71YcR3jaWoFHuef1097Zp1kkWquLANrFHQr/eXsXQ/42//Q9//a/6nm4Y83I7cuqkuVHun4Kial2XmzoBLTImX3IXrVBktTBQCabo+zYqaZBmn5Q0pPRMf9WxAdFk22JH2Q0UUp9GT+nHqSTDc7S/tnUxm14WKnFXXWOS3A5vbtoZAlJJhpVRNkmjTI4te1wRdwk4qOHXgSUwPjtKKzMDAVVoTqEpedEGhqgDUxpCK5eBzSU3IH+9cgcpkoeg8lx1GjRv38VKXPbx1kbdrCBjXuasuJ1dwSWWl2GJHjn3Ibb92Nb84//2T372vWY8v9O5TmPdnKDxGc7YO01hM22AEAOoWYxlIPyEcfLgda1Td0tIrhcvrWxedfmzbX591BqV0Y1LGt4c7XG42CMaudcE/fYYhynKtTvn2+sujh1H6nh+Jp3NehvP9zlXD29cEIiQON3VSfSt4kV9ezmenofg121uVMd26m/3/Y0k8p/WSVO2pgvb5VXjmrKuOgU1SyotbfF4foHnpt9TMoZZJciDVXTcPXtnTZKwqKtwCoOxZLU3HXqMavjcMNRtrTVDD1ROTFpEb3TDaOCgoKS0yhppE3KyM9sHg2sg98a/9rd/6p/4Dd9fuAK4mjYfp5oXkZbx7hHaKOcdNcHCBL32quQUORv9YXx4seeCY+YmrSKmebAXdfhZXeG9ig2LdmTaBSBIsjdGn1qcpAX3QXtET7GPA3FGzoh6BxGlMoRCfCPM3kwxYMcRGrBg+jnsx5Fuj31/0vHvWhFpm2Psp229qpiEkql0e01coWeL8t1430MkpbYMQ+Z+w6+kmGA6WRZBzRZugmpH/+nN6ydWovcxWhbxDqObFHuNP4wVp8Ks1ND3y+1pmB7UCgNK/YO/948+98n7pt1dnLou6PkPJ0eaKKFNYwF8s1DujqusoSaN4x1+6DuHWhqnh8Z7CTM6V3jIMjqGq+ddyCXjJl+dH20A5YJuoS6GDuKu/DgYduxpgZfiqlDE/s36TJs0NGlZkGswISKwdDg/73iSuazjeJe2tO9bWuf7F5/c6y569v/mj/8yNKD5YHlhytKwk+RRrBCK3JTtEW8w0eWLzGEEZ6izlvQ0krEVMdemkjpWAPjk+7sGTVpbN3idQTzHpuohCrXX3D7PFw04VRm/mu7GoHdwXG831xwBgPIQ3Wr86Z/+yue+61MclKVtQtPVddmGvhcTVNforRW2cHJQrm5Ktkuk0yH2Q4KuOlz/VmPw3LkaTys/ucxqfnbfHEUp5Ic3IAL71YJDUwXAPBqToLp2Y67dYQK6rqscWH1nZ63BR53v1rV2xNUectETlzPG6NomFya7GudFhca5YBE8QjaaQv4xxkeKcfYcoiBRjah1YlM2eRUiFzswzs6NOd2axksZgaNqP41NrbYOuZMkXxfJXNO0JEYLWkSdL7GX8Rlj9TS/FgzNLaeZmiLVThWnF+9V23z1qx88u2cM8ba2ibgaaDSg8kbjualU8wUkWxbH887CgwUOOC9kPqgJ2XOczvPtYtZxmkbFWFPxwaVUu7Z0YdS2bA7PLJna7NA5hQQPPy4FiLRN3cTCmMp2PTphUORx1PYocsKEB2EzdeDacLQODzx/YKWWOW0Fef21/80fL2WT0MR811rHo2z3ssqdoa39eCdP8NYE0AP0kqVUYLX1piYvLelwQz/txyYC+iLXxXqkA3dVjlHxkLzzt5uUvgCzh9jzwwl2Sihp05B8uMs1BxfDODJ+1gcXz8wywrqhHtJ369OSig49ploCZux7SKLbgc0yJNb0M//4F7/4+U+6GA5Ee2LF5ZVSk8k/nAI9KXz99dTS9WjbPkytvItRSLZm0s63d9INA86kjuEn8jQd/upIlhnRgLgYIU5cQUIdesE+wkGws3Y1L95LjXBkTVdQKXgCTkhQ1NHoHScxGayiBm7LZTrdl1K1GEC5zU7VYS2ij53nXbYLgiW5UZ2FUmrC0J/qdt25HMQVkK2VLO8tmVivCRFFTVLxm1rIB22MZXkUCb+fxLRKSfcGghVIb5KiSu+Bje6W1vF0p4yVIPKV2cJOynMvX/36q0998tT5QTYZ4rnIcoYzSr0Nqfe5H6WgYJ6jK1vGrNOUU9HDjX693vo+SvfMVkDqpKNpXVQiEmib97I/ffT++f7Zutyaton9KUynTsy/1eRQbavuEi1elWNS6HlQqtkliPkX/ms/uhcVHaEfw3AGFoxqt5nzEe3NyUvG61EsODbQGR9QzTwA3GrFg9z3NeZ40IIzK1Zsys0BxnWeghwNbt/vGPy2qG1cGOTAtSdkJI7vdpA3o/qyPz8TzTNONvYXV8QPKsl2u+k61ZSZ5DmqSM2Gu/2nf+5b3/35d2FrCUe3h4jrZS94nFhOpHdtgrmlkzJElqowriCHhQxZWpCtZYCqdQHcocjc25wP73Ag2+CTell6OJnu73U/3z1b5Hp7mO2SZHTn++X6NKjnaU12XFepoiBHi6aPvk3xTcY7qGJHD5sifDTzWi6vY+i3nD2IYYg9vujYILNVTcWqx1Kq3lHJtn+lBiQJy3x0zW9412o773I6I3oMHigqgmrVMwPmrkPz2XAD1pRglfXwFClBUVWOkxg+1dyBau1P9+eHF//4H/38D//KX1al1L1Md8+25apvjTfZcruF4CC0SRCsSgOFkIxkWt0tjU2wuE+IURp0doznqjfrLc9ml8mANud2vagl8AKsnbTUfU55PD/H2W0hZnrLyyzTLs7H+fakeArW2Juc4N/UdocULfytLcQJUlrPJhnhBJXmeeindblqtbLXxQbLqcI3MnY0Y0KsclQCS+u53h5LWcQLIYjciFo8SacLFlczEfcQQe4wAeu2CNjph1E9mSA1wl7oUmDH7k09nd6TiIwwcXkg58Rkyu0lGWaflvl8Ov3df/gz3/2Zh/0w6x5v8TP2DjQlCBqimf4rbTdIMmKrQcS0RIIOfKa1bFByRbUy5GLDEHu8eyenW9/fpeX10ToNB81y421yh+zOXRh46NzOLSGHUNKsldSprzsaIzoQOpsq4MBVteu8O/LWqatr8BOPxmxtjONkDQwWEooExYtSxvTBww0nDnq+yHZOkIOzfBrZupAbQlsPweNj810hNkRWVnAhAdz96VArXsguwQMTggAJN62g7bQ0WFk1RUtyL5UcGUVIffkrr7/vS5+R35RGe4L28YDCBd77vaNIyxV6AV6/KeFek49d1pH6mqypYxctCqnxEwP4JqUkalZQXsmbVjNdn8JwUmZ7uqneJb2XbZBCP2lIj/Em+i1v/AihICzHN4qwH+zalukvnnV7ge0kiqnkRzEWzNCHQSHsJoyK2mqcJQ7kiyxi0QecA8wWGoTZoIyoNHPWGMHcbTFZYQfveeM+ipqvgcPsdJ1k8imBD7MAHcVvM33FJmoEQ6qgr/PjB40BUOpde6RW0oMJi9i2TkwV//Lbj6ezOj9gxcNwYlQ0BlMQEqCYPQfZRkdZ4Ecp+m40VcCB8lWFjQbGosrpw8ThNJ51y4U46tAVJ16RWA5VmnQ5xN85yKS6HrNqjLxeBcIoy1aZntqIJDjhHSYk3qlDBT9hiqSyRJRJJnEaSClvc51fyR8OI0oNy9dFrHct2c3uqIZLtcJYaXZhKQ1zlULIPi6lYxFQm526r8HSjdQ3IypDSXzSi/M9RAaaGz/AQcRMG3k0JgCzpmy47qou4dOKBLlcLRP08bI+f6HkPCxBidAUwHUhTD+pBEnypdyYKtS0CtxIW0OyxgYcor9lWzt+lS0Bi5EHTdJhlrt47SFXF9nhLP3d874XBF9IKJQ38HpTYSzSqJxKxKg/LJZOIY4KxfqX/pu/XYinj8Kzm50JvJKcybKPHfSetxnXwClOGo7Ux35Na92WEFzVH0KVShzdst7G6c4cEKhibBAYNEsi5ykOYzGYZbdYIbFeNb3TOohme1hkKLtqLXgF9w7DmMDpdfwc0qDAhhcG2xIqOj28Y05JDgVQuV0a1/y9v/OT3/25Z5RUKNaRR/hxEiuLlJptm/vYuzgEiJNyr4AQygdYGQWUxlGStb6kWeMeSDbVfNXwTtQH4f3pCw7jgSnD0bbj+U5GuTDyFQHtotivLgjJhRrd2OAMDV0jN7uNi2I362wSgifNK+frcH7IOekdmZSRh0tJKtVGP5378axthjZKUBW1paVUwEgVQuXCeADQfYcjJMPkpEdRM5paIFXSJgm1hr0k6o8EFUX/lZsNQqjZUxTS7HRfta3nfNN4S3f4Xk/T+I9+6us/+ENf7CRcvCETi4RuQJ0OQZOZEMyzTNQu6JiWhq8DPkpguC0XNYID3TkFGEP3wDDbV/wyNlA4H+KbMZRCvbACEK6zbaI297pe+DlepdU01mUlSl502eX65P707/sRHRU1q7UiIwZlQ5S8yLV5XS0kolq4Eix8r/o7qoqKMcSTZPvzI9bsiGX1s4faHOiXe3HFlINZzs/eydj2UWor7lxLGR0nSooohrt6Yj1uOrCegoSJETuKzK/B8vIwJnIHKoeOvkpk2/nihukgL7Lv+6/80tfOg1YMR3Jab08yfro9MkBchLTsZZ0vOi6uj6ZgPMQIWc3QKusMfmvRTHnmTRFvUptWpoWS89qWC8MJSgUBFv1QUmrUZQZ1tzEanphmHX5ksGYsWAwclBOJE4G5V5FwyAEdQEns8aoyN5v3ibzW6s5wZsVEHrs+IS0V/FHdbxymxsfhdM9xJLknCp7JIqx3uS5HtMEroU7iduaagoa7c6de6NZj6yLuCwQNERbQ8VYAZZUthOwS89Ng7qJaaIczD7v3piZEl2d5fUmf+sS7wGeuDYQ+BY0yuGyTUdONtCeBmAwpm8rPoETRjov9xEiRRKRqscQWqX9slDQH31FezsQLhf4U+iFvC9hrq8hTmZ2ZjsKBnYgRjAT6Wkue7l64P/pPfKHcHuXKIoLZM4Gjqv7NFoigQqabnR5Dk9LaYAwqN6XlKl6nlJPu7t3P9OfnJa9ZN5fLeW5q0XA3rUS+dUEQ7MzwCdEt8bq1AtITsr1TycTQa5VrjlZxCOVOl9m8LMTKNoNvgM3ok8meWL3/Xs2lizN+wS0qD/30rW+8f1Kfo7eO5H+oaVOx6JWnBC6uC0f0+f7U4N7h0RD6KKCAiy9gZYXuyYf58nrPIgtUOrm0XA8kIA1VOLVALst1uT6KeMQcFx1WssgU4zk2WM86H7CX8ps4rW7XHEBhlUhhVDJ1wevCZKYmeqZOufEgZtz30fdTMHIBNZgiaujByiZprJjcmFWqt3KMbXKyBLam1WcMw2jiYLNyb1t2A0fLzlRFZyTuB41ItIp1QyTTH9ZRqrVLOI7teblg8JUaGiOVNMtsWMXL1+vDw9jy8SocnnWZG0ossg/fWlVQRDVyeencjl+Qkhlk8XOQGqZKERJ6aErG0Zq48U6cz5JB5OBf3d0/Q9/UEtV84FHASvnY303sSRf3o2g23IgYlW6X9l/67/yeut06rB7VYsuiQ7CyWKZH8V7jvXW9EU4ouwRFMh6KPta9pnT1Nsr5NLTsjI5f8ghZllLXzsVJKgJFULGICazFrppkzwUouiu5UqSgDdeSVL1pTE4zB7cmG+K78s8ERy1X7Ccuukzy0hKdYlHMbbOv23Ye49/+23//k3fZww899hT6s4vy8jbAp2FvbTJ+GuS8zWSaFyCs0NrNQ0f7wMQsyJOQwqdIe2E5xI0E2i2RQdSK+tQIXxKXvlLlqLvsK1QVAJ152FNZRPttQE+asDosMgke3eJ0mq9PjuIzr3MIvVrMnMnf1YvNNff9JLiHtDJ6a2pzdD1mSWfxeA0LVPdYixfQgRigpIRsgCwfZg98TWNEw360jKOC6RqJ2QyYoHA39O5dP57TOktFbRarOMnBmm1Oz+5/5uc/+KEf+ELDCM+oezuNcgiKToQ2Ig62ycr4RSjo0ZkjbWM2gRgHSvSxLbJmRjSQMgw/JdGIdt7W3MaTHm2nkQyatcV4aJbqWzc+7el5zkvfT1ngmAJNNd36E7/jS63w0bu83jgLJwGO5GwC3rVxPA2nZ8gI5EgvAm2vinzQbStXcfjoB06DlcxXHfGgwmJtoEC1DlM5BaBbOml0FyBZs4feHKAEEJd14JEXpDWHzFk6jGVujwYryJctqdZbhgnsuun0ovKqPDJlzAZ1vnz1q98YRYLOche0RrgSSCw+ak/Q8kmucp0SHXdM80N/rjtrxSxydb2KpW6HlZj0NnUWkwCUriROMitnJHXYISmpHPciFWKTqKZCiKFrQxy9c/Krato43sXpAYXNIJwHX0d1/6LHuCOvbJt9B0GnJHBpvcV+onqRbkrZ+ohL1boMAy21WEN4tpVluRxFmNtBY84lUNJyK8QXrMstyEdMGwGekgo2nBBaXodpSSvDuEYuFcT0GjQknh+Z5zbHMJUCDsiunwRG6RGVfJn3T37m0zBCiu/apLbqwH1Mn0faqQY0qeb1+rjdXrfCzbITX2BQ7wtTq1WrnMzrmKF5qHXJ88wbbtft1veDxtL6zo1wyXVB9pQi7GgjdIj9Je5wJzEa704ghA69IFuU1juNsqvKL2wkjsvLb8fh3KgYkP9RK5pPQ3TsfWCM77oubVvZljie9CYWfQ499vWq+QLG2XE4SckqI01p3umHlRs3nu7F30Q5AIekb9V89CT+6cLdq/pR8YJi6Kht4ZlZFaHq/hBSNHFmS10x3163Fb5qp6e0zDfJQ4P/1rc+ePdZ7Fq4MShqdwKcUeLtwbl1flJjnVdHS1o0i8neRcaKoaQFbGS3uBr9TCKB+STKJMQRuqUDGyDpaQNZaUs90QezUCYBGL6o3s9xWLI33fAundp8faxpnm+POS0v3/9G8IEo3AMvRK2YXICnMIw2+A6P3xltPvIeAjU6DdoSZifyQTns8MaxoqSF6wXHA41Fm+BDZktAN0hNqwgjsLvG5iR5uYE0GIcHASccohh7USrIL1O8X7qlZd2LQIuma+V2zPUR++GjV9dPfOJdfXfv8raqT3Dsln6kNLjXoErz0+MNhhHG+1rycDpXFcjLnjeI5+oAwzBofzLNJQpIsoVtuYqe0xzbOqOBLg1sqPH8oOOjO8ASPUBzzrzQlukYUJW+rF6669p/5b/9OyUnPSrAmVCnMD3IvwDT7TDd6VpKC/bWh6l4zNX18sHXpvsXByEtjmpEY9Qesf35/uBqVizJeK51813fOrKpJd0PXRyCDzqx+qnmvFw+3OFUtlX/izkRlCyCKwbOu51PhZtERil3z6R2RXw6X6+ELa39eFqXWaf63bPL48sX77z3N//a3/zkQ3VdEJhDt9QCpKo9xfgatoXueUn+ETqLgqug/XuVNFQaxj3eVpENVTrX3cYSiQNsOL+jqfZmrm9eb2hX0zpMd+v8CNSDi7lRg9yghgKko+EEFSMj4YDdWc+l4WCHCYoeDpqbyupvGV2r22vVTbbQ0SvSEFujjU24BH2qAozU6x0NU2O4MzZBYjpsudWgOquqbjq6OA3zjJHJe9lhffSdOPOLdrhcdFpSN7kKaYoEDeetldOwLykfIqgIRhMTU+u1/fLXn37oR77frqtWJ4/cc7W9eoHRy7yEXkMVKeLBaiEftqUue7FH34yT+MKcuZUSVD4aAv3AoA9djPuoWl11pfcUPCkd7d4wURS3v/MNQ24lFGKXW7BgUqnPdKv9i/+Lf0a7TTbzuhyUsAlXNoyK8sMujz/ftA0P2oxIYJtE0eujrki5EmAuYozZloDyOBIDSL+Lfk6R1IRJdi+/9Yvj6XmczqqWgAPlGMXWBDuXkphwFNlRwpofalqda0yEOT+98rLCK+sshBQwsWmgkjsGivAdjr/xl//md71j3voaalXCWMUuJHPeEzJp5hk+Tut87VwH20ywAYonqosQsN/ILWm9miKFaUfvwrzY3ER2G9ZbJSTzIFxP6BuHlDa8KTsZX7KB9K9kvsOM3vay4AjUA1xm1SFO6AqSEe06zDz06ZC+rsdR+0n2UjiayNEW2NR18LFgR7uKvwUuB1vLyNl+pznAiI4hh6XO/OEo66trXOK6wOiT5lR69iNi45xKGUeFrKQsj/KWqXlBAVfBpmyGsy0rZiqqJH7x67cf+qEv2cHvhskEyofa5iclxUvdOqblgiCkR1uzWeKdctohU+wF1QQp+7GftCp2SYI2uhRzbVObaoXivpvRAc5IokoRwOOZBmA7Il5WvyOSOCC99nfvuD/8o5/Ztlu+XToPeTjrJFbVwalp6p5Cc6wuTaPT3GiIOmrOBcM+zzcJouKo5UK2ez891IyZXNf16O72tMW+twkjcrG7sjyty1MYpkHk8qBd3kjbAVUu+CiUI06no3HDeBIy3lR0y906XzpsKwvjSRxsNFHvUY4CD3hmU+M3fukr55MaNf3Pe2kRsHZUoJqGIeEjFbOFFZeiizsC9tvlSW7lfb9cX1e5v8S6XEI/6IbgInDB+2HEUMeZ67WWsllUxEHnWQvqHKNcIij/Qh8PWfIX6nIb6ajobEivsZhXcyJyfgoxMHYMxmCx5GYdsUXkIu97mDmbIxivykg0GEAJDC1uqcAret/DmOEg1Phwdnm9ofpHD2DeZ9BVGt/F2GN9F1wX9S2IHs5Zcr/QOWU+1FRLGaY7kc1V6Tl8aERfsNQm7HtllDGO0+tLeefdBz3z4PrhpPNUJEi9kX66W9e5LE/D+OCHMYY+9EMXVdZC1Bsd2oA4PsjAkOhVG6vzAjVbvL36Nhh6d8B31GGBwR2vVyrWVrXT6Bifi918HP101w/3jQ6I3vV9Xpd1ubxxhvt9ZZv1OvejwxsLn8BZq9BHYdtqfmrs5WCVtwW//ILRSFe41PrTfa7HW1sr9LIHETS1Nml9cn4Ife/jpDoF7tB6/ah1Qycn5KE2wnXtmNc37AJTmsptHvQ6sTgV2CKWb5L6eTU/olYLGhBW1DH82YWLW5J71909PP+z/9y/+F3Ps0rerhWRe5eQfweeh9VP36nQX48Az7Ix7ZJvVeF0Tkrj6Z4br8Pu9yCYqFpJpumxsHBgO6K8tFC8KxSshGJkbI2DVoTAgH0YzyIyhb4lHB+KEOpahAoopCcb+L9NDMf1Wnwn5qPIFdVKGYEXnxTswKASbXmzwaLeMRZR8KMi1USDqxLLpWlC6K2ToMeA6IUKORdBhHiqvQ08P0r2MtVJtLAt7s0djhvqTA4BjdYvZyyoFXYs8kItIXa/8JXHH/jB7+PkkizFAmDsa623VwoV7od2b81OXLGCallLuxfgfaRyrV9ulzjchejf2klcX3uN8HdgPG4/A9xFwWjD6VkMcVtvR96CSuJbCHBwVOwkDiazaDzat+dpcP/+P/BrGHHv/fSgbMAQhBuDdSh2XYf33CC229P2RrArHxuaRUHj43277+t8Db3KIVu4eVu4x7MYXbhklbQUdVGpgYMnLwrXaYZPtRM051vCcNfIxFxSIK17ampjSpqXRmBeCyspc0C6j4FL6SSt3ZEzxvV123bn+086d/z8T//M1BfYpoWIeQ+C2aWUIbWoNDcR43cUWB1u75Z2COdfAD+D881mz5bfaJP/BgD0oP0SBrFXBwEalegCHhV5XGpZ++HOeWcYhQXLYRCryo2SZBgUQSupJ4b9reHArHfwTYr5bb12jXopUEUwweHEsaPSmgdiTGSoKOogR3UgjblegzJZ3cT5nWtRWBu2xkB5jZoN5BkA+dh4Hd3HoudwevGJrrUfAMfRtYa77mlr46Sz3w6R5u3XusztZ77wWXwkpOZW8UbvIo3W6UULHNvGXktfe64ty3Iw3g5eHTYp5hnKWulww54vL8fxbltX5VjfLgT4JnXAxz7dPxum+6Rcn5uGerFPt1uIxl3dYC5hduqjXQWSbYyn4fzszQb45fqIjDNPyqfXGs6rAJDCRK2TPHIXznVoNbCaNzE41ULvZqBnN7Xltls3VkoehwGKV252Bw+EVALVME9i4GBYpbB4vNfKdpNPKGi0ZFjyl+0UWMJIqWnkJFNllTxB1u/M58PjOFT3g7teHNo3HXDbNOv22rnh67/0888mJ7pV7FmvyIbx8YXfMq2LiJl7gwCM7CNM9kSm1L9vW4AI6T+OqVxFfdk3bYmKNsCzQBUYkRbZF3PW5J12cpXas5b5Wst6FHFncVmFM+37g3Y2+J5P4g+VELDiiGsm1lNqoDVd4UALK8WaEl805TpJuWtOoJiYm8rs2KHZifrcT5j2JbJTVZ/jKT3AFdNxgcJYA02P14Haz9YwLdcgnHRqfjTADhquC9JQlOrR5DQjxNcR5/Q2b3EaIS+JcmyWAhqcHeVpbZ+/eIhxul1eta2m1Dg1KAytrlfNN9Mty6CK16erjAICfxepjfG0sswBIOZZ9K2jFXku56OTHH2Zr/fvfPrNudw2ze36dKiz76UMlr/loTEwx0Tb6G/vh1HaVEp60YfTrM3/J373D6Xr63W9eac0gbQ8ZR1XQ+c1Ou1PdxaaC+LuuUk31c05c6nm26v38Vl/ZlEqUsBsswvCNK+3RyN77GUVzS7rGa2Xlx1nFGlCh+/lkiA2iFDDXt+qbiK2dWHPGUJI47jiSRxpb5cPd8KzirwsT2m7XZ8+EgdQOizN2g4E1LGfTqf7f/T3f9I3S+d0IjdkEOIdyXhDyGijvFeZusluP+WE9mOsuyz7KFrEzTjwHD6E53ZmgC4Xo6LIrZqS5dRneeC5vC4gQMkBqQYYEP3pfj/a4XSnb3006/UJVAmo8cgNhqTbtprOyzyf88f0ihbs37yoWlPlYLHQNmLNqIin36fIih0VI+g4uQMEBoWhl+E2Yw2N3lHQggYu+yGNjiBOYhbMbbJF306p0OGw1DVVBjn7ftAyeYPFqKmkhmtst4gshEQBh+pW58XVO//qaf70Zz7THGV++qgPEf5vMXWyiHC3J80x+1Ga9zg2unEmH7ww9CzdpuKW0/I2VbsVCU0HVVqrZFh9iKrshXLKmOdasWyr6gTaEEPre6qxxoUx9iONpdS5u+qLUhnuDNO9lHR/9r//B8Rf2HehiuN0dKL+bfNrmQIgsYXhjGhQqQpjzYsN7ZJsgu7M/6MCObdoCw2ZgWw0qIj9GKDIks81/XDepdjs3s4eTYh4HKHzWd4vVx/GUjYKXMw/cDXqT3d5XfDJAgwpC1X4SN4gStBdTeR8eaWGrIu7bKi7v/Ln/8bDoIj509SVvOdyTKfA+NZ1rgfN2yGojLmsUQrDUmWFecTpjmmdDXH90aLE5cSFEdypS4CN45mPOk2+Kswls1ZPIBKuw4/aGETS+Kd1unsBR79IJH208N4K/FYq8rJBKfet+lCp2i09TA5e5EGhxAeO4xKQ0pdG2dxtCUGJ4JVFhxRiM0YQnYrvRpcDKdzL25gCjoJhpD2FhKteMqUqVFfntOwCQIk7dmfONUZvVjGHMQUZbEHTCPQrR5pVMDPva7720fGDP/iFWlVp1+bou8hUtKjcSlunTqxjEiIPQs1k5OYkzFA8job5Ivrgemix7k13vrsvtR61vP7g62qa4aYKyQi9vNga37a7H+7a48hFiaByWMJCZfAtjqy8jsN8nxOPa2z/9f/1H9lSOtLMGFVWDtooeWtjrJs4wP144okLPSC93fxeeuMpxPMLz/hdd3yW+AMHwk4GqLhbTOfn6zZ3oMdkJOYYT01o1+uTHKTVASZRcMcT+dvGNZEtHqM38y+gs9+TIMuuT+mG46fRvzRhWW6X0/ksYzbNkj0Ggcf54flf/lf/7CdOc0oHQGgz9mMqc++HMI6w86k1Dp0uwU17dzD80kU/3T3gz4zw2sJFxHN0otxVM3kmzJ0cMtkiUZQfMOzH6U72qzrA8nQ+73YzHpLuj+d7sRu6roOVxPOR8R0qvN23QT0rVHUHU7Wz45lPIXSLT5zVYTv1Hsce5dilpGSg2whrpnqSarFR0UclG0+5hjIg4aQ/IKJYoa83tch6rTD4r/WYTnfL8ui6qBumKYcOIRKM0Ry2fBJSSHaE80U1krQWaRzHok9r1kldP8Rf+tb6Az/4eYV83R7bVjKmyjhWoMPpWceJSxzBTbgwva+5A0VpA4TPFkCXhteQyB3V0JqcHPl9+Cjk8vRsu7wUd7PZ2zjV5akNvcIH1GT3lfR5ZgaSPcbxweh0y9Or/nQfx3P7L/7X/wkN+fejM1R7vMPjdW05n49au/Hs27ZS86gomh5K2dujbvPrKFaTLpS8KMpGo/uikaZBRuPpHo+AA7bWMkzPS1q39dqPZx3z+da06lxVL+gUR97WCMi189UGQEXd+UkelFLfzd5Hjj1iaboubwkr60sjc/w7hx+6VLfUJP/G3/i3P/Vs77pGq6UpgqmYQA1BSJyQRLwnjMZoeJdOMtVXCeg8VrhoBScplTV8GB8Uydr3bwmtVVNV+fwom4R+JpetBWgIGNk23jXSyqfYn8Sh7keFAZPZwXA/YKU/rfMNikCi3TogCDZOVT4DUYEzDNVYfNoDMEE4CJz5kh5QL2iPYYXpeI47fwxcyB+o0mxmzfmt9dx16kCobB3BAmwSu0Z0nMl2icywJoZAr1f0RoSjt4B1EcYiNG2SluKgOqLdl1/4pcfv+uwpDnfHx/ehzq0wjefzNt+27SldL0B3hLarK5A3ST/eiXVXdZ7qu0sV93Q0GptUNlgwdUHWrLD1Qy9plBQUy3Idx4mDOImkNL92ccrLTczL/qQPEMeGLkXAlHCnTbz0f/W/+/tUGO37enk9PjzLy7Up1U/3LW6b8XTPCF/nZcrrrqDZORJis6k03Pvpbpsvw3Tn4rhcXu1aByHCkcLa0vXjWTBRGMIQVL7adVkqRgumEIdl4UJaZ9W7OY/jKHwE4Zkq5HTr45S5PcyYEN68YI2gKrbXmGa9SkWxzMP5YTo/fOtb79/d3f0bf/VvnMJtXrtpbHPez5NoOHKRh9mi7ET95bjWHaooOL2EJI2nk1ONfmzXx6M9oupX3WFmh0FsRC/ADpeSYTwty+vgY2k8gid9bGrNVI9GziL0oXCERXzAich3ndCP2qgxMaVWp60onVDZcz/c17LubWjbqi3LZVf1K6P5bD+ml+oM39Z1GHRwlm0VfF73lNOdDMh0xO+0uZZ5o4/L6RbCtDPXTzJwD4J8IkjNfmR4O3oovuMt6YsXlZTxYNSlexzGHNSsoiKLWGVxDV0TQkw1revx3rPpGx9cvud7vnh0JinLxsKoaamlwtbsa8p+HEXBKLsfT9P5WZVb7BNxFHMrWCWK+xo6RBC7OYi08VS2yzCdVXKLInxRuGB/Wm8XmUv4CPCzqA1AShXHyfthb5uy3Ia7u/nxVXPYbEOfp/0//yd/bFOw6y4AGyCSuclOQIITmUcKcbi7JJpZ3Mh8ff2GAl0L+uw803hp/DZfr2BenZoHGa9e910D7bwfLeevKJCypXjElX+/u3txOHd7fDXI/7qY76ZKzJpKEs3QDAH605nOyyHzgBS+8/Qx7/d42+uy7nS2Cs/RqAhnGLBUUBnRd5bbEx2o9DTYoGMQfdjyjjXdauUSQhil33aUpvO8e1o/WMEWf6ZE6GE0MVXXRZVtceDBqTY4MDDAw0dLyTUWBpOVvDL0f/fHf/Lz7/qtNERaIC/trMsPVl4ST90fJElJiinSIJ73YPxWhlmLYlJdjkbN/raU+2HYyUSyg187eW+MaYe0w9NvmFKkQHurw91DXhf5jvheZZiZfaj1V8Ek8BBV2i6HCW5L7Co6+qJSqvWECvCCtEs3GMUTz0X1NoE1cRzJ6C5HSfqJTT10OxVmeUfjjtZMVWB2WA9zqHtwTBko2EohKgGMrTV3CLoyWFsxDAVWlDp1PkSRgmWDHt3WTUTM6+V134/e+ze12fd88Xkpe+zHN6L431K3rZWz5p1mD8DLZiJMaYsbBL6sruuWZcYgxzdmLLwqhIdjVGUZExYxLpQONo4uhJrVuFOTp6NKw7bdLv14yinfPX9Rd4BtMi5ySdP57jYvwzA8XZ96xYVndBvtNJ2doLGhH6V12EFdml1RVnF6GKdph5x0kHuT8CrVJGu+Sggi9MpL2xo1MBfAu17P53dQ3GHYgwyoaSR1wNe6aT0opOTVshkC2JFlA3JQ/WZThTuYusNEOhMO1Ri2VTMvoLMkbSQnDs1M7lDFmHv6B3//y9/7Xdw/H+ezinftB5bsDufsMHwZSyIZWZLXpguwQ3raEjOHCd+0bQz8u4YIRHe0WvRk8xB2RGBYL8RskZslMgh9XCY1vh+c+qj0VtPYsCYal8sawrgflEmMdltsTA6yPHaFP9z2eqgOzCmKOVLh9vQHjpFGENZgpO878410DgtGV5PQXkYcMI5EPUzQN0KSVq6xUWYYelHD9hS8mHBWlBmNz+FCqUjMlvOuaYa+Z5y9yzBYDsGmkxm3+TXOAz0qgq4fJ+l1uuYf/MxHv/5Xf+H1B9+SS8X/4z/zq/J2HSexizosirq2RWbWkSRVgPl3F+TSPEznsmVhUph8CNyNY87zMN1fXn8UI9+/j3o/TOb1lfast9i1T68+6qcB3GWf7t8tNcn2e5ZrqXI5ofLrMgVxL6QwcGZsb6JyDjzDqH5c2tbl8gqDp/bu+SeuTy8FAjZdfzrtguRrqyNK+LSWzg6vqZ8sKmK5PY3DtNwu8lFgOIKZOOlgFFW9YqosL/Ww1h9LBdlYSJRMK98RkaYkAQa6PgglK2mW4gywzPuxYPvBJSOia9qu5O8LZ2uP/Hd+4he+77MycoSj2oO0JJFK0Gvr8BOOkQYljpGfxLg1b2vs4069WJnoaSngg5IIRdQ8G1c2WyB67NyEJYuZm8la1aixZo91M/6/RMxDsyVlA+cdla+FPR9YBmHbkM82R8IM+O2diY4RtnPa5vl8/2zLm+8ny1ftXFCxTneAt2ynJ0ZII0FBsuPFRaJd5ovmBvB8G4N9ivwF+/4kLTU2fRrbpaUf7xA8YfrcZdfK604nsuuls+R9tVCMNclpBfdRfOoZ6SfjStY29R///OMv//7njy8/1N78f/5nf4347rDVLPKow99Px7aYPMOqMlFwkkZopzuBP1yvVoukNHtpEcRToNuqYsZueTjdW16igBLjNnZuun+nlrTMjyGIMbLJgR0qC8n//d3zvSRq60ZNqtn6qVPZCyxfSORLP5ASPp7Tdluvj8Pdu6qNNNB3GrTRHpjNsA2kfX+SeArr/brdGhfqNqdtkzd3jABNxYx0cC7J9NmaQXVx2j9On2c/OMntFPx6wnbRas3U7Ek6HqawIfRm774uTzFOoty0sWxPsT/rreHtEzr3b//dn/ue96RJ6sJII4TuDjKmVsZBz7ytxPXtLjhsIw5wCLmjobLILVWQwGiic8u2qIslpHBP207/euDUyRRFQZqoLALA0Rpjv6W5a1x/eiCoSp8haxq4dT7Ot0fosZykMTR0Cyr2mcrVozMPd5Ljik0P6pH7eG7aXXWmFzPARX/Q7TuxcaJB6qbn+9gi0jE7a7Tt8ipgrfOac5kvy7btOJ8Ow5S2hIv8IhrvtuFIcAQf5FaNNzUW8LLc8XBMdp16UZ7pEY8p9oBY4kWx+D/7tflHfuizeZnlf/7HfusXOi3NFw6dXoOogbpbhCQVkV0QWjydY5wa16VldlxhIgLofojb7bVcak/nvSZiV7LCkxVYuTDGk2cbFK6wKSNfL6brcJhRKVeg3Kjr1XcQmDOdzy9EOcNwPG83VgAuFT4G2Jr96U6Oa8NE9kEir+oAy1JB6mXAlhoVSTKp7ae7vZrBkVxLtW+DLKeRa+5ANwenUaYvUKUURN9IBNAXXnDrFZkz+jDIyw2x7PL6A5JW5UFSGyJcQGsR+ay4X63KP85zGwY8oDXEhXLmvvGtj05+JQN9MQckBwtNFMhcuNxcP512QxWrLJs6359kdFOgHzlqHtWpHWpGXXSCkOv16dWgbMZqsy1M3h2qVMm1pHlqJVHP82uRavQWctlk4rBeXm/zVQ2819UafFQ5wESi03o1WF5mBdqvZV1uj0dOVA2S6ah28uMBwojJ/tZPZw0KD/4Yo2zd4LpmU9cFTMPWStoFdFQPtXHQEZPFLafCX+8e3qHtPJwKez+dHo7WjdM5rTeVRkc90rqqphJPFh4r4tXQazqJFfZyuwgzNE8Qjvg4DO9/eLuLaVtvWhJ/7J/4wv5xdSGhxjDG4SSbwdjjaq1/EOKryeuAGNMGWPqFB39DLIIDhoNEoLqiyKpgega9xO/KZdBHIk5zSItEiQQpz4yWdLcO98+kGxKnqEimeLoTIytEUEh9f+fj3bP3zKYl9hOWjOuek/wFUGmqumgaLLE8InqN3vSarS1BMiZ4VxSOHmnOAKFYSiW2QNP3vUZycvxbRVbbltvjh8PpFOKk6pPSc76+krScfCQZlnCzkZrKRxwG0/j3CkiGzxN6b3ozH3Dkk8b8W998dT/ltMk8T8fe3qzrRZ5Brz9su2N5+jAniXphekkuldOStxta71vNCZ+VFZlXUau33krJzIbf2o+WbcMuV0dUTVf+FkWqme2NPrALyo1LumQOnCNwGvANSAaX8wUVhiaDRqAnKCJqT6j52afTnWVVap9QladVpQt/XDIQ3UI1m1pHfrJVt58Op8M3nXy4XBg7dhdZT0c/qMsqVU2Izt1DTUdKqRWJSDrEdtezsoBDF4eqFkoDsoO0aYeJIM4ImwuB6Y0L0jCZ6DsIenqrcqsffHT97KffkRzP9+5P/94faRtVbJ0GKEt3tFVYRolK4HguZ46jsWxhA3Bir53kYp+y9IE4TMg4Td9s1AwoDlMY+haSFw7ST3jrASXtZZtfu4+TsKb753nbxNAkHVY9lv1V2LwYFdQpbf++i3JtWeanzsvQAgHMVRpzGAp7p5cXA4eu1AIfuoDtHD2MLjfsjr0fLUmyA6nQJ2fTwzcWCNtx7+hUa922KbP/+Xuf7aIcEOhMpIDsCJSHmSOZaj+cD5UdopGpGNaCW9VCSEpmoV7CKfZOX0NNTgzD8PCVr3097LO380Dzo20c7x3KPY3b+0lO/BxWLvTGhg84efSnexcHjSYZoQeEnU669knNrvyW/XK9esW7n7DK4okit9HChBCm8dLjt0WK1h0osJRTZlXbQJ8ufrt2cmDy5XnIrTAiWRBcdY107e3yJL/K4DnKF/015AGrkwYTZOIxIP/X5eb4trhIiarN7lXpqA/F/wo7Ym20mukTS5JVFENSHEImVjwYQLO/7WeAe1pWuJAZtRztdL7P1E5iGUF52PO2zldPNHKRA8P+4avtnYe+4cRy/8xv/BT0z73F0lldBU2AdGlPL7Mo4HmHEi29ue9gyYoZP0x3Qzwty2Pwek8hnlK6gKNl13rwyUvJ2zA+APQFUckThPi9dKRkr7cn712c7lGXMhJSJUqBpTybOxnTupDJKoxar7gy16RW2zurYRTSjbvWPD/qdYvA/LDvGXmnP1h/fjz349Q4BxjCzFsU0dnGmfpe2IVmIV0uzbda6zjKDj4DXIr4RFMhnmDdhwEj2FZ18KHrCC6u5gFyiLHKu+uiCyK90NBngUrzU8lJItc9ffVrH71739AUdrf5UrNZuD0dVZp3LU1kfiVt2/yYt1TzgkvXztmfdi0djfjJhpt3PVJjSXTyiZgmJu4CC8CgWp0UW0pla4BcOufR/UirCq26CIEwQU8pGkpgc5TTQqLKo74OTKQGIzDiFKQs0ZnjyQehHvPUIR3ewB3oo0iTJX0n9rzZmR9sypzFQ7snM6Xt+x6cNjHRE8sSlutEGy8laqGchkWXow86yRlwqNxC5pzWpdWKX9pj37RFcdxRt72SZ1ewbQXBxyji/Q/nd5/HkhlN/OHf/JkW8ipfQ7NuzpJbIkQEvqsG9lYcmxhPtmSy8LlcX3/QQMxUoIZFBok1LXOUYz/C9KDb1nc2j4DFWbW30ObqwIukt3bB685qh+mO56vsPUbuB6zpG1hEEEaR9RbLKritpI0s0awF1x4I3F8cTW0L1oJoxjHE1aaaFNG8HNvi1S8GlenLvDegGGZYt20tFwtCrTuowhVd2N5CZQih17qXY+RAcT+Md8+bXaWgrD5UEzaXNwUMDbvQbpH6VmDyjK2fFwmM5+xj/NrXv/3Q52WrO9naTGePYRgxf9/V0niPpRJGN8Ok4WM/lMLa8h7xQ0cb4IwhYdp5HyPHqrqXg1KHTqCaXQWWOFn9+sc5x8v18aBlR/QnmyQ5WOIt6t+OSvo3wdRhPNWK1TuVXkFMl1LSJJ70VdQI7Q4ZblkuXdPN8xyDGu4dupXgPeswGeChCZYIVxwkwKiCELRo4arFkJ3bOicZKCH2ZTJlT0/EQUwSGNLvDbeHDfgo0wSJe623LJ9qRh7YpQoDPUoJ4xhi/Ob7j+/cqYMVBe5feWOLUhJIH6J1r/hRLxBaeDM8RBAQDHSc7tsRv1KMvBFpvnnxQfs1oxFyhUuQ6qLvvECqTb6k08cGT073Ud/HMKpn3W6ivKlRnljiFUFgOHR52ZgcoptrRUXWmbBv2hKy9dT4bJpcGHNe9ad2jB1ClPWV6wBOc+eiRi1N+yaIqun88vTRwSpnKtlut3k43xVInTbe6mDni+3jNBYMXbdCTGq10JfT+R5LiH23aRTFNHaw5WMzKbHiWmspyIs1/bR8IIeT12FWQ3B/82/+gy99Is9rihI679zACQLyUPeM+Z9oEMPppFZJGXsPkLeKYr8oaktJANBbzYsKdMDNMD0EIQ14BJHuNJzu0MsTGskiwvMLDIP6kqDAgo62iaNikYjS6LyoIl1exE06mHm9KQc6FlZhWPv8E5/T0iOqW6ao2ASFSSEXeRUsLuMqEe/WxupkfH4kF04yA2Yq8laQhPVG0UeGGalSXhuYlG/KSn070NaGiROjHa/Cmw4K3FlrFbsrFdsYeNGUKlZH6rltfuy6sMyX091Dmp9+/v39+z8nU/Hz80+4P/xbPi8c3Vl8pLpAL2fG2cFqGhR5ZJWkoG6tR/n0JtMG5PmaZAQpBX7g6q+7jT/TwV0hGin8jkMwS5GTgsrWJviYVLD2IlTK0GuyyV7r3HJ5Dbi2T+c7uQfzP7IgdOAq2dPSnqVEO99ev7Q36F3Aoj7X7cbxOUi2h1hayQF3LxpZq16Hcbq8+uZ0fuZkyjCHSSJXGJFnlZI4vwujYE1gCtMNpzuor7fz3Tvz/LqsKcRA0p5sQKXtrLsG3EO/XC8sCY4cihKLLm0RUjU416b5sTn2b37jg2dDtXRppxepJN0qxHvvh1PoJ7IsBtoARWE3wuDtt592OGtNq4suBH03N4z9OLnIMzyO4XRH62FzmGvwfZhkOEfEBixGH7SA6AcLr1KjHgwqWwmPRu1YkjK47a8HXGjxunfhY9Pds+H8gFB9J287bNfHHW0oQVNXQZ9pU+2kA27WU8V4aseCr2axJ/IyH0zH97JBKJwYdbXZokCyDPOoRLJjB2INH1AI8CRQ7tv4Wd8UxxIZnY6y6sFI4hSi2qe0zbJ0gKgm+xlE8R+9Lu899wdPqf2X/qu/Zdfin1RUfGxiStS4qGCCt+WP6Uz5oVUF71TyLu5NNSASvohGzfAPE6J+aro2b8uRFkgljpY45Dwj7wgHRxQKw1iOvG8r4B6ZarTgGuCbfXjfK72wP2k+krfDBUGHncoAiKOJfMjeZFOcChX8LqZNvZrzA3QbmdRaJQpi0eCnl4njXYfzfds5Ma521dayJGmbEBDm1j1tN9+fLEDWQR+dL687U0JhQz5MJyfP4WU8PRPHYCGsKjgO70LLSBEZpQrHpqb/W3/rJ94bPtJGxpukw9Xr6Brr0QOHlgIBEGvCw72Kc4qavqM3baghv0Ono/d9dOR6GHWvxbJOp6xFHhG4EmGepo0LkwLJrCggiVxcK2RM97xrCTcoZlRctyVT1zFo8uagqF5RlqA8d/UGUhcFtapZHBQoYWgemo/7bNnw8I4Ql2o7S7BvKr+UV+dAw0vaGSy81fsKu9XgFW/J6L2j8hECJ+w/6Cbshc5reW2aEUlQTuW55m1Dm09qrTB0PVL1PHX72a/MP/LDny4bofZ/9Ld9KY5TAJBSxylC74gTWICUHjUtokMi+vauVmbdOmh7uigEOD4ike4Efb5lUmR1p9OdNMxESI/TuWlCK9ZXbAilguez5WXRCxxGOAnQjY49YUqjGqIkMK/qhONG82myt9s59XyxV6g9grcOMFiniCwkNHNhhtXuzvVUJJ0ZtBut1fgFjE7l1yreSOfGu2cO+f/eFN/FVQzwAfy+fTt+Eg/Cp9tVmbW63DQW5O+VySFlpP2Ncv5Rhyfvg8n3p/F07+NE6G/82le/9cln7mhk+6p6AwMzxnbSv1teE9XK6lhhsPcZTvP/C0HWfbFZEigosM5v+lHHSX9gtzUFMlVlFXq8nW5v2/zmCAcixHrVayaSaUI613P65HWZpVGmHMRh4+BBVeDyfVUPNij8wXv7tIfehRPQHnoIDo6UxMZkT22LG83Hm4eUO4pn0AXd+zDeIf+QPgFekrdNf2lzGNpOFLI16kLSEnZXndam3pSaXXwdK4Fxcow7mv50auyaQCCkZglu5TicP7qWd89yKdWb/fP/03/PwS7WV2esqCXBGdOQZs+0izwVmkSrOLEXbo+q7mRer2M8bdyVse/bjjp4F5wvQsZwv20XnAalZwc/aXZkRMehebqV3WZxTqOjO8UFbcXl+gTTK7cK8Tyl9eYRffs4CT2D+45cKwc/lH0LflyXV03Xi1fXeZxs0LKFKM+PbcamF2qGA2vmcIIAXHOa18uru+efbn3QMLLt6rY2nRuU492vYrRLZ6hyKK2u6dZN6ghL2irVApFk1yXEUeY8VYY28GoUuqcLs+1iNM3fX/tLf/UT/YetJxJG8J1O8aZk9fTD2fo5sKlW0N+edRx6DDqxvfBeOHLK81GOfjp7b9guky9kYjopJaLXPYD1t4eQpWPJQQAxv1ELFBKZ9Hwn6hvaZRGnh8FGxa5zxK3PbdNtaSEVx4+nu4IY37IwuEecejMtnn7HIQZZgrfRkBVUBjeDcjtcpltzaF0l4ishyPYUbqyQa0ifnSX6yM9C26M9OPsPNA+9ZrWH/S1vrbBbdeQkCfQHC+mgiTTXPhl9kxxlUQM/+9XLL/vBz6RNI1T3h3/Tp8UZQv7tokBMSXVy6RGbyYU9zRrkjfc6RL0u0LzOcHvTDP95MNCd7v6QFfXVOYgDHtLEUdgymFmPBJTj8dIFRR/rTG3gSDN0l0AO3u98fR3i1IcAY7qd7p8LAg8qiCW/VHGoJGQTjkEd6+QXsV67Lq7zpR/Gx5df9y7ig6AzfW/a8fSgWVsMAu55A2rcSUXGPq2d7t7Ju8DTUus4nJfb4zCMZW96upS8SC8qYvp41t3dj3vasEiJqjEwsPfDiCgn7vKBfIDo5iE6dhWpJ3mp7de+/JUpbCo1fVi35OA2MxopvGgFDGtMhjcrPrKg5ZQbAqPKUnPSZDoO8tXRdS1k3U5rZKsJlsrteGvRq4vRLLV1pjqPBW+21HzXWzJFW7Yt9H3nFCkHNcPN86UVBW1o9f2E60uZJajx5jpq2KYxdJgj3FFnyv+ChludAxrlgXGZ5zCKKnDRdmK3ro1hfxCVTlK9pPDFjmq8kI3A7dR5lAgJxDIe7W7iT6zjBuB7Xa3DeDqc1KFqNduDxKcg3AK2hgr9892xlw9fb1/44uc6uwH+1f/O73Zer5AvIx+gt/TDoxumcb48QUBFU92oSNV5Ayc8CsRV9ZUBT/RpCDmhd1EZqqBmy2HXpoqNGZ9gRRZHGb4KqSy50u8LdsRzp8K1VNTe7bWPUxTnZ3G4NG3zk851PWKlju44XHD4IQmXP+mss4G6kxD5jVxr8Y5Od8+Vphp7nW1CLdTG7w26yl0+9JhDiV7BrE1gbb5dc91UVnq/LSuev2HX7arOAH/mWLinSO0YfB/AuG5Hc8T+JCSAZO3gvZwu+xHfLJF2/8Zf+Tc+MV06OvemtZMJrIFAKlrqkXEdcaLENEmbH5gwUIxu83U8P2zbzKEDqRTU2LqCndP+oIUC+Uk2961ZibQFXRX53o1QeR1XvDrzAGUMpMMlLeaDZImuVMV6gxZXI0UbanpZqjEf6MBw7dXveB8BvRdswAv37e7ln5kN+VVEA7uT0IhGJBqxUchehL/usVfDEKm10MhWjeUmdF7IJnxEnAr60x0n+MYS9aB8lukkr0ib98MVjZCFws9/ffkVP/IF6Ztyaf/c/+gPOS/rLDP7L1k50mRvZGOlk6VsafRW3FMHqS3RKUK7ghcsqXwF4FYICb42GP2Fmma8NCdHUq8ZSMH8F7cCh1dVtHF6aE18qrO5wEjbLK9Xp/We2jZ0TTkcDNuuNRoSjhcNk5Gmw6DLwt6QOmquCXGmD0T9Nd3hdQiJhm2gLY8MzYroN3e6bjQmSBipj3ld3xBORWbGw62uS21KH8Y3V1/nQ67qQPrhPF9ehtDjvFnJgS39eDJuWeeatCHyEkxMTxXCX/pz//qDe6k+NqhjMlO9AxfRAERDMxDUunS7mJjO0+C20v2QrKiExiRvxjmV0HnyLUmxZyGSIh5qzrjOIGGbZyIGI7A6GX9oJHbF+E2tCxgUDAIPlus2X+Jw7lzAtMvnkpgjS1Fh8TBFG28y6/ZctKSovsihuj15FOE2cK+AmFRccgrDCGzX8sCuS/GvAQdcYuG0kBgLKBwxJdvJiFYtAMGMAtBDUzarYcESqszXnXBb1ZwARhmLJHohp7pOWt/Gkj1idD/3ze2Hv/ddpcvcvWj/7P/o3xWCGOFODi3ynPrYDW7TclfzBQ8RC1hjkJMK0XoJ/BincW714yltMiAgvYOoWmwV6eje0nKePf+04EwAPcKK93m5dAd9o486t9frjqikC+wBHro2MFemh0OR54vrx6MqjJFouh1sVA4tDQ/LhYFIIkrD4FvNczTv1N5otdRNJYRbG6HCZEIujx/5Qat2PN3frq8dVug1bWCOuAahW2/aXZkg8LdIPo6yCoffq5iJvOitpg17pkX4HZQgdeCqn+UB0Z8f/vZf/bfv3CtEj11S7Fz37D5UiFR9H9Q942JkPiucrHo2Ij/i9B+Cz3vth4empgbXrTb0jWhRsYMLT5EvifNye5RMx8IyMMp1zIA1S67FcA1pC2GhlrSm5epCrz3MHM28Kiq5/HqY2A0JtgL/sRA+QIWGdSZvL3tX2mO0vfZ/4zwHU5A7hWmuCX21In0f2zZk+U8mJpgDrn+FDWAXidtxkx7vHjoX+Oe5cNwYfA/zwpsqCKNyDVjgCO07SWZUK5pNge3u//jLT7/u13zfXo/O9+2f+x/+ofX6WonBbWc4JkpUV4+qSRYohJM9Dpb5uPyN54d9b7bl0rStnJ9ztQjhul23vO3MGgOGTVVD4l7G3FDOr7fXo/K0r6h4VlHu/EBbTZLltpFUebq9/tZwela2BZERiDrGvfu6VR2xJ7UcLpqfF5Mdv6ncKjFOVDj3PgqdkLmQdEy6wa3QbHlAo3yJpUTcxRhvt/nWT3c5XXXmkefTh4j7pNuPOt4/E2UybWYKovIr3RRBcL3FaerHOymDMSQXraM/sT5Ev2h3tTZ2VPMAcXiGH/WX/rW/8Dy+pigXU91ygtnscGBzHobehiRc/TJxGIaTzUy0AMkUU5WlpnmUeZvIwG1GM12KIEhMVYqYP+DCFkbRIMMTJc07AqA2cWn6qcVkd709huEsXzpxpSJ/sKvgbK3vxUaD62o1TNeRZqeDoCPLWnsPVc1uziydfGKk1o8q51pS92CU2pSwVm5tMiw1uG6x76JnwRuG7+5bfr8iANHHzY/fdq6PzEwMN29oBwFUdpjwOpisXjIRX8Mg2fbR0fBhjvrTv/D4a37d95V8CMz903/gV7atAs+kSxVdJIgh2DZeFYq0z3IjymuMQ95m84TJy+3NGSlOCA2+Zg3bTMxHK95dmA7YBdxlQ4xjFac65jyP053kMDzu4e5FDANR7JWWbnIhzq++SeTjUNbLoYtHwkiCBAeKNJFGtstr8quz/N6OhM64CzCWL68+DNIWX7Q9aLDUtVDll7yiUEv2UsVxks2EXIfkdXV7RffI8Jba1Hm/zo/NXtenV9CqCgOoonLF9QKImsbiDsbTC9e1cTrjXCrMSm4x+87TgzEvx6E2ramWVRz0mr76lW/dx/XxVhWeTSbr+TSua26bbl1VvG5bDtF3lP5cRT0L5+jw3IX7juIXgM8ijS2jRbgt4DVDlQNfOiY2KLwFNIuis3DcSh0nSo1KUHkV7lAMx7sX9vcSbrtynbQHlqZmuV7Aji0Xp2NGaYIkJomett+Z2kYuLOS4HRi3fJzDnuUxzDWishXDpoPJ9dvFb/NLUV11pVRsNkXo2DXtwi6kdVwfOx8ABKl03qflptYZvjIlrRNm2MGThDmvwowe6eVTfu+d87Ze43Dn/uRv+2LX7P00jQ/vjGLjDF3LOh7ujroMgudbMVQx4IYddIRhuH/xqaMmF6cwDF3b6Q/qJeW6Ldt2HcY7o18HLdyrd43XxghmxTqczqf7d/o+QkFTRxX7EbpoI0eAPnSt7hzviYHuJ+9amwgGPWhsK3OVzdSuS+nZJz7rBc7dtW073T3zvUyB7p69s+eNJG1NxWnL1oNQaOv8xJZLqanbG3JE6EcX/Lo89kOfVWBEIY9cdOPdMz/djdPJ9+N4/45vLVdP7k3Ts3ddP/rO01fwoKmSxI1o5TqxrU8xyKHLBSlL+hjU6AXXj3df/9rXH4YCkU7V722u6yrlRx+bIfooYnXTR5m3hRiw2zcgXMvEdnhR8P95GKc9J0G0KgIbWnenw0jO6dtRypHnrlHr6fUUHMw/NzAW5Se745CsUS2GqCiqFcp2O7TQN40RvIp4/pyve44iCKoQVa+CuLbrmthHlqPOY4NudllGd8gpJVcAl2zQdDiBFnQFMfq63ug6gNSbxtME6P2yVwTpDGepsWXuoicHBypQGBpg042TUEftAbw2+hjjdMcRHEnJ8UZSxku0tEBq3nXD0H/wcv3sZ164oF/t/+k/8BtKVVMYQJpz3Toa/34al9vS6yPq/ipVxSgjjxZEFXc8pgGsKwlhjT3GhdOZ/eWy6B4ytnqFBmjC7bRdNQNqds3zzPyxc4w85AcWT2cVj5pT6SDExW1opCle8iHiNNb4AvhbcjqYqOfmyC3APMrMJqnzHmMPB8Z7z00quKbThMFG6y0AqpDmvS35GhmgksTIqXdoxVE96zfKK4WQKJuqMD3I7GpFz069L03YaWw6NwhFQ9cr50BGLqKC1qMPMnn94MObbzZZ0TdZU2Qp2eOyHTHolsFcH0tdG18dUlpXEE7osY0ei8TjDUpFT5VapX6Ec0yNYShKB1ZYseegFyW+Vg3YsR3V8o9l1WFleuxDkeih6Ks1rt2TKZbBXxszxHX0xH0vWdI2b0d7qAuqWy6bsoeV9IZOp+luT7eHZ2fRafUpvLObBDJFJ04tXnRgPipxOZg3DImRxcnjB/v/Vre9LjewZNQ/jHX1GBvk9NB4JfUILaFHLHc0Jof3XUq7+KRH6eOwrbdd3Yqb5/z8+SnnXQv1r/7v/0RTNxUpKnmL2j2v8BLno+VAqQ/m4TF36Le8tG+xtsaKxf3Ie0V1ifZ3I48JmpQi1Low1HXelMUSwFvbEIeccgwRc1Zx3dbLSzsM1JeEyLJrZNtCdCO9jo4h8bCn+9hP6jX19FR9QTfLu+YV2be7Uwr5Y1vzNz5Kv+JX/kqRE9WxkSOpb5RQVpRGZZkzujK1Y3GMw/DS4EcyIgDm8n4YmgJV52gsLMMFt2OIAM1WN5A56ltWPoOn/W0ENal+RF8dNmMRc1Z7CWvQjiOjUw9wYGFgiZoBda8gNdBAYmCKi72E82aL8LGa2QBNEVQJHDEUSENbUEIwUPMS7owaafw1BUvCE6mci6IbGWlUbWJ+y7TdC0QSMNY9NbvV65BK8F6EJbmDIDW8zUyVA+oa+r/+b/7s7/7dv/7pjfA8BHkEEh27k7aidy2fkaTiENJ4GO8qToz9dDqOJi1XEcIb0cXTuu7Hcf/ik8xDpJGSSRTeAbBf4fBDhXTj3aGhraXmHABEUVjqvgk2oyujrJId1bpw3sXB/fHf9qU03yiSl1nmiSJY57RZHMaqMrEpaXujtWsZtoXQk28HIf12Fa8gayEqZvf6KqtfXHfENxrrSCEpjELoopgD47YspcjvoWiS1yzLvC1zF6eSRDivkn5vOdflesm5OBEei3aqQnYfQn+an15fHz+aL5da8/VyUZ24LHiGXhsJ9SRIceFc9ubxUt791HvrrDTSdduq2vuyrHPd6zrPjfM7IjGVCSWLLZ9S3ZWck7ZNhzX9XMmpHFpD27Ksq+gV27rq6HJybsKc0DWu3wjeyzkv8xWCWdkPqG+5rLeZfLdFrcCqTAqEHdLs77kuyy2vS8k69fWXMotVKszRrvNVvz/E5XrDaV03wLYum06TeZcp9w1BM6zEbdvWtSpZRIOJtIqJ3ezNsq0aTa5zSdlkRk7BDu4QwOOY2Rem4XvKylwiSVUUJ5B7pS6UVcFn2v3kSikljTmPWLeb/jLdI3ljvelXfcsQa7/+jdef++y7penoNI6nD7+Z93qUqoTTWfhYpZOdn165MGot0D0sl1fX1x/unTOcdMt1GE9ajdjIDefnvj/JUfr80HlEMMPkfC+ujdfn6cKgMpRqxeYJWbPqiECiBkX5C9jUxhBdzesm//P/s3+qLJed6TTrVZJKAbH6niBl3m/rAmygHY5JqjlCo2vuuvXyqCJbFe1Y9EI2CA3quJb5FViYGGw0D2eVoUxVt/lS8G0V5jpMJW+wgHRZG7WD9rQTXslZKHo9p46oN2UJ/Rkcs99Tqs2urpvM0FoTUxj/zW8/fvf3fJfIwPRwTBIIoxHjcjROFcHMnvKpKaoB+po1srF4qHVbxJbhVTk4M4UVqm5HlcLWdiChShmzqyyp+LOISwb4vmth3seCF0jnRMfQSLXzZWehCAbdqKsAIrl2TEdr/0ogOymr5ONTLCjBn2D6eqB2KVXXaYPVc/BDtjRfuk8XA+nZzQ6md5D1dojm1Bf6HBeHrDg210uMqyQbDy2vJpH4LYugZT5K86pOwInw06pVgEwjYoj+On0/WrVgMM/f/cn3f9tv/9VPH3wT172eGdEWxolpgSiZhtgKLaxlnZ9Ud2m+fs7ZXF58h1P/Notu/KbjMjzdoqKo8hpi+o0AIqkNrGlZYgFF7OP5VKs+467JNKcV4/CDSVbFM100nz/1u35AZrm4cuO5iYuiQD2xils+i340LTqmFJZOHFlLe4cbs83/RLYBlFGqGb49IU5q0jWXwc0GR2lJsJ9eNsc+PbzXOi+zdoICk8zHj9vT03D3LIhTcCJ4eKbPe0rrDK/hGNVWjsKo+rjOt1yL6egUsGOGmMjMXz+t7737YpPfAZN1uvB61IbRCQ1MJo8W+EGIW9Vng45KwVB5TxmDkAgYJxJlR9aIDDYwoRWckgWYGFyj8C8Ia5iqd5berm7Goulqhm6p0DhL7yL4PwXmr0QHUMDDHUuIQlXV4s5QaoY+E1CzHEEMC+AgUscFitM7oixYmT/ibUmlzH7UCMJsMnbdhzsrw5D7Fms9Oa5ibi7USENuBU/BTdy3zmTjRq1BksFTZTaA+bG62jB8h3Ibgv/atx8/896dhBn0hDazB/FKB8ezNsx6u77+9m4lH4e2LJikQfW70KnXVSHebxb/5xggSGxNy7RpRCiq80Lmfse9VGmmIUf0AwyIAvAKGYkMzz3P3GPZ3Kn3Yx+m+/Yv/E//vaLsYn0O0KvEirotUvWFYZsv/el8VK2OTobxSxjE96q4kwuJ3FYpWauuUGV8K7dd3GAtiJIbve8mdn6ZbyVv5xefUITbsoicA4Qq3q1QppNh8MwishTZjfDY7aowqXW5nF98utlTF0Sg2KnA+LZdS7ePZ46quH6Q42dab3vNX3v/9sM//D3t0QmMWC8HWl4T45kuyXpF5p0QEukWGb9vsZ/4JHaTHtuqIUCHIbZOIPtTPGuatqPjXoKqpOpfDAXvxOziZ+oTWlWuGl03NT51CLcVujglzViCKm/XHyoDGzsyxCvIiw8RehJmaZDYzJsWG4uDJE/waGlZHUutmCUcpqhrP52YD7bUP5GgcsbG+BswNt6R1/RMY0S4sO7o0A8kx7sLSh3t+7LrXuo4dCGwiPRGi6is+23LbVPkCx3Gvc5/49/8pd/2Yz80P772w9if7sq6cIPp25n1oBvOimpsnYLGtPkG1/fErCQFtYzj3raj9LTNfHk1TPe24SSt5DbTQa1PNRy7OLnLfHXOkUQTM/HDhuSaxpxTQytKRhXEsmDlL9e/9s//T/496+3VdP88LVvL7/PjgNOBJS4dolmDQ+s7xyjWE03qlueArU2FZmgqO9DluXVhOp1y0cG8zaKJS7xyeQpBPCIxlqRHRBdE56QmXoYmuyV1q41a5EDaedWpSWJZy2pZxTmBBT1OyoRU2OBydZ0bTkoly5ullsvv7xsfrj/0Q9+b4fFqxzK7hZgObcvok/BRif+g3gClxbPfbFQUsRB7RhCqjjbLUzfnH5vRGw2EGY6uMRq1Vg+WBKFIQDlQTCccvdMRb/XJW2Ga1TwKFHubVc1EVg5tCI53flq7Y/xvnnMYuW0ajIiOFXImyFXdSHFBLTLhvg6Dlr3tePWIeh2KJd1S/EXB0QAcux3tqmAjNm86yBXlgOt6kLBBf0qttud+aLsO7Z19Kn4a1PQMixO+qlg3f+Pf/PLv+X2/blsW9hW3NDR/ZDeycWz3KvuPcSLeyTcqz+p2m9NyvX/3ky6O3rtl27xNQLgyFO6rs8Ori12XIfb6S2Gy7HYgYuSjwzEEtr2R5FFNmEhJ231z/ahPsi5d7N8kxPwqMRlTdnZpOkbfOxAn/JoYIxp+wcAxjoTntNIu9Wf8M6AoMzHWkVAUhH8c8kd1pE6O5wcIWGm6fxAPcVnX2+v59tjCGdhtlq626XCdaEzSsIUoRqrUHM3to2+VshVOLB2TZLjr05fkm+52eXx445UyTHl+3IuyJVXN9kMI/XVtPv1dn+L1a17MZRHBNFSuEDGLWQ2iJGprO8jzTuVNkjZXaMU2i9GMISJWuyNN7A5kwSYuqTu+gsiXNQGFmLDenhoV6wKCTCPGU0qqSfLaBfYkJT6/S5caC67bc+YyuYryzjTcmOj0AD4Rk6j8YMzoubzFAFV6adp0nOOICvmU4EQy4slK4Xbgpmrtu1CzAUQGYdzQBzzyK4xAMyFcTnABMhkiIEPB70T1EJSmBjRZ1Ax8PGIIX3v/8sXPvrDEbGWmgPaYl14bxKRgYN9XfU0jaTdVe0NZEDAM7iBZNpn4XQzqN00YP3aR0qF2HOohNW3vO6WzPqi+In9SAhqk9Q3tDWSbDs2WtDsSjZjflB/cv+8P/pqdILSDRob7K1lRiyMnTnphMCdUIaksESk1xYyfXRAIlVfC8wTObY0GUu8Np/v+/Px0/3wn0k/3x6a6yGzhhGodNd2emv0IwzjPt9P5YdeNFNb5qZEFc65p3W4XMasgc/C5DyqTPSkuswzne00V1gXcsuE8jjizZyXR3OrzZ2PGlQAGgCYD9uJBKlq6lBs+M2ptdZRCp4cywFFBjbGr2tjk80prbxEV7BxB++ZMYaysvW7cmkxpEAdrujJI1S56O2zT+fpK/Z+LeIpE1h9DTQxsdbcgUpFqVNOM0uEbvgNW5lxDsIC2nYs+GWCQtkuzu4j8haFfXHBe8iFa04X0pHAEClg2Rauc7XD4YjGx0/mazZ4of8QopOCXWpdWp/LcSsGYCELw3lJcSXydNljDmq5wUuxf/spHX/rez9Sy+2GiVc3D+R2nB1jP9+86p/4KvDmZRFugFE9Js7nhNF8fg49Y306W412KClRzymZBHlbbqCVLSZMoOUdIM2kJZcUKxZzsiemEysmha+84S2KYtGb+yI991vnhqOuBPUOlJ6NaFf2QwnTAlVtljkpA79h5ui47ba87+SW1wOV3z/vze+P9s5xWsTwfXwL1LG3byfriUPHjYmwVVvPyqC0U//7Vt37pxXufatxwsCU01U9zKVlGJm1DEylMEEJBuF4eQ4jTw3Pl75aq2hf0bZA21EdJ+64OoujTUt97996ZSl2YFbRE6zsxPGVur4IkK95L7ip6HLhiaXEY5kBGVdWHORvfSXYGSsO9Cm1AVGByBv6r+lErKqTd0c931Ovq++0dTKc7F4c4jFK3oOKDKM8U4hA8NV8eu6Y1qxIIfD2nksohxyUDyXR2ShonuFZK2LODp7nzLHawO91mKpfVrji0VEAB+EhznJciY1bBiPTcqIZGxCXBye0UuIncF2DfyC0o+RmW9BqfBR9S0r8ejJy01vu+k8udAJKvf+vpu7/wnqDVQ8GHPbWDUTYwXClIDIJoHtO9D/xFEMOVv91oWqddty5rmmETOdkhgtYbjkJyWT6g3wzn+65z8N5lMRb7E4QMyHxe/x8GxKElBkffvW5pWWq6abz2V/73fzLPl9CfynrLaTZrrr1YxIjqLWForKGj7GqIdwEifjgBEXQqRVzs1AfnmtWzz48fNq2r6y2e7rbrYz7qabq/vvp27M9dVPwE/C/nolsvT82+T29oC6XcLq9bxHj9MPr+tF0f616nu3vB4pKhuGE6yTHFuSy0f1NdezRJkeiRUaL6h/HhPd2Vm1g3v/hLH/3Ir/wBG1dZZJbWHMiXdxqv8NDN3IyZY6P62AxXumDN4gEJD/wUuMS83tiWHMaUJZZfYyHVFk7ROR1SJF/okEsq2ae3BzD9Q5FzoGTgpNt2OGxL/Mk+OUiKTz5oh5ASMtqJ7Ni1aVvpZ1TRrMtsWcKOgZzEtWm2rG8SPQ4YU4mdTydCRJ5+P9/dTm/b6IVBfuVe0oFKNO+Btxx/hYTu8A98Y1AbYXiiRWDZz6Vh6IKCqV2T/8a/8Qu/9cd+uVSdse9klnoR6jKSOdvB8HeBKKBBrj6STI8kQe0aDra6qgq7dE8bnDZhIcRJ37cmPsGtDi/HsZGnlhzSxYDHV4vU8Y6iWldB7/2hUF2NpeXqoF+bJX+qBwCCXLoQ8Puejm2tTaMscsXl3ohg6+NwrsQMYvo7HjA/1mXZt9ssd1+pOyzfmGoPsUI/bfPrVkankuRu2xyiX7dtVK5jLts24C+Qt02+ygS+np4LGM1ER/a9pMZ5ETddHnUxLtfHloG0jieWNUvCHci3de+32DIWKT9eP23vvnuXtk1jbOyFbQiAtqYxWWoHEZUhzI55GmmWFDl6T8LyC6kzG8MH0qchNMpC6mNN/ZGzdYGW6wofSxM0jI63XYhEZYvqCKd1rgYBmV72ONhmqoSCmePuDAXVXy1aH3LogBWlH8ulZ+uNsnvHGBRABsMSrns1bGyVBWVldNpL5pYpdyr60XZHb3HAcAb7Tma3bxw761wtG+VgddNEtYXMTOTwzFadPZDGTgYPSF9FVC5f//blB3/wew8s6XRbkgW5Xl8752A7J4EuR9kQnfWDrI7TPAfvZZm8l4wGI/ooXfV0xqpmMjpZxx3oyZLyinLSmFIEITXvWYPnlvybQ6iIeteokY4iQFXctsvtJf7YPUSze/fv+32/YpsfD+Y7y+NLIX0hQtKwNk/MJ5K8sjpgVOfwfHYsmaWC9YrSL7dX38xJkKj8TZeLD+GNbZY0anfvrAKCJEnpDqKHFUXwTuSU3eanss4tTbDuONlqPGk1YHwnrvPt6d3PfampCsxgji7ug7egTFyUYoyZFw8rRtRnCsTusjXP7/ptue5Vsh7aeqahmKXZK9x3GjhnB1tjDortx7vCtEgdlpoqTiNuajo7K8xkrVcsRgJMDQXuRqTMlkOxH6pZ6bSl/1CcFHumpS4qdesammWiVQEW1bpowmCS5YPPg10x7kyWq1neUobBGaBmvI06EwGWW8ITvVroj7W5ILAYlOJR27RdYO83FsmK6SJcMxftlQOUCbm3uqmjnYQr6/kJEoEYhQRu2+bQBBtzX1P17eba7uvvXz/72efbcl3npzhJXhPG8+lN9e8lau3Hh+E0ajoUZP7FBE3FnLHCSkbkfjSWcyrskuvTGNQYRU4tJjHsbWcVFIYJZj63oN3RZCAMdMzHob9It9YW40nTGO59ITp/5vf/Sh0JYcyCII0Kcjs9fAJSsVcDpDEnueRpvl5eNvuhKpn2Z2+qEJJd8Mv47BN3z9/L6zrfXns/LbdX98/fE2chCztfrxdl4+x5evhEc+zbfNk2fcn59bd8ry5nW5/E9WX4klLCcNXn5alru6dXH6T5Mp3ueiifjRNxBcoQd+Mu9zypiaKmFgJ1lmst+fGS7u9iU4VUbnLhbcGvolfpUgEBejLoA5Cwmf5mWPhFex9jLPkJQ6LW6yBHurDxHNxYBAOwqJUhV1S+GjLIOAzbSss7d4jL5qrqSGAUrgIwurrGeMQHHNX+dF9yIQDKIPPKNKqZxnHV42J1Os/lj5QacMLG803ZgsYgiPOx5sy1sN86XVOIF5FiHRyWJEiiq6Mcj6CymsoY17+kAnzkjIilIu9jgwXN1CsJ/kxFPVqLvam16lZvcRkqOX/92/MP/fLvt9lFTYtzIV9fM02Kb7RHzG0kcGtox33ft1xzob9ribMPUjusy9MrzdUJv4L0L3P9A3fNXRP9ielhwwTdHZ1vdbIotistl/H0MJ6fN0E83s6rFtIrqHwvJjMNeK77M7/vR45DjDk4jy0GU882Zrog0OXgz+BCYzIlmVsRuS489o2hcRfis09+seviNr+uuyYpy9OHLkbXhevLb0pdQJhXzSkOd+Js+kE18bFvtyeR5pPK8TDe1zTjXq9ZhiqusnZd74dhGE47dIjr5UOtd3SxdvVKYq8uBUjVzglCr4N3H75avvDFzx8QUHvOGGgFy7ETfoPL3y6GgkxCKTmUnt8RQIiWX+l6ECUKjA8bl2VzAbOp+9FJIC/SQc7YNvVR4jIF5NGPrsbDM4PEIII/ur5dt4dlJRrT02Guqji65aoLLYuPgEewDImty4/DJIxVoHRULaozDA8FhAp4c6qk3jFh3mF9tRBAhBrjf0pciAoYL0uF1B6CCmiIMzBoUsPsHXvA0foSSYTPlxYulwnB2kGsGwPEQBW2dQMx9sPdnaZynR+H8RsfXH/oh79Ukjp7TyjJmzFoC34wPbxTd8gjNC1YHS9VD2ktSewjHn7XTw9AY82O6782Zjyrox/Evfd6DhUTsV6v0hjH5Antu4Ju1asYiZTeDG902BMoDiqqV6VY/Mnf9QNK7IBWEftRG2hA2+H8MJ1g9gXxU5k83z37JEk1cp8bT3fz00d+GJ998nvwJb+u82wRIDJOI+VlOt1LDhfHslw8Mtl0u27LU9kWwONWaOnpWdtqktWF0IY++Fj3IoIKbubwj1RGlJxODy8IV/OYdYadpk8xCtXGSU1OZRh6IbnNcdmaz33mk+u6HNhmWExQP96p5RTduu1wmND/bVaQTHl2vF+EKTVKHxL7yDjBnKDmkyNrVJVAA4PJOSXkp3mlxdCZLbftjgDMBmCQ0h83hr6UTOlhv6xs6GxcL7mH/JzVpXmhLt26Lk3Wuc7nccLgu4YAkcNmWEx/6EZiaPlslgosC3j0x0TQVgig8lyx71hz1t0eJARPy82hF7OgeDY1PCyzQsIozXi9Ac8pDEy7ME1cFFohnVfqowbkR6pVHPiuZj/efeObLz/3hc8cR1mUDOvfrH6hxnllvfYANaJy+TgyHHAerl537GxLAbjz9dWbkmk8P1N0YVnTstpxI71rXurRAUmZ+UoTx6Fm8Hoft+USXLden3iwqay3tFwFYZXKNLBhGhB97IVs/JX/zR9Ns5Sg3G/Hen3px7PTSn0a71/IplTbkSjPOCmoNEpB5/qpPSqMvF3Dl5yGh3cja8Loqet8S9vtbUCV8Lsmc9IXvY/aaBmt07MXby4QZVwehQKy74JL9CvD/TPUQkLo6nrttEZbBQHtevnrOpe6RUqFhv6IBjG75ljWm5c4aP7qB/nX/OofqKlUwRfd5enV+eGZGkdY1DL6g0Y8PXtPL+l2GU93lfJjwwG8l/SnNUMEC3HYze9AnhQiDrCU+Q1gLAwidifjpy2gT6UthMTPhww4b1vYESOwHv65gGptb5jPDZ4/ab1N9+/WkiwYNM+XwjHYdLK+tgxTc3XmkvTS49dqBPSGtkBILEcf4XaVmoeP6jtdfkwGmVeHnYejZVEy/1qw9bzZHTvfHqNOjZNxuzWokm3ofb68VFJ/f75dP+pjb8yx69Nj35tJjIqJv/MPv/Zbf8uvmW+XMCBUd7JDdDG86TPj3fNj38fp7mD3q8tn6FZXIltCv5dkPAFjlPt4ijHKsD6ntFz7uwezkNLP1NKNYsNp0vpc+DU+fAcHxFGTMLqjCZ1P63VZrifB0FOjjkRSaT2Vv/C/+Gf3be7PD/b1GqcmWm27U7+4a050nO4eHl99ey9VgGvbMj+SZ8t0/45wrhA6pgS328tput+Wm1dQ6vOSF2yDj+H84jvZGWl5QoAiatd2u+7seLAdDAjmp366l4N5GFJaGhXf6l+UAyOnOxqAqgKA1cM4Mm3reg3aY0fsRxh1+3q7futl/eW/5pfVlLGDPuIwKDYvyPY5xIgdtDH3mrxuer7zLYqMriNVt5NqoaprFKikl5b00Bh9NZFQyKV2GKRqDEzjaIWTU4L84fFBsosL1ZuWG9EBLXazvmkIiweQa5iCdaJ5LXcPn1y3K2XGBi9D/HqBgzqhMIZC66c6R1V5da219cg4fEx5g0cbcH9Qi+JaVfe0+0RM48aj2U5z9BoabjtzD6mK4b2Ls+mHtusE+OAgpPWktu02nO7TuvTjRFup6UbfD5ukHa6kHPqRSulIRZ3V3/o3f+b3/O7fPM9PcitBICbXsMPzkCFp6r5Yu3iifOvFpJQizK3zI/D6RqIHqDQI7vXy+Gau6uIg+tBRu/1Y5F4xmrsEWwjlkKl/zF8nRJk4bdsyP0oNi8GeTJuFQ4pJH6e7NzfAH1ufXnZOPdP983ckQyGoP6XkSCQXWAYnLC2LgjNOzxiRFh+F4NaPXZmCNq6miX6YgpihqxMQhSOIBmrJB1fQ5KPgBjsGcevHk45L+Hrgle12u+W8GhyOMaM7+AzITYppi6ru9L0ftRZxdJTicbl+5F3c0Np95ZvLr/rl35PyfhDdWzWP4x4bTiK0gLgzvZLyFVTd4yV/tLumvq45Em5ZQUqiWTEWObsg1CItt344VYxSECJ6lEFv0Te8JSc9N2ZJ6nJDEAAvtBWVLgAFXaj1Edpp27bqXnaaVMBKACvcc9BDnq2V5Bj1nmaMfq1DsxEVhq6/wGtg7ALV0UHpqDrMtE0qL41QoWx3sRN4sH4jih1/+HmIhCcQ5qXZXy86minuLXmuCs6FS6sueQsIcB3cZiyBjWtgf/n+E//gDRfod13np/nVR1EEXi3NvFz3vMTpXnPxvHlNuORjvC7XMJzlu7jMoal+en7sarfW6+tjB3IAWthktCpQdbp7t9Ys3WzX5v3Iy6Xtuh4RtvyYQbdSTp6cxeH8AE9XDe16fYUblzQtcvo6PXf/zI9+mgCrYFhypzFwuj6+iv0AtbqJSvtp9OTHk1oxnb5+ON3ndQmn59N0QhzkKLG2frpTG7fcxF7m7kvzhYH8YgiA2Sp1TV0ur3fiCtfLq+X6GjoxmkjdeHdBafJ9iGax1DVG4zYU34WPIyunUnap5pdlP3RaT9NzlOMyt3m6lU9/12c7kujrlghjxGmeGMVtuTbYbVtcoTGHMW2th5PIFS/8qAQeCmIxWBg6CJKzQDBlR4vbbCOmBsy2A/opmJMSx23roQHG3XT2o/JuaPJQYIh45zXg6zwAgCGbcpGQYSAWpWFyIQi3xjnPWB8YzkFELMaliZZUIq4v5YoPKPerXDl06NOYU1A0O7oqRJ4gTmkR9IFZqvfagfJSxsIWzCMyTlshNSvOVxPuXJAfXfE/FBLKHMg8Bzjj9/0b77/65Cfu07acnr1L/MXs1DPcB2XXeuxQh6Jc12a5XUXjvz3qoNxmqcPSvMt9aNFh/exdF3qb/Zk/KSCmFtFeNzgu+3T/zIXx8uobx36M073DWFuHJuObRnXH7eDJ3r34zBscUiegbl39cv/pP/xjTd374ObrK+f0UEXYOrJrGjWLXbs9fXDUrW0PwfNahKmP8kA93b9o1qeal34YSP45nR6eCw+HVKezGR+O8XR3NMfprNSJ7igQX7IB52rS882yr6NiuMW/EJ3o6YO2FnMvHp+94zpdbVEYi4TyHX2B19B26JrDyY/nIXivSarbPaZdfQyX5fjcGzKcIjmO4e5Ut2U63zEw97hZDd4HFmhSpHEnmDg4KKKyoZ7Ldh00rM3woFVhB+dYH92AYAhgrJei3HVk67ZRHAFLS5EE/hAgFk1oEMfYS/Uvn4/pdGL2JOJJpzLdpfnSj5PZv8UhhOGkc0dHgPNqjMemYfzkXV1nr/3RiVGiQ7ftxxPNhnzVW9ScMYYOlJTJHo/MBfB7p0LOqz5tGXoEtc4N2WrMBA+d8PoY20w5+rpocCa/JQX9B36zNswmICTGabqTTN77pmuG4SSp0KicLy2h2H35y6+++wsv9pQPsQpEQO6k5hB/LvbSrwv/kB1BnE6To5cax/M0nUuaNbJoG68vnlXfzI9kRh0C9AYZIb5hE7XtcVK+5euuETjaHnkY7+M4CPbCznkcR41fIAV6OQA0VZy0VJbLeHcf8XkPfWz/x//kl2RD5ftcdh+j5bt0fkDvoTyiGKdlWbAdPkBCp+PIEqqScdAPg6odF6yhyaVSc5cdFWwbYro9He0RfQjUQuuqHx4j2cOd29R4BEwNcA5qoZREn4u4IhIxHO58mr769Y8ent/vpERRcDMllTBKOa2RuQaFdIYVk2o5oB6NZsghyfYwbCtm862H/7O2XRmmqW26lPNOMbNjsx184+V3qwOabrI1YS6yKlD/tkl51RiAPDlDAsYhzvNGoLKPPqy59NElzjBQf/EAcyqn0whb4uhj6NyRS2c+FPq+XRvkItn0vinYzcOQE09n3UofItiReIKxD2b5rSZAYz7pTvshWqrptu3tkcbTsKVD15JCc2rshHusqQ7DkNYnUf6wzy+JAaLp7FDIqfE7di1E1auYinbNt18+BaegRSwAg7qyskGDiI4ge08+96zB93Lq496GlLdxGFsxX1ri7qUM29vaR8UqkyfkbrcbRZ07mthWCRqLJjMes2HeVSvFqZpJ+a0PiGZ80+TdmBcapB1rKhSGPdYPR0qiMRpVToMC0fty26lOa+1J+pa7sD06ub62f/l/8U/t25pVHE8Z4pqnrVbBQJhgKShduiCQvIu1rp0P23ztsF0W09h5DdE6ARUaheatEYUmPH30bdcdQvr36oTxjP14Uu+7XNpdZCaROjtZEgmddeaovBASioG0G/YsfOnh3U/8xb/0d37Lb/zevGVtURs9iYagMIsDHOPA0wdqg0awrc3mfa96gPaio09QbBvWzbvYTYpxR/yuokV2q9DooDj7Fr8gNSFE/5qNWQdrF92gFMNCErwjRFE3i5hCrmXus8G+1C/ijzqEDbGscxc61ZkMYJ1kAJBXSB7dKWyarPCpiOrSGju6cCjKXZdRP9Z9pz1GllIyiymYcVUYdb0IIoGwUJa5HtW+gvOePkHCXJsld/wIiEz6C+wqtrQ5WHGmNMzD6e4f/N1/9Kl3Y9e2w/lZSora7dDLQxRwYZgcDUmQufKioWfNB2k/ZmcukkiQoXd3yJWodSjit3W4e+har27byymoD/CC2t10W+N03w3nst1gUvlDD1OrFEtfJGYM8lC3GMuxapUNAzxZT4WzMxqS66MlCQiowGoXrQsd8Z/8vT/SeQ1H1Lkga3L9CQKzevMNg0QbbSLLVhxXXRdlCYuUajxE3ddxOKvd0w01UJnfJNhhpoZGVoOUy6uP9px9nOqxb1lN1RvmnEbrVTxDxRs6hZ4XxYu8Cn3ccvIyHHdf+cq3PvOpd6SaSXlHPSNUct2ANNPBMVw2VYQpbRlD2V30qSWnVeEOnVdyIFOyIvH3rJ5hb+qeeZje3LVazjRlMXXapdu6NlSi4P05rQuLc1Uvtyy72WEyMFpnUbJvt1ve1l206iblLa/avV3ol9u1Qu5P22LqbB23UIi3+ZrXLe+StMuTRlYDUifi9LoVUbwEuJWkC2pb1loEQxn7pqbU4YxLVpUw0vIW7O/m27XaSXjsiFG0XdO6CbBeBetJR58T58CBgsUf+hazYLotQY2WlL5pu1I1+PvGt7797DR2w902X/XAJZNaidYUcUPPs+bb08t1fsq5xpPyB5R4Lg8Oyc+XWTEtUkflBSYIuy4M23IrpXaKdCgWoChOXi/wtwu97EcFPPQJd+uyrfr827LMc4N5AhL+utwu4CmkjMBPqzmvlw+b1oNwSLRdRINaoGms4hrVvCeFCZW9af+V//4fwDGitK5Hzy3q9oGmGrx5VNcsqtlNtwaaDxuGtzRAndhIRZ/G8ugJ+d8Jw5tff9A2Rzg905UnEW17lNWFKW/Xzveq1CdJZDIems0BnkBMvCy7yKanTGrv3/v0X/7X/+6v/mWfNFQQq6ZYj9JCFVAqCR9Ynclx6Dpuu8LmNl0fVK224BdLMZrJdxhT0iaXz56xG1qne0BTIcw/MLQ5CKnZt4SJkIhmlAFQDI4DnEFsWY7xhjHY5jqqBufxF9KBohaioyxs7OjaGUgVmNnk0gmp6sCgsNIfJz1DTm5iy9qytwal6uuQBaICydKEhN/3H4ewH3nbvGbwupMtbY17rODcX5q3aXmB2gwit2aaW8XMmRHE2jGuhtaKBy1P4Bd/4auf+cTdYbJC742rgo9eC+K3yTglbWqwrI93Hb27+CxYZtRGswyRVqBcdKjwfCLwuKSkbmo8K2ZXpq5JwInGhmNTlcWNIb6Wo26eMATXaftxbw/TM3wUi+sC4JWhHVprtciiGH64CgcoRlJ9mIFD2xR99unk/gN/6FcVjhlje1fFLOvZUes2Rvdjet+bnsgS0VWBUQWXbUXGr/oj5+1jIZXKtzeD21z3LD37kyiyGsyMShzS45F8dp2fZkVD78GPKH2VMKRra6dysZJEdWH5+tc//OwnqNA6tZk2B1BtwC0sFax4cqJwWzqdGUAwOnWc01UD5qSTw6HdzotUwg6iZs6KgoOItpmxF4BJa/znVge9eKCCzKGddsJhKb51NTcOpp3vWpBmh7iimoIC5Rph6LWiu1c9o13Ka+iALDtQWubSoaG/JfzGN9UujfWgQqg584n4/2GbUu/qMxNwrbMTf0JxigSik86uFwpfsO6m1aRpwE3RSiidB2kljMcb5cGp7D3RTpdjbzIgx7c/eLq/mzRyAhrWPsfinOtMVn8qx2Mf+hPDH8U/onRpzKNhOj1vg5rxx1evvGtkNalGedQSV+7WSY6RJXmSqhvBbtFFr0813DnnRG6TiGKSgvTQVRH7mEvtxzOu3cXMy1DY6LpEuOwCA2ZOFuak261kkjPFNKz4xFKb/tEf+wIW0JyZPjaHqvPmgEN+gOgRptCodkwdblkq0ZL+mk3IvfB7BLGgTpLqdRarMz+9Vqc/nVveW1qXzrV9P/nhjPy+dC0euphy7HIsqiTOywslhn48K44pp2WYhl/86qsvfu69/vxCXRBDPuy2WTBdEzBFk8oEuqxRdvVJnHiXCuMgBdaUoITF+4N/ALFm1eBrBbuhw1JPIWXCS8GenetNrEFgG8JpUd/0a1Pc9KbSitAu210WqfTWhEIc8rELI9lB4uwJwGm0bUCHThYQJJINKfBal+bCiVRWf8pjT4LvkCO+ssMsWkRIBGBWicHEzFQFuPAyeQzjKfjYMBoj5jCZfbyOKyJYFDxFRrp9NS2KoLaKgZucKge5JjcffvDq7iTF/ai32ZWjMCI/iXqgAmCtORut2iFwcWGMQ399fO1gLh7OMV/a32R1CquZzmG4Q7GzGKM7jqd+ui85j6ezkPHro+vafrhXLYZIQrc9vjsVFmcLUcW5wKRowCttk12N71s9/36vutNwYLhA5VyhDsq+BIprsJFFFwb3J37n9zdyglA+vaK6fTA3d9VCR9Z4iN4IghTMdbB6c5iHmFGjGuUcYxBjEOMNWcpwW3JzHeP00AXBbrfHDxX/ADAnC04RHHzFx0aLTBeL0ps5dKsmA3GUfWN//rmf/frnPn2X8Dgx/BurbtQqMNrhX1QOx13ZGaRsyAaGyDRaOpBBPCAkMSl6XgYoyUSdj2onfsUxV4Sfbd2hGXKYtaR2ClMyZpE2AmePFjq8S1mwtDpRPSZz0nMBFOy6KpuyrruOXs0E4Udw5cpQLJnO06Juv5MlQcO920LUFNz8ifBHUv2AVst43ZY8Z1bJnPtR3K8IB5sYOeQTmiT6PjatEFzUfyJ0WYiCJQ2bKQ7sN68bo7O0RnWWH33w4alX9akSRXaiUxjP2+2prDfXD83RTqd7zOI141ulDzn21o/jNN4/D8MJmdfSRzEgNfG1NBYfx+Hkx9MwncJw9lG/nZb+ENB598lc1rJtcej9cFJruy3yUEK5ppYSSluQT2hn8zuuf5Vk+25sYpdKiqDDIQwujnw7FQ2AUaOSTWJwf/r3/LBe27Z1sTcfKCKdSTzqJwFrAl6EUuhmkA9oOJ2fMZGnQJQhlBwCifeWAb8NL4GVxe/r46k2CoHSjKMfGjziLcu6kfjtGAXHniQm9pr3GF2+1XqadQvCPf7q1z/8whc+qVdSyr7D5WIkoHvfnCXZUhCeCnPWnVDblcRyF/jrqt62tHZVh1bBtcToamRgspIogLG3VOkbJc+1dYWme1sWMJauls0in71w2OyYO2Jnq+fT6EtaLeaW21PXqYBpg8qOA0iUGBiqyWaHjpp1g+/MoVTaZpKIZRQlI4zxBCSKwj3AD8UbC+ezg7AMqnYTplEnHWxmMlcKh73rQn/QYtLsOdqZDDVaoxH6cikqWyoG2qdCGnQkMfD0wcund5/fNbCI03rpMJ0e7l6Ecbq9+qifhowEp23U2VuRvaudX5QmOMRdBcnkhhH3HT22Fqe7kgWX6/ZIqzjSKelon3TtpLIN072yA5NmERtBq72YxdUBEFOzNZIQjkPfT0iXoj79oFjyJITQRQ2sEHiTckmUNZcq0G0Yzy6M7k/97h/udEt2vXeNQwcs0LOtlVInw0hB/8E0XgXLpqleq5RJFN0aDfqevMsMbK5T0AwqhukBT912vb3ShE99WzCxNl0NOkP0HGG666f7ut7kgDkMRdaNg5umo+i0+9lf/PrnP3WXC85w2v7F/NIgNhP8uJdNRV465AwHvsErESRKYgrGiwXZSWorEQ9cHR1bR6O1bbEv25qxrUg1qAdRler42eZhOhOuqKFHWre8XkCsVToP/Zjl7EIrmVbfepGn0yLLp9YRctoyegNmgcxtDmd0pV7IXXuk+QkgWMYWmhuqT+hEVWTQSluTG/w1G8Y0vKDEFtY6N5ND84A5csZ6nqhpvEDg5hm+vaZt0UXHR8wrZmcY23AWaG4qGBExA/q7+u1vP44ht3ImnmRK1wmxpWTYREELcb4+mSmq6eIEBuqYF+9zmefu0I1tgvr+JE2jfE0ur/tpKstNt/F4fuOSlvMqAgHWKQdJZz725xefDcMoVWAct7TKzEsxb35ZHluyZOCoAz1X5b0jz9cw1zMZENsFp1ftagwjgKejDM+P6uLk/uhv/UJeLiUXy11C+9NSITWqDi3kNogNwqks+lGMI1GOE5N+WIoiMy3GRwcXPnGnt8vt1Q5XVNOxTY2OA/RgHCmaYQcQ0Urdu+b5KuGpGSs4ECH1i1uI4Rd/6YPv+vRDxzDIGEE+WA0g76eIQVrLkWBYhBOzo9ORhlUEM38yPZGexfHebK2MIvKG1A1nWCKSHaLlblMuSoVa1pqkJ5ZdVClq/ABjeknbdURF2IXiSm1zCFSWgoYOnKhNXGJOnUXlwXKdTnc5a8xHFwRLqu+9lwRC9d/ppDMID0tcVvE7bpDPE++OERjlpS4a3ClJlcVoNnSU8oGLAlHYgC0R1T1224zt1GXueHpGo2raUBz/AYZN6Bu9bv4ew6wPX13euT8dTZNyGe7uWoXAQs+UdkwV6Xi6j8NJCO7lqZ/E7UGu7cveCDYazpvWmAp4MJmxc0oefPmNXzq9+GQYT2VbpH1VqTPF8/NSK+MO4c1pfsy3a+c1O3sT7D5MDzhwJtU1mur0mLWIQ6CzOfR4LtmppBKUqkm+6AZgFp2n3ra7Ltv12v7Z/8EfMno08iKx/8zOslHSDKlSnLFsrwJ2plgtLTudbShmBHF2VkPDab1B5T0fplryA6MQIT8EGK6ui65t5mXWTu0nnfrjqcm54nDYUkx3Su6/g3u89PH0V//6P/otv/57RCrMqYpztwuxlUrLtCcCAbF8xM27CN41+Z8x2A5qA7aBWgIahmwKOlBFZ52Aug6wEcQMh82WdQz7yChg0xEqoHqCV2gByN1Rk+WCqXWWnijqI1mmkETVW9AzFGQiionuL2LfLW9GEHDjtA+lFFGhWJPJNTG1vdlDduQCEXfAUWol1H4YkEF1JNqiBWhzBx9vezTAADNq1cuVA1xImqXsYiU6MbTZIJ1G/v0EgzWab5LDGJPTpP0Hf/9nvufz7zqN8DXOvzx+FNhsROYoqwo9AZ4CWp2Sc2zLjRP3LOf3y1Mr87I7wfDLbZymo/Xjwzu+89enDzvxhd+Vpem+GxajwceynN95b71eWt8N08Oy3HpCGc/374h5IHsluR/ksgRHZr3u5Mfgx6Zz2/yIuSIosARJWBZg67Ytt+Cl+Qr9kGCDuv/Qv/s3Oo2FQ4YHrwJRDl3XtJVeJGFJGc3uBn3TkVIGc1B8aqt1rSkGqmr5MamQDX0cZd/ZD6dmb0Lv0exmfav12vm43l7VXZ2oKRWEXq/LW4esPb8xf3Y891Lh0oShn04//wtf+/R7w56T+iP0JfaCjVjrKLewo+oqzFj+M8NsAnJLLfabsZGRpJOpITWDPjqGuHBXG/a5ImcE6QSUX8IiJQ3FcxN6+UG3oP9EI8SEuGQ6BxwkjNdR5Q4WgpyOCIxAn4XvuUkN92wRElRireMMqQ2oVM4C39D+Ubw1cm82z5/GGXNBz9PmuKz+zdvPBFGqZaP40afDIRDnd4jQ5mSBblIT5A7M2vZYQxdZ9oIwODQOL+Q0t233rfdfPj+JIFix/lTCZz/qICRj4W3TxaPYj7KSYBnGUXhRWXXedx04u3hHwyROtU6Qkr1yCZ+7eErzo4Ib+l4tk49pvfTjuXUtJunit+0yK5mGScqbzjuCPW9vEpM4v8hvbtsooTDYDzlah7rQXLnl0LKmY98n/SiBaRo1HE3opzc9wPfVsjvQA2O9iiCpXzzBoAmr0yRXn8aGwjrSGsmmRA0jk7VF09V1yrV0jSZo8EwWwZr4p6Jp5u5TmrS6+L3kMErPFobTdPciTuc4nvRT7t9xYewEBnfL0+tjVyH05a+8/+l3z0JdKXhtNMF9kjEMjrwGnLych5RkOUItrQhOlKBbnTPhe9RkxMXOgj7VGQdDVDpE3xaMz9cB/+GxcI9FwBahRjrzLKiHwbP2g/aWBDtMUQ4Oql7blZBfaE7qC3Mt9O38NgBiwappscqzQaSr/LlaBELgTFRIFG6AAvs+gk15tOC9MUydORNCiVEtGAfNO2KoqBapg6vRFqh2OhIHY+cA3+qmlyh4ucgbwZKJ2cNpuan8C+4y78+f3wczFba1jg1WjGHLxe66GBUuqnLXIUkL4+nh3advf7UJQwOLjut8cbHvpVqsXNXVeBDD6T6OD6Wkjh5cwj1yGKZnn3SShj1Np7v92Me7Z3XfLx9+Y758SK/4EIdedHQM/IjXV7/DVAdrAn2Jt07mOyPF5fq6JInssrbWHvuT+xO/64cdTrFk8Rkpv7ioUCCZ1DWNBEFtm26X/u4hifOjfYJpXtWkIwt1TvNFvJm0VMkaItPctY1Dk9fldlGC4qQQvih5qNSGSMOjzVkwV5PZG0qakOYnHGCiohflGPBiON399E9/+VMvnFB2uoIW4M9YyjtYU2c0elU4Cf0ho3Fyc1lVqn/ExqNmg9bXGBMYSnJnCiPKCRvTJpV9+rHBzEChqTa2L6Sewcm59VxHXezsv/GzDrI4ainj+b6kLWP9h5dKC9OmmcbTOl+BcbzOCf4YhigDI5RqJoTjeOYuaUz7C+Zsss9lR0sgeJtTwMBcR/1zYF2DYXXD2hJHSDxtIXvGZXTCnUVHQxnPbYPDzawpBd0UyUKNug7XmdPdy5eXs+yCdBzUbZFMMUQ4fBUNlSdrY1exLRf/+6N1T9/+xpuwQ6XRVF0CFmcYVEEhxbs+db73vl0ur/rpnOZrETAdw3h3u7wq23VLq3CF7Zpzfnjn07frpR/H5XYTDfkNQdj36+UxRudETkuA5qKNiJTy+EHL2+f8yubDvW23Ybq7vZm6arI67lUTEqmlY/9GEPPHl8tLvUkvJB6DgEMfFOmd1hO294JQyT9lDI7rhizvHKYei0jwwAjHtrWilCpLkLR+DW5HhGNlu8isQLiCM3uclua968e+n3KRlmB5fCXVQYiXx2+/4W2rm5Qe7fQv/4t/6Tf9mi9AqgtNd6zr4kS5yAFxiXmY5ZKGOK3rDYqW2xkoCjSwakkp0GMGqdAfMSuEKsNT8PWiIoAgQAbpzowDhG+mVHVU66fRWqkEsoBrNQ+7rTxVN/Ay+h230Io7CGzCYHif5edBF8vjdBYeCrGD/MmgSt3rwgEerThVJYAjdWyS3WG+grswWjD90k/zPmoQKU/FwLha0z1QGoEElNRa8UaflO7DjwqPgvAC3WAoy+xJRMYxhd5RxvxHP50Z7Igz+xM//lPf+/l75nR95y1h2YZoLlcVRj50+w5AANhq5oJhONUjN1WPMw4nPAIxXc7ZjUPDW/BxKvs+3j0M/V2u2y66VE63SzxNxEG18+3V809/Med0bOtw/6KWDHH6rgn9/PKby+3p/Ibfr3nF2rl+z5u5BIT+hMv0rdV93hET2PWxT/h8ybHBi/jc9tMbW5QfEbqM3anGg5QuAvBujyXPVFE5zTcf1FD3UiVLm9JPSsuj6C3LfAVj3g6Nrnrf+eXykXh503l8+ISPw/XVt6IPhwuu0bxYPbdk6UKC/HRWq+D8oJlDc3DNt8Gdnn9qT6sSm3thpl/58tc//7lP6vDTi9y9dtV5PJ07N0hgIcCGJMCmiwO5/h4tH40LyV8OdAsnjCJ2kOBz3N6w2RCpAQv51VI/tO2rPqg+7l7CMNokFScRNajcKt2+cfMAxSKJUqdlpTZK3VOLaVNRlzzqvHGeXTaJqpKlnSeX9rAjX53rXoi8Hcz9z6O9olSVILMBz7bdu1fSgret1szgWQaPEpVjE8SpDQQBh1UoGd+ipMJk8rCAWqEonfPj1DWtl/nGs1ZY+0mGpHnlJtwUPXi6++Cj67NzcOOd7zroND3CfNH5unbH5LDXpNb3lD5nWb6NI19KR3NLsap2bjxpE09n2a65MN69wFRKWPPt8jJdRVNTnel93iSJVqV990xPo+SUlK8BFJzaMPb92N+9U9YlrY/T6dmmnLXh6Lr+dJ/mJ9RIXcN+G87PmNMPYbjbj6pGggtbrOSma//a/+5PHXgvIzkXMLxeXqkmG6ZcLC3ZZkPMvMS0rYqFuHzonUINRFsdRr09VLTz9VWYngW5H41l22gcc4utPTGt8UhrE6KIaySCxP5uZ9Vvt4tzYbm+fIMrl5SiaEy5bcQbmU7P/tpf//Ff9SOfbSyMf1Ni0en+mUpG2citp7t30npxsnt4lrcbN1jYiU1e50va1ul0Vh/ASlpmBMS5WHA03Vs8dkjF+Ovjjy1wSeo7GbKqJrbceZS4BfCUzQB73shtemcpmSXWJk6vWXHIA0z/y3x13r0ZhPfTfZbaFSO4MO5lUZEKKSjXJYZTQx0jOlPGwlq/3G7dDDMyMp/Nx47GhyghXnBf0qz2qWsN6WLbjxmiipO/6iUMp2G6q6WSof1yPD1v2mZ+/EinQ+e26xNe05phXl+/eREvAJGFmvzEj//05z6h3EaZhoxal9FbJg16NFGe9DxFexGKKjQo1+PIqyfX3rLp3xyL2IudS93AnblCa3pz2M2vv+17uSBLVcCUKjLI17muIzz4YRA7WoVuxYJ5vV4+iqIMxaZDRdEeFTKY8Ellk4p03ciGsYmK8n/UhbbvZb4M98/wbpLGP07n9i/+L/8ZGbnFyXXNuqxHTRhPF+CXhxBlroYymqNOU9iATrkrdXN+xLY6jdPp6LyZT8kR4ukjxc1iOqhPs21NuytBpO7D+e7YFawQacyxK169i6360exaPy8XfZe0+CZU/ak4jec/9xf/9o/9hu/LRXDtrvI9lO3qwiiLrn5K6xy7tqLZy+s19MM6z6Y9EMCCvNDRJMgICHmhXt6aat1Ae1T5yIerbL5Vz2pTbEfYxH44QBOtOcu10oRFw9pKDgB2s0xbGbgUm27ZmdcBsZOl6clVX8PwphL9dlAYum4MO1yI+so47ajQ1HGhwe3bEZ5q/VoYTe50Ebq46GVh8aOXb2nM96JLc+jP6ozbJpPgDVWOWANmDnaDbfM8THdrWnudlBZpU+Mw5pS64ESYHXWKqyJCr/P3fuIfvenBxtO5EYYxaFClz3YMgvt6PJvVaOJYGAoZnjGSrY1wp5P11SCdcejX9RrlECqm9NE2arR0bD801bhXqAvM/6vtZBGLHM+Hcb5+JBV4PyzLTR7D+o6dzsp+vD3JsaELQy9++C5Leu/un39yvrxSdeCGTiW9MBh6eIhbPmy31344tX/hf/bv3W5PmtV3h5XCw/kFqhGhSNv86IP4/b6flPiCrK0DRRLSMp6cvKOTHpMLb2Apj2XAMNyjxdzNV2e8e6Zxbxvy/HQ0Rz+qVsnrTQYQy4XcrVnLNKcyX9oYtXbdmMuc5uub2cc0nf/Cv/aXf/Wv+LwsDuDt64S24D+TbjAfcMMgWAEw/nDmdF20piW1kZMFcyKMaYez/nWYWu/LPFugQd1WBm1VZDXUhCLG1n0YxrIth7rkCgQVQC1NrdWIclPBFgFzjJ2x04i38NH8cCcdjDmLVTEFK0V9I9B8NBIv0HPDMMCnkjtVzVoCO/NylCvgvP2QbhcZsDLWwWXDdEsAPU5+OMM41ZIKOarrNpP8lRt8Wt/eJ63vIJw2JoWJ0eGs1vFmdRYsV30U9f26l2rTxOD//t//+S9+cljTNo6jSvbpGRqS8cBWPkOuNncMiMNqI83PSeobeJMNu1q3h1rLQ5AlUndNgp0Z9+rtwqs/vNG8o5h2uquDzH+UxJW2us3cmR7yhcI7Q+i1u9J64Na43V62bS/SBBW1tNZqwZMPw56WXVSd8fLqAyKQa3/3ov1X//u//0grSXbj6cUnjlK368ssg8RVpxfzRbHFjJFS8/z4quZ09+6npLG6PWHoa5krjT1WNdqSYwo+aruw3V6ZULBB3j8rH2BM0lPHXTu7L4XgA14IVHqfRArfzDJpu752Mfytv/UPf92v/p4QJ83w82aBLhomYGeUbk+4bjmiXenRyV7mdYuWJ6ogTKecVwBwBlkMIFqPyYKiQpXVQ+UiuZeWO8EtNQmGt8wFYUoE4Sg1Z7xTbBECdRVFLVRn09PhrM9foJaGyY5KcOolU1e29C192q6uixQzALtI+zGeWQXUto6WVChWWmQVI1iPa6Hlh3wcvy6LKEYWWUW/j5bbZbIxrZW0qVDhKtjZUVYQQmYKMgrf5Z81gJELTyR7uiQ5yGLHUn/83/4H3/WO00GmGmZKarWLJnFwSn0/HCnpj1Q6PIaAvF8tQbEnNGMlMwGpV6e2Wdid5t/TKd2uGtNOd4d58CspbG33Q31F3lRWOb/dXsdejNFMZ+hjBNL2cnPam7RdpQ8uBW6lmBEgz2qi1mVu99LFfr68Hs8Pmi8xeuKvkg7rTQn0TwkYLipt16tCHct260KP0UNS4d+2/f27iMU88oXSELEEjVER0/fPnq+yZLvblleds2gaUVLf1HyhP+ui6PskQVZuG6caVFXP7L0n6bF2nVzQBLZss85aEwnCGmKkmod+/Ot/+x//6G/8gUqciWb2+M3LQjCMjWvNbVgZREcTB9LDBYDKimLPmXiFZrh7secqEKZstjHgyWEz6hnQwuVnpNiZI10LeZ7oavwxGSyZzxQlju5sfYw0q3j1reg3/Gas9QSKBRnNsyhBDlrnSbDTx6iHlBKBeY2l8rT7Hsbzqim4bzsVLZKtiNpOTa9WRH54Nv7d2z2oV95kZlqkGjEGgz5e1xL1LdaQHFmKhr63x5dmayn1Ke2EsE45iN0o06KDL1jU/R8h9vP8OMmoNDMPeTMJ/sef/8T56FpVj524dELQQ8xpBV2J0nabGxccQRtRC3kbJkkaSG+UfmV8JowhLZ3TMff2GEK633pXM5IdUTm8ZlXbiv9XZpSuwlKDEX1aXzb5iBnCS5/1gty+I0nqTTdas02+hrvnohuuF2ssa14xd7rdP3ymHkV9///p3//rohxhVzotSxokQlAxmr3zTaptXR4l1e08s6fa9+HoWECtnFZzqkaqadSgQKKGUBBocEtZm7IRrtgVjRWPLpx810BmaNblCWrSdHl6fT7fNfQN63I7Dk3+SF3O03n8mZ/5pc9916e5Jy0ufN+2PPR+P/SUURr0siBuxfdc5q0R39WXorP+INFK149QF60hwg2p110sZQ6dr4eS5ENwe4MdSKcamrzAs54G+eH4LmnanJIsWAV9uGZbc9Pi58MUrZikSwZVpEZjaOyDRFJ99G3L1By/K6eXp9MdClZTNUCsh853Jb+bwg8MVP/paEMp2zBOmtGTCaA2uk2uG5IYr243YsYuMw6Kog7DEiJdMHvGqiNr5oedMfnSwftoNkSyJGm7cegzUSt7yah8sAjxqtW++tUPnp/V8mDXdwhbVC0lwaG5ZCutrBzqvCHkak4HGkVS93pgyOdal/baCHM7rbeLF+X/1MlyOKaSo3cp7W2TQ+jXlLujirgGUelQdbk7FVTKUNyrGstmFzBEvMDt6NxRqpEjm5auqVTSS1xNpXXiNR2t39W2+ZZPlvOa19swTP9f5VQlpCTO5GQAAAAASUVORK5CYII='
export const robotNormal = 'data:image/png;base64,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';