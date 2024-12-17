import React from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import Profil from "./Profil";
import Navbar from "./Navbar";
import Chart from "./Chart";
import Portfelj from "./Portfelj";
import Poslovi from "./Poslovi.js"
import Navigate from "./Navigate.js";
import Natjecanja from "./Natjecanja.js"
import Vijesti from "./Vijesti.js"
import Zvjezdice from "./ZvjezdiceInfo.js";
const AppRoutes = () => {


  const lokacija = useLocation();
  console.log(lokacija);
  const iskljuceno = ["/login", "/"];
  return (
    <>
       {!(iskljuceno.includes(lokacija.pathname)) && <Navbar/>}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/chart/:id" element={<Chart />} />
        <Route path="/portfolio/:id" element={<Portfelj />} />
        <Route path="/profile/:id" element={<Profil />} />
        <Route path="/poslovi/:id" element={<Poslovi />}/>
        <Route path="/natjecanja/:id" element={<Natjecanja />} />
        <Route path="/vijesti/:id" element={<Vijesti />} />
        <Route path="/zvjezdice" element={<Zvjezdice />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
