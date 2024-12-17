import React, { useState } from 'react';
import './Collapsible.css'
const PopupComponent = (info) => {
  // State to track the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const addToPortfolio = (symbol) => {

     let data = JSON.parse(localStorage.getItem("userData"));
     let stockInfo = JSON.parse(sessionStorage.getItem("stockData"));
     //console.log(data.stocks, symbol, stockInfo);
     stockInfo.forEach(element => {
              
     })
     data.stocks.forEach((element, index) => {
            var info = {};
            stockInfo.map(o => {
                info[o.symbol] = {
                  lastPrice: o.lastPrice,
                  firstPrice: o.firstPrice,
                }
                
            })
            //console.log(info);
            if(!(symbol in element)){
              const newStock = {
                count: 0,
                lastPrice: info[symbol].lastPrice,
                firstPrice: info[symbol].firstPrice
              }
              element[symbol]=newStock;
            }
            if(!((data.budget-element[symbol].lastPrice)<0)){
              element[symbol].count++;
              data.budget-=element[symbol].lastPrice;
            }
     });
     localStorage.setItem("userData", JSON.stringify(data));
     window.dispatchEvent(new Event('storage'));

  };

  const removeFromPortfolio = (symbol) => {

    let data = JSON.parse(localStorage.getItem("userData"));
    let stockInfo = JSON.parse(sessionStorage.getItem("stockData"));
    console.log(data.stocks, symbol, stockInfo);
    stockInfo.forEach(element => {
             
    })
    data.stocks.forEach((element, index) => {
           if((symbol in element)){
             element[symbol].count--;
             data.budget+=element[symbol].lastPrice;
             if(element[symbol].count==0){
                delete element[symbol];
             }
           }
    });
    localStorage.setItem("userData", JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));

  };

  return (
    
    <div>
      {/* Button that toggles the popup visibility */}
      <div className={`${info.title=="KUPI"? "btnBuy" : "btnSell"}`} onClick={togglePopup}>
      <h3>{info.title}</h3>
      </div>

      {/* Conditionally render the popup */}
      {isPopupVisible && (
        <div style={styles.bg}>
        <div style={styles.popup}>
          <h2>{info.title} {info.stock.symbol}</h2>
          <p>Cijena jedne dionice: ${info.stock.lastPrice}</p>
          <div style={{display: 'flex'}}>
          <div onClick={(e) => info.title=="KUPI"?addToPortfolio(info.stock.symbol):removeFromPortfolio(info.stock.symbol)}
            style={{
              display: 'flex',
            padding: '0 5px 0 5px',
            marginRight: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "lightgreen",
            color: 'black',
            height: "30px",
            width: "fit-content",
            borderRadius: "8px",
            border: "1px solid black"
            }}>{info.title}</div>
          <div onClick={togglePopup}
          style={{
            display: 'flex',
            padding: '0 5px 0 5px',
            marginRight: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#dc143c",
            color: 'white',
            height: "30px",
            width: "fit-content",
            borderRadius: "8px",
            border: "1px solid black"
          }}>ZATVORI</div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
}

// Inline styles for the popup
const styles = {
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  },
  bg: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: 1000
  }
};

export default PopupComponent;
