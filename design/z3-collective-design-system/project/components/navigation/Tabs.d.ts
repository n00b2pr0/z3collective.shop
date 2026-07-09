/** Pill tab group; active tab is an ink pill. */
export interface TabsProps {
  /** Strings or {value,label} pairs. */
  tabs: Array<string | { value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
