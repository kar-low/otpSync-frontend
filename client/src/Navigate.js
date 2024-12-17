import React from 'react';
import { useNavigate } from "react-router-dom";

const Navigate = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }

    return (
        <div onLoad={handleClick}>
        </div>
    );
}

export default Navigate;