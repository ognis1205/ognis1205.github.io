/**
 * @fileoverview Defines WebGL utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as DOM from '@/utils/dom';

export const isDefined = (): boolean => {
  if (DOM.isDefined()) {
    const canvas = document.createElement('canvas');
    const result =
      !!window.WebGLRenderingContext &&
      !!canvas.getContext('experimental-webgl');
    canvas.remove();
    return result;
  }
  return false;
};
