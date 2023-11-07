import { useState, useEffect } from 'react'
import datos from './Datos'
import Cabecera from './Cabecera'
import Cuerpo from './Cuerpo'
import Footer from './Footer'


export const TiempoApp = () => {

  const [ciudad, setCiudad] = useState('')
  const [dataclima, setDataclima] = useState(null)
  const [tipoTemperatura, setTipoTemperatura] = useState('C')

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * datos.length);
    setDataclima(datos[indiceAleatorio]);
  }, []);

  const handleCelsiusClick = () => {
    setTipoTemperatura('C')
  }
  
  const handleFahrenheitClick = () => {
    setTipoTemperatura('F')
  }


  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(ciudad.length > 0) fetchClima()
  }
  const fetchClima = () => {
    const ciudadEncontrada = datos.find(dato => dato.ciudad.toLowerCase() === ciudad.toLowerCase())
    setDataclima(ciudadEncontrada)
  }
  return (
    <div className="container w-100 text-center mb-5">
        <h2 className='text-warning-emphasis'>Aplicacion de clima</h2>
      <div>
        <form className='my-3' onSubmit={handleSubmit}>
          {/* <input type="text" value={ciudad} onChange={handleCambioCiudad}/>
          <button type="submit">Buscar</button> */}
        <div className="input-group mb-3" >
          <input type="text" className="form-control" placeholder="Escribe la ciudad" value={ciudad} onChange={handleCambioCiudad}/>
          <button className="btn btn-outline-info" type="submit" >Buscar</button>
        </div>
        </form>
      </div>

      {dataclima && (
      <div>
        <Cabecera ciudad={dataclima.ciudad} pais={dataclima.pais}/>
        {/* <h2>{dataclima.ciudad}</h2>
        <p>Pais: {dataclima.Pais}</p> */}
        <Cuerpo gradosCº={dataclima.gradosCº} tipoTemperatura={tipoTemperatura}/>
        {/* <p>Grados Celsius: {dataclima.gradosCº}</p> */}
        <Footer humedad={dataclima.humedad}
        viento={dataclima.viento}
        onCelsiusClick={handleCelsiusClick}
        onFahrenheitClick={handleFahrenheitClick}
        
        />
        {/* <p>Humedad: {dataclima.humedad}</p>
        <p>Grados Fahrenheit: {dataclima.gradosFº}</p>
        <p>Viento: {dataclima.viento}</p> */}
      </div>
    )}

    </div>
  )
}