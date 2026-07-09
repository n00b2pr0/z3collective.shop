import React from "react";

const css = `
.z3-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font-display);font-weight:700;letter-spacing:-0.01em;border-radius:var(--radius-pill);border:var(--border-width) solid var(--z3-ink);cursor:pointer;transition:transform var(--duration-fast) var(--ease-snap),box-shadow var(--duration-fast) var(--ease-snap),background var(--duration-fast) linear;box-shadow:var(--shadow-sticker);color:var(--z3-ink);text-decoration:none;user-select:none;}
.z3-btn:hover{transform:translate(-1px,-1px);box-shadow:var(--shadow-sticker-lg);}
.z3-btn:active{transform:translate(2px,2px);box-shadow:none;}
.z3-btn:disabled{opacity:.4;pointer-events:none;box-shadow:none;}
.z3-btn--primary{background:var(--z3-teal);}
.z3-btn--primary:hover{background:var(--z3-teal-deep);}
.z3-btn--secondary{background:var(--z3-white);}
.z3-btn--ink{background:var(--z3-ink);color:var(--z3-paper);}
.z3-btn--ghost{background:transparent;border-color:transparent;box-shadow:none;font-family:var(--font-body);font-weight:600;}
.z3-btn--ghost:hover{background:var(--z3-ink-12);transform:none;box-shadow:none;}
.z3-btn--ghost:active{transform:translate(1px,1px);}
.z3-btn--accent{background:var(--z3-btn-accent, var(--z3-teal));}
.z3-btn--sm{font-size:14px;padding:8px 16px;min-height:36px;}
.z3-btn--md{font-size:16px;padding:11px 22px;min-height:44px;}
.z3-btn--lg{font-size:18px;padding:14px 28px;min-height:52px;}
`;

export function ensureZ3Styles(id, text) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = text;
  document.head.appendChild(el);
}

export function Button({ variant = "primary", size = "md", accent, disabled, children, ...rest }) {
  ensureZ3Styles("z3-btn-css", css);
  const style = accent ? { "--z3-btn-accent": accent } : undefined;
  const cls = `z3-btn z3-btn--${accent ? "accent" : variant} z3-btn--${size}`;
  return (
    <button className={cls} style={style} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
