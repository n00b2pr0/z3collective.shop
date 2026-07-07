/** Toggle switch; ink knob snaps across, teal track when on. */
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
