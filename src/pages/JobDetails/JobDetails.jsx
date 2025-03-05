import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id, title, company } = useLoaderData(); //  job
    return (
        <div className='m-10'>
            <h3>Job Details For: {title}</h3>
            <p>Apply For: {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary mt-3">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;