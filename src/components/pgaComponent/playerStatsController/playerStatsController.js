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
    <div className="standardColors w-5/6">
      <div className="flex flex-row justify-center">
        <DropDownComponent items={players} onChange={handleFieldChange} />
      </div>

      {showChartData ? (
        <div className="flex flex-row justify-center py-8">
          <BarChart
            chartData={{
              title: selectedPlayer.player.Name,
              labels: [
                "Score",
                "Birdies",
                "Pars",
                "Bogeys",
                "DK Pts",
                "DK Salary ($1k)",
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
                    selectedPlayer.player.DraftKingsSalary / 1000,
                  ],
                  borderColor: "#ecf0f1",
                  backgroundColor: "#4BC0C0",
                  color: "#F5F5F5",
                  borderWidth: 2,
                  borderRadius: 12.5,
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
