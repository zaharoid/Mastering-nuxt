<template>
  <div>
    <button @click="throw createError('Cant complete SMTH');">
      Make something
    </button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 7px 15px;
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
  cursor: pointer;

  transition: all 250ms linear;
  &:hover {
    background-color: red;
  }
}
</style>
