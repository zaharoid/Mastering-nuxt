<template>
  <NuxtLayout>
    <p v-if="error?.statusCode === 404">{{ error.message }}</p>
    <div v-else>
      <h1>Something went wrong.</h1>
      <p>{{ error.message }}</p>
    </div>
    <a @click="navToHome">Go to Lesson 1</a>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const navToHome = () => {
  clearError({
    redirect: "/course/lesson1/classes/1",
  });
  return (error.value = null);
};
</script>

<style>
h1 {
  text-align: center;
}

a {
  cursor: pointer;
}
</style>
