import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Evaluador from '../evaluations/python/Evaluador';

function Operadores() {
    const navigate=useNavigate();

    return <>
    <div className="contenedor">
        <div className="titulo">
            <h1 className="display-6">
                Tipos de Datos en Python
            </h1>
        </div>
        <div className="contenedorHijo">
            <p className="lead">
            Los operadores son símbolos que le indican al intérprete que realice una 
            operación específica, como aritmética, comparación, lógica, etc.
            <br /><br />
            </p>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                Estos son los diferentes tipos de operadores en Python:
                </li>
                <li class="list-group-item">Operadores aritméticos</li>
                <li class="list-group-item">Operadores relacionales</li>
                <li class="list-group-item">Operadores Bit a Bit</li>
                <li class="list-group-item">Operadores de asignación</li>
                <li class="list-group-item">Operadores lógicos</li>
                <li class="list-group-item">Operadores de pertenencia</li>
                <li class="list-group-item">Operadores de identidad</li>
            </ul>
            <br />
            <h5 className='display-8'>Operadores Aritméticos</h5>
            <br />
            <p className='lead'>
            Un operador aritmético toma dos operandos como entrada, realiza un cálculo y 
            devuelve el resultado.
            <br />
            Considera la expresión, “a = 2 + 3”. Aquí, 2 y  3 son los operandos y  + es el 
            operador aritmético. El resultado de la operación se almacena en la variable 
            a.
            </p>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">OPERADOR</th>
                        <th scope="col">DESCRIPCIÓN</th>
                        <th scope="col">USO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>+</td>
                        <td>Realiza Adicción entre los operadores</td>
                        <td>12+5=15</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>Realiza Substracción entre los operadores</td>
                        <td>12-3=9</td>
                    </tr>
                    <tr>
                        <td>*</td>
                        <td>Realiza Multiplicación entre los operadores</td>
                        <td>12*3=36</td>
                    </tr>
                    <tr>
                        <td>/</td>
                        <td>Realiza División entre los operadores</td>
                        <td>12/3=4</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        <td>Realiza un Modulo entre los operadores</td>
                        <td>16%3=1</td>
                    </tr>
                    <tr>
                        <td>**</td>
                        <td>Realiza la potencia de los operadores</td>
                        <td>4**2=16</td>
                    </tr>
                    <tr>
                        <td>//</td>
                        <td>Realiza División con resultado de número Entero</td>
                        <td>18//5=3</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h5 className='display-8'>Reglas de la aritmética siguen un orden específico de precedencia de las operaciones</h5>
            <br />
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <h5 className='display-8'>Paréntesis:</h5>
                    <p className='lead'>
                    Las operaciones dentro de paréntesis tienen la mayor precedencia. 
                    Si hay múltiples conjuntos de paréntesis, se resuelven de adentro 
                    hacia afuera.
                    </p>
                </li>
                <li className="list-group-item">
                    <h5 className='display-8'>Exponentes:</h5>
                    <p className='lead'>
                    Las operaciones de exponentes (potencias) se realizan a continuación.
                    </p>
                </li>
                <li className="list-group-item">
                    <h5 className='display-8'>Multiplicación y División:</h5>
                    <p className='lead'>
                    Multiplicación (*) y división (/) tienen la misma precedencia. 
                    Se realizan de izquierda a derecha.
                    </p>
                </li>
                <li className="list-group-item">
                    <h5 className='display-8'>Suma y Resta:</h5>
                    <p className='lead'>
                    Suma (+) y resta (-) tienen la misma precedencia. 
                    Se realizan de izquierda a derecha.
                    </p>
                </li>
            </ul>
            <br />
            <p className='lead'>
            Estas reglas se conocen comúnmente como la "Jerarquía de Operaciones". 
            Cuando se tiene una expresión que incluye varias operaciones, se deben seguir 
            estas reglas para determinar el orden correcto de evaluación.
            <br /><br />
            Ejemplo aplicando estas reglas a la expresión 10-5x2+3
            <br /><br />
            1. Multiplicación: 5x2=10 <br />
            2. Resta: 10-10=0 <br />
            3. Suma: 0+3=3 <br />
            Resultado final: 3
            </p>

            <Evaluador/>
        </div>
        {/*
        <div className='botonEvaluation'>
            <button 
                class="botonTiposDatos"
                onClick={() => {navigate('/evaluacionoperadores')}}
            >
                <h5 className='display-8'>Evaluación del Tema</h5>
            </button>
        </div>
        */}
    </div>
    </>
}

export default Operadores;