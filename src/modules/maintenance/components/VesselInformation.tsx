import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useState } from "react";
import Vessal from "./Vessal/Vessel";
import VessalInformation from "./Vessal/Information";
import Compartments from "./Vessal/Compartments";
import AuditLog from "./Vessal/AuditLog";
import { Button } from "@progress/kendo-react-buttons";

export default function VessalTabs({ className }) {
  const [selected, setSelected] = useState(0);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <>
      <div className="flex justify-end mt-4 mr-4">
        <Button themeColor="primary">+ Add</Button>
      </div>
      <TabStrip
        selected={selected}
        onSelect={handleSelect}
        scrollable={true}
        size={"large"}
        className={className}
      >
        <TabStripTab title="Vessal">
          <Vessal />
        </TabStripTab>

        <TabStripTab title="Vessal Information">
          <VessalInformation />
        </TabStripTab>

        <TabStripTab title="Vessal Comartments">
          <Compartments />
        </TabStripTab>

        <TabStripTab title="Vessal Comartments">
          <AuditLog />
        </TabStripTab>
      </TabStrip>
    </>
  );
}
