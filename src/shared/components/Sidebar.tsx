import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Tree-shaken icon imports
import {
  faChevronLeft,
  faChevronRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`h-screen bg-gray-100 border-r shadow-sm
        transition-all duration-300 
        ${open ? "w-40" : "w-16"}
      `}
    >
      {/* TOP — Toggle Button */}
      <div className="flex items-center justify-center py-4 cursor-pointer">
        {open ? (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => setOpen(false)}
            className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => setOpen(true)}
            className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"
          />
        )}
      </div>

      {/* MENU */}
      <div className="mt-6 flex flex-col items-center gap-6">
        <button className="flex items-center gap-4 text-gray-700 hover:text-blue-600">
          <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
          {open && <span className="text-sm font-medium">Home</span>}
        </button>

        {/* Add more items here */}
      </div>
    </aside>
  );
}
