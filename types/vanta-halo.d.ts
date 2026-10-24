declare module 'vanta/dist/vanta.halo.min.js' {
  import type * as THREE from 'three';

  type VantaEffect = {
    destroy: () => void;
  };

  type HaloOptions = {
    el: HTMLElement;
    THREE: typeof THREE;
    backgroundColor: number;
    baseColor: number;
    color2: number;
    amplitudeFactor: number;
    ringFactor: number;
    rotationFactor: number;
    size: number;
    speed: number;
    xOffset: number;
    yOffset: number;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
  };

  const HALO: (options: HaloOptions) => VantaEffect;
  export default HALO;
}