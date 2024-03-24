/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ChartData } from 'chart.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const chartColors = {
  green: {
    stroke: '#15AB49',
    bg: '#9EFBBE',
  },
  yellow: {
    stroke: '#F37C0D',
    bg: '#FECA63',
  },
  red: {
    stroke: '#BC0303',
    bg: '#FA8F8F',
  },
  blue: {
    stroke: '#536DC8',
    bg: '#8DA0E3',
  },
};

const dummy = [34, 57, 48, 56, 42];

const shuffle = (array: number[]) => {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function getDummyDataForChart(
  color: keyof typeof chartColors,
  data?: any
) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
    },
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        display: false,

        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,

        beginAtZero: true,

        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const dummyData: ChartData = {
    labels,
    datasets: [
      {
        data: data ?? [...shuffle(dummy), 85],
        borderColor: chartColors[color].stroke,
        fill: true,
        backgroundColor: chartColors[color].bg,
        tension: 0.5,
      },
    ],
  };

  return { options, data: dummyData };
}
