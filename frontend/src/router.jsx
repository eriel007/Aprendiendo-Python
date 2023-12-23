import {createBrowserRouter} from 'react-router-dom';
import Home from "./views/Home";
import Ventana from "./views/Ventana";
import EvaluationsTiposDatos from './views/cursos/evaluations/python/EvaluationsTipoDatos';
import EvaluationsOperadores from './views/cursos/evaluations/python/EvaluationsOperadores';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <h1>error ala cargar Home</h1>,
    },
    {
        path:'/curso',
        element:<Ventana/>,
        errorElement: <h1>error al cargar cursos</h1>,
    },
    //rutas para las evaluaciones de cada tema
    {
        path:'/evaluaciontiposdatos',
        element:<EvaluationsTiposDatos/>,
        errorElement: <h1>Error al cargar la evaluación</h1>
    },
    {
        path: '/evaluacionoperadores',
        element: <EvaluationsOperadores/>,
        errorElement: <h1>Error al cargar la evaluacion de operadores</h1>
    }
]);

export default router;