

// import useCart from "../../../hooks/useCart";

// const MyBookings = () => {
//   const [cart] = useCart(); 
//   console.log(cart); 
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="p-4">
//       <div className="mb-6 flex justify-evenly">
//         <h1 className="text-3xl font-bold ">My Bookings</h1>
//         <h2 className="text-3xl">Total Bookings: {cart.length}</h2>
//         <h2 className="text-3xl">Total Price: $ {totalPrice.toFixed(2)}</h2>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           {/* Table Head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Package Name</th>
//               <th>Tour Guide</th>
//               <th>Tour Date</th>
//               <th>Price</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Table Body */}
//             {cart.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td>{item.packageName}</td>
//                 <td>{item.guideName}</td>
//                 <td>{new Date(item.tourDate).toLocaleDateString()}</td>
//                 <td>${item.price.toFixed(2)}</td>
//                 <td>
//                   <span
//                     className={`badge ${
//                       item.status === "Accepted"
//                         ? "badge-success"
//                         : item.status === "Rejected"
//                         ? "badge-error"
//                         : "badge-warning"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyBookings;import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBookings = () => {
  const [cart, refetch] = useCart(); 
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Handle Cancel Booking
  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
            if(res.data.deletedCount >0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
        
            }
        })

        }
      });
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex justify-evenly">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <h2 className="text-3xl">Total Bookings: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: $ {totalPrice.toFixed(2)}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tour Guide</th>
              <th>Tour Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Body */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.packageName}</td>
                <td>{item.guideName}</td>
                <td>{new Date(item.tourDate).toLocaleDateString()}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "Accepted"
                        ? "badge-success"
                        : item.status === "Rejected"
                        ? "badge-error"
                        : item.status === "Canceled"
                        ? "badge-secondary"
                        : "badge-warning"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  {item.status === "pending" && (
                    <div className="flex gap-2">
                      <button
                        className="btn btn-primary btn-sm"
                        // onClick={() => navigate(`/payment/${item._id}`)}
                      >
                        Pay
                      </button>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(item._id)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;




