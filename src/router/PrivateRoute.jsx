import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation, } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-dots loading-md"></span>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    else return children
};

export default PrivateRoute;