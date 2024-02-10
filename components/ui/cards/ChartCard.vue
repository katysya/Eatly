<script setup>
import ChartButton from '../buttons/ChartButton.vue';
import ChartLoader from '../loaders/ChartLoader.vue';
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
import { Line, Bar } from 'vue-chartjs';

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
  Legend
);

onMounted(() => {
  chartLoaded.value = true;
});

const chartElement = reactive([
  {
    id: 1,
    title: 'Line',
    active: true,
  },
  {
    id: 2,
    title: 'Bar',
    active: false,
  },
]);

const activeChart = ref(1);
const chartLoaded = ref(false);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
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
      data: [180, 50, 300, 5],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#6C5FBC',
      displayColors: false,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (context.parsed.y !== null) {
            label += '$' + context.parsed.y;
          }
          return label;
        },
        labelPointStyle: function (context) {
          return {
            pointStyle: 'triangle',
            rotation: 0,
          };
        },
      },
    },
  },
};

const changeChart = (id) => {
  activeChart.value = id;

  chartElement.forEach((item, index) => {
    if (item.id === id) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
};
</script>

<template>
  <div class="chart">
    <div class="chart__buttons">
      <chart-button
        v-for="elem in chartElement"
        :key="elem.id"
        :id="elem.id"
        :title="elem.title"
        :active="elem.active"
        @click="changeChart(elem.id)"
      />
    </div>
    <div class="chart__line"></div>
    <div class="chart__block">
      <chart-loader v-if="!chartLoaded" />
      <Transition>
        <Line
          v-if="activeChart === 1"
          :data="data"
          :options="options"
          class="chart__element"
        />
      </Transition>
      <Transition>
        <Bar
          v-if="activeChart === 2"
          :data="data"
          :options="options"
          class="chart__element"
        />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.chart {
  position: relative;

  &__line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $primary;
    opacity: 0.1;
    top: 60%;

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: $primary;
    }

    &::after {
      top: 20px;
    }

    &::before {
      bottom: 20px;
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__block {
    position: relative;
    min-height: 80px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__element {
    position: absolute;
    top: 0;
    left: 10px;
  }
}
</style>
