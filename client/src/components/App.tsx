import './app.css'
import React from "react"

import ParrentComponent from "./parrentcomponent/ParrentComponent";
import RegisterPage from './parrentcomponent/authpage/RegisterPage';

const App: React.FC = () =>  {

  return (
    <div>
    {localStorage.getItem('auth') ?
      <ParrentComponent />:
      <RegisterPage />
  }
    </div>
  );
}

export {App};
