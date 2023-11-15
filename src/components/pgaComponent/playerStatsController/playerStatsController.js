import { useEffect, useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";
import BarChart from "../../common/charts/horizontal-bar";
import "./playerStatsController.css";

function PlayerStatsController({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [showChartData, setShowChartData] = useState(false);

  const handleFieldChange = (playerID) => {
    let player = players.find((p) => p.PlayerID == playerID);
    setSelectedPlayer({ player });
    setShowChartData(true);
  };

  return (
    <div className="standardColors">
      <div className="flex flex-row justify-center">
        <div className="w-80">
        <DropDownComponent items={players} onChange={handleFieldChange} />
        </div>
      </div>

      {showChartData ? (
        <div className="flex flex-row justify-center">
          <BarChart
            chartData={{
              title: selectedPlayer.player.Name,
              labels: [
                "Score",
                "Birdies",
                "Pars",
                "Bogeys",
                "DK Pts",
                // "DK Salary ($1k)",
              ],
              datasets: [
                {
                  label: "SportsDataIO Projection",
                  data: [
                    selectedPlayer.player.TotalScore,
                    selectedPlayer.player.Birdies,
                    selectedPlayer.player.Pars,
                    selectedPlayer.player.Bogeys,
                    selectedPlayer.player.FantasyPointsDraftKings,
                    // selectedPlayer.player.DraftKingsSalary / 1000,
                  ],
                  borderColor: "#4BC0C0",
                  backgroundColor: "#4BC0C0",
                },
              ],
            }}
          />
        </div>
      ) : (
        <div className="h-auto"></div>
      )}
    </div>
  );
}

export default PlayerStatsController;
