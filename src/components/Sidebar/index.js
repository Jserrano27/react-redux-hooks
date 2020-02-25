import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/actions/courses';

function Sidebar() {
  const modules = useSelector(state => state.courses.modules);
  const dispatch = useDispatch();
  //console.log(modules)

  return (
    <>
      <aside>
        {modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button type="button" onClick={() => dispatch(CourseActions.toogleLesson(module.title, lesson.title))}>Watch</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  )
};

export default Sidebar;