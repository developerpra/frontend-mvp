import VessalTabs from "../components/VesselInformation";
import PageTitle from "../../../shared/components/PageTitle";
export default function Maintenance() {
  return (
    <>
      <PageTitle text="Vessal Information" />
      <VessalTabs className="p-4" />
    </>
  );
}
