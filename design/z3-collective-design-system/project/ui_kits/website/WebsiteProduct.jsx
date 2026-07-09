import React from "react";
import { SiteHeader, SiteFooter, PhotoPlaceholder, z3Line, z3Product } from "./Chrome.jsx";

export function WebsiteProduct({ navigate, cartCount, product = "flexi-dragon", onAddToCart }) {
  const { Button, Badge, Radio, Checkbox } = window.Z3CollectiveDesignSystem_07fe72;
  const p = z3Product(product);
  const line = z3Line(p.line);
  const [size, setSize] = React.useState("m");
  const [wrap, setWrap] = React.useState(false);
  return (
    <div style={{ background: "var(--z3-paper)", minHeight: "100%" }}>
      <SiteHeader navigate={navigate} cartCount={cartCount} active="product" />

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 32px 0", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "start" }}>
        <div style={{ background: "var(--z3-white)", border: "2px solid var(--z3-ink)", borderRadius: 16, boxShadow: "5px 5px 0 var(--z3-ink)", overflow: "hidden" }}>
          <PhotoPlaceholder color={line.color} label="product photo" ratio="1 / 1" />
        </div>

        <div>
          <Badge line={p.line}>{line.name}</Badge>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "12px 0 0" }}>{p.name}</h1>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, margin: "8px 0 0" }}>${p.price}</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--text-muted)", margin: "14px 0 20px", maxWidth: 380 }}>
            {p.blurb} Printed in-house, tested at the booth, packed by the person who made it.
          </p>

          <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600 }}>Size</span>
            <div style={{ display: "flex", gap: 20 }}>
              <Radio name="size" label="Small" checked={size === "s"} onChange={() => setSize("s")} />
              <Radio name="size" label="Medium" checked={size === "m"} onChange={() => setSize("m")} />
              <Radio name="size" label="Large" checked={size === "l"} onChange={() => setSize("l")} />
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <Checkbox label="Gift wrap it (+$2)" checked={wrap} onChange={(e) => setWrap(e.target.checked)} />
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <Button size="lg" onClick={() => onAddToCart(p)}>Add to cart</Button>
            <Button size="lg" variant="secondary" onClick={() => navigate({ screen: "line", line: p.line })}>Back to {line.name}</Button>
          </div>

          <div style={{ marginTop: 24, background: "var(--z3-teal-soft)", border: "1px solid var(--border-subtle)", borderRadius: 10, padding: "12px 16px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", maxWidth: 380 }}>
            Every print gets a bend test before it ships. If it breaks, we reprint it. Free.
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
