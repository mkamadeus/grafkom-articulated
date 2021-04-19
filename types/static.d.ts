/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module "*.glsl" {
  const value: string;
  export default value;
}

/* CUSTOM: ADD YOUR OWN HERE */

interface Model {
  vertices: Float32Array;
  uv: Float32Array;
  material: Material;
  normal: Float32Array;
}

interface Material {
  ambient: number[];
  diffuse: number[];
  specular: number[];
  shininess: number;
}

interface ModelNode {
  transform: number[];
  render: Model;
  sibling: ModelNode | null;
  child: ModelNode | null;
}

interface RobotModel {
  vertices: Float32Array;
  tangents: Float32Array;
  bitangents: Float32Array;
  uv: Float32Array;
  normal: Float32Array;
  material: Material;
}