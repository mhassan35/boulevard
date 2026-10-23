'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const ringX = useSpring(pointerX, {
    stiffness: 900,
    damping: 48,
    mass: 0.12,
  });
  const ringY = useSpring(pointerY, {
    stiffness: 900,
    damping: 48,
    mass: 0.12,
  });
  const ringLeft = useTransform(ringX, (value) => value - 18);
  const ringTop = useTransform(ringY, (value) => value - 18);
  const dotLeft = useTransform(pointerX, (value) => value - 3.5);
  const dotTop = useTransform(pointerY, (value) => value - 3.5);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );

    if (!finePointer.matches || reduceMotion) return;

    document.documentElement.classList.add('has-custom-cursor');

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      pointerX.set(event.clientX);
      pointerY.set(event.clientY);

      const target = event.target;
      const inHeader =
        target instanceof Element && target.closest('.site-header');
      setVisible(!inHeader);
      const isHovered =
        target instanceof Element &&
        target.closest(
          'a, button, input, select, textarea, [role="button"]',
        ) !== null &&
        !inHeader;

      if (isHovered !== hoveredRef.current) {
        hoveredRef.current = isHovered;
        setHovered(isHovered);
      }
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    window.addEventListener('blur', hideCursor);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', hideCursor);
    };
  }, [pointerX, pointerY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        style={{ left: ringLeft, top: ringTop }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.55 : 1,
        }}
        transition={{
          opacity: { duration: 0.16 },
          scale: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
        }}
        aria-hidden="true"
      />
      <motion.div
        className="custom-cursor-dot"
        style={{ left: dotLeft, top: dotTop }}
        animate={{ opacity: visible ? 1 : 0, scale: hovered ? 0.72 : 1 }}
        transition={{ opacity: { duration: 0.12 }, scale: { duration: 0.18 } }}
        aria-hidden="true"
      />
    </>
  );
}
