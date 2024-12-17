import React, { useState } from 'react';
import './Natjecanja.css';
import PopupComponent from './Popup';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faChartLine, faBriefcase, faUser, faSignOutAlt, faTrophy } from "@fortawesome/free-solid-svg-icons";

const CollapsibleNatjecanje = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible" >
      <div className="collapsible-buttons">
      <div className="collapsible-header" style={info.zavrseno?{backgroundColor: 'grey'}:{}} onClick={toggleCollapse}>
        <h3>{info.naziv}</h3>
      </div>
      </div>
        <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
            <div className='infoContainer'>
                <p style={{padding: '10px'}}>{info.opis}</p>
                <table style={{width: '100%', borderCollapse:'collapse'}}>
                    <thead>
                        <th style={{columnWidth:'33%'}}>IME</th>
                        <th style={{columnWidth:'33%'}}>PREZIME</th>
                        <th style={{columnWidth:'33%'}}>BODOVI</th>
                        <th style={{columnWidth:'33%'}}>POŽELJNOST</th>
                    </thead>
                    <tbody>
                {info.natjecatelji.map(element => {
                    return (
                        <tr style={element.id?{border: '2px solid black'}:{borderBottom: '1px solid gray', borderTop: '1px solid gray'}}>
                            <td style={element.id?{background: 'lightblue'}:{}}>{element.ime}</td>
                            <td style={element.id?{background: 'lightblue'}:{}}>{element.prezime}</td>
                            <td style={element.id?{background: 'lightblue', textAlign:'right'}:{textAlign:'right'}}>{element.bodovi}</td>
                            <td style={element.id?{background: 'lightblue', textAlign:'center'}:{textAlign:'center'}}>{element.pozeljnost}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
                {!info.zavrseno && (    
                    <div className="btnNatjecanje-container" style={info.zavrseno?{backgroundColor: 'grey'}:{}}>     
                        <Link
                            to={`/portfolio/${JSON.parse(localStorage.getItem("userData")).userID}`} 
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: "16px",
                              transition: "color 0.3s ease",
                            }}
                            onMouseOver={(e) => (e.target.style.color = "#ffcc00")}
                            onMouseOut={(e) => (e.target.style.color = "#fff")}
                            >
                            <div className='btnNatjecanje'>
                                Idi na natjecanje
                            </div>
                          </Link>
                    </div>  
                )}
                {info.zavrseno && (    
                    <div className="btnNatjecanje-container">     
                            <div className='btnNatjecanje' style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>
                                NATJECANJE JE ZAVRŠILO
                            </div>
                    </div>  
                )}
            </div>
        </div>
    </div>
  );
};

export default CollapsibleNatjecanje;