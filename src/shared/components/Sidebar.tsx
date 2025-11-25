import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faBars,
  faHome,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <aside
      className={`h-screen z-10 bg-gray-100 shadow-[3px_0_6px_rgba(0,0,0,0.15)]
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
            icon={faBars}
            onClick={() => setOpen(true)}
            className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"
          />
        )}
      </div>

      {/* MENU */}
      <div className="mt-6 flex flex-col items-center gap-6">
        <button
          className="flex items-center gap-4 text-gray-700 hover:text-blue-600"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
          {open && <span className="text-sm font-medium">Home</span>}
        </button>

        <button
          className="flex items-center gap-4 text-gray-700 hover:text-blue-600"
          onClick={() => navigate("/Maintenance")}
        >
          <FontAwesomeIcon icon={faHammer} className="w-6 h-6" />
          {open && <span className="text-sm font-medium">Maintenance</span>}
        </button>
      </div>
    </aside>
  );
}
