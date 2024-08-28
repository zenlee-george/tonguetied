<template>
    <div class="spinner-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        class="spinner"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="var(--spinner-color)"
          stroke-width="5"
          fill="none"
        ></circle>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TieSpinner',
  };
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
  }
  
  .spinner {
    animation: spin 1.5s linear infinite;
    width: 50px; /* Adjust size as needed */
    height: 50px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  