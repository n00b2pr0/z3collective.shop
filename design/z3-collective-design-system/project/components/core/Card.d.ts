/** Sticker card: white, 2px ink border, hard offset shadow, 16px radius. */
export interface CardProps {
  /** 1px subtle border, no shadow — for quiet containers. */
  quiet?: boolean;
  /** Hover-lift + press-sink behavior. */
  interactive?: boolean;
  /** Wrap children in 16px padding (default true). Set false for full-bleed media. */
  padded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
