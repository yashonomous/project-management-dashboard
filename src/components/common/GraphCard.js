import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  //   LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { green } from "@mui/material/colors";

function GraphCard() {
  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title
  );

  return (
    <div className="flex-[0.6] flex items-stretch  bg-white rounded-sm">
      <div className="flex items-center w-full">
        <Line
          data={{
            // labels: [1, 2, 3],
            datasets: [
              {
                label: "chart here",
                data: [
                  {
                    x: "19 June",
                    y: 0,
                  },
                  {
                    x: "20 June",
                    y: 1000,
                  },
                  {
                    x: "21 June",
                    y: 35000,
                  },
                  {
                    x: "22 June",
                    y: 32000,
                  },
                  {
                    x: "23 June",
                    y: 41000,
                  },
                  {
                    x: "24 June",
                    y: 55000,
                  },
                  {
                    x: "25 June",
                    y: 65000,
                  },
                ],
                // backgroundColor: "#26803D",
                borderColor: "#26803D",
                tension: 0.1,
                fill: false,
              },
            ],
          }}
          options={{
            parsing: {
              xAxisKey: "x",
              yAxisKey: "y",
            },
            plugins: {},
          }}
        />
      </div>
    </div>
  );
}

export default GraphCard;
