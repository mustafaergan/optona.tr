"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/content";

const STEP_MS = 650;

// Demo sayfa açılınca kendiliğinden başlar ve sürekli döner; düğme yalnızca durdurur/başlatır.
export default function AgentDemo({ d }: { d: Dict["demo"] }) {
  const [item, setItem] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = d.items[item];
  const total = current.steps.length + 1; // steps + done line
  const finished = step >= total;

  useEffect(() => {
    if (paused) return;
    const wait = finished ? STEP_MS * 3 : STEP_MS;
    const t = window.setTimeout(() => {
      if (finished) {
        setItem((i) => (i + 1) % d.items.length);
        setStep(0);
      } else {
        setStep((s) => s + 1);
      }
    }, wait);
    return () => window.clearTimeout(t);
  }, [paused, finished, step, d.items.length]);

  return (
    <div className="app" aria-hidden="false">
      <div className="app__bar">
        <span className="app__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="app__title">optona / {d.title}</span>
        <span className="app__live">
          <span className={paused ? "pulse pulse--off" : "pulse"} aria-hidden="true" />
          {d.live}
        </span>
        <button
          type="button"
          className="app__pause"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
        >
          {paused ? d.play : d.pause}
        </button>
      </div>
      <div className="app__body">
        <ul className="app__list" aria-label={d.inbox}>
          <li className="app__label">{d.inbox}</li>
          {d.items.map((it, i) => (
            <li key={it.name}>
              <button
                type="button"
                className={i === item ? "app__item is-on" : "app__item"}
                onClick={() => {
                  setItem(i);
                  setStep(0);
                }}
              >
                <span className="app__tag">{it.tag}</span>
                <span className="app__name">{it.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="app__run" aria-live="polite">
          <p className="app__doc">{current.name}</p>
          <ol className="app__steps">
            {current.steps.map((s, i) => (
              <li key={s} className={i < step ? "is-done" : i === step ? "is-now" : ""}>
                <span className="tick" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ol>
          <p className={step >= current.steps.length ? "app__done is-on" : "app__done"}>{current.done}</p>
        </div>
      </div>
    </div>
  );
}
