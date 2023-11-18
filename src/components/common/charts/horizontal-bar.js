import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y",
    fontColor: "#F5F5F5",
    elements: {
      bar: {
        borderWidth: 2,
      },
      color: "#F5F5F5",
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: chartData.title,
        color: "#F5F5F5",
        font: {
          size: 18,
        },
      },
    },

    scaleShowValues: true,
    scales: {
      xAxes: [
        {
          stacked: false,
          beginAtZero: true,
          scaleLabel: {
            labelString: "Statistic",
          },
          ticks: {
            stepSize: 1,
            min: 0,
            autoSkip: false,
            fontColor: "#F5F5F5",
            fontSize: 14,
          },
        },
      ],
    },
  };

  const labels = chartData.labels;

  const data = {
    labels,
    datasets: chartData.datasets,
  };

  return (
    <div className="flex flex-row w-screen justify-center">
      <div className="flex flex-row justify-center w-2/3 h-96">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
export default BarChart;
