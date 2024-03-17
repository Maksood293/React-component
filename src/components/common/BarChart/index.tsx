import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface LegendOptions {
  show?: boolean;
  position?: "right" | "top" | "bottom" | "left" | undefined;
}

interface ChartOptions {
  colors?: string[];
  labels?: string[];
  legend?: LegendOptions;
}

interface ChartData {
  series: number[];
  chartOptions?: ChartOptions;
  type?: 'donut'| 'radialBar';
  show?: string;
  height?: number;
  width?: number;
  showTotal?:boolean
}

export const BarChartComponent: React.FC<ChartData> = ({
  series,
  chartOptions,
  type = "radialBar",
  height,
  width,
  showTotal=false,
}) => {
  const defaultChartOptions: ChartOptions = {
    colors: ['#FF6362', '#1DB949', '#FFC700'],
    labels: ["test A", "test B", "test C", "test D"],
    legend: {
      show: true,
      position: "right",
    },
  };

  const options: ApexOptions = {
    chart: {
      height: height || 390,
      width: width || 400,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
          },
          total: {
            show: showTotal,
            label: "Total",
            formatter: function (w: any) {
              const total = w.globals.series.reduce(
                (partialSum: number, a: number) => partialSum + a,
                0
              );
              return total;
            },
          },
        },
      },
    },
    colors: chartOptions?.colors || defaultChartOptions.colors,
    labels: chartOptions?.labels || defaultChartOptions.labels,
    legend: {
      show:
        chartOptions?.legend?.show !== undefined
          ? chartOptions.legend.show
          : defaultChartOptions?.legend?.show,
      floating: true,
      fontSize: "16px",
      position:
        chartOptions?.legend?.position || defaultChartOptions?.legend?.position,
      offsetX: 70,
      offsetY: 5,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type || "radialBar"}
      height={options.chart?.height}
      width={options.chart?.width}
    />
  );
};
