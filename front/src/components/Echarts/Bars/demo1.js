
import echarts from "echarts";

const legendPath =
  "path://M512 47.886637C255.677147 47.886637 47.886637 255.677147 47.886637 512S255.677147 976.113363 512 976.113363s464.113363-207.79051 464.113363-464.113363S768.322853 47.886637 512 47.886637zM512 746.102782c-128.160915 0-232.057193-103.895255-232.057193-232.057193s103.895255-232.057193 232.057193-232.057193 232.057193 103.895255 232.057193 232.057193S640.161938 746.102782 512 746.102782z";
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 16, shape.y];
    const c2 = [xAxisPoint[0] - 16, xAxisPoint[1]];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 4, xAxisPoint[1] - 4];
    const c4 = [shape.x + 4, shape.y - 4];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx, shape) {
    // 逆时针 角 y 负数向上  X 负数向左
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 4, shape.y - 4];
    const c3 = [shape.x - 12, shape.y - 4];
    const c4 = [shape.x - 16, shape.y];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);

function createOption(data) {
  let MAX = [];
  let VALUE = [];
  let LABLE = [];

  let chartData = [].concat(data);
  chartData.forEach(item => {
    VALUE.push(item.complete);
    MAX.push(item.complete + item.unfinished);
    LABLE.push(item.name);
  });

  const option = {
    color: ["#250AE6", "#02A0EE"],
    legend: {
      icon: legendPath,
      selectedMode: false,
      itemWidth: 12,
      itemHeight: 12,
      top: 20,
      right: 20,
      textStyle: {
        fontSize: 12,
      },
      data: [
        {
          name: "已完成",
          textStyle: {
            color: "#02A0EE",
          },
        },
        {
          name: "未完成",
          textStyle: {
            color: "#250AE6",
          },
        },
      ],
    },
    grid: {
      top: 68,
      right: 10,
      bottom: 56,
      left: 59,
    },
    xAxis: {
      data: LABLE,
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
      //坐标值标注
      axisLabel: {
        show: true,
        fontSize: 12,
        margin: 12,
        textStyle: {
          color: "#5BA3DC",
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
    series: [
      {
        type: "custom",
        name: "未完成",
        renderItem: function(params, api) {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), VALUE[api.value(0)]]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#0A8CEF", // 顶部
                    },
                    {
                      offset: 1,
                      color: "#2800F0", // 底部
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), VALUE[api.value(0)]]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#32C1F1", // 顶部
                    },
                    {
                      offset: 1,
                      color: "#125FF0", // 底部
                    },
                  ]),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  x: location[0],
                  y: location[1],
                },
                style: {
                  fill: "#00BEF1",
                },
              },
            ],
          };
        },
        data: MAX,
      },
      {
        type: "custom",
        name: "已完成",
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#1585F8",
                    },
                    {
                      offset: 1,
                      color: "#5100FA",
                    },
                  ]),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#62BDFB", // 顶部
                    },
                    {
                      offset: 1,
                      color: "#2157FA", // 底部
                    },
                  ]),
                },
              },
            ],
          };
        },
        data: VALUE,
      },
    ],
  };

  return option;
}


export default createOption;
