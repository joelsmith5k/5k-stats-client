import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="">
      <Bar
        data={chartData}
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: chartData.title,
            },
          },
        }}
      />
    </div>
  );
}
export default BarChart;
