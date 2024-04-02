import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import IntroImage from "../../homecover.png";


export default function Home() {
  const navigate = useNavigate();
  function onClickSigninHandler() {
    navigate("/signin");
  }
  function onClickServicesHandler() {
    navigate("/services");
  }
  return (
    <>
      <img className="intro-img" src={IntroImage} alt="" />
      <div className="intro-container">
        <h1 className="intro-caption">Efficient Translation Services</h1>
        <p>
          Accurate, Fast, and Reliable Translation and interpretation services
          for your request
        </p>
        <div className="btn-container">
        <button onClick={onClickSigninHandler} className="intro-signin-btn">
          Sign in
        </button>
        <button onClick={onClickServicesHandler} className="intro-explore-btn">
          Explore our services
        </button>
        </div>
        
      </div>
      
    </>
  );
}
