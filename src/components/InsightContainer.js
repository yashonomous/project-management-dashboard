import {
  WarningAmberOutlined,
  AutorenewOutlined,
  GridViewOutlined,
  TaskAltOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
import React from "react";
import DataCard from "./common/DataCard";
import DoughnutChartCard from "./common/DoughnutChartCard";
import GraphCard from "./common/GraphCard";
import TeamMoodContainer from "./TeamMoodContainer";

const InsightContainer = () => {
  const cardDetails = [
    {
      icon: <GridViewOutlined className="text-3xl ml-2" />,
      count: 5,
      title: "Total Projects",
    },
    {
      icon: <TaskAltOutlined className="text-3xl ml-2" />,
      count: 1,
      title: "Completed",
    },
    {
      icon: <AutorenewOutlined className="text-3xl ml-2" />,
      count: 3,
      title: "Ongoing",
    },
    {
      icon: <WarningAmberOutlined className="text-3xl ml-2" />,
      count: 1,
      title: "Delayed",
    },
    {
      icon: <PeopleOutlined className="text-3xl ml-2" />,
      count: 5,
      title: "Employees",
    },
  ];

  return (
    <div className="flex justify-between gap-8 mt-6">
      <div className="flex-[0.8] flex flex-col gap-8 ml-6">
        {/* count cards */}
        <div className="flex items-center justify-between gap-8">
          {cardDetails.map((cardDetail) => (
            <DataCard
              logo={cardDetail.icon}
              count={cardDetail.count}
              title={cardDetail.title}
            />
          ))}
        </div>

        {/* graphs cards */}
        <div className="flex-1 flex gap-8 items-stretch">
          <GraphCard />
          <DoughnutChartCard />
        </div>
      </div>

      <div className="flex-[0.2]">
        <TeamMoodContainer />
      </div>
    </div>
  );
};

export default InsightContainer;
