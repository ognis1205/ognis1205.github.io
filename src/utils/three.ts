/**
 * @fileoverview Defines Three.js utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as THREE from 'three';
//import createWorker from 'offscreen-canvas/create-worker';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

export const MessageType = {
  CONSTRUCT: 'make',
  INIT: 'init',
  RESIZE: 'resize',
  EVENT: 'event',
  DISPOSE: 'dispose',
} as const;

export type MessageType = typeof MessageType[keyof typeof MessageType];

export type OffscreenEvent = {
  type: MessageType;
  top: number;
  left: number;
  width: number;
  height: number;
  id?: number;
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export type OffscreenDOMRect = {
  top: number;
  left: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
};

const isOffscreenEvent = (
  event: React.SyntheticEvent | OffscreenEvent
): event is OffscreenEvent =>
  (event as OffscreenEvent).type !== undefined &&
  (event as OffscreenEvent).top !== undefined &&
  (event as OffscreenEvent).left !== undefined &&
  (event as OffscreenEvent).width !== undefined &&
  (event as OffscreenEvent).height !== undefined;

export abstract class Proxy {
  abstract configEventListener: () => void;

  public constructor(readonly worker: Worker, readonly container: HTMLElement) {
    this.worker.postMessage({
      type: MessageType.CONSTRUCT,
    });
  }

  public init = (offscreenCanvas: OffscreenCanvas): void => {
    this.worker.postMessage(
      {
        type: MessageType.INIT,
        canvas: offscreenCanvas,
      },
      [offscreenCanvas]
    );
    this.configEventListener();
  };

  public sendEventMessage = (event: React.SyntheticEvent): void =>
    this.worker.postMessage({
      type: MessageType.EVENT,
      event,
    });

  public dispose = (): void =>
    this.worker.postMessage({
      type: MessageType.DISPOSE,
    });
}

//class OrbitControlsProxy extends Proxy {
//}

export class OffscreenElement extends THREE.EventDispatcher {
  private ownerDocument: OffscreenElement;

  private top: number;

  private left: number;

  private width: number;

  private height: number;

  constructor() {
    super();
    this.ownerDocument = this;
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
  }

  public getWidth = (): number => Math.round(this.width);

  public getHeight = (): number => Math.round(this.height);

  public getBoundingClientRect = (): OffscreenDOMRect => {
    return {
      top: this.top,
      left: this.left,
      width: this.width,
      height: this.height,
      right: this.left + this.width,
      bottom: this.top + this.height,
    };
  };

  public focus = (): void => {
    // Noop
  };

  public dispatchEvent = (
    event: React.SyntheticEvent | OffscreenEvent
  ): void => {
    if (isOffscreenEvent(event) && event.type === 'resize') {
      this.left = event.left;
      this.top = event.top;
      this.width = event.width;
      this.height = event.height;
    }
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    super.dispatchEvent(event);
  };
}

export class OffscreenWindow extends THREE.EventDispatcher {
  constructor() {
    super();
  }
}
