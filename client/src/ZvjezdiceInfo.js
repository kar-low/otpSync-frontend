import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ShowMoreText from "react-show-more-text";


const Zvjezdice = () => {

  const styleSheet = document.styleSheets[0];
  const navigate = useNavigate();

  const [userID, setUserID] = useState(null);


  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login", { replace: true }); 
      window.location.reload();
      return; 
    }
    else{
        const pohranjenID = JSON.parse(localStorage.getItem("userData")).userID;
        setUserID(pohranjenID);
    }
  });
  const idiNaNatjecanja = () => {
    navigate(`/natjecanja/${userID}`);
  }

  styleSheet.insertRule(`
    .profil-container {
      padding: 20px;
      max-width: 450px;
      margin: 0 auto;
      margin-top: 10%;
      border: 1px solid #007a33;
      border-radius: 8px;
      background-color: #f4f4f4;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .title {
  visibility: hidden;
}`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@media (max-width: 768px) {
      .profil-container {
       width: 80%;
       margin-top: 20%;
   }

  .item {
       display: block;
       margin-bottom: 15px;
       
   }

  .item p {
       margin-right: 20px;
       text-align: left;
  }

  .item input {
      width: 200px;
      margin-left: 10px;
    
   }
  .title {
    visibility: visible;
    z-index: 5000;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: lightgray;
  }
}
`, styleSheet.cssRules.length);

  return (
    <>
    <div className="title">
          <div style={{backgroundColor: '#A0F3A7', padding: '10px 20px 10px 30px', borderRadius: '5px', height: '100%', marginLeft: '-10px', userSelect: 'none', fontWeight: 'bold', fontFamily: 'sans-serif'}}>ZVJEZDICE INFO</div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '70vh', alignItems: 'center'}}>
      <div style={{backgroundColor: '#f0f0f0', border: '1px solid #aaddaa', borderRadius: '15px', display: 'flex', flexDirection: 'column', width: '90%', height: 'fit-content', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
      <h1 style={{marginTop: '50px'}}>Što predstavljaju zvjezdice?</h1>
      <p style={{padding: '0 10px 20px 10px'}}>Zvjezdice (<b>★ ★ ★</b>) su način procjene poželjnosti određenog studenta za radno mjesto, a dobivaju se postizanjem dobrih rezultata na raznim OTP natjecanjima.</p>
      </div>
      <div onClick={idiNaNatjecanja} style={{justifyContent: 'center', borderRadius: '5px', marginTop: '15px', backgroundColor: 'green', color: 'white', padding: '5px 15px 5px 15px', width: 'fit-content', height: 'fit-content'}}>
        <b>Idi na natjecanja!</b>
        </div>
      </div>
    </>
  );
};

export default Zvjezdice;
