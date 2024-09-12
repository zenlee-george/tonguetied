<template>
    <div class="view-analytics">
      <h1>View Analytics</h1>
      <!-- Example of analytics content -->
      <div class="analytics-content">
        <div class="chart-container">
          <canvas id="analyticsChart"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  export default {
    name: 'ViewAnalytics',
    setup() {
      onMounted(() => {
        Chart.register(...registerables);
  
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'User Sign-ups',
              data: [10, 20, 30, 40, 50, 60, 70],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw;
                  }
                }
              }
            }
          }
        });
      });
  
      return {};
    }
  };
  </script>
  
  <style scoped>
  /* Styles for the View Analytics page */
  .view-analytics {
    padding: 2rem;
    background-color: #fff;
  }
  
  .chart-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  