import React from 'react';

export default function UserCount ({userCount}) {
  console.log(userCount);
  return <div className="user-count">Users Online: {userCount}</div>
}