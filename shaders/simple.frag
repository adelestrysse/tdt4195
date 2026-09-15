#version 430 core

uniform float time;
//out vec4 color;

in vec4 vertex_color;
out vec4 final_color;

void main()
{
    //vec3 col = 0.5 + 0.5 * cos(time + vec3(0.0, 2.0, 4.0));
    //color = vec4(col, 1.0);

    //color = vec4(0.13f, 1.0f, 0.92f, 1.0f);
    
    final_color = vertex_color;
}