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
    defaultFontColor: "#F5F5F5",
    elements: {
      bar: {
        borderWidth: 2,
      },
      color: "#F5F5F5",
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
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
  };

  const labels = chartData.labels;

  const data = {
    labels,
    datasets: chartData.datasets,
  };

  return (
    <div className="flex flex-col items-center w-screen h-96">
        <Bar options={options} data={data} />
    </div>
  );
}
export default BarChart;
