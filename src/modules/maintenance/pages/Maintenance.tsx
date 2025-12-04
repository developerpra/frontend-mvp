import VesselTabs from "../components/VesselInformation";
import PageTitle from "../../../shared/components/PageTitle";
export default function Maintenance() {
  return (
    <>
      <PageTitle text="Vessel Information" />
      <VesselTabs className="p-4" />
    </>
  );
}
