
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// const ManageUsers = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

//   const handleMakeAdmin = (user) => {
//     axiosSecure
//       .patch(`/users/admin/${user._id}`)
//       .then((res) => {
//         if (res.data.modifiedCount > 0) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is now an admin`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Failed to make admin!",
//         });
//         console.error(error);
//       });
//   };

//   const handleMakeGuide = (user) => {
//     axiosSecure
//       .patch(`/users/guide/${user._id}`)
//       .then((res) => {
//         if (res.data.modifiedCount > 0) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is now a guide`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Failed to make guide!",
//         });
//         console.error(error);
//       });
//   };

//   const handleDeleteUser = (user) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure
//           .delete(`/users/${user._id}`)
//           .then((res) => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire("Deleted!", "User has been deleted.", "success");
//             }
//           })
//           .catch((error) => {
//             Swal.fire({
//               icon: "error",
//               title: "Oops...",
//               text: "Failed to delete user!",
//             });
//             console.error(error);
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-evenly my-4">
//         <h2 className="text-3xl">Manage Users</h2>
//         <h2 className="text-3xl">Total users: {users.length}</h2>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>No.</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//               <th>status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.role || "User"}</td>
//                 <td>
//                   {user.role === "admin" ? (
//                     "Admin"
//                   ) : (
//                     <button
//                       onClick={() => handleMakeAdmin(user)}
//                       className="btn btn-primary btn-sm mr-2"
//                     >
//                       Make Admin
//                     </button>
//                   )}
//                   {user.role === "guide" ? (
//                     "Guide"
//                   ) : (
//                     <button
//                       onClick={() => handleMakeGuide(user)}
//                       className="btn btn-secondary btn-sm mr-2"
//                     >
//                       Make Guide
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDeleteUser(user)}
//                     className="btn btn-error btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 <td>{user?.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaUserShield, FaUserTag, FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Fetch users
  const { data: users = [], isLoading, error, refetch } = useQuery({
    queryKey: ["users", searchQuery, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        params: { search: searchQuery, page: currentPage, limit: usersPerPage },
      });
      return res.data;
    },
  });

  // Filter users based on search query (client-side fallback)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Handlers for role changes and deletion
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make ${user.name} an admin?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is now an admin`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to make admin",
              text: error.message,
            });
          });
      }
    });
  };

  const handleMakeGuide = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make ${user.name} a guide?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make guide",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/guide/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is now a guide`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to make guide",
              text: error.message,
            });
          });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete ${user.name}? This cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                icon: "success",
                title: "Deleted",
                text: `${user.name} has been deleted.`,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to delete",
              text: error.message,
            });
          });
      }
    });
  };

  // Pagination handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Skeleton loader component
  const SkeletonRow = () => (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow animate-pulse">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
      <div className="flex space-x-2">
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Manage Users</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Total Users: {users.length}</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            aria-label="Search users"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Users List */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => <SkeletonRow key={index} />)
        ) : paginatedUsers.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            No users found.
          </p>
        ) : (
          <AnimatePresence>
            {paginatedUsers.map((user, index) => (
              <motion.div
                key={user._id}
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold">{index + 1 + (currentPage - 1) * usersPerPage}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Role: {user.role || "User"}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status: {user.status || "Active"}</p>
                </div>
                <div className="flex space-x-2">
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      aria-label={`Make ${user.name} an admin`}
                    >
                      <FaUserShield className="mr-1" /> Make Admin
                    </button>
                  ) : (
                    <span className="px-3 py-1 text-gray-500">Admin</span>
                  )}
                  {user.role !== "guide" ? (
                    <button
                      onClick={() => handleMakeGuide(user)}
                      className="flex items-center px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      aria-label={`Make ${user.name} a guide`}
                    >
                      <FaUserTag className="mr-1" /> Make Guide
                    </button>
                  ) : (
                    <span className="px-3 py-1 text-gray-500">Guide</span>
                  )}
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="flex items-center px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    aria-label={`Delete ${user.name}`}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav aria-label="Pagination">
            <ul className="flex space-x-2">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-lg ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    aria-label={`Page ${page}`}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;