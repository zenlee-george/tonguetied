<template>
    <div id="customCursor">
      <img src="https://zenlee-george.github.io/hostedimages/cursor.png" alt="Custom Cursor" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // State for cursor position
  const mouseX = ref(0);
  const mouseY = ref(0);
  
  // Set mouse position
  const setMousePosition = (event) => {
    mouseX.value = event.clientX;
    mouseY.value = event.clientY;
  };
  
  // Move cursor
  const moveCursor = () => {
    const customCursor = document.querySelector("#customCursor");
    customCursor.style.setProperty("--cursorXPos", `${mouseX.value}px`);
    customCursor.style.setProperty("--cursorYPos", `${mouseY.value}px`);
    
    requestAnimationFrame(moveCursor);
  };
  
  // Lifecycle hooks
  onMounted(() => {
    if (window.innerWidth > 768) { // Adjust this width as needed
      document.addEventListener("mousemove", setMousePosition);
      requestAnimationFrame(moveCursor);
    }
  });
  
  onUnmounted(() => {
    document.removeEventListener("mousemove", setMousePosition);
  });
  </script>
  
  <style scoped>
  #customCursor {
    --cursorXPos: 0;
    --cursorYPos: 0;
  
    position: fixed;
    top: -25px;
    left: -25px;
  
    transform: translate3d(var(--cursorXPos), var(--cursorYPos), 0);
    transition: transform 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
    width: 100px;
    pointer-events: none; /* Prevents the cursor from blocking other elements */
    display: none; /* Hide by default */
    z-index: 12;
  }
  
  #customCursor img {
    width: 100%; /* Make the image fill the container */
    height: auto;
  }
  
  @media (min-width: 769px) { /* Show custom cursor only on larger screens */
    #customCursor {
      display: block;
    }
  }
  </style>
  