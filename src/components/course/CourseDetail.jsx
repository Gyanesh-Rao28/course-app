import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import CourseDetailItem from '../CourseDetailItem';

const CourseDetail = () => {

  const { courseId } = useParams();
  const history = useHistory();

  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
      history.replace('/login');
      return null;
    }

    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/v1/courses/getCourse/${courseId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        if (res.data) {
          setCourse(res.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    getCourse();

  }, []);

  // console.log()



  return (
    <div className='h-full w-full'>
      {/* Thumbnail */}
      <img src={course.thumbnail} alt="Course Thumbnail" className="h-1/2 w-4/5 object-contain mx-auto mt-10" />

      <CourseDetailItem courseId={course._id} name={course.name} instructor={course.instructor} enrollmentStatus={course.enrollmentStatus} 
        duration={course.duration} schedule={course.schedule} location={course.location} syllabus={course.syllabus}
        description={course.description}
      />

    </div>
  )
}

export default CourseDetail