import React from 'react'

const CourseListItems = ({ courseId,  name, instructor, thumbnail, duration, enrollmentStatus }) => {

  const enrollmentStatusMode = {
    "OPEN": 'bg-emerald-500',
    "CLOSED": 'bg-rose-500',
    "IN_PROGRESS": 'bg-yellow-500'
  };
  const statusClass = enrollmentStatusMode[enrollmentStatus] ;
  return (
    <>
      <a href={`/course/${courseId}`}>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={thumbnail} alt="thumbnail" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">By-{instructor}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{duration}</p>
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className={`flex-none rounded-full ${statusClass}/20 p-1`}>
                <div className={`h-1.5 w-1.5 rounded-full ${statusClass}`}></div>
              </div>
              <p className="text-xs leading-5 text-gray-500">{enrollmentStatus}</p>
            </div>
          </div>
        </li>
      </a>
    </>
  )
}

export default CourseListItems