import dayjs from "dayjs";

function disSeries(item, color1, color2) {
  return {
    name: item.name,
    data: item.data,
    type: "line",
    showSymbol: false,
    lineStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: color1, // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: color2, // 0% 处的颜色
          },
          {
            offset: 1,
            color: color1, // 100% 处的颜色
          },
        ],
      },
      shadowColor: "rgba(130, 255, 246, 0.4)",
      shadowBlur: 10,
    },
    smooth: true,
  };
}

const colorMap = [
  {
    color: "#16ADF8",
    color1: "#8833e7",
    color2: "#c967fb",
  },
  {
    color: "#7444e5",
    color1: "#24d3d1",
    color2: "#269998",
  },
  {
    color: "#7444e5",
    color1: "#65adff",
    color2: "#387ff3",
  },
  {
    color: "#7444e5",
    color1: "#e7ae33",
    color2: "#fbd067",
  },
  {
    color: "#7444e5",
    color1: "#77c20d",
    color2: "#d7fb67",
  },
];

// const data = [
//   {
//     name: "CPU使用率",
//     data: [
//       ["2020-10-20 01:00:00", 10],
//       ["2020-10-20 13:00:00", 20],
//     ],
//     color: "#16ADF8",
//     color1: "#2BDBFD",
//     color2: "#007FF2",
//   },
//   {
//     name: "内存使用率",
//     data: [
//       ["2020-10-20 01:00:00", 20],
//       ["2020-10-20 13:00:00", 30],
//     ],
//     color: "#7444e5",
//     color1: "#67dff7",
//     color2: "#7444e5",
//   },
// ];

function createOption(data) {
  const seriesData = [];
  const color = [];

  for (let i = 0, length = data.length, colorObj = null; i < length; i++) {
    colorObj = colorMap[i];
    seriesData.push(disSeries(data[i], colorObj.color1, colorObj.color2));
    color.push(colorObj.color);
  }

  const option = {
    color,
    grid: {
      top: 28,
      bottom: 30,
      left: 44,
      right: 20,
    },
    xAxis: {
      type: "time",
      //坐标轴
      axisLine: {
        lineStyle: {
          color: "#453cbb",
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      //坐标值标注
      axisLabel: {
        show: true,
        fontSize: 12,
        formatter: function(value) {
          if (value) {
            return dayjs(value).format("YYYY-MM-DD");
          }

          return "";
        },
        textStyle: {
          color: "#5BA3DC",
        },
      },
      axisPointer: {
        show: true,
        label: {
          show: false,
        },
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#394A8A",
              },
              {
                offset: 1,
                color: "#A3C4DF",
              },
            ],
          },
        },
      },
    },
    yAxis: {
      //坐标轴
      axisLine: {
        lineStyle: {
          color: "#453cbb",
          width: 2,
        },
      },
      minInterval: 1,
      min: function(value) {
        return value.min > 5 ? value.min - 5 : 0;
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      //坐标值标注
      axisLabel: {
        show: true,
        fontSize: 12,
        margin: 10,
        textStyle: {
          color: "#5BA3DC",
        },
      },
    },
    series: seriesData,
  };

  return option;
}

export default createOption;
