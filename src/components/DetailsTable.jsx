
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const DetailsTable = () => {

    const [courses, setCourses] = useState([]);
    const history = useHistory();

    const accessToken = sessionStorage.getItem('accessToken');
    useEffect(() => {
        if (!accessToken) {
            history.replace('/login');
            return null;
        }

        const getCourses = async () => {
            try {
                const res = await axios.get("/api/v1/courses/enrolledCourses", {
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
        <div className="p-4 w-full bg-white shadow mt-4">
            <div className="flex justify-between items-center border-b pb-2">
               
                <input type="text" placeholder="Search by" className="border border-gray-300 p-2 rounded" />

            </div>
            <table className="w-full mt-4">
                <thead>
                    <tr className="text-left">
                        <th className="p-2">CourseId</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Instructor</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-2">{item.courseId}</td>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">{item.instructor}</td>
                            <td className="p-2">{item.status}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DetailsTable;
