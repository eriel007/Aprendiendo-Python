import Cabezera from './componentes/Cabezera';
import Cuerpo from './componentes/Cuerpo';
import Fooder from './componentes/Fooder';
import '../assets/css/Home.css';

function Home() {
    return <>
    <div className='home'>
        <Cabezera titulo="Clases"/>
        <Cuerpo/>
        <Fooder/>
    </div>
    </>
}

export default Home;