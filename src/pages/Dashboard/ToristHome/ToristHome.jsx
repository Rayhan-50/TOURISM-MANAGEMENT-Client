



import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ManageProfile = () => {
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedInfo, setUpdatedInfo] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        // Add your update logic here (e.g., API call to update user info)
        Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'Your profile has been successfully updated!',
        });
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                    Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!
                </h2>
            </div>

            <div className="mt-8 flex flex-col items-center">
                <img
                    src={user?.photoURL || 'https://via.placeholder.com/150'}
                    alt="User"
                    className="w-32 h-32 rounded-full shadow-md mb-4"
                />
                <p className="text-lg font-semibold">Name: {user?.displayName || 'N/A'}</p>
                <p className="text-lg font-semibold">Email: {user?.email || 'N/A'}</p>
                <p className="text-lg font-semibold">Role: {user?.role || 'Tourist'}</p>

                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-600"
                    onClick={() => setIsModalOpen(true)}
                >
                    Edit Profile
                </button>

                <button
                    className="bg-green-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-green-600"
                    onClick={() => navigate('/dashboard/joinTourGuide')}
                >
                    Apply For Tour Guide
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={updatedInfo.displayName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Profile Picture URL</label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    value={updatedInfo.photoURL}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Email</label>
                                <input
                                    type="text"
                                    value={user?.email || ''}
                                    readOnly
                                    className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1">Role</label>
                                <input
                                    type="text"
                                    value={user?.role || 'Tourist'}
                                    readOnly
                                    className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                        </form>
                        <div className="flex justify-end gap-4">
                            <button
                                className="bg-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-500"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProfile;
