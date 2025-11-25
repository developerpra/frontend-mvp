import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function PageTitle({ text }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="relative flex items-center shadow-lg py-2 px-4">
      <div className="flex-1 text-center font-medium text-md">{text}</div>

      <FontAwesomeIcon
        icon={fav ? faStarSolid : faStarRegular}
        onClick={() => setFav(!fav)}
        className="absolute right-4 cursor-pointer text-gray-600 hover:text-black-500 text-xl transition"
      />
    </div>
  );
}
