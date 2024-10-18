import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserTable from '../components/UserTable';

const UsersPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header on top */}
        <Header />

        {/* Main content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          {/* Table of users */}
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;