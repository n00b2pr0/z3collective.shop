import React from "react";
import { ensureZ3Styles } from "./Button.jsx";

const css = `
.z3-card{background:var(--surface-card);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-lg);box-shadow:var(--shadow-sticker);overflow:hidden;}
.z3-card--quiet{border:1px solid var(--border-subtle);box-shadow:none;}
.z3-card--interactive{cursor:pointer;transition:transform var(--duration-fast) var(--ease-snap),box-shadow var(--duration-fast) var(--ease-snap);}
.z3-card--interactive:hover{transform:translate(-1px,-1px);box-shadow:var(--shadow-sticker-lg);}
.z3-card--interactive:active{transform:translate(2px,2px);box-shadow:none;}
.z3-card__pad{padding:var(--space-4);}
`;

export function Card({ quiet = false, interactive = false, padded = true, children, ...rest }) {
  ensureZ3Styles("z3-card-css", css);
  const cls = `z3-card${quiet ? " z3-card--quiet" : ""}${interactive ? " z3-card--interactive" : ""}`;
  return (
    <div className={cls} {...rest}>
      {padded ? <div className="z3-card__pad">{children}</div> : children}
    </div>
  );
}
