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