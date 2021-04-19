attribute vec4 a_position_2;
attribute vec3 a_normal_2;
 
uniform mat4 u_projection_2;
uniform mat4 u_world_2;
 
varying vec3 v_worldPosition_2;
varying vec3 v_worldNormal_2;
 
void main() {
  // Multiply the position by the matrix.
  gl_Position = u_projection_2 * u_world_2 * a_position_2;
 
  // send the view position to the fragment shader
  v_worldPosition_2 = (u_world_2 * a_position_2).xyz;
 
  // orient the normals and pass to the fragment shader
  v_worldNormal_2 = mat3(u_world_2) * a_normal_2;
}