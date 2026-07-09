import React from "react";
import { SiteHeader, SiteFooter, ProductTile, z3Line, z3Products } from "./Chrome.jsx";

export function WebsiteLine({ navigate, cartCount, line = "dragons" }) {
  const { Tag } = window.Z3CollectiveDesignSystem_07fe72;
  const info = z3Line(line);
  const [filter, setFilter] = React.useState("all");
  const products = z3Products(line);
  return (
    <div style={{ background: "var(--z3-paper)", minHeight: "100%" }}>
      <SiteHeader navigate={navigate} cartCount={cartCount} active="line" />

      <section style={{ background: info.color, borderBottom: "2px solid var(--z3-ink)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 32px" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{info.flair}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "8px 0 0" }}>{info.name}</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, maxWidth: 440, margin: "12px 0 0" }}>Flexi builds that bend and snap back. The eggs fold in — really.</p>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "28px 32px 0" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {["all", "flexi", "eggs", "under $10"].map((f) => (
            <Tag key={f} selected={filter === f} onClick={() => setFilter(f)}>{f}</Tag>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {products.map((p) => (
            <ProductTile key={p.id} product={p} onOpen={() => navigate({ screen: "product", product: p.id })} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
