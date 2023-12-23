import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/cursos/python/TiposDatos.css';
import img1 from '../../../assets/images/tipos de datos/img1.png';
import img2 from '../../../assets/images/tipos de datos/img2.png';
import img3 from '../../../assets/images/tipos de datos/img3.png';
import img4 from '../../../assets/images/tipos de datos/img4.png';
import img5 from '../../../assets/images/tipos de datos/img5.png';
import img6 from '../../../assets/images/tipos de datos/img6.png';
import img7 from '../../../assets/images/tipos de datos/img7.png';
import img8 from '../../../assets/images/tipos de datos/img8.png';
import img9 from '../../../assets/images/tipos de datos/img9.png';
import { useNavigate } from 'react-router-dom';


function TiposDatos() {
    const navigate=useNavigate();

    return <>
    <div className="contendor">
        <div className="titulo">
            <h1 className="display-6">
                Tipos de Datos en Python
            </h1>
        </div>
        <div className="contenedorHijo">
            <p className="lead">
            Vamos a ver un primer acercamiento a los tipos de datos en Python. Los tipos de
            datos te permiten clasificar la información que vamos a manejar en el programa.
            <br /><br />
            </p>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                    En esta ocasión vamos a ver una introducción a los principales tipos de datos :
                </li>
                <li class="list-group-item">Tipos Numericos</li>
                <li class="list-group-item">Tipo Cadena</li>
                <li class="list-group-item">Tipo Lista</li>
            </ul>
            <br />
            <h1 className='display-7'>Tipo Numérico</h1>
            <p className='lead'>
            Python3 trabaja con tres tipos numéricos:
            </p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <h5 className='display-8'>Enteros(int):</h5>
                    <p className='lead'>
                    Representan todos los números enteros (positivos, negativos y 0), sin 
                    parte decimal. En python3 este tipo no tiene limitación de espacio.
                    </p>
                </li>
                <li className="list-group-item">
                    <h5 className='display-8'>Reales(float):</h5>
                    <p className='lead'>
                    Sirve para representar los números reales, tienen una parte decimal y 
                    otra decimal. Normalmente se utiliza para su implementación un tipo 
                    double de C.
                    </p>
                </li>
                <li className="list-group-item">
                    <h5 className='display-8'>Complejo(complex):</h5>
                    <p className='lead'>
                    Nos sirven para representar números complejos, con una parte real y 
                    otra imaginaria. Como hemos visto en la unidad anterior son tipos de 
                    datos inmutables.
                    </p>
                </li>
            </ul>
            <br />
            <h3>Ejemplos</h3>
            <br />
            <img src={img1} alt="" className='card-img-top' />
            <br /><br />
            <h1 className='display-7'>Tipo Cadena</h1>
            <br />
            <p className='lead'>
                Las cadenas de caracteres ( str ): Me permiten guardar secuencias de 
                caracteres. Es un tipo inmutable. Como hemos comentado las cadenas de 
                caracteres en python3 están codificada con Unicode.
            </p>
            <br />
            <h5 className='display-8'>Definición de cadena. Constructor</h5>
            <br />
            <p className='lead'>Podemos definir una cadena de caracteres de distintas formas</p>
            <br />
            <img src={img2} alt="" className='card-img-top' />
            <br /><br />
            <p className='lead'>
                También podemos crear cadenas con el constructor str a partir de otros 
                tipos de datos.
            </p>
            <br />
            <img src={img3} alt="" className='card-img-top' />
            <br /><br />
            <h1 className='display-7'>Tipo Lista</h1>
            <p className='lead'>
            Las listas nos permiten guardar un conjunto de datos que se pueden repetir y 
            que pueden ser de distintos tipos. Es un tipo mutable. Son muy usadas para 
            tratar un conjunto de datos.
            </p>
            <br />
            <h5 className='display-8'>Construcción de una lista</h5>
            <br />
            <p className='lead'>
                Para crear una lista puedo usar varias formas:
            </p>
            <ul>
                <li>
                    <p className='lead'>Con los caracteres [y]:</p>
                    <img src={img4} alt="" className='card-img-top'/>
                </li>
                <li>
                    <p className='lead'>
                    Utilizando el constructor list , que toma como parámetro un dato de 
                    algún tipo secuencia.
                    </p>
                    <img src={img5} alt="" className='card-img-top' />
                    <br /><br />
                    <p className='lead'>
                    Vamos a ver distintos ejemplos partiendo de una lista, que es una secuencia mutable.
                    </p>
                    <br />
                    <img src={img6} alt="" className='card-img-top"'/>
                </li>
                <li>
                    <p className='lead'>Las secuencias se pueden recorrer</p>
                    <img src={img7} alt="" className='card-img-top"'/>
                </li>
            </ul>
            <h5 className='display-8'>Métodos principales de listas</h5>
            <p className='lead'>
            Cuando creamos una lista estamos creando un objeto de la clase list , 
            que tiene definido un conjunto de métodos:
            </p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Lista.append</li>
                <li class="list-group-item">Lista.clear</li>
                <li class="list-group-item">Lista.copy</li>
                <li class="list-group-item">Lista.count</li>
                <li class="list-group-item">Lista.extend</li>
                <li className='list-group-item'>Lista.index</li>
                <li className='list-group-item'>Lista.insert</li>
                <li className='list-group-item'>Lista.remove</li>
                <li className='list-group-item'>Lista.reverse</li>
                <li className='list-group-item'>Lista.sort</li>
            </ul>
            <br />
            <h5 className='display-8'>Métodos de inserciób:append,extend,insert</h5>
            <br />
            <img src={img8} alt="" className='card-img-top'/>
            <br /><br />
            <h5 className='display-8'>Métodos de eliminación: pop, remove</h5>
            <br />
            <img src={img9} alt="" className='card-img-top'/>
        </div>
        {/*
        <div className='botonEvaluation'>
            <button 
                class="botonTiposDatos"
                onClick={() => {navigate('/evaluaciontiposdatos')}}
            >
                <h5 className='display-8'>Evaluación del Tema</h5>
            </button>
        </div>
        */}
    </div>
    </>
}

export default TiposDatos;