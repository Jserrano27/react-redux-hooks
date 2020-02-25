import React from 'react';
import { useSelector } from 'react-redux';

function Video() {
  const courses = useSelector(state => state.courses)
  
  return (
    <>
      <h1>Module {courses.activeModule}</h1>
      <h1>Lesson {courses.activeLesson}</h1>
    </>
  )
};

export default Video;