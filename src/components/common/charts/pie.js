import React from "react";
import { Pie } from "react-chartjs-2";
import { useEffect } from "react";

function PieChart({ chartData }) {

  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {

            legend: {
              position: 'bottom'
              }

          }
        }}
      />
    </div>
  );
}
export default PieChart;