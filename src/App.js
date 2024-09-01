import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const manejarClic = () => {
    console.log('clic')
  }

  const ReiniciarContador = () => {
    
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp'/>         
      </div>
      <div className='contenedor-principal'>
        <Contador
         
        />
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={ReiniciarContador} />
      </div>
    </div>
  );
}

export default App;
