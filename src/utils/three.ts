/**
 * @fileoverview Defines Three.js utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
//import * as THREE from 'three';
//import bind from 'bind-decorator';
//import createWorker from 'offscreen-canvas/create-worker';

export const MessageType = {
  CONSTRUCT: 'make',
  INIT: 'init',
  RESIZE: 'resize',
  EVENT: 'event',
  DISPOSE: 'dispose',
} as const;

export type MessageType = typeof MessageType[keyof typeof MessageType];

export abstract class Proxy {
  public constructor(
    readonly worker: Worker,
    readonly container: HTMLElement,
    // tslint:disable-next-line:no-empty
    readonly configEventListener: () => void = () => {},
  ) {
    this.worker.postMessage({
      type: MessageType.CONSTRUCT,
    });
  }

  public init = (offscreenCanvas: OffscreenCanvas) => {
    this.worker.postMessage(
      {
        type: MessageType.INIT,
        canvas: offscreenCanvas,
      },
      [offscreenCanvas]
    );
    this.configEventListener();
  }

  public sendEventMessage = (event: React.SyntheticEvent) => {
    this.worker.postMessage({
      type: MessageType.EVENT,
      event,
    });
  }

  public dispose = () => {
    this.worker.postMessage({
      type: MessageType.DISPOSE,
    });
  }
}
