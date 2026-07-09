/** Round icon-only button; pass a Lucide SVG (or any glyph) as children. */
export interface IconButtonProps {
  size?: "sm" | "md" | "lg";
  /** Borderless, shadowless variant for toolbars. */
  quiet?: boolean;
  /** Required accessible name. */
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
