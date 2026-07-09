import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-field{display:grid;gap:6px;font-family:var(--font-body);}
.z3-field__label{font-size:13px;font-weight:600;color:var(--text-body);}
.z3-field__hint{font-size:12px;color:var(--text-faint);}
.z3-field__hint--error{color:var(--status-danger);font-weight:500;}
.z3-input{font-family:var(--font-body);font-size:15px;color:var(--text-body);background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-md);padding:10px 14px;outline:none;transition:box-shadow var(--duration-fast) var(--ease-snap);width:100%;box-sizing:border-box;}
.z3-input::placeholder{color:var(--text-faint);}
.z3-input:focus{box-shadow:var(--shadow-sticker);}
.z3-input--error{border-color:var(--status-danger);}
.z3-input:disabled{opacity:.4;background:var(--z3-paper);}
`;

export function Field({ label, hint, error, children }) {
  ensureZ3Styles("z3-input-css", css);
  return (
    <label className="z3-field">
      {label ? <span className="z3-field__label">{label}</span> : null}
      {children}
      {error ? <span className="z3-field__hint z3-field__hint--error">{error}</span> : hint ? <span className="z3-field__hint">{hint}</span> : null}
    </label>
  );
}

export function Input({ label, hint, error, ...rest }) {
  ensureZ3Styles("z3-input-css", css);
  return (
    <Field label={label} hint={hint} error={error}>
      <input className={`z3-input${error ? " z3-input--error" : ""}`} {...rest} />
    </Field>
  );
}
