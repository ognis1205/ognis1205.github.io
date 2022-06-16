/**
 * @fileoverview Defines cuboid vertex shader.
 * @copyright Shingo OKAWA 2022
 */

precision mediump float;
 
uniform mat4 modelViewMatrix;
 
uniform mat4 projectionMatrix;
 
attribute vec3 position;
 
attribute vec2 uv;

attribute float side;

varying float vSide;
 
varying vec2 vUv;
 
void main(){
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
  vSide = side;
}
