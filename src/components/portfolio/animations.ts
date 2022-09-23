/**
 * @fileoverview Defines animations.
 * @copyright Shingo OKAWA 2022
 */
import { keyframes } from '@emotion/css';

export const rotate = keyframes`
  0% {
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }
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

export const lidScreen = keyframes`
  0% {
    transform: rotateX(0deg);
    background-position: left bottom;
  }
  5% {
    transform: rotateX(50deg);
    background-position: left bottom;
  }
  20% {
    transform: rotateX(-80deg);
    background-position: -150px top;
  }
  25% {
    transform: rotateX(15deg);
    background-position: left bottom;
  }
  30% {
    transform: rotateX(-5deg);
    background-position: right top;
  }
  40% {
    transform: rotateX(5deg);
    background-position: right top;
  }
  50% {
    transform: rotateX(0deg);
    background-position: right top;
  }
  90% {
    transform: rotateX(0deg);
    background-position: right top;
  }
  100% {
    transform: rotateX(0deg);
    background-position: right center;
  }
`;

export const lidBody = keyframes`
  0% {
    transform: rotateX(-90deg);
    
  }
  50% {
    transform: rotateX(-90deg);
    
  }
  100% {
    transform: rotateX(-90deg);
    
  }
`;

export const lidKeyboard = keyframes`
  0% {
     background-color: #dfdfdf;
  }
  50% {
    background-color: #bbb;
  }
  100% {
    background-color: #dfdfdf;
  }
`;

export const screenShade = keyframes`
  0% {
    background-position: -20px 0px;
  }
  5% {
    background-position: -40px 0px;
  }
  20% {
    background-position: 200px 0;
  }
  50% {
    background-position: -200px 0;
  }
  80% {
    background-position: 0px 0px;
  }
  85% {
    background-position: -30px 0;
  }
  90% {
    background-position: -20px 0;
  }
  100% {
    background-position: -20px 0px;
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
