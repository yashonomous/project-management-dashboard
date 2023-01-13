import {
  AddOutlined,
  CalendarTodayOutlined,
  FileDownloadOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import React from "react";
import IconedButton from "./common/IconedButton";

function BudgetBar() {
  const buttonDetails = [
    {
      icon: <AddOutlined />,
      title: "Add New Project",
    },
    {
      icon: <FileDownloadOutlined />,
      title: "Download Report",
    },
    {
      icon: <CalendarTodayOutlined />,
      title: "dd/mm/yyyy - dd/mm/yyyy",
    },
    {
      icon: <TuneOutlined />,
      title: "Filter",
    },
  ];

  return (
    <div className="flex gap-8 ml-6">
      <div className="text-4xl font-medium">
        <span>Budget Status</span>
      </div>
      <div className="flex gap-4 items-center flex-1">
        {buttonDetails.map((buttonDetail) => (
          <IconedButton icon={buttonDetail.icon} title={buttonDetail.title} />
        ))}
      </div>
    </div>
  );
}

export default BudgetBar;
