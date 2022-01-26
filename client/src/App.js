import './App.css';
import { useState, useEffect } from 'react';
import socket from './services/socket';
export default function App() {
  const [response, SetResponse] = useState(null);
  useEffect(() => {
    socket.emit('start');

    socket.on('ticker', function (response) {
      const res = Array.isArray(response) ? response : [response];
      SetResponse(res);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  console.log(response);
  return (
    <div>
      <h1>Test app</h1>
    </div>
  );
}
