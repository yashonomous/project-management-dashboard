import { TaskAltOutlined, WarningAmberOutlined } from "@mui/icons-material";
import React from "react";
import BudgetBar from "./BudgetBar";
import BudgetCard from "./common/BudgetCard";

function BudgetContainer() {
  const budgetCardDetails = [
    {
      title1: "Insurance App",
      title2: "Verti",
      totalBudget: 70000,
      profitability: -2500,
      barPercent: 100,
      barColor: "red",
      icon: <WarningAmberOutlined />,
      actualHours: 1100,
      effortHoursText: "100 hours over Budget",
    },
    {
      title1: "Neo",
      title2: "Bankia",
      totalBudget: 70000,
      profitability: 4000,
      barPercent: 50,
      barColor: "amber",
      actualHours: 1100,
      effortHoursText: "1000 sold hours",
    },
    {
      title1: "VR Website",
      title2: "Barça",
      totalBudget: 70000,
      profitability: 4000,
      barPercent: 50,
      barColor: "green",
      actualHours: 1100,
      effortHoursText: "2000 sold hours",
    },
    {
      title1: "VR Website",
      title2: "Barça",
      totalBudget: 70000,
      profitability: 4000,
      barPercent: 100,
      barColor: "green",
      icon: <TaskAltOutlined />,
      actualHours: 1100,
      effortHoursText: "1100 sold hours",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* bar */}
      <div>
        <BudgetBar />
      </div>
      {/* cards */}
      <div className="flex gap-6 mx-6">
        {budgetCardDetails.map((cardDetail) => (
          <BudgetCard
            title1={cardDetail.title1}
            title2={cardDetail.title2}
            totalBudget={cardDetail.totalBudget}
            profitability={cardDetail.profitability}
            barPercent={cardDetail.barPercent}
            barColor={cardDetail.barColor}
            icon={cardDetail.icon || undefined}
            actualHours={cardDetail.actualHours}
            effortHoursText={cardDetail.effortHoursText}
          />
        ))}
      </div>
    </div>
  );
}

export default BudgetContainer;
