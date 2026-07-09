import React from "react";
import { ensureZ3Styles } from "./Button.jsx";

const css = `
.z3-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:700;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-pill);padding:4px 12px;background:var(--z3-badge-bg, var(--z3-teal));color:var(--z3-ink);}
.z3-badge--ink{background:var(--z3-ink);color:var(--z3-paper);}
`;

const LINE_COLORS = {
  dragons: "var(--z3-dragons)",
  dinos: "var(--z3-dinos)",
  critters: "var(--z3-critters)",
  fidgets: "var(--z3-fidgets)",
};

export function Badge({ line, ink = false, children, ...rest }) {
  ensureZ3Styles("z3-badge-css", css);
  const style = line ? { "--z3-badge-bg": LINE_COLORS[line] } : undefined;
  return (
    <span className={`z3-badge${ink ? " z3-badge--ink" : ""}`} style={style} {...rest}>
      {children}
    </span>
  );
}
