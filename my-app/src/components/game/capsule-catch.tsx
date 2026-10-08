"use client";

import { useEffect, useRef, useState } from "react";

type Falling = {
  x: number;
  y: number;
  speed: number;
  kind: "good" | "bad";
  size: number;
};

const WIDTH = 480;
const HEIGHT = 420;
const TRAY_WIDTH = 86;
const TRAY_HEIGHT = 14;
const GAME_SECONDS = 30;

export function CapsuleCatch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trayXRef = useRef(WIDTH / 2 - TRAY_WIDTH / 2);
  const itemsRef = useRef<Falling[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const timeLeftRef = useRef(GAME_SECONDS);
  const runningRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const keysRef = useRef<{ left: boolean; right: boolean }>({
    left: false,
    right: false,
  });

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");

  const resetState = () => {
    trayXRef.current = WIDTH / 2 - TRAY_WIDTH / 2;
    itemsRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 3;
    timeLeftRef.current = GAME_SECONDS;
    setScore(0);
    setLives(3);
    setTimeLeft(GAME_SECONDS);
  };

  const startGame = () => {
    resetState();
    setStatus("playing");
    runningRef.current = true;
  };

  useEffect(() => {
    if (status !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastSpawn = 0;
    let lastTime = performance.now();
    let lastTick = performance.now();

    const loop = (now: number) => {
      if (!runningRef.current) return;
      const dt = Math.min(32, now - lastTime);
      lastTime = now;

      if (now - lastTick >= 1000) {
        lastTick = now;
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current);
        if (timeLeftRef.current <= 0) {
          runningRef.current = false;
          setStatus("over");
          return;
        }
      }

      if (keysRef.current.left) trayXRef.current -= 6.5;
      if (keysRef.current.right) trayXRef.current += 6.5;
      trayXRef.current = Math.max(
        0,
        Math.min(WIDTH - TRAY_WIDTH, trayXRef.current)
      );

      if (now - lastSpawn > 650) {
        lastSpawn = now;
        itemsRef.current.push({
          x: Math.random() * (WIDTH - 20) + 10,
          y: -20,
          speed: 1.4 + Math.random() * 1.8 + scoreRef.current * 0.015,
          kind: Math.random() < 0.78 ? "good" : "bad",
          size: 14,
        });
      }

      const trayY = HEIGHT - 36;
      itemsRef.current = itemsRef.current.filter((item) => {
        item.y += item.speed * (dt / 16);
        const caught =
          item.y >= trayY - item.size &&
          item.y <= trayY + TRAY_HEIGHT &&
          item.x >= trayXRef.current - item.size &&
          item.x <= trayXRef.current + TRAY_WIDTH + item.size;

        if (caught) {
          if (item.kind === "good") {
            scoreRef.current += 1;
            setScore(scoreRef.current);
          } else {
            livesRef.current -= 1;
            setLives(livesRef.current);
            if (livesRef.current <= 0) {
              runningRef.current = false;
              setStatus("over");
            }
          }
          return false;
        }
        return item.y < HEIGHT + 20;
      });

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#101216";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.strokeStyle = "rgba(242,244,247,0.05)";
      for (let gx = 0; gx < WIDTH; gx += 40) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, HEIGHT);
        ctx.stroke();
      }

      itemsRef.current.forEach((item) => {
        ctx.beginPath();
        if (item.kind === "good") {
          ctx.fillStyle = "#3B82F6";
          ctx.roundRect(item.x - 10, item.y - 6, 20, 12, 6);
          ctx.fill();
        } else {
          ctx.strokeStyle = "#EF4444";
          ctx.lineWidth = 3;
          ctx.moveTo(item.x - 7, item.y - 7);
          ctx.lineTo(item.x + 7, item.y + 7);
          ctx.moveTo(item.x + 7, item.y - 7);
          ctx.lineTo(item.x - 7, item.y + 7);
          ctx.stroke();
        }
      });

      ctx.fillStyle = "#F2F4F7";
      ctx.beginPath();
      ctx.roundRect(trayXRef.current, trayY, TRAY_WIDTH, TRAY_HEIGHT, 7);
      ctx.fill();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = true;
      if (e.key === "ArrowRight" || e.key === "d")
        keysRef.current.right = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d")
        keysRef.current.right = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const handlePointer = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      const scale = WIDTH / rect.width;
      const x = (clientX - rect.left) * scale;
      trayXRef.current = Math.max(
        0,
        Math.min(WIDTH - TRAY_WIDTH, x - TRAY_WIDTH / 2)
      );
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) handlePointer(e.touches[0].clientX);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (e.buttons === 1) handlePointer(e.clientX);
    };
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("mousemove", onMouseMove);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, [status]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center justify-between font-mono-label text-xs tracking-[0.1em] text-muted">
        <span>
          SCORE <span className="text-ink">{score}</span>
        </span>
        <span>
          LIVES <span className="text-red">{"●".repeat(Math.max(lives, 0))}</span>
        </span>
        <span>
          TIME <span className="text-ink">{timeLeft}s</span>
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg border border-line">
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          role="img"
          aria-label="Capsule Catch game canvas. Use arrow keys or drag to move the tray and catch blue capsules while avoiding red marks."
          className="block w-full touch-none bg-surface"
        />

        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg/85 px-6 text-center">
            {status === "over" ? (
              <>
                <p className="font-mono-label text-xs tracking-[0.2em] text-red">
                  RUN COMPLETE
                </p>
                <p className="text-2xl font-semibold text-ink">
                  Score: {score}
                </p>
              </>
            ) : (
              <>
                <p className="font-mono-label text-xs tracking-[0.2em] text-blue">
                  SID.EXE
                </p>
                <p className="max-w-xs text-sm text-muted">
                  Catch the blue capsules. Avoid the red marks. 30 seconds.
                </p>
              </>
            )}
            <button
              type="button"
              onClick={startGame}
              className="rounded-full border border-blue/50 bg-blue/10 px-5 py-2 text-sm font-medium text-blue transition-colors hover:bg-blue/20"
            >
              {status === "over" ? "Play again" : "Start"}
            </button>
          </div>
        )}
      </div>

      <p className="font-mono-label text-[11px] tracking-[0.1em] text-muted">
        ARROW KEYS / A·D TO MOVE · DRAG ON TOUCH
      </p>
    </div>
  );
}
