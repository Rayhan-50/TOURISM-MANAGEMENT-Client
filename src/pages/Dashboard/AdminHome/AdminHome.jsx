



import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [updatedInfo, setUpdatedInfo] = useState({});

    // Fetch stats data
    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
    });

    // Toggle modal
    const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);

    // Handle input changes for editing admin info
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
    };

  

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Hi, Welcome {user?.displayName || 'Back'}</h2>
            <p className="mb-6 text-lg">YOU ARE ADMIN</p>

            <div className="flex items-center gap-4 mb-6">
                <img src={user?.photoURL} alt="Admin" className="w-16 h-16 rounded-full" />
                <div>
                    <h3 className="text-xl font-semibold">{user?.displayName}</h3>
                    <p className="text-gray-500">Role: {user?.role || 'Admin'}</p>
                </div>
                <button className="btn btn-primary" onClick={toggleEditModal}>Edit Profile</button>
            </div>

            <div className="stats shadow grid grid-cols-2 gap-4 lg:grid-cols-3">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Payment</div>
                    <div className="stat-value text-success">${stats?.revenue.toLocaleString()}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Tour Guides</div>
                    <div className="stat-value">{stats?.guidesCount}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Packages</div>
                    <div className="stat-value text-secondary">{stats?.packagesCount}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Clients</div>
                    <div className="stat-value">{stats?.users}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Stories</div>
                    <div className="stat-value">{stats?.storiesCount}</div>
                </div>
            </div>

            {isEditModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="displayName"
                                    defaultValue={user?.displayName}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Photo URL</label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    defaultValue={user?.photoURL}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    defaultValue={user?.role}
                                    disabled
                                    className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    disabled
                                    className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                            <button
                                type="button"
                                // onClick={handleUpdate}
                                className="btn btn-primary w-full mt-4"
                            >
                                Save Changes
                            </button>
                        </form>
                        <div className="modal-action">
                            <button className="btn" onClick={toggleEditModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminHome