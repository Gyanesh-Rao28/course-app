import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CourseDetailItem = ({ courseId, name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    schedule,
    location,
    syllabus = [] }) => {

    const history = useHistory()

    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
        history.replace('/login');
        return null;
    }

    const enrollmentStatusMode = {
        "OPEN": 'bg-emerald-500',
        "CLOSED": 'bg-rose-500',
        "IN_PROGRESS": 'bg-yellow-500'
    };
    const statusClass = enrollmentStatusMode[enrollmentStatus];

    const enrollCourse = async () => {
        try {

            const res = await axios.post(`/api/v1/courses/selectCourse/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (res.data) {
                history.replace('/StudentDashBoard')
            }
        } catch (error) {
            console.error('Failed to fetch courses:', error);
        }
    }

    return (
        <>
            <div className='w-4/5 mx-auto mt-8'>
                <div className="px-4 sm:px-0 ">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Course Information </h3>
                    <p className="flex mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        <span className='flex justify-center items-center'>
                            {enrollmentStatus}
                            <span className={`flex-none rounded-full ${statusClass}/20 p-1`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${statusClass}`}></span>
                            </span>
                        </span>
                        {enrollmentStatus == "OPEN" ? (<button
                            onClick={enrollCourse}
                            type="button" className="ml-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
                            focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Enroll
                        </button>) :
                            (<></>)
                        }
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Course name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Instructor</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{instructor}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Schedule</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{schedule}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{location}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Duration</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{duration}</dd>
                        </div>


                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Syllabus</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">

                                    {syllabus.map((item) => (

                                        <div key={item.week}>
                                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                <div className="flex w-0 flex-1 items-center">

                                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                        <span className="truncate font-medium">Week {item.week}:</span>
                                                        <span className="flex-shrink-0 text-gray-400">{item.content}</span>
                                                    </div>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <p className="font-medium text-indigo-600 hover:text-indigo-500">{item.topic}</p>
                                                </div>
                                            </li>
                                        </div>

                                    ))}


                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default CourseDetailItem