import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useState } from "react";
import Vessel from "./Vessel/Vessel";
import VesselInformation from "./Vessel/Information";
import Compartments from "./Vessel/Compartments";
import AuditLog from "./Vessel/AuditLog";
import { vessel } from "../dummyData/VesselInformation";

export default function VesselTabs({ className }) {
  const [selected, setSelected] = useState(0);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <TabStrip
      selected={selected}
      onSelect={handleSelect}
      scrollable={true}
      size={"large"}
      className={`${className}`}
    >
      <TabStripTab title="Vessel">
        <Vessel />
      </TabStripTab>

      <TabStripTab title="Vessel Information">
        {/* <VesselInformation mode="edit" /> */}
        <VesselInformation mode="view" data={vessel} />
      </TabStripTab>

      <TabStripTab title="Vessel Compartments">
        <Compartments mode="edit" />
      </TabStripTab>

      <TabStripTab title="Audit Log">
        <AuditLog />
      </TabStripTab>
    </TabStrip>
  );
}
