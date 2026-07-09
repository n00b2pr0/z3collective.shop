/** Uppercase pill badge; `line` colors it with a product-line accent. */
export interface BadgeProps {
  /** Product-line accent fill. Candy/Yarn intentionally unsupported (locked). */
  line?: "dragons" | "dinos" | "critters" | "fidgets";
  /** Ink-on-dark variant. */
  ink?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
