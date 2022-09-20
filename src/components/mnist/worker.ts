/**
 * @fileoverview Defines dice web worker.
 * @copyright Shingo OKAWA 2022
 */
import * as THREEUtils from '@/utils/three';
import * as Frustum from '@/components/mnist/frustum';

// @ts-ignore
const worker = self as unknown as Worker;

// @ts-ignore
worker.document = {};

// @ts-ignore
worker.window = new THREEUtils.OffscreenWindow();

let animation: Frustum.Animation;

const manager = new THREEUtils.Manager();

const handleMake = (data: {
  type: string;
  id: string;
}): THREEUtils.OffscreenElement => manager.make(data.id);

const handleInit = (data: {
  type: string;
  id: string;
  canvas: OffscreenCanvas;
}): void => {
  animation = new Frustum.Animation(data.canvas, manager.get(data.id));
};

const handleResize = (data: { type: string; id: string }): void => {
  const element = manager.get(data.id);
  element?.dispatchEvent(data as THREEUtils.OffscreenEvent);
  // @ts-ignore
  worker.window.dispatchEvent(data);
};

const handleEvent = (data: {
  type: string;
  id: string;
  event: { type: string; [key: string]: unknown };
}): void => {
  const element = manager.get(data.id);
  element?.dispatchEvent(data.event as THREEUtils.OffscreenEvent);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleDispose = (_: unknown): void => {
  animation.dispose();
};

const handlers = new Map<string, unknown>();
handlers.set(THREEUtils.MessageType.MAKE, handleMake);
handlers.set(THREEUtils.MessageType.INIT, handleInit);
handlers.set(THREEUtils.MessageType.RESIZE, handleResize);
handlers.set(THREEUtils.MessageType.EVENT, handleEvent);
handlers.set(THREEUtils.MessageType.DISPOSE, handleDispose);

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
