import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Cuerpo.css';
import logoPython from '../../assets/images/logoPython.jpg';
import { useNavigate } from 'react-router-dom';
function Cuerpo() {
    const navigate=useNavigate();

    return <>
    <div className='cuerpo'>
        <div class="card">
            <img src={logoPython} className="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Python desde cero</h5>
                <p class="card-text">
                    El mejor y mas facil para aprender a programar python.
                    Aprenderas Python desde las bases, NO necesitas ningun tipo de experiencia programando
                    , iremos avanzando desde lo mas basico. 
                </p>
                <div className='contenedorBoton'>
                    <button 
                        class="btn btn-primary" 
                        type="button"
                        onClick={()=>{navigate('/curso')}}
                    >
                        Ir a Clase
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Cuerpo;