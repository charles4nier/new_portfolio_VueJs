<template>
  <vue-chart type="bar" :data="chartData"></vue-chart>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'DeveloperSkills',
  components: {
    VueChart
  },
  data: () => ({
    chartData: {
      labels: ['Php', 'Item 2', 'Item 3', 'Item 4'],
      datasets: [
        {
          label: 'Php',
          data: [10, 20, 30],
          backgroundColor: 'red',
          borderColor: 'blue'
        },
        {
          label: 'Component 2',
          data: [20, 30, 40],
          backgroundColor: 'blue'
        },
        {
          label: 'Component 3',
          data: [30, 40, 50],
          backgroundColor: 'green'
        },
        {
          label: 'Component 4',
          data: [35, 46, 52],
          backgroundColor: 'black'
        }
      ]
    }
  })
}
</script>
