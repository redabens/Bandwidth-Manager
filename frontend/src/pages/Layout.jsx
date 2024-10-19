import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import "../styles/Layout.css";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import DashboardPage from "./DashboardPage";

export default function Layout(){
  const [user, setUser] = useState({}); // État pour stocker les données re

  
  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Outlet context={{user}}/>
        </div>  
      </div>
    </div>
  );
}