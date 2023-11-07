import React, { useEffect } from 'react';
import { useState } from 'react';

const Cabecera = ({ciudad, pais}) => {
  const [fecha, setFecha] = useState('')
  function getFecha() {
    const now = new Date().toDateString();
    setFecha(now)
  } 
  useEffect(() => {
    getFecha()
  });
  return (
  <>
    <div className="cabecera d-flex justify-content-between align-items-center mb-4">
      <div>
        
        <h3 className="text-white">{ciudad}</h3>
        <h3 className="text-white">{pais}</h3>
      </div>
      <h3 className="text-white">{fecha}</h3>
      
    </div>
  </>);
};

export default Cabecera;