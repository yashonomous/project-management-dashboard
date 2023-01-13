import React from "react";
import { Chart as ChartJS, DoughnutController, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutChartCard() {
  ChartJS.register(ArcElement);

  return (
    <div className="flex-[0.4] flex items-stretch  bg-white rounded-sm">
      <div className="flex items-center w-full">
        <Doughnut
          data={{
            labels: ["red", "blue", "yellow"],
            datasets: [
              {
                label: "donut chart",
                data: ["19", "33", "48"],
                backgroundColor: ["#f2526f", "#528cf2", "#52f2e4"],
                hoverOffset: 4,
              },
            ],
          }}
          options={{}}
        />
      </div>
    </div>
  );
}

export default DoughnutChartCard;
