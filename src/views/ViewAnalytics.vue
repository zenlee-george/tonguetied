<template>
  <div class="view-analytics">
    <h1>View Analytics</h1>
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
        type: 'bar', // You can use 'line', 'pie', 'doughnut', etc.
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'User Sign-ups',
              data: [10, 20, 30, 40, 50, 60, 70], // Example sign-ups data
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Pink background
              borderColor: 'rgba(255, 99, 132, 1)', // Pink border
              borderWidth: 1
            },
            {
              label: 'Products Bought',
              data: [5, 15, 25, 35, 45, 55, 65], // Example products bought data
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blue background
              borderColor: 'rgba(54, 162, 235, 1)', // Blue border
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top', // Position of the legend
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true // Y-axis starts from 0
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
  