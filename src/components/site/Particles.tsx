import { useEffect, useRef } from "react";

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) return;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => { c.width = c.offsetWidth * dpr; c.height = c.offsetHeight * dpr; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + 0.4, v: Math.random() * 0.0004 + 0.0001,
    }));
    const color = getComputedStyle(document.documentElement).getPropertyValue("--smoke-deep").trim();
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.fillStyle = color;
      for (const p of pts) {
        p.y -= p.v; if (p.y < 0) p.y = 1;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(p.x * c.width, p.y * c.height, p.r * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
