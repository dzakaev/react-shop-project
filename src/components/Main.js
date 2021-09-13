import React from 'react';
import Sidebar from './Sidebar';
import Products from './Products';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
function Main(props) {
  return (
    <div className="main">
      <Sidebar/>
      <div className="col">
        <div className="products">
          <Products name="MacBook" price={97000} sale={100000} img={img1} />
          <Products name="Galaxy" price={35999} img={img2} />
          <Products name="Скутер" price={58950} sale={65500} img={img3} />
          <Products name="Монитор Samsung" price={12000} img={img4} />
          <Products name="Расператорная маска" price={500} img={img5} />
          <Products name="Стиральная машина" price={75000} sale={100000} img={img6}/>
        </div>
      </div>
    </div>
  );
}

export default Main;