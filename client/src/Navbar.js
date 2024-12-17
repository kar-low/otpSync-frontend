import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faChartLine, faBriefcase, faUser, faSignOutAlt, faTrophy, faNewspaper } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const pohranjenID = JSON.parse(localStorage.getItem("userData")).userID;
    setUserID(pohranjenID);
  }, []);

  const navigate = useNavigate();

  const odjava = () => {
    localStorage.removeItem("userData");
    sessionStorage.removeItem("stockData");
    sessionStorage.removeItem("graphData");
    navigate("/login");
    window.location.reload();
  }

  const styleSheet = document.styleSheets[0];  


  styleSheet.insertRule(`
    @media (max-width: 768px) {
      nav {
       position: fixed;
       bottom: 0;
       width: 100%;
       justify-content: space-around;
       background-color: green;
       padding: 10px 5px;
       z-index: 1000;
     }

      nav ul {
       display: flex;
       justify-content: space-evenly;
       width: 100%;
       padding: 0;
       margin: 0;
     }

     nav li {
       font-size: 20px;
      }

      nav img {
       display: none; 
      }

      button {
        max-width: 40px;
        margin-right: 40px;
      }
    

      .desktop-text {
       display: none; 
     }

     .mobile-icon {
       font-size: 24px;
       display: block;  
      }
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    @media (min-width: 769px) {
      .mobile-icon {
         display: none; 
     }

      .desktop-text {
          display: inline; 
      }
    }
  `, styleSheet.cssRules.length);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        padding: "10px 20px",
        backgroundColor: "green",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Otp_bank_Logo.svg/1213px-Otp_bank_Logo.svg.png?20150315053532"
          alt="Logo"
          style={{ height: "40px" }}
        />
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
          alignItems: "center",
          marginLeft: "0px"
        }}
      >
       

        <li>
        <Link
            to={`/natjecanja/${userID}`} 
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
             <FontAwesomeIcon icon={faTrophy} className="mobile-icon" />
             <span className="desktop-text">Natjecanja</span>
          </Link>
        </li>
        <li>
        <Link
            to={`/poslovi/${userID}`} 
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
             <FontAwesomeIcon icon={faBriefcase} className="mobile-icon" />
             <span className="desktop-text">Poslovi</span>
          </Link>
        </li>
        <li>
        <Link
            to={`/vijesti/${userID}`} 
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
             <FontAwesomeIcon icon={faNewspaper} className="mobile-icon" />
             <span className="desktop-text">Vijesti</span>
          </Link>
        </li>
        <li>
        <Link
            to={`/profile/${userID}`} 
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
             <FontAwesomeIcon icon={faUser} className="mobile-icon" />
             <span className="desktop-text">Profil</span>
          </Link>
        </li>
      </ul>  
         <button style={{
          marginLeft: "10px",
          height: "40px",
          width: "100px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "lightgreen",
          transition: "background 0.3s ease",
          fontWeight: "bold",
          color: "black"
         }}
         onMouseOver={(e) => (e.target.style.backgroundColor = "#ffcc00")}
         onMouseOut={(e) => (e.target.style.backgroundColor = "lightgreen")}
         onClick={odjava}
         >
          <FontAwesomeIcon icon={faSignOutAlt} className="mobile-icon" />
          <span className="desktop-text">Odjavi se</span>
         </button>
    </nav>
  );
};

export default Navbar;
