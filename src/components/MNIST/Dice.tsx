/**
 * @fileoverview Defines Dice.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Container from './Container';
import * as Frustum from './frustum';
import * as Offscreen from '@/utils/offscreen';

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const container = React.useRef<HTMLDivElement>(null);

  const canvas = React.useRef<HTMLCanvasElement>(null);

  const worker = React.useRef<Worker>(null);

  const animation = React.useRef<Frustum.Animation>(null);

  const proxy = React.useRef<Offscreen.ElementProxy>(null);

  const startWorker = (): void => {
    if (!container.current || !canvas.current) return;
    worker.current = new Worker(
      new URL('@/components/MNIST/worker', import.meta.url)
    );
    const offscreen = canvas.current.transferControlToOffscreen();
    proxy.current = new Offscreen.ElementProxy(
      worker.current,
      container.current
    );
    proxy.current.init(offscreen);
  };

  const startMain = (): void => {
    if (!container.current || !canvas.current) return;
    animation.current = new Frustum.Animation(
      canvas.current,
      container.current
    );
  };

  React.useEffect(() => {
    if (!container.current || !canvas.current) return;

    if (canvas.current.transferControlToOffscreen) startWorker();
    else startMain();

    return (): void => {
      if (proxy.current) proxy.current.dispose();
      if (worker.current) worker.current.terminate();
      if (animation.current) animation.current.dispose();
    };
  }, []);

  return (
    <Container.Box ref={container}>
      <Container.Canvas ref={canvas} />
    </Container.Box>
  );
};
