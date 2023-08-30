// src/components/UserList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers, selectIsLoading, selectError } from '../store/users/usersSlice';

const UserList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
