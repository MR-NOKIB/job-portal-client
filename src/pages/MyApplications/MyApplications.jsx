import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl">My Application</h2>
            <p>Application: { jobs.length}</p>
        </div>
    );
};

export default MyApplications;