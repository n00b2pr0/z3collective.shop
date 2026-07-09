/** Ink toast pill with tone dot. Wrap in ToastStack for fixed bottom-center placement. */
export interface ToastProps {
  tone?: "brand" | "success" | "danger";
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
export declare function ToastStack(props: { children?: React.ReactNode }): JSX.Element;
