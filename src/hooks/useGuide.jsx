import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

const useGuide = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isGuide, isLoading: isGuideLoading } = useQuery({
    queryKey: [user?.email, 'isGuide'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/guide/${user.email}`);
        console.log(res.data);
      return res.data?.guide;
    },
  });

  return [isGuide, isGuideLoading];
};

export default useGuide;





// import { useQuery } from '@tanstack/react-query';


// import useAxiosSecure from './useAxiosSecure';
// import { AuthContext } from '../providers/AuthProvider';
// import { useContext } from 'react';

// const UseAdmin = () => {
//     const { user } = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();
//     const {data: isAdmin, isPending: isAdminLoading} = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: async () =>{
//             const res = await axiosSecure.get(`/users/admin/${user.email}`);
//             console.log(res.data)
//             return res.data?.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default UseAdmin;