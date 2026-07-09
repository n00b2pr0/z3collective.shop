import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";
import { Field } from "./Input.jsx";

const css = `
.z3-select-wrap{position:relative;}
.z3-select{appearance:none;-webkit-appearance:none;font-family:var(--font-body);font-size:15px;color:var(--text-body);background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-md);padding:10px 40px 10px 14px;outline:none;width:100%;box-sizing:border-box;cursor:pointer;transition:box-shadow var(--duration-fast) var(--ease-snap);}
.z3-select:focus{box-shadow:var(--shadow-sticker);}
.z3-select:disabled{opacity:.4;background:var(--z3-paper);}
.z3-select-wrap::after{content:"";position:absolute;right:14px;top:50%;width:8px;height:8px;border-right:2px solid var(--z3-ink);border-bottom:2px solid var(--z3-ink);transform:translateY(-70%) rotate(45deg);pointer-events:none;}
`;

export function Select({ label, hint, error, options = [], ...rest }) {
  ensureZ3Styles("z3-select-css", css);
  return (
    <Field label={label} hint={hint} error={error}>
      <span className="z3-select-wrap">
        <select className="z3-select" {...rest}>
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
      </span>
    </Field>
  );
}
