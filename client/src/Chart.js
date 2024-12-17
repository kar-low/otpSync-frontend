import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React, { useState, useEffect } from "react";
import Collapsible from "./Collapsible.js";
import Profil from "./Profil.js";
import { useNavigate, Link } from "react-router-dom";
const Graf = () => {

  const [graphData, setGraphData] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To store any error during fetch
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  let apiURL= "https://projektotp-api.onrender.com";
  //apiURL="";

  const [budget, setBudget] = useState(null);

  useEffect(() => {
    
    window.addEventListener('storage', () => {
      setBudget(JSON.parse(localStorage.getItem("userData")).budget);
    });
    
       
    }, [])


useEffect(() => {
  
  if (!localStorage.getItem("userData")) {
    navigate("/login", { replace: true }); 
    window.location.reload();
    return; 
  }

  const fetchData = async () => {
    
    try {
      if(!sessionStorage.getItem("stockData") || !sessionStorage.getItem("graphData")){
        const response = await fetch(apiURL+"/api/getStocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({status: "Fetch stocks please"}),
      });

      if (response.ok) {  
        const data = await response.json();
        //console.log(data);
        const _gdata = [];
        const _info = [];
        data.forEach((element, index) => {
          //console.log(element);
          _gdata.push({symbol: element.symbol, prices: element.prices});
          const infoInstance = {symbol: element.symbol, lastPrice: element.prices[0].price, firstPrice: element.prices[element.prices.length - 1].price, minPrice: Math.min(...element.prices.map(v => v.price)), maxPrice: Math.max(...element.prices.map(v => v.price))};
          _info.push(infoInstance);
          _gdata[index].prices.reverse();
          //console.log(_gdata[index]);
          /*.forEach(elPrice =>{
            //console.log(elPrice.price, elPrice.date);
            
            _gdata.push({price: elPrice.price, date: elPrice.date});
          })});*/
          });
          //console.log(_info);
          sessionStorage.setItem("stockData", JSON.stringify(_info));
          sessionStorage.setItem("graphData", JSON.stringify(_gdata));

          setInfo(JSON.parse(sessionStorage.getItem("stockData")));
          //console.log((sessionStorage.getItem("stockData")));
          setGraphData(JSON.parse(sessionStorage.getItem("graphData")));
          setUserData(JSON.parse(localStorage.getItem("userData")));
          setBudget(JSON.parse(localStorage.getItem("userData")).budget);

          //console.log(JSON.parse(JSON.stringify(graphData)));
      }}
      else{

        setInfo(JSON.parse(sessionStorage.getItem("stockData")));
        //console.log((sessionStorage.getItem("stockData")));
        setGraphData(JSON.parse(sessionStorage.getItem("graphData")));
        //console.log(JSON.parse(sessionStorage.getItem("stockData")));
        setUserData(JSON.parse(localStorage.getItem("userData")));
        setBudget(JSON.parse(localStorage.getItem("userData")).budget);
        

      }
    } catch (err) {
      setError(err.message);
    } finally{
      
      setLoading(false);
    }};


    fetchData();
    }, []);
    if (loading) {
      return <div>Loading...</div>; // Show loading state until data is fetched
    }
  
    if (error) {
      return <div>Error: {error}</div>; // Show error message if there's an error
    }
    return (
      <>
          
      <div style={{zIndex: 5000, position: 'fixed', top: 0, width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'right', backgroundColor: 'lightgray', paddingBottom: '10px'}}>
      <div style={{textAlign: 'right'}}>Preostalo budžeta: ${budget.toFixed(2)}</div>
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
          <div style={{backgroundColor: '#A0F3A7', padding: '10px', borderRadius: '10px'}}>DIONICE</div>
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
          <div style={{backgroundColor: '#70c377', padding: '10px', borderRadius: '10px'}}>PORTFELJ</div>
      </Link>
      </div>
      <div className="stockPage" style={{marginTop: '70px'}}>
        {graphData.map((stock, index) => (
                <li style={{listStyleType: 'none'}} key={stock.symbol}>
                <Collapsible title={stock.symbol} info={{lastPrice: info[index].lastPrice, minPrice: info[index].minPrice, maxPrice: info[index].maxPrice, symbol: info[index].symbol}}>
                <ResponsiveContainer width="90%" height="90%">
                <LineChart width={800} height={600} data={stock.prices}>
                <Tooltip formatter={(value, name, props)=> [` $${value}`, ""]} separator=""/>
                <YAxis tickCount={3} domain={['dataMin', 'dataMax']}/>
                <Line animationDuration={0} type="monotone" dataKey="price" stroke="#70c377" strokeWidth={3}/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                </LineChart>
                </ResponsiveContainer>
                </Collapsible>
                </li>
        ))}

      </div>
      </>
    );
    

  };



export default Graf;