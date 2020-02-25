export function toogleLesson(module, title) {
  return {
      type: 'TOOGLE_LESSON',
      module: module,
      lesson: title,
    }
};