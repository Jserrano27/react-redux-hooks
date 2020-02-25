const INITIAL_STATE = {
  activeModule: '',
  activeLesson: '',
  modules: [
    {
      id: 1,
      title: 'React Introduction',
      lessons: [
        {id: 1, title: 'First Lesson' },
        {id: 2, title: 'Second Lesson'},
      ]
    },
    {
      id: 2,
      title: 'Learning Redux',
      lessons: [
        {id: 1, title: 'First Lesson' },
        {id: 2, title: 'Second Lesson'},
      ]
    }
  ]
};

// Reducer para los cursos
export default function courses(state = INITIAL_STATE, action) {
  //console.log(action);
  //console.log(state);
  switch(action.type) {
    case 'TOOGLE_LESSON':
      return { ...state, activeModule: action.module, activeLesson: action.lesson };
    default:
      return state;
  }
}