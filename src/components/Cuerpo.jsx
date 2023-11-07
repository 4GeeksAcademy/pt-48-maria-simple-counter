import React from "react";
import nube from "../iconos/nube.png";
import sol from "../iconos/sol.png";
import nublado from "../iconos/nublado.png";

function Cuerpo({ gradosCº, tipoTemperatura }) {
  const grados = tipoTemperatura === "C" ? gradosCº : (gradosCº * 9) / 5 + 32;
  

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="text-left">
          <h3 className="text-white" style={{fontSize: '100px'}}>{grados}º</h3>
        </div>
        <div className="text-right">
          {gradosCº < 10 ? (
          <img src={nube} alt="nube" style={{width: '300px'}}/>
          ) : gradosCº < 20 ? (
          <img src={nublado} alt="nublado" style={{width: '350px'}}/>
          ) : (
          <img src={sol} alt="sol" style={{width: '250px'}} />
          )}
        </div>
    </div>
    </>
  );
}

export default Cuerpo;
