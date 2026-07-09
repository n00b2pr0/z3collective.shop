import React from "react";
import { ensureZ3Styles } from "./Button.jsx";

const css = `
.z3-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-weight:600;font-size:13px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);padding:4px 12px;background:var(--z3-white);color:var(--text-muted);cursor:default;}
.z3-tag--interactive{cursor:pointer;transition:border-color var(--duration-fast) linear,color var(--duration-fast) linear;}
.z3-tag--interactive:hover{border-color:var(--z3-ink);color:var(--z3-ink);}
.z3-tag--selected{border:2px solid var(--z3-ink);background:var(--z3-teal-soft);color:var(--z3-ink);padding:3px 11px;}
`;

export function Tag({ selected = false, onClick, children, ...rest }) {
  ensureZ3Styles("z3-tag-css", css);
  const cls = `z3-tag${onClick ? " z3-tag--interactive" : ""}${selected ? " z3-tag--selected" : ""}`;
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {children}
    </span>
  );
}
