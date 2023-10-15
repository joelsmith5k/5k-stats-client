import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";
import PieChart from "../../common/charts/pie";
import SpinnerComponent from "../../common/spinner/spinner";

function GoalieBreakdownComponent({ goalieStats }) {
  const [goalieChartData, setGoalieChartData] = useState({});
  const [isLoadingGoalie, setIsLoadingGoalie] = useState(true);

  const formatGoalieChartData = (goalie) => {
    let result = {
      labels: ["Left Wing", "Center", "Right Wing", "Defense"],
      datasets: [
        {
          label: "Goals Against By Position",
          data: [goalie.PL_GA, goalie.PC_GA, goalie.PR_GA, goalie.PD_GA],
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    return result;
  };

  const handleFieldChange = (goalieID) => {
    let goalie = goalieStats.find((p) => p._id == goalieID);
    let goalieChartData = formatGoalieChartData(goalie);
    setGoalieChartData(goalieChartData);
    setIsLoadingGoalie(false);
  };

  return (
    <div>
      <div>
        <h3>Individual Goalie Breakdowns</h3>
        <DropDownComponent items={goalieStats} onChange={handleFieldChange} />
      </div>
      <div></div>
      <div className="flex flex-row flex-wrap justify-center content-center w-full h-96">
        {goalieChartData == {} || isLoadingGoalie ? (
          ""
        ) : (
          <div className="text-center py-2 h-96">
            <PieChart chartData={goalieChartData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GoalieBreakdownComponent;
