/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module "*.glsl" {
  const value: string;
  export default value;
}

/* CUSTOM: ADD YOUR OWN HERE */

interface Model {
  positions: Float32Array;
  colors: Float32Array;
  indices: Uint16Array;
  material: Material;
  children?: Model[];
}

interface Material {
  ambient: number[];
  diffuse: number[];
  specular: number[];
  shininess: number;
}
