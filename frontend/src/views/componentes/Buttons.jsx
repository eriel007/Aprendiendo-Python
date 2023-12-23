import { useNavigate } from "react-router-dom";
import '../../assets/css/Buttons.css';

function Buttons(props) {
    const navigate=useNavigate();
    const handleBotonPresionado = (nombreComponente) => {
        props.onBotonPresionado && props.onBotonPresionado(nombreComponente);
    };

    return <>
    <div className="cajaBotones">
        <button class="btn btn-primary" 
                type="button" 
                onClick={() => handleBotonPresionado('Variables')}
        >
            Variables
        </button>
        <button 
            class="btn btn-primary" 
            type="button"
            onClick={() => handleBotonPresionado('TiposDatos')}
        >
            Tipos de Datos
        </button>
        <button 
            class="btn btn-primary" 
            type="button"
            onClick={() => handleBotonPresionado('Operadores')}
        >
            Operadores
        </button>
    </div>
    </>
}

export default Buttons;