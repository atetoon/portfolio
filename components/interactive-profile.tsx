
"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { useRef, type PointerEvent } from "react";

const pointerSpring = {
  stiffness: 350,
  damping: 24,
  mass: 0.6,
};

const gestureSpring = {
  type: "spring",
  duration: 0.35,
  bounce: 0.3,
} as const;

export default function InteractiveProfile() {
  const reduceMotion = useReducedMotion();
  const bounds = useRef<DOMRect | null>(null);

  const x = useSpring(0, pointerSpring);
  const y = useSpring(0, pointerSpring);

  const resetPointer = () => {
    x.set(0);
    y.set(0);
    bounds.current = null;
  };

  const followPointer = (event: PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || event.pointerType !== "mouse" || !bounds.current) {
      return;
    }

    const rect = bounds.current;

    const horizontal = Math.max(
      -1,
      Math.min(
        1,
        ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      ),
    );

    const vertical = Math.max(
      -1,
      Math.min(
        1,
        ((event.clientY - rect.top) / rect.height - 0.5) * 2,
      ),
    );

    x.set(horizontal * 6);
    y.set(vertical * 5 - 7);
  };

  return (
    <div className="relative size-[80px] shrink-0">
      <motion.button
        type="button"
        aria-label="Interactive profile illustration"
        className="relative block size-full touch-pan-y rounded-lg outline-none"
        initial={false}
        style={reduceMotion ? undefined : { x, y }}
        whileHover={
          reduceMotion
            ? { opacity: 0.8 }
            : { scale: 1.075 }
        }
        whileTap={
          reduceMotion
            ? { opacity: 0.65 }
            : { scale: 0.94 }
        }
        transition={gestureSpring}
        onPointerEnter={(event) => {
          bounds.current =
            event.currentTarget.parentElement?.getBoundingClientRect() ?? null;
        }}
        onPointerMove={followPointer}
        onPointerLeave={resetPointer}
        onPointerCancel={resetPointer}
        onBlur={resetPointer}
      >
        <Image
          src="/images/profile.png"
          alt="Manga-style profile illustration"
          fill
          sizes="80px"
          className="pointer-events-none select-none object-contain"
          draggable={false}
        />
      </motion.button>
    </div>
  );
}
