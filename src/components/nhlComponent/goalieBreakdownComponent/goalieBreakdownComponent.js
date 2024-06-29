import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";
import PieChart from "../../common/charts/pie";
import { useEffect } from "react";
import GoalieGridComponent from "../goalieGridComponent/goalieGridComponent";

function GoalieBreakdownComponent({ goalieStats }) {
  const [goalieChartDataSimple, setGoalieChartDataSimple] = useState({});
  const [goalieChartDataDetailed, setGoalieChartDataDetailed] = useState({});
  const [isLoadingGoalie, setIsLoadingGoalie] = useState(true);
  const [showDexterity, setShowDexterity] = useState(true);
  const [currentDataSet, setCurrentDataSet] = useState(true);

  useEffect(() => {
    determineChartData();
  }, [showDexterity]);

  const formatGoalieChartDataSimple = (goalie) => {
    let result = {
      labels: ["Left Wing", "Center", "Right Wing", "Defense"],
      datasets: [
        {
          label: "Goals Against By Position",
          data: [goalie.PL_GA, goalie.PC_GA, goalie.PR_GA, goalie.PD_GA],
          backgroundColor: [
            "#4BC0C0", // blue
            "#ecf0f1", // white
            "#50AF95", // green
            "#6F7070", // grey
          ],
          borderColor: "#291720",
          borderWidth: 2,
        },
      ],
      goal_details: goalie.goal_details,
    };
    return result;
  };

  const formatGoalieChartDataDetailed = (goalie) => {
    let result = {
      labels: [
        "Left Wing LH",
        "Left Wing RH",
        "Center LH",
        "Center RH",
        "Right Wing LH",
        "Right Wing RH",
        "Defense LH",
        "Defense RH",
      ],
      datasets: [
        {
          label: "Goals Against By Position",
          data: [
            goalie.HLPL_GA,
            goalie.HRPL_GA,
            goalie.HLPC_GA,
            goalie.HRPC_GA,
            goalie.HLPR_GA,
            goalie.HRPR_GA,
            goalie.HLPD_GA,
            goalie.HRPD_GA,
          ],
          backgroundColor: [
            "#4BC0C0",
            "#87E7E7",
            "#ECF0F1",
            "#BFC0C0",
            "#50AF95",
            "#94D1C1",
            "#6F7070",
            "#4F4F4F",
            "#F3BA2F",
          ],
          borderColor: "#291720",
          borderWidth: 2,
        },
      ],
      goal_details: goalie.goal_details,
    };
    return result;
  };

  const determineChartData = () => {
    showDexterity
      ? setCurrentDataSet(goalieChartDataDetailed)
      : setCurrentDataSet(goalieChartDataSimple);
  };

  const checkBoxFunction = () => {
    setShowDexterity(!showDexterity);
  };

  const handleFieldChange = (goalieID) => {
    let goalie = goalieStats.find((p) => p._id == goalieID);
    let goalieChartDataSimple = formatGoalieChartDataSimple(goalie);
    let goalieChartDataDetailed = formatGoalieChartDataDetailed(goalie);
    setGoalieChartDataSimple(goalieChartDataSimple);
    setGoalieChartDataDetailed(goalieChartDataDetailed);
    setCurrentDataSet(goalieChartDataSimple);
    setShowDexterity(false);
    setIsLoadingGoalie(false);
  };

  return (
    <div className="flex flex-col items-center standardColors w-full overflow-visible">
      <div className="flex flex-row justify-center">
        <h3>Individual Goalie Statistics</h3>
      </div>

      {isLoadingGoalie ? (
        <div className="flex flex-row justify-center content-center h-96">
          <DropDownComponent items={goalieStats} onChange={handleFieldChange} />
        </div>
      ) : (
        <div className="flex flex-row justify-center content-center">
          <DropDownComponent items={goalieStats} onChange={handleFieldChange} />
        </div>
      )}

      <div className="flex flex-row justify-center content-center w-full">
        {isLoadingGoalie ? (
          ""
        ) : (
          <div className="flex flex-col flex-wrap justify-center content-center w-full">
            <div className="flex flex-col items-center justify-center">
              <PieChart chartData={currentDataSet} />
              <input
                name="checkbox"
                type="checkbox"
                id="checkbox"
                onClick={checkBoxFunction}
                checked={showDexterity}
                onChange={(e) => {}}
              />
              <p className="text-xs">
                {showDexterity ? "Hide Dexterity" : "Show Dexterity"}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-3/4 h-96">
              <h4>Goalscorer Breakdown</h4>
              <GoalieGridComponent goals={currentDataSet.goal_details} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoalieBreakdownComponent;
