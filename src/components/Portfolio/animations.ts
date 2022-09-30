/**
 * @fileoverview Defines animations.
 * @copyright Shingo OKAWA 2022
 */
import { keyframes } from '@emotion/css';

export const rotate = keyframes`
  80% {
    transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg);
  }
  85% {
    transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg);
  }
  90% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }
`;

export const keys = keyframes`
  0% {
    box-shadow: 0 -2px 0 #222;
  }
  5% {
    box-shadow: 1 -1px 0 #222;
  }
  20% {
    box-shadow: -1px 1px 0 #222;
  }
  50% {
    box-shadow: -1px 1px 0 #222;
  }
  80% {
    box-shadow: 0 -2px 0 #222;
  }
  85% {
    box-shadow: 0 -2px 0 #222;
  }
  90% {
    box-shadow: 0 -2px 0 #222;
  }
  100% {
    box-shadow: 0 -2px 0 #222;
  }
`;
