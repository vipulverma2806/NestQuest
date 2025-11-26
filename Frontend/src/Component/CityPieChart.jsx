import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { useSelector } from "react-redux";
const CityPieChart = () => {
  const [chartData, setChartData] = useState(null);
  const allListings = useSelector((state) => state.adminData.allListings);
  useEffect(() => {
    if (!allListings || allListings.length === 0) return;

    const cityCount = {};

    allListings.forEach((l) => {
      if (!cityCount[l.city]) cityCount[l.city] = 0;
      cityCount[l.city] += 1;
    });

    const labels = Object.keys(cityCount);
    const values = Object.values(cityCount);

    const formatted = {
      labels,
      datasets: [
        {
          label: "Listings Count",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: "#fff",
          borderWidth: 1,
        },
      ],
    };

    setChartData(formatted);
  }, [allListings]);

  return (
    <div className="w-full h-75 px-5 relative py-3 bg-white rounded shadow-xl border">
      <div className="text-xl absolute  font-bold mb-1 top-10 left-7 text-left"> Listings by City</div>

      {chartData ? (
        <Pie
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "left",
                labels: {
                  padding: 20,
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

export default CityPieChart;
