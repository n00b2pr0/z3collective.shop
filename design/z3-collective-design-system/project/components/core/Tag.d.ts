/** Quiet filter/metadata chip. Clickable when onClick given; teal-wash when selected. */
export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
