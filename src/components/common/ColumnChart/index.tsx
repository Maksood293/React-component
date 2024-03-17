import React from "react";
import ReactApexChart from "react-apexcharts";

interface ColumnChartProps {
  series: {
    name: string;
    data: number[];
  }[];
  colors: string[];
  xAxisCategories: string[];
  yAxisMinMax: {
    min: number;
    max: number;
  };
  horizontal?: boolean;
}

export const ColumnChartComponent: React.FC<ColumnChartProps> = ({
  series,
  colors,
  xAxisCategories,
  yAxisMinMax,
  horizontal=false,
}) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: horizontal,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors,
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: xAxisCategories,
    },
    yaxis: {
      min: yAxisMinMax.min,
      max: yAxisMinMax.max,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => val,
      },
    },
  };

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
};

