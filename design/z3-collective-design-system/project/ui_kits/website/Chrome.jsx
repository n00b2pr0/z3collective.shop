import React from "react";

const LINES = [
  { id: "dragons", name: "Dragons", flair: "Spark & Scale", color: "var(--z3-dragons)" },
  { id: "dinos", name: "Dinos", flair: "Stomp & Roar", color: "var(--z3-dinos)" },
  { id: "critters", name: "Critters", flair: "Wild & Whimsy", color: "var(--z3-critters)" },
  { id: "fidgets", name: "Fidgets", flair: "Twist & Click", color: "var(--z3-fidgets)" },
];

const PRODUCTS = [
  { id: "flexi-dragon", name: "Flexi Dragon", line: "dragons", price: 12, blurb: "Bends, twists, that's the point." },
  { id: "dragon-egg", name: "Dragon Egg", line: "dragons", price: 8, blurb: "The dragon folds right in." },
  { id: "flexi-rex", name: "Flexi Rex", line: "dinos", price: 12, blurb: "Stomps on desks everywhere." },
  { id: "clicky", name: "Clicky", line: "fidgets", price: 6, blurb: "Click it. Clack it. Repeat." },
  { id: "pocket-fox", name: "Pocket Fox", line: "critters", price: 10, blurb: "Fits in a pocket. Prefers yours." },
  { id: "dino-egg", name: "Dino Egg", line: "dinos", price: 8, blurb: "Crack-free hatching, every time." },
];

export function z3Line(id) { return LINES.find((l) => l.id === id); }
export function z3Products(line) { return line ? PRODUCTS.filter((p) => p.line === line) : PRODUCTS; }
export function z3Product(id) { return PRODUCTS.find((p) => p.id === id); }
export function z3Lines() { return LINES; }

export function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
  );
}

/* Photo placeholder — no real imagery was provided. */
export function PhotoPlaceholder({ color = "var(--z3-teal-soft)", label = "product photo", ratio = "4 / 3" }) {
  return (
    <div style={{ aspectRatio: ratio, background: color, display: "grid", placeItems: "center", borderBottom: "2px solid var(--z3-ink)" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--z3-ink-45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export function SiteHeader({ navigate, cartCount, active }) {
  const { Button, IconButton } = window.Z3CollectiveDesignSystem_07fe72;
  const link = (label, screen, isActive) => (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); navigate(screen); }}
      style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: isActive ? "var(--z3-ink)" : "var(--z3-ink-70)", textDecoration: "none", padding: "6px 2px", borderBottom: isActive ? "2px solid var(--z3-teal)" : "2px solid transparent" }}
    >{label}</a>
  );
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "18px 32px", borderBottom: "2px solid var(--z3-ink)", background: "var(--z3-paper)", position: "sticky", top: 0, zIndex: 40 }}>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate({ screen: "home" }); }} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "var(--z3-ink)", textDecoration: "none" }}>
        z3 collective<span style={{ color: "var(--z3-teal)" }}>.</span>
      </a>
      <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {link("Shop", { screen: "home" }, active === "home")}
        {link("Dragons", { screen: "line", line: "dragons" }, active === "line")}
        {link("About", { screen: "home" }, false)}
      </nav>
      <div style={{ position: "relative" }}>
        <IconButton label="Cart" size="sm"><CartIcon /></IconButton>
        {cartCount > 0 ? (
          <span style={{ position: "absolute", top: -6, right: -6, background: "var(--z3-teal)", border: "2px solid var(--z3-ink)", borderRadius: 999, minWidth: 20, height: 20, display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11 }}>{cartCount}</span>
        ) : null}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--z3-ink)", color: "var(--z3-paper)", padding: "40px 32px", marginTop: 64 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em" }}>Made to move <span style={{ color: "var(--z3-teal)" }}>by teens.</span></div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(244,244,247,.6)" }}>Z3 Collective — a teen-preneur business. Every toy printed by us.</div>
      </div>
    </footer>
  );
}

export function ProductTile({ product, onOpen }) {
  const { Card, Badge } = window.Z3CollectiveDesignSystem_07fe72;
  const line = z3Line(product.line);
  return (
    <Card interactive padded={false} onClick={onOpen}>
      <PhotoPlaceholder color={line.color} label="photo" />
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{product.name}</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18 }}>${product.price}</span>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{product.blurb}</div>
        <div style={{ marginTop: 10 }}><Badge line={product.line}>{line.name}</Badge></div>
      </div>
    </Card>
  );
}
