import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Cabezera.css';
import logoFcyt from '../../assets/images/logo-fcyt.png';

function Cabezera(props) {
    return <>
    <div className='cabezera'>
        <h1 className='display-7'>{props.titulo}</h1>
        <div className='logo'>
            <img src={logoFcyt} alt="" />
        </div>
    </div>
    </>
}

export default Cabezera;