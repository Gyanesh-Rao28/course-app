import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CourseListItems from '../CourseListItems';


const CourseList = () => {


    const [courses, setCourses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (!accessToken) {
            history.replace('/login');
            return null;
        }

        const getCourses = async () => {
            try {
                const res = await axios.get("/api/v1/courses/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                if (res.data) {
                    setCourses(res.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        getCourses();
    }, []); 



    return (
        <>
           
            <div className='h-full w-full'>
                <h1 className='w-4/5 mx-auto my-10 text-4xl font-medium text-green-500'>Courses</h1>

                <div className='w-4/5 mx-auto'>
                    <ul role="list" className="divide-y divide-gray-100">
                    {
                        courses.map((item)=>(
                            <CourseListItems key={item._id} courseId={item._id} name={item.name} instructor={item.instructor} 
                                thumbnail={item.thumbnail} duration={item.duration} enrollmentStatus={item.enrollmentStatus}
                            />
                        ))
                    }

                    </ul>

                </div>
            </div>
            
        </>
    );
};

export default CourseList;
