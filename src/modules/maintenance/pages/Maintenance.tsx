import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { useState } from "react";

export default function Maintenance() {
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
    >
      <TabStripTab title="Vessal">
        <div className="p-4">This is the vessal tab content</div>
      </TabStripTab>

      <TabStripTab title="Vessal Information">
        <div className="p-4">This is the Vessal Information tab content</div>
      </TabStripTab>

      <TabStripTab title="Vessal Comartments">
        <div className="p-4">This is the Vessal Comartments tab content</div>
      </TabStripTab>

      <TabStripTab title="Vessal Comartments">
        <div className="p-4">This is the Vessal Comartments tab content</div>
      </TabStripTab>
    </TabStrip>
  );
}
