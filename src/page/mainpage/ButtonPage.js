import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import "./ButtonStyle.css";

const ButtonPage = (props) => {
    const {path} = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <>
            <div className="ButtonElement">
            <button className='btn1' onClick={handleClick}>{props.name}</button>
            </div>
        </>
    );
    
}


export default ButtonPage;