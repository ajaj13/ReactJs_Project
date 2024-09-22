import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({islogedin,children}) => {
    if (islogedin) {
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}


export default PrivateRoute;
