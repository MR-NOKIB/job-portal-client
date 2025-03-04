import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { title,_id, company, company_logo, requirements, description, location, salaryRange, } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-2xl">
                        {company}
                    </h2>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2 w-full'>
                    {
                        requirements.map((skill, index) => <p
                        key={index}
                            className='border px-3 py-2 rounded-md text-center hover:text-blue-500'
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className='flex items-center'>Salary:<FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;