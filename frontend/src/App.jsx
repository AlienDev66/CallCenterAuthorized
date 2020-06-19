import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

/** Conctand com o servidor */
const socket = io('http://localhost:3333');

function App() {
  const [code, setCode] = useState(0);
  const [ status, setStatus ] = useState('');

  useEffect(()=>{
      socket.on('code', (code) => setCode(code));
      socket.on('status', (status) => setStatus(status))
  },[])
  return (
    <div className="container" >
      <h2>{ code }</h2>
      <h2>{ status }</h2>
    </div>
  );
}

export default App;
