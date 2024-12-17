import React, { useState } from 'react';
import './Collapsible.css';
import PopupComponent from './Popup';
const Collapsible = ({ title, children, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  let buy="BUY";
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const addToPortfolio = (symbol) => {

  }

  return (
    <div className="collapsible" >
      <div className="collapsible-buttons">
      <div className="collapsible-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
      </div>
      <div className={`btnBuySell ${isOpen ? 'open' : ''}`}>
      <div style={{display: 'flex'}}> 
        <PopupComponent title={"KUPI"} stock={info}/>
      </div>
      <div style={{display: 'flex'}}> 
        <PopupComponent title={"PRODAJ"} stock={info}/>
      </div>
      </div>
      </div>
        <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {children}
            <div className='infoContainer'>
                <p>Zadnja cijena: ${info.lastPrice}</p>
                <p>Najviša cijena: ${info.maxPrice}</p>
                <p>Najniža cijena: ${info.minPrice}</p>
            </div>
        </div>
    </div>
  );
};

export default Collapsible;