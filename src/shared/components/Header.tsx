import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) {
      return;
    }

    const updateHeight = () => {
      if (!headerRef.current) {
        return;
      }
      document.documentElement.style.setProperty(
        "--app-header-height",
        `${headerRef.current.offsetHeight}px`
      );
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);
    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div ref={headerRef} className="sticky top-0 z-40 w-full shadow-md">
      <div className="bg-primary text-white px-4 py-2 flex items-center gap-4">
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
      <div className="bg-primary text-white text-sm px-4 py-2 flex gap-6 overflow-x-auto">
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
