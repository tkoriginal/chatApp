import React from 'react';

export default function Notification ({message}) {
  return  <div className="message system">
    <p>{message.content}</p>
  </div>
}