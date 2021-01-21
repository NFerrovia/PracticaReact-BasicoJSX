// Import de las librerias React y ReactDOM para el uso de las mismas.
import React from 'react';
import ReactDOM from 'react-dom';

// Creación de un componente de React.

const App = () => {
  const buttonText = { text: 'Aceptar' };
  const labelText = 'Ingresar Nombre:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button // styling para el botón
        style={{ backgroundColor: 'blue', color: 'white' }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

// A travez de render se muestra el componente en pantalla
ReactDOM.render(<App />, document.querySelector('#root'));
