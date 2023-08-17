export const useFirstLesson = () => {
  const { chapters } = useCourse();
  return chapters[0].lessons[0];
};
