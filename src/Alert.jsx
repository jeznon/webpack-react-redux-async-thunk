import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility } from './alertSlice';

function Alert() {
  const dispatch = useDispatch();
  const alertVisible = useSelector(state => state.alert.visible);

  return (
    <>
      {alertVisible && (
        <div className="alert">
          Este es un mensaje de alerta temporal
        </div>
      )}
    </>
  );
}

export default Alert;
