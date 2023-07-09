import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";
import PlayerStatComponent from "../playerStatComponent/playerStatComponent";
import SpinnerComponent from "../../common/spinner/spinner";

function PlayerStatsController({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handleFieldChange = (playerID) => {
    let player = players.find((p) => p.PlayerID == playerID);
    setSelectedPlayer({ player });
    console.log(player);
  };

  return (
    <div>
      <div>
        <DropDownComponent items={players} onChange={handleFieldChange} />
      </div>
      <div>
        {selectedPlayer != null ? (
          <PlayerStatComponent player={selectedPlayer} />
        ) : (
          <SpinnerComponent />
        )}
      </div>
    </div>
  );
}

export default PlayerStatsController;
