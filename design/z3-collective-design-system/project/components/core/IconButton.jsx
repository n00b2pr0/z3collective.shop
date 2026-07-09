import React from "react";
import { ensureZ3Styles } from "./Button.jsx";

const css = `
.z3-iconbtn{display:inline-grid;place-items:center;background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-pill);box-shadow:var(--shadow-sticker);cursor:pointer;color:var(--z3-ink);transition:transform var(--duration-fast) var(--ease-snap),box-shadow var(--duration-fast) var(--ease-snap);}
.z3-iconbtn:hover{transform:translate(-1px,-1px);box-shadow:var(--shadow-sticker-lg);}
.z3-iconbtn:active{transform:translate(2px,2px);box-shadow:none;}
.z3-iconbtn:disabled{opacity:.4;pointer-events:none;box-shadow:none;}
.z3-iconbtn--quiet{border-color:transparent;box-shadow:none;background:transparent;}
.z3-iconbtn--quiet:hover{background:var(--z3-ink-12);transform:none;box-shadow:none;}
.z3-iconbtn--sm{width:36px;height:36px;}
.z3-iconbtn--md{width:44px;height:44px;}
.z3-iconbtn--lg{width:52px;height:52px;}
`;

export function IconButton({ size = "md", quiet = false, label, children, ...rest }) {
  ensureZ3Styles("z3-iconbtn-css", css);
  return (
    <button
      className={`z3-iconbtn z3-iconbtn--${size}${quiet ? " z3-iconbtn--quiet" : ""}`}
      aria-label={label}
      title={label}
      {...rest}
    >
      {children}
    </button>
  );
}
