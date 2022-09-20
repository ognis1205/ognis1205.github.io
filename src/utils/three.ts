/**
 * @fileoverview Defines Three.js utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as THREE from 'three';

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

const copyProperties = (src: unknown, keys: string[]): unknown => {
  const ret = {};
  keys.forEach((key: string) => {
    ret[key] = src[key];
  });
  return ret;
};

const MOUSE_EVENT_KEYS = [
  'type',
  'pointerType',
  'button',
  'clientX',
  'clientY',
  'ctrlKey',
  'metaKey',
  'shiftKey',
];

const WHEEL_EVENT_KEYS = ['type', 'deltaY'];

const KEYBOARD_EVENT_KEYS = ['type', 'keyCode'];

const TOUCH_EVENT_KEYS = ['type'];

const TOUCH_KEYS = ['pageX', 'pageY'];

export abstract class Proxy {
  public constructor(readonly worker: Worker, readonly container: HTMLElement) {
    this.worker.postMessage({
      type: MessageType.CONSTRUCT,
    });
  }

  public abstract configEventListener(): void;

  public dispose(): void {
    this.worker.postMessage({
      type: MessageType.DISPOSE,
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
}

export class OrbitControlsProxy extends Proxy {
  public constructor(readonly worker: Worker, readonly container: HTMLElement) {
    super(worker, container);
  }

  public configEventListener(): void {
    this.handleResize();
    window.addEventListener('resize', this.handleResize, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('pointerdown', this.handlePointerDown, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('wheel', this.handleWheelEvent, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('keydown', this.handleKeyboardEvent, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('keyup', this.handleKeyboardEvent, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('touchstart', this.handleTouchEvent, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('touchmove', this.handleTouchEvent, {
      capture: true,
      passive: false,
    });
    this.container.addEventListener('touchend', this.handleTouchEvent, {
      capture: true,
      passive: false,
    });
  }

  public dispose(): void {
    super.dispose();
    window.removeEventListener('resize', this.handleResize);
    this.container.removeEventListener('pointerdown', this.handlePointerDown);
    this.container.ownerDocument.removeEventListener(
      'pointermove',
      this.handlePointerMove
    );
    this.container.ownerDocument.removeEventListener(
      'pointerup',
      this.handlePointerUp
    );
    this.container.removeEventListener('wheel', this.handleWheelEvent);
    this.container.removeEventListener('keydown', this.handleKeyboardEvent);
    this.container.removeEventListener('keyup', this.handleKeyboardEvent);
    this.container.removeEventListener('touchstart', this.handleTouchEvent);
    this.container.removeEventListener('touchmove', this.handleTouchEvent);
    this.container.removeEventListener('touchend', this.handleTouchEvent);
  }

  public handleResize = (): void => {
    const rect = this.container.getBoundingClientRect();
    this.worker.postMessage({
      type: MessageType.RESIZE,
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
  };

  public handlePointerDown = (event: PointerEvent): void => {
    event.preventDefault();
    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        this.handleMouseDown(event);
        break;
      default:
        // TODO: handle touch events.
        break;
    }
  };

  public handlePointerMove = (event: PointerEvent): void => {
    event.preventDefault();
    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        this.handleMouseMove(event);
        break;
      default:
        // TODO: handle touch events.
        break;
    }
  };

  public handlePointerUp = (event: PointerEvent): void => {
    event.preventDefault();
    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        this.handleMouseUp(event);
        break;
      default:
        // TODO: handle touch events.
        break;
    }
  };

  public handleMouseDown = (event: MouseEvent): void => {
    event.preventDefault();
    this.container.ownerDocument.addEventListener(
      'pointermove',
      this.handlePointerMove
    );
    this.container.ownerDocument.addEventListener(
      'pointerup',
      this.handlePointerUp
    );
    this.sendEventMessage(
      copyProperties(event, MOUSE_EVENT_KEYS) as React.SyntheticEvent
    );
  };

  public handleMouseMove = (event: MouseEvent): void => {
    event.preventDefault();
    this.sendEventMessage(
      copyProperties(event, MOUSE_EVENT_KEYS) as React.SyntheticEvent
    );
  };

  public handleMouseUp = (event: MouseEvent): void => {
    event.preventDefault();
    this.container.ownerDocument.removeEventListener(
      'pointermove',
      this.handlePointerMove
    );
    this.container.ownerDocument.removeEventListener(
      'pointerup',
      this.handlePointerUp
    );
    this.sendEventMessage(
      copyProperties(event, MOUSE_EVENT_KEYS) as React.SyntheticEvent
    );
  };

  public handleWheelEvent = (event: WheelEvent): void => {
    event.preventDefault();
    this.sendEventMessage(
      copyProperties(event, WHEEL_EVENT_KEYS) as React.SyntheticEvent
    );
  };

  public handleKeyboardEvent = (event: KeyboardEvent): void => {
    event.preventDefault();
    this.sendEventMessage(
      copyProperties(event, KEYBOARD_EVENT_KEYS) as React.SyntheticEvent
    );
  };

  public handleTouchEvent = (event: TouchEvent): void => {
    event.preventDefault();
    const e = copyProperties(
      event,
      TOUCH_EVENT_KEYS
    ) as React.SyntheticEvent & { touches: string[] };
    const touches = [];
    for (const touch of event.touches)
      touches.push(copyProperties(touch, TOUCH_KEYS));
    e.touches = touches;
    this.sendEventMessage(e as React.SyntheticEvent);
  };
}

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
