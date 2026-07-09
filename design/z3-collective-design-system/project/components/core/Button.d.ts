/**
 * Pill button with the Z3 "printed sticker" look: 2px ink border, hard offset
 * shadow, lift on hover, click-down on press.
 * @startingPoint section="Core" subtitle="Sticker-style pill button" viewport="700x260"
 */
export interface ButtonProps {
  /** Visual style. `accent` prop overrides background for product-line contexts. */
  variant?: "primary" | "secondary" | "ink" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Product-line accent hex (e.g. var(--z3-dragons)). Only inside that line's context. */
  accent?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
