import React from 'react'
import DashboardHeader from '../DashboardHeader';
import SummaryCards from '../SummaryCards';
import DetailsTable from '../DetailsTable';


const StudentDashBoard = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.replace(`/login`);
    }
    return (
        <div className="bg-gray-100 min-h-screen">
            <DashboardHeader />
            <SummaryCards />
            <DetailsTable />
        </div>
    )
}

export default StudentDashBoard