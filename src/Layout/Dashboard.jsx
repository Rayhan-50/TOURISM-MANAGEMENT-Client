



import { NavLink, Outlet } from "react-router-dom";
import { 
  FaUser, 
  FaRegCalendarAlt, 
  FaClipboardList, 
  FaPlusCircle, 
  FaRegHandshake, 
  FaTasks, 
  FaHome
} from "react-icons/fa"; 
import UseAdmin from "../hooks/UseAdmin";
import useGuide from "../hooks/useGuide";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(AuthContext); 
  const [isGuide] = useGuide(); 
  const [isAdmin] = UseAdmin(); 

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 h-full bg-orange-400 p-4 flex-shrink-0">
        <ul className="menu space-y-4">
          {/* Tourist-Specific Routes */}
          {user && !isAdmin && !isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/toristProfile" className="flex items-center space-x-2">
                  <FaUser />
                  <span>Manage Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="flex items-center space-x-2">
                  <FaRegCalendarAlt />
                  <span>My Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory" className="flex items-center space-x-2">
                  <FaRegCalendarAlt />
                  <span>Payment History</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/joinTourGuide" className="flex items-center space-x-2">
                  <FaRegHandshake />
                  <span>Join as Tour Guide</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Guide-Specific Routes */}
          {isGuide && user &&  (
            <>
              <li>
                <NavLink to="/dashboard/myAssignTour" className="flex items-center space-x-2">
                  <FaTasks />
                  <span>My Assigned Tours</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/guideProfile" className="flex items-center space-x-2">
                  <FaUser />
                  <span>Manage Profile</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Admin-Specific Routes */}
          {isAdmin && user && (
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
                  <span>Add Packages</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminHome" className="flex items-center space-x-2">
                <FaHome />
                  <span>Admin Home</span>
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
          <li>
            <NavLink to="/dashboard/intro" className="flex items-center space-x-2">
              <FaPlusCircle />
              <span>INTRODUCED TO DASHBOARD</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
