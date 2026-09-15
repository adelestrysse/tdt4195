#version 430 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec4 color;

mat4 matrix;

out vec4 vertex_color;

void main()
{
    //gl_Position = vec4(position, 1.0f);
    //gl_Position = vec4(-position.x, -position.y, position.z, 1.0f); for task 2d

    
    matrix[0] = vec4(1.0, 0.0, 0.0, 0.0);
    matrix[1] = vec4(0.0, 1.0, 0.0, 0.0);
    matrix[2] = vec4(1.0, 0.0, 1.0, 0.0);
    matrix[3] = vec4(0.0, 0.0, 0.0, 1.0);

    gl_Position = matrix * vec4(position, 1.0);
    vertex_color = color;
}