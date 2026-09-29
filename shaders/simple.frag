#version 430 core

uniform float time;

in vec4 vertex_color;
in vec3 vertex_normal;

out vec4 final_color;

void main()
{
    //vec3 col = 0.5 + 0.5 * cos(time + vec3(0.0, 2.0, 4.0));
    //color = vec4(col, 1.0);

    //color = vec4(0.13f, 1.0f, 0.92f, 1.0f);

    vec3 lightDirection = normalize(vec3(0.8, -0.5, 0.6));

    float light = max(0.0, dot(vertex_normal, -lightDirection));
    
    //From task 1
    //final_color = vertex_color * light;

    //changed the final color to differentiate color on terrain and helicopter
    final_color = vec4(vertex_color.rgb * light, vertex_color.a);
}