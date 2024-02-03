<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  max-width: 1000px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 15px 15px;
  margin: 50px auto;

  border-radius: 30px;
}
</style>
