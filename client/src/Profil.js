import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profil = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    if (!localStorage.getItem("userData")) {
      navigate("/login", { replace: true }); 
      window.location.reload();
      return; 
    }

    const fetchUserData = async () => {
      const response = localStorage.getItem("userData");
      const data = JSON.parse(response);
      setUser(data);
    };
    fetchUserData();
  }, [id]);

  if (!user) return <div>Učitavanje...</div>;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
      margin-top: 10%;
      border: 1px solid #007a33;
      border-radius: 8px;
      background-color: #f4f4f4;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    .heading {
      text-align: center;
      color: #007a33;
      font-family: Arial, sans-serif;
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    .inputGroup {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    .label {
      flex: 1;
      color: #333;
      text-align: right;
      margin-right: 15px;
      font-size: 14px;
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    .input {
      flex: 2;
      border-radius: 8px;
      height: 30px;
      border: none;
      background-color: lightgray;
      padding: 5px;
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    @media (max-width: 768px) {
      .container {
        width: 80%;
        margin-top: 30%;
        padding: 15px;
      }
      .inputGroup {
        flex-direction: column;
        align-items: flex-start;
      }
      .label {
        text-align: left;
        margin-bottom: 5px;
      }
      .input {
        width: 100%;
      }
    }
  `, styleSheet.cssRules.length);

  return (
    <div className="container">
      <h2 className="heading">Dobrodošli!</h2>
      <div className="inputGroup">
        <label className="label">Ime korisnika:</label>
        <div className="input"> {user.userName} </div>
      </div>
      <div className="inputGroup">
        <label className="label">Prezime korisnika:</label>
        <div className="input"> {user.userLName} </div>
      </div>
      <div className="inputGroup">
        <label className="label">Vrsta računa:</label>
        <div className="input"> {user.userRole} </div>
      </div>
      <div className="inputGroup">
        <label className="label">Email:</label>
        <div className="input"> {user.userEmail} </div>
      </div>
    </div>
  );
};

export default Profil;
