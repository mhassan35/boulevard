declare module 'vanta/dist/vanta.birds.min.js' {
  import type * as THREE from 'three';

  type VantaEffect = {
    destroy: () => void;
  };

  type BirdsOptions = {
    el: HTMLElement;
    THREE: typeof THREE;
    backgroundColor: number;
    color1: number;
    color2: number;
    colorMode: 'lerpGradient' | 'varianceGradient' | 'lerp' | 'variance';
    birdSize: number;
    wingSpan: number;
    speedLimit: number;
    separation: number;
    alignment: number;
    cohesion: number;
    quantity: number;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
  };

  const BIRDS: (options: BirdsOptions) => VantaEffect;
  export default BIRDS;
}
