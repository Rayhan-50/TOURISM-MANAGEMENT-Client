

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const MyAssignTour = () => {
    const { user } = useContext(AuthContext);  
   
  
    return (
        <div>
            
            <h2>{user.displayName} assign tour</h2>
        </div>
    );
};

export default MyAssignTour;








