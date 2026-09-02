#version 430 core

uniform float time;
out vec4 color;

void main()
{
    vec3 col = 0.5 + 0.5 * cos(time + vec3(0.0, 2.0, 4.0));
    color = vec4(col, 1.0);
}