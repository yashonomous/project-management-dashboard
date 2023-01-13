import React from "react";
import BudgetContainer from "./BudgetContainer";
import InsightContainer from "./InsightContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 flex flex-col gap-8 bg-slate-100 ">
      {/* insights container */}
      <InsightContainer />
      {/* budget status container */}
      <BudgetContainer />
    </div>
  );
};

export default MainContainer;
