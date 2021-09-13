import React from 'react';
import Cart from '../img/bag.9715b7a4.svg'
function Header(props) {
  return (
    <nav className="navbar">
      <div className="header">
        <a className="logoInto">Intocode Coding Shopcamp</a>
        <div>
          <img className="cart" src={Cart}/>
        </div>
      </div>
    </nav>
  );
}

export default Header;