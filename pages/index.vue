<template>
  <h1>Hello, world</h1>
  <NuxtLink :href="`/course/${firstLesson.lesson}/classes/1`"
    >Go to the first lesson</NuxtLink
  >
</template>

<script setup>
const firstLesson = useFirstLesson();
</script>
