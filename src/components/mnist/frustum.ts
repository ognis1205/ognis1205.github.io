/**
 * @fileoverview Defines dice rendering.
 * @copyright Shingo OKAWA 2022
 */
import * as THREE from 'three';
import * as Offscreen from '@/utils/offscreen';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import frag from '@/assets/shaders/dice.frag';
import vert from '@/assets/shaders/dice.vert';

const easeOutCirc = (x: number): number => Math.sqrt(1 - Math.pow(x - 1, 4));

export class Animation {
  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  private camera: THREE.OrthographicCamera;

  private controls: OrbitControls;

  private canvas: HTMLCanvasElement | OffscreenCanvas;

  private container: HTMLElement | Offscreen.ElementDispatcher;

  private request: number | null;

  constructor(
    canvas: HTMLCanvasElement | OffscreenCanvas,
    container: HTMLElement | Offscreen.ElementDispatcher
  ) {
    this.canvas = canvas;
    this.container = container;

    const light = new THREE.AmbientLight(0xcccccc, 1);
    this.scene = new THREE.Scene();
    this.scene.add(light);

    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(self.window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );
    this.camera = new THREE.OrthographicCamera(
      -1.0 * (h * 0.005 + 4.8),
      h * 0.005 + 4.8,
      h * 0.005 + 4.8,
      -1.0 * (h * 0.005 + 4.8),
      0.01,
      50000
    );
    this.camera.position.copy(initialCameraPosition);
    this.camera.lookAt(target);

    this.controls = new OrbitControls(this.camera, this.container);
    this.controls.autoRotate = true;
    this.controls.target = target;

    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    geometry.setAttribute(
      'side',
      new THREE.Float32BufferAttribute(
        [
          0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
          5,
        ],
        1
      )
    );

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );

    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 1.0 },
        zs: {
          type: 'v2v',
          value: [
            new THREE.Vector2(0.27015724778175354, -0.5928173661231995),
            new THREE.Vector2(1.1476703882217407, 1.600296020507812),
            new THREE.Vector2(0.36016106605529785, 1.4387712478637695),
            new THREE.Vector2(-1.33907151222229, -0.35306602716445923),
            new THREE.Vector2(0.8575431704521179, -0.7637208700180054),
            new THREE.Vector2(0.6303218007087708, 0.5764791965484619),
          ],
        },
      },
      vertexShader: vert,
      fragmentShader: frag,
    });

    const dice = new THREE.Mesh(geometry, material);
    this.scene.add(dice);
    this.scene.add(edges);

    this.request = null;
    let step = 0;
    let frame = 0;

    const animate = (): void => {
      this.request = self.requestAnimationFrame(animate);
      step++;
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const pos = initialCameraPosition;
        const rot = -easeOutCirc(frame / 120) * Math.PI * 20;
        this.camera.position.y = 10;
        this.camera.position.x = pos.x * Math.cos(rot) + pos.z * Math.sin(rot);
        this.camera.position.z = pos.z * Math.cos(rot) - pos.x * Math.sin(rot);
        this.camera.lookAt(target);
      } else {
        this.controls.update();
      }

      dice.material.uniforms.time.value = step / (60.0 * 5);
      this.renderer.render(this.scene, this.camera);
    };

    self.requestAnimationFrame(animate);
    this.handleResize();
    self.window.addEventListener('resize', this.handleResize);
  }

  public dispose = (): void => {
    self.window.removeEventListener('resize', this.handleResize);
    self.cancelAnimationFrame(this.request);
    this.renderer.dispose();
  };

  private handleResize = (): void =>
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
}
