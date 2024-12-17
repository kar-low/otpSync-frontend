import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import './Portfelj.css';
const Portfelj = () => {
    const { id } = useParams(); 
    const [user, setUser] = useState(null);
    var data = JSON.parse(localStorage.getItem("userData"));
    const [stocksSymbolList, setSymbolList] = useState([]);
    const initialized=useRef(false);
    const navigate = useNavigate();
    const [budget, setBudget] = useState();

    useEffect(() => {
    
      window.addEventListener('storage', () => {
      setBudget(JSON.parse(localStorage.getItem("userData")).budget);
      });
      
         
      }, []);

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
    if(!initialized.current){
        initialized.current = true;
        data.stocks.map(stock => {
            for(var item in stock){
                console.log(item)
                if(!(item in stocksSymbolList)){
                    stocksSymbolList.push(item);
                }
            }
        })
    }

        
  }, [id]);

  if (!user) return <div>Učitavanje...</div>;

  var total={
    price: 0,
    firstPrice: 0,
    change: 0
  };

  console.log(data.budget);
  return (
    <>
    
      <div style={{zIndex: 5000, position: 'fixed', top: 0, width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'right', backgroundColor: 'lightgray', paddingBottom: '10px'}}>
      <div style={{textAlign: 'right'}}>Preostalo budžeta: ${data.budget.toFixed(2)}</div>
      <Link
          to={`/chart/${JSON.parse(localStorage.getItem("userData")).userID}`} 
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "color 0.3s ease",
            margin: '0px 10px 0px 20px'
          }}
        >
          <div style={{backgroundColor: '#70c377', padding: '10px', borderRadius: '10px'}}>DIONICE</div>
      </Link>
      <Link
          to={`/portfolio/${JSON.parse(localStorage.getItem("userData")).userID}`} 
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "color 0.3s ease",
            margin: '0px 20px 0px 0px'
          }}
        >
          <div style={{backgroundColor: '#A0F3A7', padding: '10px', borderRadius: '10px'}}>PORTFELJ</div>
      </Link>
      </div>
    <div style={{
      padding: "20px",
      maxWidth: "80%",
      margin: "0 auto",
      marginTop: "80px",
      border: "1px solid #007a33",
      borderRadius: "8px",
      backgroundColor: "#f4f4f4",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#007a33",
        fontFamily: "Arial, sans-serif"
      }}>
         Dobrorošli, {user.userName}!</h2>
         <div>
          Vaš portfelj:
         </div>
         <table>
          <thead>
            <th>SIMBOL</th>
            <th>CIJENA</th>
            <th>KOLIČINA</th>
            <th>PROMJENA</th>
          </thead>
          <tbody>
         {
         stocksSymbolList.map((element, index)=> {
            var diff=Number(((data.stocks[0][element].lastPrice/data.stocks[0][element].firstPrice)-1)*100).toFixed(2);
            total.price+=data.stocks[0][element].lastPrice*data.stocks[0][element].count;
            total.firstPrice+=data.stocks[0][element].firstPrice*data.stocks[0][element].count;
            total.change=Number(((total.price/total.firstPrice)-1)*100).toFixed(2);
            return (
              <tr>
              <td>{element}</td>
              <td>${data.stocks[0][element].lastPrice}</td>

              <td style={{textAlign: 'right'}}>{data.stocks[0][element].count}</td> 
              
              <td style={diff<0?{color: "red", textAlign: 'right'}:{color: "green", textAlign: 'right'}}>{diff}%  {diff<0?"▼":"▲"}</td> 
              </tr>
            )
          }
          
         )
         
         }
         </tbody>
         </table>
         
        <div style={{fontWeight: 'bold'}}>UKUPNA VRIJEDNOST PORTFELJA: <br></br> 
        <span>${total.price.toFixed(2)} </span>
        <span style={total.change<0?{color: "red"}:{color: "green"}}>{total.change}%  {total.change<0? "▼":"▲"}</span></div>


      
      
    </div>
    </>
  );
};

export default Portfelj;
