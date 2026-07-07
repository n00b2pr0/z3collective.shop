/** Modal dialog on ink scrim; sticker card, snap-in entrance. */
export interface DialogProps {
  open: boolean;
  title?: string;
  /** Body content. */
  children?: React.ReactNode;
  /** Action buttons row (use Button). */
  actions?: React.ReactNode;
  /** Called on scrim click. */
  onClose?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
