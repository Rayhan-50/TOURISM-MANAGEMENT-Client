import { useContext } from "react";
import UseAdmin from "../hooks/UseAdmin";

import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
   
    const [isAdmin, isAdminLoading] = UseAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56 text-center"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;