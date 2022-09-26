/**
 * @fileoverview Defines dice web worker.
 * @copyright Shingo OKAWA 2022
 */
import * as Offscreen from '@/utils/offscreen';
import * as Frustum from './frustum';

// @ts-ignore
const worker = self as unknown as Worker;

// @ts-ignore
worker.document = {};

// @ts-ignore
worker.window = new Offscreen.WindowDispatcher();

let animation: Frustum.Animation;

const context = new Offscreen.Context();

const handleCreate = (data: {
  type: string;
  id: string;
}): Offscreen.ElementDispatcher => context.create(data.id);

const handleInit = (data: {
  type: string;
  id: string;
  canvas: OffscreenCanvas & { [k: string]: unknown };
}): void => {
  data.canvas.style = {
    width: 0,
    height: 0,
  };
  animation = new Frustum.Animation(data.canvas, context.get(data.id));
};

const handleResize = (data: { type: string; id: string }): void => {
  const element = context.get(data.id);
  element?.dispatchEvent(data as Offscreen.Message);
  // @ts-ignore
  worker.window.dispatchEvent(data);
};

const handleEvent = (data: {
  type: string;
  id: string;
  event: { type: string; [key: string]: unknown };
}): void => {
  const element = context.get(data.id);
  element?.dispatchEvent(data.event as Offscreen.Message);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleDispose = (_: unknown): void => {
  animation.dispose();
};

const handlers = new Map<string, unknown>();
handlers.set(Offscreen.MessageType.CREATE, handleCreate);
handlers.set(Offscreen.MessageType.INIT, handleInit);
handlers.set(Offscreen.MessageType.RESIZE, handleResize);
handlers.set(Offscreen.MessageType.EVENT, handleEvent);
handlers.set(Offscreen.MessageType.DISPOSE, handleDispose);

const handleMessageEvent = (
  event: MessageEvent<{ type: string; [key: string]: unknown }>
): void => {
  const handler = handlers.get(event.data.type);
  // @ts-ignore
  if (handler !== undefined) handler(event.data);
};

const handleMessageError = (event: MessageEvent): void => {
  console.error(event);
};

worker.addEventListener('message', handleMessageEvent);
worker.addEventListener('messageerror', handleMessageError);
