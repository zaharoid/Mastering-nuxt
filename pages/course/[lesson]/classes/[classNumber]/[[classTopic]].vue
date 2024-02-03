<template>
  <h2>lesson:{{ lesson.lesson }}</h2>
  <p>class: {{ $route.params.classNumber }}</p>
  <p>Topic of class: {{ $route.params.classTopic }}</p>

  <ErrorBtn />
</template>

<style scoped>
h2,
p {
  text-align: center;
  color: rgb(36, 128, 177);
}
</style>

<script setup>
import ErrorBtn from "~/components/ErrorBtn.vue";

const route = useRoute();

const props = defineProps({
  lesson: {
    type: Object,
    required: true,
  },
});

const title = computed(() => {
  return route.params.lesson;
});

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const lessons = useCourse();

      const lesson = computed(() => {
        return lessons.find((lesson) => {
          return lesson.lesson === params.lesson;
        });
      });
      if (!lesson?.value?.lesson) {
        throw abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

useHead({
  title: title,
});

if (route.params.lesson === "lesson3") {
  console.log(route.params.paramthatdoesnotexist.capitalizeIsNotAMethod());
}
</script>
