<template>
  <div class="wrapper">
    <h1 class="animated-text">Tzone</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .animated-text {
    font-size: 5rem;
    font-weight: 900;
    color: #00ffcc;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    animation:
      tZone 3s ease-in-out infinite alternate,
      slideIn 1s ease-out;
  }

  @keyframes tZone {
    0% {
      text-shadow:
        0 0 5px #00ffcc,
        0 0 10px #00ffcc,
        0 0 15px #00ffcc;
      transform: scale(1);
    }
    100% {
      text-shadow:
        0 0 10px #00ffcc,
        0 0 20px #00ffcc,
        0 0 30px #00ffcc;
      transform: scale(1.05);
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-50px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
