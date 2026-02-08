import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";

export type ToolbarInputProps = ToolbarPrimitive.Input.Props;

const ToolbarInput = (props: ToolbarInputProps) => (
  <ToolbarPrimitive.Input {...props} />
);

export { ToolbarInput };
