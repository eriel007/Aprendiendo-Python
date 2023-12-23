import React, { useState } from 'react';
import '../../../../assets/css/cursos/python/evaluations/Evaluador.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Evaluador = () => {
  const [expresion, setExpresion] = useState('');
  const [respuestas, setRespuestas] = useState([]);

  const evaluarExpresion = () => {
    try {
      const resultado = eval(expresion);
      setRespuestas((prevRespuestas) => [...prevRespuestas, resultado]);
    } catch (error) {
      setRespuestas((prevRespuestas) => [...prevRespuestas, 'Error']);
    }
  };

  return (
    <div className='padreEvaluador'>
      <div className='titulo'>
        <h5 className='display-8'>Evaluador</h5>
      </div>
      <div className='input-group mb-3'>
        <input
            className='form-control'
            type="text"
            placeholder="Ingrese la expresión"
            value={expresion}
            onChange={(e) => setExpresion(e.target.value)}
        />
        <button className='botonEvaluador' onClick={evaluarExpresion}>Calcular</button>
      </div>
      <div className='terminal'>
      {respuestas.length > 0 && (
        <div>
          <div className='contenedorRespuestas'>
            {respuestas.map((respuesta,index) =>(
                <div className='terminal2' key={index}>
                    <h5 className='flecha1'>&gt;&gt;</h5>
                    <h5 className='respuesta'>{" "+respuesta}</h5>
                </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Evaluador;
