import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-dialog-overlay{position:fixed;inset:0;background:rgba(12,12,17,.55);display:grid;place-items:center;padding:24px;z-index:100;}
.z3-dialog{background:var(--surface-card);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-lg);box-shadow:var(--shadow-sticker-lg);max-width:440px;width:100%;padding:var(--space-5);font-family:var(--font-body);animation:z3-dialog-in var(--duration-base) var(--ease-snap);}
@keyframes z3-dialog-in{from{transform:translateY(10px) scale(.97);opacity:0;}to{transform:none;opacity:1;}}
.z3-dialog__title{font-family:var(--font-display);font-weight:700;font-size:22px;letter-spacing:-0.01em;margin:0 0 8px;}
.z3-dialog__body{font-size:15px;color:var(--text-muted);margin:0 0 20px;line-height:1.55;}
.z3-dialog__actions{display:flex;gap:10px;justify-content:flex-end;}
@media (prefers-reduced-motion: reduce){.z3-dialog{animation:none;}}
`;

export function Dialog({ open, title, children, actions, onClose }) {
  ensureZ3Styles("z3-dialog-css", css);
  if (!open) return null;
  return (
    <div className="z3-dialog-overlay" onClick={onClose}>
      <div className="z3-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {title ? <h2 className="z3-dialog__title">{title}</h2> : null}
        <div className="z3-dialog__body">{children}</div>
        {actions ? <div className="z3-dialog__actions">{actions}</div> : null}
      </div>
    </div>
  );
}
