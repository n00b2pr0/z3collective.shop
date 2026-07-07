import React from "react";
import { SiteHeader, SiteFooter, ProductTile, z3Lines, z3Products } from "./Chrome.jsx";

export function WebsiteHome({ navigate, cartCount }) {
  const { Button } = window.Z3CollectiveDesignSystem_07fe72;
  return (
    <div style={{ background: "var(--z3-paper)", minHeight: "100%" }}>
      <SiteHeader navigate={navigate} cartCount={cartCount} active="home" />

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 32px 48px" }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>A teen-preneur business</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "12px 0 0", maxWidth: 640 }}>
          Toys that move, click, and <span style={{ color: "var(--z3-teal)" }}>surprise.</span>
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.55, color: "var(--text-muted)", maxWidth: 480, margin: "16px 0 28px" }}>
          Bend it, twist it — that's the point. We design and 3D-print every one ourselves.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button size="lg" onClick={() => navigate({ screen: "line", line: "dragons" })}>Shop the lines</Button>
          <Button size="lg" variant="secondary" onClick={() => navigate({ screen: "product", product: "flexi-dragon" })}>See a flexi move</Button>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "16px 32px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Four lines. One rule: it has to move.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {z3Lines().map((line) => (
            <div
              key={line.id}
              onClick={() => navigate({ screen: "line", line: line.id })}
              style={{ background: "var(--z3-white)", border: "2px solid var(--z3-ink)", borderRadius: 16, boxShadow: "3px 3px 0 var(--z3-ink)", overflow: "hidden", cursor: "pointer" }}
            >
              <div style={{ height: 76, background: line.color }}></div>
              <div style={{ padding: 14 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{line.name}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>{line.flair}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 32px 0" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Fresh off the printer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {z3Products().slice(0, 3).map((p) => (
            <ProductTile key={p.id} product={p} onOpen={() => navigate({ screen: "product", product: p.id })} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
