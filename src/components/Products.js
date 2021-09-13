import React from 'react';
import Main from './Main';




function Products(props) {

  return (
    <div className="mainCard">
      <div className="card">
        <div className="cardImg">
          <img className= 'img' src={props.img}/>
        </div>
        <div>
          <h4>{props.price} ₽</h4>
          <strike>{props.sale} </strike>
        </div>
        <div className="nameDiv">{props.name}</div>
        <div className="buttonDiv">
          <button className="button">Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Products;