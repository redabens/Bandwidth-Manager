import {v4 as uuid} from 'uuid';
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">MARN Stack</h2>
      <ul className="space-y-2">
        <NavLink
         to={`/dashboard`}
          key={uuid()}
          className='sibedarbtn'
          activeclassname="active"
        >
          <img
            src="/assets/selected_dashboard.svg"
            alt="dashboard_icon"
            className="sidebar-icon"
          />
          Dashboards
        </NavLink>
        <NavLink
          to={`/bandtrack`}
          key={uuid()}
          className='sibedarbtn'
          activeclassname="active"
        >
          <img
            src="/assets/selected_dashboard.svg"
            alt="dashboard_icon"
            className="sidebar-icon"
          />
          Bandwidth Track
        </NavLink>
        <li>Overview</li>
      </ul>
    </>
  );
};

export default Sidebar;
