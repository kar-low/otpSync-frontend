import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { getSHA256Hash } from "boring-webcrypto-sha256";



const Login = () => {
  const [email, setEmail] = useState("");
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAlertSucess, setShowAlertSucess] = useState(false); 
  const [showAlertErr, setShowAlertErr] = useState(false); 
  const [IsLoggedin, setIsLoggedin] = useState(false);


  const [role, setRole] = useState("Student");
  const navigate = useNavigate();


  let apiURL= "https://projektotp-api.onrender.com";
  //apiURL="";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignUp ? "/api/signup" : "/api/login";

    const enc_password = await getSHA256Hash(password);
    const payload = { email, enc_password, ...(isSignUp && {role, ime, prezime }) };

    try {
      const response = await fetch(apiURL+endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {  
        const data = await response.json();
          setShowAlertErr(false);
          setShowAlertSucess(true);
          localStorage.setItem('userData', (JSON.stringify({userID: data._id, userEmail: data.email, userName: data.ime, userLName: data.prezime, userRole: data.role, stocks: [{}], budget: 5000})));
          setIsLoggedin(true);
          console.log((localStorage.getItem("userData")).userID);
          setTimeout(() => {setShowAlertSucess(false);
            navigate(`/profile/${data._id}`); 
          },500);
          

      } else {
        setShowAlertErr(true);
        setTimeout(() => setShowAlertErr(false),2000);
      }
    } catch (err) {
      
      setShowAlertErr(true);

      
    }
  };
  
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .form-container {
      padding: 20px;
      max-width: 450px;
      margin: 0 auto;
      margin-top: 15%;
      border: 1px solid #007a33;
      border-radius: 8px;
      background-color: #f4f4f4;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    @media (max-width: 768px) {
      .form-container {
        width: 80%;
        margin-top:20%;
        margin-bottom: 100px;
        padding: 15px;
        display:flex;
        flex-direction:column;
      }
      .form-container h2 {
        font-size: 18px;
      }
      .form-container input,
      .form-container select,
      .form-container button {
        font-size: 14px;
      }
    }
  `, styleSheet.cssRules.length);

  return (
    <>
    <div style={{maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px'}}>
      <img 
      src={`${process.env.PUBLIC_URL}/logoOTPsync.jpeg`} style={{maxWidth: '20%'}}
      alt="logo"/>
      <span style={{display: 'block', marginTop: '10px', fontFamily: 'sans-serif', color: 'grey', fontSize: '3em'}}><b style={{color: '#5AC999'}}>OTP</b> Sync</span>
    </div>
    <div
      className="form-container"
    >
      <h2
        style={{
          textAlign: "center",
          color: "#007a33",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {isSignUp ? "Stvori račun" : "Prijavi se"}
      </h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div style={{ marginBottom: "15px" }}>
            <label>Ime:</label>
            <input
              type="text"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              required
              style={{
                display: "block",
                width: "95%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>
        )}
        {isSignUp && (
          <div style={{ marginBottom: "15px" }}>
            <label>Prezime:</label>
            <input
              type="text"
              value={prezime}
              onChange={(e) => setPrezime(e.target.value)}
              required
              style={{
                display: "block",
                width: "95%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>
        )}
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              display: "block",
              width: "95%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Lozinka:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              display: "block",
              width: "95%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>
        {isSignUp && (
          <div style={{ marginBottom: "15px" }}>
            <label>Stvori račun kao:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            >
              <option value="student">Student</option>
             
            </select>
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#007a33",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isSignUp ? "Stvori račun" : "Prijavi se"}
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "15px", color: "#007a33" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Već imate račun? Prijavite se"
            : "Nemate račun? Stvorite ga"}
        </span>
      </p>
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
      {showAlertErr && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            margin: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
          }}
        >
          <span style={{ marginRight: "10px", fontSize: "20px" }}>❌</span>
          <span>Greška. Molimo pokušajte ponovno!</span>
        </div>
      )}
    </div>
    </>
  );
};

export default Login; 
