import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const MyAssignTour = () => {
    const { user } = useContext(AuthContext);  
    const [cart, refetch] = useCart();
    console.log(cart.touristName)
    return (
        <div>
            
            <h2>hhhh</h2>
        </div>
    );
};

export default MyAssignTour;








