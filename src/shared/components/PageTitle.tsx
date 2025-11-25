import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@progress/kendo-react-buttons";

export default function PageTitle({ text }: { text: string }  ) {
  const [fav, setFav] = useState(false);

  return (
    <div className="flex justify-between items-center gap-2 w-full shadow-lg py-2 px-4">
      <div className="flex items-center gap-2">
        <h4 className="text-lg font-medium">{text}</h4>
        <FontAwesomeIcon
          icon={fav ? faStarSolid : faStarRegular}
          onClick={() => setFav(!fav)}
          className="transition"
        />
      </div>
      <div className="flex gap-2">
        <Button themeColor="primary">+ Add</Button>
        <Button fillMode="flat" themeColor="primary">
          Referance
        </Button>
      </div>
    </div>
  );
}
