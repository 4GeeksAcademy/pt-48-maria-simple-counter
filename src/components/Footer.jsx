import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import celsius from '../iconos/celsius.png'
import farenheit from '../iconos/farenheit.png'

const Footer = ({humedad, viento, onCelsiusClick, onFahrenheitClick}) => {
  return (
  <>
    <div className="footer d-flex justify-content-center text-white">
      <div>
        <FontAwesomeIcon icon={faTint} style={{fontSize: '50px'}}/>
        <span className='me-5' style={{fontSize: '50px'}}>{humedad}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faWind} style={{fontSize: '50px'}}/>
        <span className='me-5' style={{fontSize: '50px'}}>{viento}</span>
      </div>
      <div>
        <button className='boton me-5' onClick={onCelsiusClick} >
          <img src={celsius}  style={{width: '60px'}}/>
        </button>
        <button className='boton' onClick={onFahrenheitClick}>
        <img src={farenheit}  style={{width: '60px'}}/>
        </button>
      </div>
    </div>
  </>);
};


export default Footer;