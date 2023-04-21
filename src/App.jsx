import React from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from './alertSlice';
import Alert from './Alert';

function App() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showAlert('Este es un mensaje de alerta temporal'));
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar Alerta</button>
      <Alert />
    </div>
  );
}

export default App;

