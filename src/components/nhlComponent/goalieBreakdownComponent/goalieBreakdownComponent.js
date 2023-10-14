import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";

function GoalieBreakdownComponent({ goalieStats }) {
  const [selectedPlayer, setSelectedPlayer] = useState(goalieStats[0]);

  const handleFieldChange = (playerID) => {
    let player = goalieStats.find((p) => p.id == playerID);
    setSelectedPlayer({ player });
  };

  return (
    <div>
      <div>
        <DropDownComponent items={goalieStats} onChange={handleFieldChange} />
      </div>
    </div>
  );
}

export default GoalieBreakdownComponent;
