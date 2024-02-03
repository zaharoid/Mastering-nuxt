<script setup>
const route = useRoute();
import { useCourse } from "~/composables/useCourse";

const lessons = useCourse();

const resetError = async (error) => {
  await navigateTo("/course/lesson1/classes/1");

  return (error.value = null);
};

const lesson = computed(() => {
  return lessons.find((lesson) => lesson.lesson === route.params.lesson);
});

// if (!lesson.value) {
//   throw createError({
//     statusCode: 404,
//     message: "Lesson not found",
//   });
// }
</script>

<template>
  <h1>Course page.</h1>
  <ul>
    <li v-for="lesson of lessons">
      <NuxtLink :to="`/course/${lesson.lesson}/classes/1`">{{
        lesson.lesson
      }}</NuxtLink>
    </li>
  </ul>
  <NuxtErrorBoundary>
    <NuxtPage :lesson="lesson" />
    <template #error="{ error }">
      <p>
        Something went wrong, try to reload the page or reset content with
        button below
      </p>
      <button class="reset-btn" @click="resetError(error)">Reset</button>
    </template>
  </NuxtErrorBoundary>
</template>

<style>
.router-link-active {
  color: pink;
}

.reset-btn {
  cursor: pointer;
  border: none;
  background-color: grey;
  color: blue;
  padding: 10px;
  border-radius: 10px;
}
</style>
