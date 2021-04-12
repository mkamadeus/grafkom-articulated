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
    material: {
        ambient: [0.2, 0.0, 0.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 100.0,
    }
}