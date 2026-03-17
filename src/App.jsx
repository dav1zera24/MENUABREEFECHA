import React, { useState } from 'react';
import './App.css';

const MenuNavegacao = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navegacao">
      <button 
        className={`botao-menu ${menuAberto ? 'ativo' : ''}`}
        onClick={toggleMenu}
      >
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>

      <div className={`menu-overlay ${menuAberto ? 'ativo' : ''}`}>
        <ul className="menu-lista">
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuNavegacao;