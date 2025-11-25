import { useState } from "react";
import {
  DropDownList,
  DropDownListChangeEvent,
} from "@progress/kendo-react-dropdowns";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { vessels } from "../../dummyData";
import { BranchCell } from "../BranchCell";

const vesselTypes = ["Barge", "Tow", "Ship"];
const vesselNames = ["EBL-2869", "EBL-2900", "EBL - 2971 & 2972"];

export default function VesselPage() {
  const [filters, setFilters] = useState({
    vessel: "",
    vesselType: "",
    imo: "",
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

    if (status) {
      filtered = filtered.filter((d) => d.status === status);
    }

    setData(filtered);
  };

  const clearFilters = () => {
    setFilters({ vessel: "", vesselType: "", imo: "", status: "" });
    setStatus("Active");
    setData(vessels);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters Card */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white space-y-4">
        <h3 className="font-medium text-gray-700">Filters</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <DropDownList
            className="h-9"
            data={vesselNames}
            label="Vessel"
            value={filters.vessel}
            onChange={(e: DropDownListChangeEvent) =>
              setFilters({ ...filters, vessel: e.value ?? "" })
            }
          />

          <DropDownList
            className="h-9"
            data={vesselTypes}
            label="Vessel Type"
            value={filters.vesselType}
            onChange={(e: DropDownListChangeEvent) =>
              setFilters({ ...filters, vesselType: e.value ?? "" })
            }
          />

          <Input
            className="h-9"
            label="IMO Number"
            value={filters.imo}
            onChange={(e) => setFilters({ ...filters, imo: e.value ?? "" })}
          />

          {/* Status */}
          <div className="mt-4 inline-flex rounded-md overflow-hidden border border-gray-300 w-fit h-fit">
            <button
              onClick={() => setStatus("Active")}
              className={`px-4 py-2 text-sm ${
                status === "Active"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Active
            </button>

            <button
              onClick={() => setStatus("Inactive")}
              className={`px-4 py-2 text-sm border-l ${
                status === "Inactive"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Inactive
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 h-9">
          <Button themeColor="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 rounded-lg bg-white">
        <Grid
          data={data.slice(page.skip, page.skip + page.take)}
          skip={page.skip}
          take={page.take}
          total={data.length}
          pageable={true}
          onPageChange={handlePageChange}
          cell={BranchCell}
        >
          <GridColumn field="vesselName" title="Vessel Name" />
          <GridColumn field="vesselType" title="Vessel Type" />
          <GridColumn field="branch" title="Branch" />

          <GridColumn
            title="Action"
            cell={(props) => (
              <td className="space-x-4 text-center">
                <span className="cursor-pointer text-blue-600">👁</span>
                <span className="cursor-pointer text-green-600">✏️</span>
                <span className="cursor-pointer text-red-600">🗑</span>
              </td>
            )}
          />
        </Grid>
      </div>
    </div>
  );
}
