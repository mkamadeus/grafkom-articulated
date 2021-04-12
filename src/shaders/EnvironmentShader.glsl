precision highp float;

// Passed in from the vertex shader.
varying vec3 v_worldPosition_2;
varying vec3 v_worldNormal_2;
 
// The texture
uniform samplerCube u_texture_2;
 
// The position of the camera
uniform vec3 u_worldCameraPosition_2;

void main() {
   vec3 worldNormal = normalize(v_worldNormal_2);
   vec3 eyeToSurfaceDir = normalize(v_worldPosition_2 - u_worldCameraPosition_2);
   vec3 direction = reflect(eyeToSurfaceDir,worldNormal);
   gl_FragColor = textureCube(u_texture_2, direction);
}