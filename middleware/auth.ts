export default defineNuxtRouteMiddleware((to, from) => {
  if (
    to.params.lesson === "lesson1" ||
    to.params.lesson === "lesson2" ||
    to.params.lesson === "lesson3"
  ) {
    return;
  }
  return navigateTo("/login");
});
