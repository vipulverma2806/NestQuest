// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// const URL = import.meta.env.VITE_URL;
// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const MonthlyTrends = () => {
//   axios.defaults.withCredentials = true;
//   const [chartData, setChartData] = useState(null);

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(
//         `${URL}/adminRoute/statistics/monthly-trends`
//       );

//       const apiData = res.data;

//       const formatted = {
//         labels: apiData.map((item) => months[item.month - 1] + " " + item.year),
//         datasets: [
//           {
//             label: "Total Bookings",
//             data: apiData.map((item) => item.count),
//             borderColor: "rgba(75,192,192,1)",
//             backgroundColor: "rgba(75,192,192,0.2)",
//             tension: 0.4,
//           },
//         ],
//       };

//       setChartData(formatted);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full  p-5 bg-white rounded shadow-2xl border">
//       <h2 className="text-2xl font-semibold mb-4">📈 Monthly Booking Trends</h2>

//       {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default MonthlyTrends;

import { useEffect, useState } from "react";
import axios from "axios";
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

const URL = import.meta.env.VITE_URL;

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler // <-- Important for area chart
);

const MonthlyTrends = () => {
  axios.defaults.withCredentials = true;
  const [chartData, setChartData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${URL}/adminRoute/statistics/monthly-trends`
      );
      const apiData = res.data;

      const formatted = {
        labels: apiData.map((item) => months[item.month - 1] + " " + item.year),

        datasets: [
          {
            label: "Total Bookings",
            data: apiData.map((item) => item.count),

            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.3)",
            fill: true,
            tension: 0.4,
          },
        ],
      };

      setChartData(formatted);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-75 px-5 py-3 bg-white rounded shadow-xl border">
      <h2 className="text-xl font-bold mb-1 text-center">
        Monthly Booking Trends (Area Chart)
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

export default MonthlyTrends;
