// import React, { useContext } from 'react';

// import { AuthContext } from '../../../providers/AuthProvider';

// const ToristGuideHome = () => {
//     const { user } = useContext(AuthContext);
//     return (
//         <div>
//         <h2 className='text-3xl'>Hi, Welcome kk </h2>
//         {
//             user?.displayName ? user.displayName : 'Back'
//         }
//     </div>
//     );
// };

// export default ToristGuideHome;




import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../../providers/AuthProvider';

// Set the app element to avoid accessibility warning
Modal.setAppElement('#root');

const ToristGuideHome = () => {
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || '',
        role: user?.role || 'guide'
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle saving the updated information
        // For now, we will just close the modal
        console.log('Updated User:', updatedUser);
        closeModal();
    };

    return (
        <div>
            <h2 className="text-3xl mb-4">Hi, Welcome {user?.displayName || 'User'}</h2>
            <div className="flex items-center space-x-4 mb-4">
                {user?.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="User"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                )}
                <div>
                    <p className="text-xl">{user?.displayName}</p>
                    <p className="text-gray-500">{user?.role}</p>
                </div>
            </div>

            <button
                className="btn btn-primary"
                onClick={openModal}
            >
                Edit Information
            </button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal modal-open"
                overlayClassName="modal-overlay"
            >
                <h2 className="text-2xl mb-4">Edit Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="displayName" className="block text-sm font-medium">
                            Display Name
                        </label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={updatedUser.displayName}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium">
                            Profile Picture URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            value={updatedUser.photoURL}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium">
                            Role
                        </label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={updatedUser.role}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ToristGuideHome;
