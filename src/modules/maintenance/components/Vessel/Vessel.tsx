import { useState } from "react";
import {
  DropDownList,
  DropDownListChangeEvent,
} from "@progress/kendo-react-dropdowns";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@progress/kendo-react-inputs";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { vessels } from "../../dummyData/VesselsData";

const vesselTypes = ["Barge", "Tow", "Ship"];
const vesselNames = ["EBL-2869", "EBL-2900", "EBL - 2971 & 2972"];

const ActionCell = (_props: GridCellProps) => (
  <td>
    <div className="flex items-center justify-center gap-3 text-lg">
      <button
        type="button"
        title="Edit"
        className="text-primary cursor-pointer"
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button
        type="button"
        title="Delete"
        className="text-primary cursor-pointer"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </td>
);

const BranchCell = (props: GridCellProps) => {
  return (
    <td className="flex items-center gap-2 px-2">
      <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
      <a
        href={`/branch/${props.dataItem.branch}`}
        className="text-primary underline hover:text-blue-800"
      >
        {props.dataItem.branch}
      </a>
    </td>
  );
};

export default function VesselPage() {
  const [filters, setFilters] = useState({
    vessel: null,
    vesselType: null,
    imo: null,
    branch: "",
    status: "",
  });

  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  const [data, setData] = useState(vessels);

  const [page, setPage] = useState({
    skip: 0,
    take: 10,
  });

  const handlePageChange = (e: any) => {
    setPage(e.page);
  };

  const handleSearch = () => {
    let filtered = vessels;

    if (filters.vessel) {
      filtered = filtered.filter((d) =>
        d.vesselName.toLowerCase().includes(filters.vessel.toLowerCase())
      );
    }

    if (filters.vesselType) {
      filtered = filtered.filter((d) => d.vesselType === filters.vesselType);
    }

    if (filters.imo) {
      filtered = filtered.filter((d) => d.id.toString().includes(filters.imo));
    }

    if (filters.branch) {
      filtered = filtered.filter((d) =>
        d.id.toString().includes(filters.branch)
      );
    }

    if (status) {
      filtered = filtered.filter((d) => d.status === status);
    }

    setData(filtered);
  };

  const clearFilters = () => {
    setFilters({
      vessel: null,
      vesselType: null,
      imo: null,
      branch: "",
      status: "",
    });
    setStatus("Active");
    setData(vessels);
  };

  return (
    <>
      {/* Filters Card */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white space-y-4">
        <h3 className="font-bold text-gray-700">Filters</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="space-y-1">
            <label className="font-medium">Vessel</label>
            <DropDownList
              className=" !bg-transparent"
              data={vesselNames}
              value={filters?.vessel}
              onChange={(e) =>
                setFilters({ ...filters, vessel: e.value ?? "" })
              }
            />
          </div>

          <div className="space-y-1">
            <label className="font-medium">Vessel Type</label>
            <DropDownList
              className=" !bg-transparent"
              data={vesselTypes}
              value={filters?.vesselType}
              onChange={(e: DropDownListChangeEvent) =>
                setFilters({ ...filters, vesselType: e.value ?? "" })
              }
            />
          </div>

          <Input
            labelClassName="font-medium"
            label="IMO Number"
            value={filters?.imo}
            onChange={(e) => setFilters({ ...filters, imo: e.value ?? "" })}
          />
          <div className="space-y-1">
            <label className="font-medium">Branch</label>
            <DropDownList
              className=" !bg-transparent"
              data={vessels?.branch}
              value={filters?.branch}
              onChange={(e: DropDownListChangeEvent) =>
                setFilters({ ...filters, branch: e.value ?? "" })
              }
            />
          </div>

          {/* Status */}
          <div className="mt-4 w-fit h-fit">
            <ButtonGroup>
              <Button
                className="w-16 mt-1"
                onClick={() => setStatus("Active")}
                themeColor="primary"
                fillMode={status === "Active" ? "solid" : "outline"}
              >
                Active
              </Button>

              <Button
                className="w-16 mt-1"
                onClick={() => setStatus("Inactive")}
                themeColor="primary"
                fillMode={status === "Inactive" ? "solid" : "outline"}
              >
                Inactive
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 ">
          <Button themeColor="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 rounded-lg bg-white mt-4">
        <Grid
          data={data?.slice(page.skip, page.skip + page.take)}
          skip={page?.skip}
          take={page?.take}
          total={data?.length}
          pageable={{
            pageSizes: [5, 10, 20, 50],
            buttonCount: 5,
          }}
          onPageChange={handlePageChange}
        >
          <GridColumn field="vesselName" title="Vessel Name" />
          <GridColumn field="vesselType" title="Vessel Type" />
          <GridColumn field="id" title="IMO Number" />
          <GridColumn
            field="branch"
            title="Branch"
            cells={{
              data: BranchCell,
            }}
          />

          <GridColumn
            field="action"
            title="Action"
            cells={{
              data: ActionCell,
            }}
          />
        </Grid>
      </div>
    </>
  );
}
