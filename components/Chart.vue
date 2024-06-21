<template lang="pug">
div.mb-5
    canvas(ref="radarChart")

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, RadarController, LineElement, PointElement, Filler, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(RadarController, LineElement, PointElement, Filler, RadialLinearScale, Title, Tooltip, Legend);

const radarChart = ref(null);

const config = {
    type: 'radar',
    data: {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)'
      }]
    },
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  };
  
  onMounted(() => {
    if (radarChart.value) {
      new Chart(radarChart.value, config);
    }
  });
  </script>
  
  <style scoped>

  canvas {
    max-width: 100%;
  }
  </style>
  