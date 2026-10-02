#version 430 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec4 color;
layout(location = 2) in vec3 normal;

uniform mat4 transform;
uniform mat4 model;
uniform float animation;

out vec4 vertex_color;
out vec3 vertex_normal;

void main()
{
    gl_Position = transform * vec4(position, 1.0);

    vertex_color = color;
    vertex_normal = normalize(mat3(model) * normal);
}