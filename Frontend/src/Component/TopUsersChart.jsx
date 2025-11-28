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
import { useSelector } from "react-redux";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const TopUsersChart = () => {
  const [chartData, setChartData] = useState(null);
  const allUsers = useSelector((state) => state.adminData.allUsers);
  useEffect(() => {
    if (!allUsers || allUsers.length === 0) return;
    const table = allUsers.map((user) => ({
      id: user._id,
      name: user.name,
      listingCount: user.listing?.length || 0,
      bookingCount: user.booking?.length || 0,
      activityScore: (user.listing?.length || 0) + (user.booking?.length || 0),
    }));

    table.sort((a, b) => b.activityScore - a.activityScore);

    const top = table.slice(0, 5);

    const formatted = {
      labels: top.map((u) => u.name),

      datasets: [
        {
          label: "Listings (Host)",
          data: top.map((u) => u.listingCount),

          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.3)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Bookings (Guest)",
          data: top.map((u) => u.bookingCount),

          borderColor: "rgba(153,102,255,1)",
          backgroundColor: "rgba(153,102,255,0.3)",
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
        Top Hosts & Top Guests (Line Chart)
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

export default TopUsersChart;
