import React from 'react';

const UserTable = () => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Select</th>
          <th className="py-2">Wants</th>
          <th className="py-2">Gets</th>
          <th className="py-2">Max</th>
          <th className="py-2">Time Filter</th>
        </tr>
      </thead>
      <tbody>
        {/* Add user rows dynamically */}
      </tbody>
    </table>
  );
};

export default UserTable;
