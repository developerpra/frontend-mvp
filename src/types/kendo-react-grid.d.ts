import type { ComponentType } from "react";
import type { GridCellProps } from "@progress/kendo-react-grid";

declare module "@progress/kendo-react-grid" {
  interface GridColumnProps {
    cell?: ComponentType<GridCellProps>;
  }
}
