import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-toast{display:inline-flex;align-items:center;gap:10px;background:var(--z3-ink);color:var(--z3-paper);border-radius:var(--radius-md);padding:12px 16px;font-family:var(--font-body);font-size:14px;font-weight:500;box-shadow:var(--shadow-sticker);border:var(--border-width) solid var(--z3-ink);animation:z3-toast-in var(--duration-base) var(--ease-snap);}
@keyframes z3-toast-in{from{transform:translateY(8px);opacity:0;}to{transform:none;opacity:1;}}
.z3-toast__dot{width:10px;height:10px;border-radius:999px;flex:none;background:var(--z3-teal);}
.z3-toast--success .z3-toast__dot{background:var(--status-success);}
.z3-toast--danger .z3-toast__dot{background:var(--status-danger);}
.z3-toast__stack{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);display:grid;gap:8px;justify-items:center;z-index:110;}
@media (prefers-reduced-motion: reduce){.z3-toast{animation:none;}}
`;

export function Toast({ tone = "brand", children }) {
  ensureZ3Styles("z3-toast-css", css);
  return (
    <div className={`z3-toast${tone !== "brand" ? ` z3-toast--${tone}` : ""}`} role="status">
      <span className="z3-toast__dot"></span>
      {children}
    </div>
  );
}

export function ToastStack({ children }) {
  ensureZ3Styles("z3-toast-css", css);
  return <div className="z3-toast__stack">{children}</div>;
}
