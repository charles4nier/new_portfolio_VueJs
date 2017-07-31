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
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [
        {
          label: 'Component 1',
          data: [10, 20, 30],
          backgroundColor: 'red'
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
        }
      ]
    }
  })
}
</script>
