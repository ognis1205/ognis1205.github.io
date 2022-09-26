/**
 * @fileoverview Defines Three.js utilities.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

export const isOffscreenCanvaSupported = (): boolean => {
  if (typeof OffscreenCanvas !== 'undefined') return true;
  return false;
};

export const MessageType = {
  CREATE: 'create',
  INIT: 'init',
  DONE: 'done',
  RESIZE: 'resize',
  EVENT: 'event',
  DISPOSE: 'dispose',
} as const;

export type MessageType = typeof MessageType[keyof typeof MessageType];

export type Message = {
  type: MessageType;
  [key: string]: string | number | (() => void);
};

const isMessage = (value: unknown): value is Message =>
  (value as Message).type !== undefined;

export type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
  right?: number;
  bottom?: number;
};

const isRect = (value: unknown): value is Rect =>
  (value as Rect).top !== undefined &&
  (value as Rect).left !== undefined &&
  (value as Rect).width !== undefined &&
  (value as Rect).height !== undefined;

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
  public constructor(
    readonly id: string,
    readonly worker: Worker,
    readonly container: HTMLElement
  ) {
    this.worker.postMessage({
      type: MessageType.CREATE,
      id: this.id,
    });
  }

  public abstract configEventListener(): void;

  public dispose(): void {
    this.worker.postMessage({
      type: MessageType.DISPOSE,
      id: this.id,
    });
  }

  public init = (offscreenCanvas: OffscreenCanvas): void => {
    this.worker.postMessage(
      {
        type: MessageType.INIT,
        id: this.id,
        canvas: offscreenCanvas,
      },
      [offscreenCanvas]
    );
    this.configEventListener();
  };

  public sendEventMessage = (event: React.SyntheticEvent): void => {
    this.worker.postMessage({
      type: MessageType.EVENT,
      id: this.id,
      event,
    });
  };
}

export class ElementProxy extends Proxy {
  public constructor(
    readonly worker: Worker,
    readonly container: HTMLElement,
    readonly id: string = 'proxy'
  ) {
    super(id, worker, container);
    this.configEventListener = this.configEventListener.bind(this);
    this.dispose = this.dispose.bind(this);
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
      id: this.id,
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

export class ElementDispatcher extends THREE.EventDispatcher {
  private ownerDocument: ElementDispatcher;

  private top: number;

  private left: number;

  private width: number;

  private height: number;

  public style: { [key: string]: unknown };

  constructor() {
    super();
    this.ownerDocument = this;
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.style = {};
  }

  public get clientWidth(): number {
    return Math.round(this.width);
  }

  public get clientHeight(): number {
    return Math.round(this.height);
  }

  public getBoundingClientRect = (): Rect => {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setPointerCapture = (id: number): void => {
    // Noop
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public releasePointerCapture = (id: number): void => {
    // Noop
  };

  public dispatchEvent = (event: React.SyntheticEvent | Message): void => {
    if (isMessage(event) && event.type === 'resize' && isRect(event)) {
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

export class WindowDispatcher extends THREE.EventDispatcher {
  constructor() {
    super();
  }
}

export class Context {
  private targets: Map<string, ElementDispatcher>;

  constructor() {
    this.targets = new Map<string, ElementDispatcher>();
  }

  public create = (id: string): ElementDispatcher => {
    const element = new ElementDispatcher();
    this.targets.set(id, element);
    return element;
  };

  public get = (id: string): ElementDispatcher => this.targets.get(id);

  public has = (id: string): boolean => this.targets.has(id);

  public delete = (id: string): boolean => this.targets.delete(id);

  public clear = (): void => this.targets.clear();
}
