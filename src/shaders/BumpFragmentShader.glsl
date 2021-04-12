precision highp float;

uniform sampler2D tex_norm;
uniform sampler2D tex_diffuse;

uniform int show_tex;

varying vec2 frag_uv;
varying vec3 ts_light_pos;
varying vec3 ts_frag_pos;

void main(void)
{
    vec3 light_dir = normalize(ts_light_pos - ts_frag_pos);

    vec3 albedo = texture2D(tex_diffuse, frag_uv).rgb;
    if (show_tex == 0) { albedo = vec3(1,1,1); }
    vec3 ambient = 0.3 * albedo;

    vec3 norm = normalize(texture2D(tex_norm, frag_uv).rgb * 2.0 - 1.0);
    float diffuse = max(dot(light_dir, norm), 0.0);
    gl_FragColor = vec4(diffuse * albedo + ambient, 1.0);
}