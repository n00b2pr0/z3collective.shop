/** Native select styled to match Input; ink chevron. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings or {value,label} pairs. */
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}
export declare function Select(props: SelectProps): JSX.Element;
