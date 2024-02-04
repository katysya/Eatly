<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: '',
      backgroundColor: '#C5BFED',
      pointBorderWidth: 1,
      hoverBorderWidth: 2,
      borderColor: '#6C5FBC',
      borderJoinStyle: 'bevel',
      tension: 0.5,
      fill: 'red',
      data: [180, 150, 200, 150],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>

<template>
  <Line :data="data" :options="options" />
</template>
