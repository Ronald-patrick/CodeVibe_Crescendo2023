import React from 'react'
import ViewPatient from '../../components/ViewPatient';
import ReportList from '../../components/ReportList';
import PatientDetailsCard from '../PatientDetailsCard';

const PatientProfile = () => {
    return (
        <>
            <PatientDetailsCard />
            <ViewPatient />
            <ReportList />
        </>
    )
}

export default PatientProfile
