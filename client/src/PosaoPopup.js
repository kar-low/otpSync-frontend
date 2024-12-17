import React, { useState } from 'react';
import './Collapsible.css'
const PosaoPopup = (info) => {
  // State to track the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showAlertSucess, setShowAlertSucess] = useState(false); 
  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  
  const togglePrijavaSuccess = () => {
    setShowAlertSucess(true);
    setTimeout(() => {setShowAlertSucess(false);
        togglePopup();
      },800);
  }

  return (
    
    <div>
      {/* Button that toggles the popup visibility */}
      <div className="btnBuy" style={{justifyContent: 'center'}} onClick={togglePopup}>
      <h3>Prijavi se!</h3>
      </div>

      {/* Conditionally render the popup */}
      {isPopupVisible && (
        <div style={styles.bg}>
        <div style={styles.popup}>
        <p>Prijavi se za posao na poziciji <b>{info.info}</b></p>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div
          style={{
            display: 'flex',
            padding: '3px 15px 3px 15px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "lightgreen",
            color: 'black',
            height: "30px",
            width: "fit-content",
            borderRadius: "8px",
            border: "1px solid green",
            fontWeight: "bold"
          }} onClick={togglePrijavaSuccess}>PRIJAVI SE</div>
          
          <div onClick={togglePopup}
          style={{
            display: 'flex',
            padding: '3px 15px 3px 15px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#dc143c",
            color: 'white',
            height: "30px",
            width: "fit-content",
            borderRadius: "8px",
            border: "1px solid maroon",
            fontWeight: 'bold'
          }}>ZATVORI</div>
        </div>
        {showAlertSucess && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            margin: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
          }}
        >
          <span style={{ marginRight: "10px", fontSize: "20px" }}>✔️</span>
          <span> Uspješna prijava!</span>
        </div>
      )}
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
    width: '70%',
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
    backgroundColor: '#00000088',
    zIndex: 8000
  }
};

export default PosaoPopup;
