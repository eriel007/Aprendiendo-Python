import Cabezera from './componentes/Cabezera';
import Buttons from './componentes/Buttons';
import Operadores from './cursos/python/Operadores';
import TiposDatos from './cursos/python/TiposDatos';
import Variable from './cursos/python/Variables';
import '../assets/css/Ventana.css';
import { useState } from 'react';

function Ventana() {
    const [componente,setComponente]=useState(null);

    const mostrarComponente=(comp)=>{
        setComponente(comp);
    }

    const renderizarComponente = () => {
        switch (componente) {
          case 'Variables':
            return <Variable/>;
          case 'TiposDatos':
            return <TiposDatos/>;
          case 'Operadores':
            return <Operadores/>;
          default:
            return null;
        }
      };

    return <>
    <div className='cuerpoVentana'>
        <Cabezera titulo="Python desde Cero "/>
        <div className='cuerpoPadreVentana'>
            <Buttons onBotonPresionado={mostrarComponente}/>
            <div className='curso'>
                {renderizarComponente()}
            </div>
        </div>
    </div>
    </>
}

export default Ventana;