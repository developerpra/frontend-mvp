import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="w-full shadow-md">
      <div className="bg-[#0d2b53] text-white px-4 py-2 flex items-center gap-4">
        <div className="font-bold text-lg tracking-wide">CAMIN</div>

        {/* SEARCH INPUT */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded bg-white text-black text-sm focus:outline-none w-full"
          />
          {/* <span className="absolute right-3 top-2.5 text-gray-500">🔍</span> */}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Invoice Number..."
            className="px-4 py-2 border rounded bg-white text-black text-sm focus:outline-none"
          />

          <input
            type="text"
            placeholder="File Number..."
            className="px-4 py-2 border rounded bg-white text-black text-sm focus:outline-none"
          />

          <input
            type="text"
            placeholder="Order Number..."
            className="px-4 py-2 border rounded bg-white text-black text-sm focus:outline-none"
          />
        </div>

        {/* SPACER */}
        <div className="flex-1"></div>

        {/* ICONS SECTION */}
        <div className="flex items-center gap-6 text-xl">
          <FontAwesomeIcon icon={faHome} className="cursor-pointer" />
          <FontAwesomeIcon icon={faStar} className="cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </div>

      {/* SECOND NAV (TAB STYLE) */}
      <div className="bg-[#123765] text-white text-sm px-4 py-2 flex gap-6 overflow-x-auto">
        {[
          "SAV-3184",
          "SHIPS",
          "Discharge",
          "American Pride",
          "MCK - Jacksonville",
          "ULSD",
          "01-Jan-2023",
          "01-Jan-2023",
          "Working",
          "Reported",
          "Retain",
          "Issued",
        ].map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-yellow-300 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
