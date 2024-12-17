import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Natjecanja.css'
import CollapsibleNatjecanje from "./CollapsibleNatjecanje";

const Natjecanja = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userData"));
  let portfeljTotal = 0;

  function compare( a, b ) {
    if ( a.bodovi < b.bodovi ){
      return 1;
    }
    if ( a.bodovi > b.bodovi ){
      return -1;
    }
    return 0;
  }

  user.stocks.forEach(element => {
    for(const item in element){
      portfeljTotal+=element[item].count*element[item].lastPrice;
    }
  });
  const natjecanjeLista = [
  {
    naziv: "OTP invest natjecanje",
    zavrseno: false,
    opis: `Natjecatelji kroz mjesec dana ulažu fiktivan novac u iznosu od $5000 te nastoje ostvariti maksimalne povrate kupnjom i prodajom vrjednosnica. NATJECANJE TRAJE OD 26.09.2024. DO 26.12.2024.`,
    natjecatelji: [{ime: "Marko", prezime: "Marković", bodovi: 6543, pozeljnost: "★★★"}, {ime: "Ivo", prezime: "Ivić", bodovi: 5897, pozeljnost: "★★"}, 
      {ime: "Ivan", prezime: "Horvat", bodovi: 5230, pozeljnost: "★"},
      {ime: "Benjamin", prezime: "Šmitlehner", bodovi: 3244, pozeljnost: ""},
      {ime: "Nino", prezime: "Kostel", bodovi: 2837, pozeljnost: ""}],
    link: "/hackathon/:id"
  },
  {
    naziv: "OTP AI journey natjecanje",
    zavrseno: true,
    opis: "Studenti trebaju razviti aplikaciju koja koristi AI tehnologije za unapređenje svakodnevnih zadataka ili za rješavanje problema u specifičnoj industriji, poput zdravstva, obrazovanja, poslovanja ili ekologije.",
    natjecatelji: [{ime: "Marko", prezime: "Marković", bodovi: 760, pozeljnost: "★★★"}, {ime: "Ivo", prezime: "Ivić", bodovi: 650, pozeljnost: "★★"}, 
      {ime: "Ivan", prezime: "Horvat", bodovi: 640, pozeljnost: "★"},
      {ime: "Benjamin", prezime: "Šmitlehner", bodovi: 600, pozeljnost: ""},
      {ime: "Nino", prezime: "Kostel", bodovi: 570, pozeljnost: ""}
    ],
    link: ""
  },
  {
    naziv: "Maximum-marketing natjecanje",
    zavrseno: true,
    opis: "Studente se poziva da kreiraju marketinške kampanje ili strategije koje će pomoći banci da poboljša svoj brend, poveća angažman korisnika i privuče nove klijente, uz istovremeno poboljšanje korisničkog iskustva u financijskim uslugama.",
    natjecatelji: [{ime: "Marko", prezime: "Marković", bodovi: 80, pozeljnost: "★★★"}, {ime: "Ivo", prezime: "Ivić", bodovi: 80, pozeljnost: "★★★"}, 
      {ime: "Ivan", prezime: "Horvat", bodovi: 75, pozeljnost: "★★"},
      {ime: "Benjamin", prezime: "Šmitlehner", bodovi: 70, pozeljnost: "★"},
      {ime: "Nino", prezime: "Kostel", bodovi: 0, pozeljnost: ""}
    ],
    link: ""
  }];

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const styleSheet = document.styleSheets[0];

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login", { replace: true }); 
      window.location.reload();
      return; 
  };
  });
  

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
    @media (max-width: 768px) {
          .profil-container {
           width: 80%;
           margin-top: 30%;
       }

  `, styleSheet.cssRules.length);
return(
  <div style={{marginBottom: '50px'}}>
    {natjecanjeLista.map(element => {
        if(!element.zavrseno){
          element.natjecatelji.map((item, index) => {
            if(item.id){
              delete element[index];
            }
          })
          element.natjecatelji.push({id: user.userID, ime: user.userName, prezime: user.userLName, bodovi: portfeljTotal.toFixed(0)});
        }
        element.natjecatelji.sort(compare);
        return(
          <CollapsibleNatjecanje title={element.naziv} info={element}/>
        )

    }
      
    )}
    </div>
  )

};

export default Natjecanja;
