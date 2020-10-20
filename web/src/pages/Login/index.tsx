import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

import logoImg from "../../assets/logo-vertical.svg";

import './styles.css';

const Login: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="page-login">
      <div className="content-wrapper">
        <div className="banner">
          <img src={logoImg} alt="Happy" />

          <div className="location">
            <strong>São Paulo</strong>
            <span>São Paulo</span>
          </div>
        </div>

        <main>
          <Link to="/" className="go-back">
            <FiArrowLeft size={24} color="#15C3D6" />
          </Link>

          <form className="login">
            <h2>Fazer login</h2>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input 
                required
                id="email"
                type="email"
              />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input 
                required
                id="password"
                type="password"
              />
            </div>

            <div className="bottom-form-data">
              <div className="remember-me">
                <div 
                  className={active ? "radio active" : "radio"}
                  onClick={() => {
                    console.log('teste')
                    setActive(!active)
                  }}
                >
                  {active && <FiCheck size={16} color="#FFFFFF" />}
                </div>

                <span>Lembrar-me</span>
              </div>

              <Link to="">Esqueci minha senha</Link>
            </div>

            <button className="confirm-button">
              Entrar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
