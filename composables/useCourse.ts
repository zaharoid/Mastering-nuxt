import lessons from "../lessons";

const Lesson = {
  lesson: String,
  completed: Boolean,
};

export const useCourse = () => {
  return lessons;
};
