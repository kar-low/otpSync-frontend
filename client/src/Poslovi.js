import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PosaoPopup from "./PosaoPopup";
import "./Collapsible.css"

const Profil = () => {

  const styleSheet = document.styleSheets[0];
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login", { replace: true }); 
      window.location.reload();
      return; 
    };
  });

  const zvjezdiceInfo = () => {
      navigate("/zvjezdice");
  };

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
          <div style={{backgroundColor: '#A0F3A7', padding: '10px 20px 10px 30px', borderRadius: '5px', height: '100%', marginLeft: '-10px', userSelect: 'none', fontWeight: 'bold', fontFamily: 'sans-serif'}}>POSLOVI</div>
     
      </div>
    <div style={{
      overflow:"scroll",
      marginBottom: "90px"
    }}>
    <div className="profil-container">
      <div
      className="item"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <h2 style={{ color: "#373", marginLeft: "0" }}>OTP: Financijski savjetnik</h2>
      </div>

      <div
      className="item"
        style={{
          alignItems: "left",
          justifyContent: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Traži se vesela i komunikativna osoba ekonomske struke (SSS,VSS,VŠS) za obavljanje poslova financijskog savjetnika. Nudimo ugovor na neodređeno, bonuse, 22 dana godišnje te mogućnosti napredovanja.</p>
        <p>Prijave su moguće do 1.1.2025.</p>
        <PosaoPopup info="OTP-Financijski savjetnik"/>
      </div>
    </div>

    <div className="profil-container">
      <div
      className="item"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <h2 style={{ color: "#373", marginLeft: "0" }}>OTP-IT: Junior programer</h2>
      </div>

      <div
      className="item"
        style={{
          alignItems: "left",
          justifyContent: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Traži se junior programer za održavanje sustava, za održavanje sustava, razvoj stranica i ostale informatičke poslove. Njegujemo fleksibilan način rada te brinemo o ravnoteži privatnog i poslovnog života uz mnogo benefita. Bankarski sektor se u današnje vrijeme stalno mijenja i digitalizira, a mi ga uspješno pratimo.</p>
        <p>Prijave su moguće do  20.12.2024.</p>
        <PosaoPopup info="OTP-Junior programer"/>
      </div>
    </div>

    <div className="profil-container" style={{backgroundColor: "#a1a1a1"}}>
      <div
      className="item"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex"
        }}
      >
        <h2 style={{ color: "#373", marginLeft: "0" }}>OTP+Student: Stručna praksa</h2>
      </div>

      <div
      className="item"
        style={{
          alignItems: "left",
          justifyContent: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>OTP nudi studentima raznih znanstvenih disciplina mogućnost odrađivanja stručne prakse na lokacijama: Zagreb, Rijeka, Split i Varaždin. Ukoliko se student pokaže kvalitetnim, postoji mogućnost zaposlenja nakon završetka prakse. Praksa je plaćena kroz studentski ugovor te je satnica 5.5 do 31.12.2024, i 6,06 od 1.1.2025.</p>
        <p>Prijave su moguće do 15.12.2025.</p>
        <div className="btnBuy" style={{justifyContent: 'center', backgroundColor: 'black', color: 'white'}}>
        <h3>Potrebna razina poželjnosti: ★★</h3>
        </div>
        <div className="btnBuy" onClick={zvjezdiceInfo} style={{justifyContent: 'center', marginTop: '15px', backgroundColor: 'grey', color: 'white', padding: '5px', width: 'fit-content', height: 'fit-content'}}>
        <b>Što znače "zvjezdice"?</b>
        </div>
      </div>
    </div>

    </div>
</>
  );
};

export default Profil;
