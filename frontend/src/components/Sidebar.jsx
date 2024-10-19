import {v4 as uuid} from 'uuid';
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className='Sidebar'>
        {/* Admin Picture and Name */}
        <div className="admin-container">
          <img
            src="/assets/admin.png" /* Replace with actual image path */
            alt="admin_pic"
            className="admin-pic"
          />
          <div className="admin-name-container">
            <span className="admin-name">MARN Stack</span> {/* Replace with actual name */}
          </div>
        </div>
        <h2 className="sidebar-title">Dashboards</h2>
        <ul className="sidebar-list">
          <NavLink
            to={`/dashboard`}
            key={uuid()}
            className='sidebar-btn'
            activeclassname="active"
          >
            <img
              src="/assets/Overview.png"
              alt="dashboard_icon"
              className="sidebar-icon"
            />
            Overview
          </NavLink>
          <NavLink
            to={`/bandtrack`}
            key={uuid()}
            className='sidebar-btn'
            activeclassname="active"
          >
            <img
              src="/assets/File.png"
              alt="dashboard_icon"
              className="sidebar-icon"
            />
            BW Tracking
          </NavLink>
        </ul>
      </div>
      
    </>
  );
};

export default Sidebar;
