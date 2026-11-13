"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  src: StaticImageData;
  alt?: string;
  speed?: number;
  preload?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Parallax({
  src,
  alt = "",
  speed = 0.3,
  preload = false,
  className = "",
  children,
}: Props) {
  const section = useRef<HTMLElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = section.current;
      if (!el || !layer.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset =
        (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      layer.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <section ref={section} className={`parallax ${className}`}>
      <div ref={layer} className="parallax-layer" aria-hidden={!alt}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          preload={preload}
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className="parallax-content">{children}</div>
    </section>
  );
}
