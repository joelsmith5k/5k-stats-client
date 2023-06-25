import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";

function PlayerStatsController({ players }) {
  const [selectedPlayerID, setSelectedPlayerID] = useState(players[0].PlayerID);

  const handleFieldChange = (playerID) => {
    setSelectedPlayerID({ playerID });
    console.log("call back.. playerID: " + playerID);
  };

  return (
    <div>
      <DropDownComponent items={players} onChange={handleFieldChange} />
    </div>
  );
}

export default PlayerStatsController;
