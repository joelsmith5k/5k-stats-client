import { useState } from "react";
import DropDownComponent from "../../common/dropdown/dropDown";
import PieChart from "../../common/charts/pie";
import { useEffect } from "react";

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
            "#F3BA2F", //yellow
          ],
          borderColor: "#291720",
          borderWidth: 2,
        },
      ],
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
    <div>
      <div>
        <h3>Individual Goalie Statistics</h3>
        <DropDownComponent items={goalieStats} onChange={handleFieldChange} />
      </div>
      <div></div>
      <div className="flex flex-row flex-wrap justify-center content-center w-full h-96">
        {isLoadingGoalie ? (
          ""
        ) : (
          <div className="text-center py-2 h-96">
            <PieChart chartData={currentDataSet} />
            <input
              name="checkbox"
              type="checkbox"
              id="checkbox"
              onClick={checkBoxFunction}
              checked={showDexterity}
              onChange={(e) => {}}
            />
            <p className="text-xs">{showDexterity ? "Hide Dexterity" : "Show Dexterity"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoalieBreakdownComponent;
