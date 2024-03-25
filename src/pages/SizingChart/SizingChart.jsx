import React from "react";
import SizingChartTable from "../../components/SizingChart/SizingChartTable";
import "./SizingChart.css"

const SizingChart = () => {
  return (
    <section className="sizingChartSection">
      <h1> Sizing Chart</h1>
      <SizingChartTable />
    </section>
  );
};

export default SizingChart;
