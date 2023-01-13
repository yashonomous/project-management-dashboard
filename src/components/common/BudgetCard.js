import { PersonOutlined, WarningAmberOutlined } from "@mui/icons-material";
import React from "react";

function BudgetCard({
  title1,
  title2,
  totalBudget,
  profitability,
  barPercent,
  barColor,
  icon,
  actualHours,
  effortHoursText,
}) {
  return (
    <div className="flex-1 flex flex-col gap-2 bg-white p-2 rounded-sm shadow-lg ">
      <div className="flex gap-4 justify-between">
        <div className="flex-1 flex flex-col items-stretch gap-6 ">
          <div className="flex flex-col items-start  gap-1">
            <div className="text-2xl font-medium">
              <span>{title1}</span>
            </div>
            <div className="text-sm text-slate-400">
              <span>{title2}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className=" text-slate-400">Total Budget</span>
              <span>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(totalBudget)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" text-slate-400">Profitability(100%)</span>
              <span>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(profitability)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2">
          <div className="flex justify-end ">
            <PersonOutlined className="text-5xl rounded-full bg-slate-300 p-1" />
          </div>
          <div
            className={`${
              barColor === "red"
                ? "text-red-500"
                : barColor === "green"
                ? "text-green-700"
                : "text-black"
            } flex justify-end`}
          >
            {icon}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`${
            barColor === "red"
              ? "bg-red-100"
              : barColor === "green"
              ? "bg-green-100"
              : barColor === "amber"
              ? "bg-amber-100"
              : "bg-black"
          } h-5 w-full rounded-full`}
        >
          <div
            className={`${
              barColor === "red"
                ? "bg-red-500"
                : barColor === "green"
                ? "bg-green-700"
                : barColor === "amber"
                ? "bg-amber-600"
                : "bg-black"
            } h-5 w-[${barPercent}%] rounded-full`}
          ></div>
        </div>
        <div className="flex justify-between text-xs ">
          <div>
            <span>{`Actual Hours: ${actualHours}`}</span>
          </div>
          <div
            className={`${
              barColor === "red" ? "text-red-500 font-bold" : "text-black"
            } `}
          >
            <span>{effortHoursText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetCard;
