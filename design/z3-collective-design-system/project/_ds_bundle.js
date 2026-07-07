/* @ds-bundle: {"format":4,"namespace":"Z3CollectiveDesignSystem_07fe72","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CartIcon","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"PhotoPlaceholder","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"ProductTile","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"WebsiteHome","sourcePath":"ui_kits/website/WebsiteHome.jsx"},{"name":"WebsiteLine","sourcePath":"ui_kits/website/WebsiteLine.jsx"},{"name":"WebsiteProduct","sourcePath":"ui_kits/website/WebsiteProduct.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0918eca33872","components/core/Button.jsx":"9e115387363e","components/core/Card.jsx":"a82a2d724cbe","components/core/IconButton.jsx":"b10358e66db1","components/core/Tag.jsx":"8f73576948b7","components/feedback/Dialog.jsx":"9a5ee43d22ef","components/feedback/Toast.jsx":"2d5e4103dfd8","components/feedback/Tooltip.jsx":"1585779bbed1","components/forms/Checkbox.jsx":"fddeee4cdccc","components/forms/Input.jsx":"1352cf2255a2","components/forms/Radio.jsx":"1a1cb77972d4","components/forms/Select.jsx":"cf7ebd5f77a7","components/forms/Switch.jsx":"b1bf0716a86c","components/navigation/Tabs.jsx":"ad00eca29435","ui_kits/website/Chrome.jsx":"b716a75361b8","ui_kits/website/WebsiteHome.jsx":"87bc77bc709c","ui_kits/website/WebsiteLine.jsx":"ef2765dbc28b","ui_kits/website/WebsiteProduct.jsx":"339768a76214"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureZ3Styles","sourcePath":"components/core/Button.jsx"},{"name":"z3Line","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"z3Lines","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"z3Product","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"z3Products","sourcePath":"ui_kits/website/Chrome.jsx"}]} */

(() => {

const __ds_ns = (window.Z3CollectiveDesignSystem_07fe72 = window.Z3CollectiveDesignSystem_07fe72 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureZ3Styles(id, text) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = text;
  document.head.appendChild(el);
}
function Button({
  variant = "primary",
  size = "md",
  accent,
  disabled,
  children,
  ...rest
}) {
  ensureZ3Styles("z3-btn-css", css);
  const style = accent ? {
    "--z3-btn-accent": accent
  } : undefined;
  const cls = `z3-btn z3-btn--${accent ? "accent" : variant} z3-btn--${size}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    style: style,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { ensureZ3Styles, Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-display);font-weight:700;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-pill);padding:4px 12px;background:var(--z3-badge-bg, var(--z3-teal));color:var(--z3-ink);}
.z3-badge--ink{background:var(--z3-ink);color:var(--z3-paper);}
`;
const LINE_COLORS = {
  dragons: "var(--z3-dragons)",
  dinos: "var(--z3-dinos)",
  critters: "var(--z3-critters)",
  fidgets: "var(--z3-fidgets)"
};
function Badge({
  line,
  ink = false,
  children,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-badge-css", css);
  const style = line ? {
    "--z3-badge-bg": LINE_COLORS[line]
  } : undefined;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `z3-badge${ink ? " z3-badge--ink" : ""}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-card{background:var(--surface-card);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-lg);box-shadow:var(--shadow-sticker);overflow:hidden;}
.z3-card--quiet{border:1px solid var(--border-subtle);box-shadow:none;}
.z3-card--interactive{cursor:pointer;transition:transform var(--duration-fast) var(--ease-snap),box-shadow var(--duration-fast) var(--ease-snap);}
.z3-card--interactive:hover{transform:translate(-1px,-1px);box-shadow:var(--shadow-sticker-lg);}
.z3-card--interactive:active{transform:translate(2px,2px);box-shadow:none;}
.z3-card__pad{padding:var(--space-4);}
`;
function Card({
  quiet = false,
  interactive = false,
  padded = true,
  children,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-card-css", css);
  const cls = `z3-card${quiet ? " z3-card--quiet" : ""}${interactive ? " z3-card--interactive" : ""}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), padded ? /*#__PURE__*/React.createElement("div", {
    className: "z3-card__pad"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  size = "md",
  quiet = false,
  label,
  children,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-iconbtn-css", css);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `z3-iconbtn z3-iconbtn--${size}${quiet ? " z3-iconbtn--quiet" : ""}`,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-weight:600;font-size:13px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);padding:4px 12px;background:var(--z3-white);color:var(--text-muted);cursor:default;}
.z3-tag--interactive{cursor:pointer;transition:border-color var(--duration-fast) linear,color var(--duration-fast) linear;}
.z3-tag--interactive:hover{border-color:var(--z3-ink);color:var(--z3-ink);}
.z3-tag--selected{border:2px solid var(--z3-ink);background:var(--z3-teal-soft);color:var(--z3-ink);padding:3px 11px;}
`;
function Tag({
  selected = false,
  onClick,
  children,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-tag-css", css);
  const cls = `z3-tag${onClick ? " z3-tag--interactive" : ""}${selected ? " z3-tag--selected" : ""}`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const css = `
.z3-dialog-overlay{position:fixed;inset:0;background:rgba(12,12,17,.55);display:grid;place-items:center;padding:24px;z-index:100;}
.z3-dialog{background:var(--surface-card);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-lg);box-shadow:var(--shadow-sticker-lg);max-width:440px;width:100%;padding:var(--space-5);font-family:var(--font-body);animation:z3-dialog-in var(--duration-base) var(--ease-snap);}
@keyframes z3-dialog-in{from{transform:translateY(10px) scale(.97);opacity:0;}to{transform:none;opacity:1;}}
.z3-dialog__title{font-family:var(--font-display);font-weight:700;font-size:22px;letter-spacing:-0.01em;margin:0 0 8px;}
.z3-dialog__body{font-size:15px;color:var(--text-muted);margin:0 0 20px;line-height:1.55;}
.z3-dialog__actions{display:flex;gap:10px;justify-content:flex-end;}
@media (prefers-reduced-motion: reduce){.z3-dialog{animation:none;}}
`;
function Dialog({
  open,
  title,
  children,
  actions,
  onClose
}) {
  __ds_scope.ensureZ3Styles("z3-dialog-css", css);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "z3-dialog-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "z3-dialog",
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "z3-dialog__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "z3-dialog__body"
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    className: "z3-dialog__actions"
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const css = `
.z3-toast{display:inline-flex;align-items:center;gap:10px;background:var(--z3-ink);color:var(--z3-paper);border-radius:var(--radius-md);padding:12px 16px;font-family:var(--font-body);font-size:14px;font-weight:500;box-shadow:var(--shadow-sticker);border:var(--border-width) solid var(--z3-ink);animation:z3-toast-in var(--duration-base) var(--ease-snap);}
@keyframes z3-toast-in{from{transform:translateY(8px);opacity:0;}to{transform:none;opacity:1;}}
.z3-toast__dot{width:10px;height:10px;border-radius:999px;flex:none;background:var(--z3-teal);}
.z3-toast--success .z3-toast__dot{background:var(--status-success);}
.z3-toast--danger .z3-toast__dot{background:var(--status-danger);}
.z3-toast__stack{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);display:grid;gap:8px;justify-items:center;z-index:110;}
@media (prefers-reduced-motion: reduce){.z3-toast{animation:none;}}
`;
function Toast({
  tone = "brand",
  children
}) {
  __ds_scope.ensureZ3Styles("z3-toast-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: `z3-toast${tone !== "brand" ? ` z3-toast--${tone}` : ""}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "z3-toast__dot"
  }), children);
}
function ToastStack({
  children
}) {
  __ds_scope.ensureZ3Styles("z3-toast-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: "z3-toast__stack"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const css = `
.z3-tip{position:relative;display:inline-flex;}
.z3-tip__bubble{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%,4px);background:var(--z3-ink);color:var(--z3-paper);font-family:var(--font-body);font-size:12px;font-weight:500;padding:6px 10px;border-radius:var(--radius-sm);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--duration-fast) linear,transform var(--duration-fast) var(--ease-snap);z-index:50;}
.z3-tip:hover .z3-tip__bubble,.z3-tip:focus-within .z3-tip__bubble{opacity:1;transform:translate(-50%,0);}
`;
function Tooltip({
  text,
  children
}) {
  __ds_scope.ensureZ3Styles("z3-tip-css", css);
  return /*#__PURE__*/React.createElement("span", {
    className: "z3-tip"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "z3-tip__bubble",
    role: "tooltip"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-check{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-check input{position:absolute;opacity:0;width:0;height:0;}
.z3-check__box{width:22px;height:22px;border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-sm);background:var(--z3-white);display:grid;place-items:center;transition:background var(--duration-fast) linear,transform var(--duration-fast) var(--ease-snap);flex:none;}
.z3-check input:checked + .z3-check__box{background:var(--z3-teal);}
.z3-check input:focus-visible + .z3-check__box{box-shadow:var(--shadow-sticker);}
.z3-check:active .z3-check__box{transform:scale(.92);}
.z3-check__box svg{opacity:0;transition:opacity var(--duration-fast) linear;}
.z3-check input:checked + .z3-check__box svg{opacity:1;}
.z3-check--disabled{opacity:.4;pointer-events:none;}
`;
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-check-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: `z3-check${disabled ? " z3-check--disabled" : ""}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "z3-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Field({
  label,
  hint,
  error,
  children
}) {
  __ds_scope.ensureZ3Styles("z3-input-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: "z3-field"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "z3-field__label"
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "z3-field__hint z3-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "z3-field__hint"
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-input-css", css);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: `z3-input${error ? " z3-input--error" : ""}`
  }, rest)));
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-radio{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-radio input{position:absolute;opacity:0;width:0;height:0;}
.z3-radio__dot{width:22px;height:22px;border:var(--border-width) solid var(--z3-ink);border-radius:999px;background:var(--z3-white);display:grid;place-items:center;transition:transform var(--duration-fast) var(--ease-snap);flex:none;}
.z3-radio__dot::after{content:"";width:10px;height:10px;border-radius:999px;background:var(--z3-teal);transform:scale(0);transition:transform var(--duration-fast) var(--ease-snap);}
.z3-radio input:checked + .z3-radio__dot::after{transform:scale(1);}
.z3-radio input:focus-visible + .z3-radio__dot{box-shadow:var(--shadow-sticker);}
.z3-radio:active .z3-radio__dot{transform:scale(.92);}
.z3-radio--disabled{opacity:.4;pointer-events:none;}
`;
function Radio({
  label,
  checked,
  onChange,
  disabled,
  name,
  value,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-radio-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: `z3-radio${disabled ? " z3-radio--disabled" : ""}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    name: name,
    value: value
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "z3-radio__dot"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-select-wrap{position:relative;}
.z3-select{appearance:none;-webkit-appearance:none;font-family:var(--font-body);font-size:15px;color:var(--text-body);background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-md);padding:10px 40px 10px 14px;outline:none;width:100%;box-sizing:border-box;cursor:pointer;transition:box-shadow var(--duration-fast) var(--ease-snap);}
.z3-select:focus{box-shadow:var(--shadow-sticker);}
.z3-select:disabled{opacity:.4;background:var(--z3-paper);}
.z3-select-wrap::after{content:"";position:absolute;right:14px;top:50%;width:8px;height:8px;border-right:2px solid var(--z3-ink);border-bottom:2px solid var(--z3-ink);transform:translateY(-70%) rotate(45deg);pointer-events:none;}
`;
function Select({
  label,
  hint,
  error,
  options = [],
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-select-css", css);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("span", {
    className: "z3-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "z3-select"
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.z3-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-switch input{position:absolute;opacity:0;width:0;height:0;}
.z3-switch__track{width:46px;height:26px;border:var(--border-width) solid var(--z3-ink);border-radius:999px;background:var(--z3-white);position:relative;transition:background var(--duration-fast) linear;flex:none;}
.z3-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:999px;background:var(--z3-ink);transition:transform var(--duration-fast) var(--ease-snap);}
.z3-switch input:checked + .z3-switch__track{background:var(--z3-teal);}
.z3-switch input:checked + .z3-switch__track::after{transform:translateX(20px);}
.z3-switch input:focus-visible + .z3-switch__track{box-shadow:var(--shadow-sticker);}
.z3-switch--disabled{opacity:.4;pointer-events:none;}
`;
function Switch({
  label,
  checked,
  onChange,
  disabled,
  ...rest
}) {
  __ds_scope.ensureZ3Styles("z3-switch-css", css);
  return /*#__PURE__*/React.createElement("label", {
    className: `z3-switch${disabled ? " z3-switch--disabled" : ""}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "z3-switch__track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const css = `
.z3-tabs{display:inline-flex;gap:6px;background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-pill);padding:4px;}
.z3-tabs__tab{font-family:var(--font-display);font-weight:500;font-size:14px;color:var(--text-muted);background:transparent;border:none;border-radius:var(--radius-pill);padding:8px 18px;cursor:pointer;transition:background var(--duration-fast) linear,color var(--duration-fast) linear;}
.z3-tabs__tab:hover{color:var(--z3-ink);background:var(--z3-ink-12);}
.z3-tabs__tab--active{background:var(--z3-ink);color:var(--z3-paper);font-weight:700;}
.z3-tabs__tab--active:hover{background:var(--z3-ink);color:var(--z3-paper);}
`;
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  __ds_scope.ensureZ3Styles("z3-tabs-css", css);
  return /*#__PURE__*/React.createElement("div", {
    className: "z3-tabs",
    role: "tablist"
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    const active = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": active,
      className: `z3-tabs__tab${active ? " z3-tabs__tab--active" : ""}`,
      onClick: () => onChange && onChange(tab.value)
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const LINES = [{
  id: "dragons",
  name: "Dragons",
  flair: "Spark & Scale",
  color: "var(--z3-dragons)"
}, {
  id: "dinos",
  name: "Dinos",
  flair: "Stomp & Roar",
  color: "var(--z3-dinos)"
}, {
  id: "critters",
  name: "Critters",
  flair: "Wild & Whimsy",
  color: "var(--z3-critters)"
}, {
  id: "fidgets",
  name: "Fidgets",
  flair: "Twist & Click",
  color: "var(--z3-fidgets)"
}];
const PRODUCTS = [{
  id: "flexi-dragon",
  name: "Flexi Dragon",
  line: "dragons",
  price: 12,
  blurb: "Bends, twists, that's the point."
}, {
  id: "dragon-egg",
  name: "Dragon Egg",
  line: "dragons",
  price: 8,
  blurb: "The dragon folds right in."
}, {
  id: "flexi-rex",
  name: "Flexi Rex",
  line: "dinos",
  price: 12,
  blurb: "Stomps on desks everywhere."
}, {
  id: "clicky",
  name: "Clicky",
  line: "fidgets",
  price: 6,
  blurb: "Click it. Clack it. Repeat."
}, {
  id: "pocket-fox",
  name: "Pocket Fox",
  line: "critters",
  price: 10,
  blurb: "Fits in a pocket. Prefers yours."
}, {
  id: "dino-egg",
  name: "Dino Egg",
  line: "dinos",
  price: 8,
  blurb: "Crack-free hatching, every time."
}];
function z3Line(id) {
  return LINES.find(l => l.id === id);
}
function z3Products(line) {
  return line ? PRODUCTS.filter(p => p.line === line) : PRODUCTS;
}
function z3Product(id) {
  return PRODUCTS.find(p => p.id === id);
}
function z3Lines() {
  return LINES;
}
function CartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
  }));
}

/* Photo placeholder — no real imagery was provided. */
function PhotoPlaceholder({
  color = "var(--z3-teal-soft)",
  label = "product photo",
  ratio = "4 / 3"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: color,
      display: "grid",
      placeItems: "center",
      borderBottom: "2px solid var(--z3-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--z3-ink-45)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, label));
}
function SiteHeader({
  navigate,
  cartCount,
  active
}) {
  const {
    Button,
    IconButton
  } = window.Z3CollectiveDesignSystem_07fe72;
  const link = (label, screen, isActive) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate(screen);
    },
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: isActive ? "var(--z3-ink)" : "var(--z3-ink-70)",
      textDecoration: "none",
      padding: "6px 2px",
      borderBottom: isActive ? "2px solid var(--z3-teal)" : "2px solid transparent"
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "18px 32px",
      borderBottom: "2px solid var(--z3-ink)",
      background: "var(--z3-paper)",
      position: "sticky",
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate({
        screen: "home"
      });
    },
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.02em",
      color: "var(--z3-ink)",
      textDecoration: "none"
    }
  }, "z3 collective", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--z3-teal)"
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, link("Shop", {
    screen: "home"
  }, active === "home"), link("Dragons", {
    screen: "line",
    line: "dragons"
  }, active === "line"), link("About", {
    screen: "home"
  }, false)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Cart",
    size: "sm"
  }, /*#__PURE__*/React.createElement(CartIcon, null)), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -6,
      right: -6,
      background: "var(--z3-teal)",
      border: "2px solid var(--z3-ink)",
      borderRadius: 999,
      minWidth: 20,
      height: 20,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11
    }
  }, cartCount) : null));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--z3-ink)",
      color: "var(--z3-paper)",
      padding: "40px 32px",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.02em"
    }
  }, "Made to move ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--z3-teal)"
    }
  }, "by teens.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(244,244,247,.6)"
    }
  }, "Z3 Collective \u2014 a teen-preneur business. Every toy printed by us.")));
}
function ProductTile({
  product,
  onOpen
}) {
  const {
    Card,
    Badge
  } = window.Z3CollectiveDesignSystem_07fe72;
  const line = z3Line(product.line);
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padded: false,
    onClick: onOpen
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    color: line.color,
    label: "photo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, product.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 18
    }
  }, "$", product.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, product.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    line: product.line
  }, line.name))));
}
Object.assign(__ds_scope, { z3Line, z3Products, z3Product, z3Lines, CartIcon, PhotoPlaceholder, SiteHeader, SiteFooter, ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHome.jsx
try { (() => {
function WebsiteHome({
  navigate,
  cartCount
}) {
  const {
    Button
  } = window.Z3CollectiveDesignSystem_07fe72;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--z3-paper)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    navigate: navigate,
    cartCount: cartCount,
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "72px 32px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "A teen-preneur business"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 56,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      margin: "12px 0 0",
      maxWidth: 640
    }
  }, "Toys that move, click, and ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--z3-teal)"
    }
  }, "surprise.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: 480,
      margin: "16px 0 28px"
    }
  }, "Bend it, twist it \u2014 that's the point. We design and 3D-print every one ourselves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => navigate({
      screen: "line",
      line: "dragons"
    })
  }, "Shop the lines"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => navigate({
      screen: "product",
      product: "flexi-dragon"
    })
  }, "See a flexi move"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "16px 32px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: "0 0 16px"
    }
  }, "Four lines. One rule: it has to move."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, __ds_scope.z3Lines().map(line => /*#__PURE__*/React.createElement("div", {
    key: line.id,
    onClick: () => navigate({
      screen: "line",
      line: line.id
    }),
    style: {
      background: "var(--z3-white)",
      border: "2px solid var(--z3-ink)",
      borderRadius: 16,
      boxShadow: "3px 3px 0 var(--z3-ink)",
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 76,
      background: line.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, line.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, line.flair)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "48px 32px 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: "0 0 16px"
    }
  }, "Fresh off the printer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, __ds_scope.z3Products().slice(0, 3).map(p => /*#__PURE__*/React.createElement(__ds_scope.ProductTile, {
    key: p.id,
    product: p,
    onOpen: () => navigate({
      screen: "product",
      product: p.id
    })
  })))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebsiteHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteLine.jsx
try { (() => {
function WebsiteLine({
  navigate,
  cartCount,
  line = "dragons"
}) {
  const {
    Tag
  } = window.Z3CollectiveDesignSystem_07fe72;
  const info = __ds_scope.z3Line(line);
  const [filter, setFilter] = React.useState("all");
  const products = __ds_scope.z3Products(line);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--z3-paper)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    navigate: navigate,
    cartCount: cartCount,
    active: "line"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: info.color,
      borderBottom: "2px solid var(--z3-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "56px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, info.flair), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      margin: "8px 0 0"
    }
  }, info.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      maxWidth: 440,
      margin: "12px 0 0"
    }
  }, "Flexi builds that bend and snap back. The eggs fold in \u2014 really."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "28px 32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, ["all", "flexi", "eggs", "under $10"].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, products.map(p => /*#__PURE__*/React.createElement(__ds_scope.ProductTile, {
    key: p.id,
    product: p,
    onOpen: () => navigate({
      screen: "product",
      product: p.id
    })
  })))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebsiteLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteLine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteProduct.jsx
try { (() => {
function WebsiteProduct({
  navigate,
  cartCount,
  product = "flexi-dragon",
  onAddToCart
}) {
  const {
    Button,
    Badge,
    Radio,
    Checkbox
  } = window.Z3CollectiveDesignSystem_07fe72;
  const p = __ds_scope.z3Product(product);
  const line = __ds_scope.z3Line(p.line);
  const [size, setSize] = React.useState("m");
  const [wrap, setWrap] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--z3-paper)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    navigate: navigate,
    cartCount: cartCount,
    active: "product"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "48px 32px 0",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--z3-white)",
      border: "2px solid var(--z3-ink)",
      borderRadius: 16,
      boxShadow: "5px 5px 0 var(--z3-ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoPlaceholder, {
    color: line.color,
    label: "product photo",
    ratio: "1 / 1"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    line: p.line
  }, line.name), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      margin: "12px 0 0"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 24,
      margin: "8px 0 0"
    }
  }, "$", p.price), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: "14px 0 20px",
      maxWidth: 380
    }
  }, p.blurb, " Printed in-house, tested at the booth, packed by the person who made it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    label: "Small",
    checked: size === "s",
    onChange: () => setSize("s")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    label: "Medium",
    checked: size === "m",
    onChange: () => setSize("m")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    label: "Large",
    checked: size === "l",
    onChange: () => setSize("l")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Gift wrap it (+$2)",
    checked: wrap,
    onChange: e => setWrap(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onAddToCart(p)
  }, "Add to cart"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => navigate({
      screen: "line",
      line: p.line
    })
  }, "Back to ", line.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: "var(--z3-teal-soft)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 10,
      padding: "12px 16px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      maxWidth: 380
    }
  }, "Every print gets a bend test before it ships. If it breaks, we reprint it. Free."))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { WebsiteProduct });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteProduct.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CartIcon = __ds_scope.CartIcon;

__ds_ns.PhotoPlaceholder = __ds_scope.PhotoPlaceholder;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.WebsiteHome = __ds_scope.WebsiteHome;

__ds_ns.WebsiteLine = __ds_scope.WebsiteLine;

__ds_ns.WebsiteProduct = __ds_scope.WebsiteProduct;

})();
