/** Text input with 2px ink border; focus pops the sticker shadow. */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message; also turns the border danger-orange. */
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
