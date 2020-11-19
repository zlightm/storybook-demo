const themeColor = 'rgba(87, 181, 252, 0.1)'
const textColor = 'rgba(87, 181, 252, 1)'

// 图形路径
const symbols = [
  'path://M0,0 L0,24 L35,12 L0,0z', // 大三角
  'path://M0,0 L0,12 L48,6 L0,0z' // 小三角
]


/**
 * HEX十六进制颜色值转换为RGB(A)颜色值
 * @param {String} val HEX色值
 * @param {Number} alpha 透明度 0-1之间
 * @return {String} rgba色值
 */
const hexToRgb = (val, alpha = 1) => {
  let a, b, c
  if (/^#/g.test(val)) {
    a = val.slice(1, 3)
    b = val.slice(3, 5)
    c = val.slice(5, 7)
    return `rgba(${parseInt(a, 16)}, ${parseInt(b, 16)}, ${parseInt(
      c,
      16
    )}, ${alpha})`
  } else {
    return { rgba: '无效值：' + val }
  }
}

/** 柱状图颜色 */
const barColor = (color) => {
  return {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
      offset: 0, color: hexToRgb(color, 1)
    }, {
      offset: 0.6, color: hexToRgb(color, 0.1)
    }, {
      offset: 1, color: hexToRgb(color, 0)
    }]
  }
}

/** 细柱 颜色 */
const subBarColor = (color) => hexToRgb(color, 0.1)

 const chartOptions = data => {
  const yAxisData = [];
  const seriesData = [];
  const subSeriesData = [];

  for(let i = 0, length = data.length; i < length; i++) {
    yAxisData.push(data[i].name);
    seriesData.push({
      value: data[i].value,
      itemStyle: {
        color: barColor(data[i].color)
      },
      label: {
        color: data[i].color
      }
    })
    subSeriesData.push({
      value: data[i].value,
      itemStyle: {
        color: subBarColor(data[i].color)
      }
    })
  }

  const options = {
    grid: {
      top: 44,
      bottom: 10,
      left: 10,
      right: 30,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLine: {
        lineStyle: {
          color: themeColor
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        color: textColor,
        formatter: '{value}%'
      },
      splitLine: {
        show: false
      },
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: themeColor
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        color: textColor
      },
      splitLine: {
        show: false
      },
      data: yAxisData
    },
    series: [
      {
        type: 'bar',
        barWidth: 4,
        label: {
          show: true,
          position: 'right',
          distance: 10,
          formatter: '{c}%',
          fontSize: 12
        },
        barGap: '-100%',
        z: 2,
        data: seriesData
      }, {
        type: 'bar',
        barWidth: 2,
        z: 1,
        data: subSeriesData
      }, {
        type: 'pictorialBar',
        symbolSize: [34, 24],
        symbolOffset: [8, 1],
        symbolPosition: 'end',
        barWidth: 4,
        z: 6,
        silent: true,
        symbol: symbols[0],
        data: seriesData
      }, {
        type: 'pictorialBar',
        symbolSize: [48, 16],
        symbolOffset: [8, 1],
        symbolPosition: 'end',
        barWidth: 4,
        z: 7,
        silent: true,
        symbol: symbols[1],
        data: seriesData
      }
    ]
  }
  return options
}

export default chartOptions;
