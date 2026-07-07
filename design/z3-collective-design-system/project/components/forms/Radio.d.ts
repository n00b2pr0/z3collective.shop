/** Radio; teal dot pops in with snap easing. */
export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
