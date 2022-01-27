import './App.css';
import { useState, useEffect } from 'react';
import socket from './services/socket';
import Tickets from './components/Tickets';

export default function App() {
  const [response, SetResponse] = useState(null);
  useEffect(() => {
    socket.emit('start');
  }, []);

  useEffect(() => {
    socket.on('ticker', function (response) {
      const res = Array.isArray(response) ? response : [response];
      SetResponse(res);
    });
  });

  console.log('response', response, Date.now());

  return (
    <>
      <h1>Test</h1>
      {response && <Tickets response={response} />}
    </>
  );
}
