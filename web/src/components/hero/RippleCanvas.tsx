import { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export function RippleCanvas({ containerId }: { containerId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = document.getElementById(containerId);
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let ripples: Ripple[] = [];
    let raf = 0;

    function resize() {
      if (!canvas || !container) return;
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
    }

    function addRipple(x: number, y: number) {
      ripples.push({ x, y, radius: 0, alpha: 0.35 });
    }

    let lastMove = 0;
    function onMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastMove < 90 || !canvas) return;
      lastMove = now;
      const rect = canvas.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top);
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(w * 0.7, h * 0.3, 0, w * 0.7, h * 0.3, w * 0.8);
      grad.addColorStop(0, 'rgba(58,107,92,0.10)');
      grad.addColorStop(1, 'rgba(13,27,30,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ripples.forEach((r) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(226,98,45,${r.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        r.radius += 1.4;
        r.alpha *= 0.965;
      });
      ripples = ripples.filter((r) => r.alpha > 0.02);
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMove);
    };
  }, [containerId]);

  return <canvas ref={canvasRef} id="ripple-canvas" />;
}
