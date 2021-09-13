import React from 'react';

function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div className="listSidebar">
          <a className="sidebarItem"> Гаджеты и аксессуары</a>
          <a className="sidebarItem"> Бытовая техника</a>
          <a className="sidebarItem"> Прочее</a>
        </div>
    </div>
  );
}

export default Sidebar;