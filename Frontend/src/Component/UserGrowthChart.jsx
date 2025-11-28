import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);
import { useSelector } from "react-redux";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UserGrowthChart = () => {
  const [chartData, setChartData] = useState(null);
  const allUsers = useSelector((state) => state.adminData.allUsers);
  useEffect(() => {
    if (!allUsers || allUsers.length === 0) return;

    const monthlyUsers = {};

    allUsers.forEach((u) => {
      const date = new Date(u.createdAt);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${month + 1}`;

      if (!monthlyUsers[key]) monthlyUsers[key] = 0;
      monthlyUsers[key] += 1;
    });

    const sorted = Object.entries(monthlyUsers)
      .sort((a, b) => new Date(a[0]) - new Date(b[0]))
      .map(([key, count]) => {
        const [year, month] = key.split("-");
        return {
          label: `${months[month - 1]} ${year}`,
          count,
        };
      });

    const formatted = {
      labels: sorted.map((i) => i.label),

      datasets: [
        {
          label: "Users Joined",
          data: sorted.map((i) => i.count),

          borderColor: "rgba(99, 102, 241, 1)",
          backgroundColor: "rgba(99, 102, 241, 0.3)",
          fill: true,
          tension: 0.4,
        },
      ],
    };

    setChartData(formatted);
  }, [allUsers]);

  return (
    <div className="w-full h-75 px-5 py-3 bg-white rounded shadow-xl border">
      <h2 className="text-xl font-bold mb-1 text-center">
        User Growth (Area Chart)
      </h2>

      {chartData ? (
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserGrowthChart;
