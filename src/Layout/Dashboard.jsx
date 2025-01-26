
import { NavLink, Outlet } from "react-router-dom";
import { 
  FaUser, 
  FaRegCalendarAlt, 
  FaClipboardList, 
  FaPlusCircle, 
  FaRegHandshake, 
  FaTasks 
} from "react-icons/fa"; // Import React Icons
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  // Mock roles for demonstration
  const isTourist = false; 
  const isGuide = false;
  const [isAdmin] = UseAdmin();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full bg-orange-400 p-4">
        <ul className="menu space-y-4">
          {/* Common Routes */}
          <li>
            <NavLink to="/dashboard/manage-profile" className="flex items-center space-x-2">
              <FaUser />
              <span>Manage Profile</span>
            </NavLink>
          </li>

          {/* Tourist-Specific Routes */}
          {isTourist && (
            <>
              <li>
                <NavLink to="/dashboard/my-bookings" className="flex items-center space-x-2">
                  <FaRegCalendarAlt />
                  <span>My Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/join-tour-guide" className="flex items-center space-x-2">
                  <FaRegHandshake />
                  <span>Join as Tour Guide</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Guide-Specific Routes */}
          {isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/my-assigned-tours" className="flex items-center space-x-2">
                  <FaTasks />
                  <span>My Assigned Tours</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Admin-Specific Routes */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/manage-users" className="flex items-center space-x-2">
                  <FaTasks />
                  <span>Manage Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-pakage" className="flex items-center space-x-2">
                <FaPlusCircle />
                  <span>Add pakages</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Routes for Stories */}
          <li>
            <NavLink to="/dashboard/manage-stories" className="flex items-center space-x-2">
              <FaClipboardList />
              <span>Manage Stories</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-stories" className="flex items-center space-x-2">
              <FaPlusCircle />
              <span>Add Stories</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
