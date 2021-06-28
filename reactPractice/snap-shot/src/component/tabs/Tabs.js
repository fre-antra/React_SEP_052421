import React from "react";
import './tabsStyle.css'

const Tabs = () => {
  return (
    <div className="tabs">
      <button className='tabs__btn'>Mountain</button>
      <button className='tabs__btn'>Beaches</button>
      <button className='tabs__btn'>Birds</button>
      <button className='tabs__btn'>Food</button>
    </div>
  );
};

export default Tabs
