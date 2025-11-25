import { GridCellProps } from "@progress/kendo-react-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const BranchCell = (props: GridCellProps) => {
  return (
    <td className="flex items-center gap-2 px-2">
      <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
      <a
        href={`/branch/${props.dataItem.branch}`}
        className="text-blue-600 underline hover:text-blue-800"
      >
        {props.dataItem.branch}
      </a>
    </td>
  );
};
