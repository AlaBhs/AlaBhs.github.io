import React, { useRef, useEffect, useState, useContext } from "react";
import "./TranslatorCard.css";
import { FaLocationDot, FaPause } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineTranslation } from "react-icons/ai";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { ChatBoxContext } from "../store/chatBoxStore";

export default function TranslatorCard(props) {
  const ctx = useContext(ChatBoxContext);
  const cardPhoto = props.photoUrl;
  const location = useLocation();
  const [showAudio, setShowAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = useRef(null);
  let batteryColor = '';

  if (props.availabilityBattery === 1) {
    batteryColor = 'red';
  } else if (props.availabilityBattery === 2) {
    batteryColor = 'orange';
  } else if (props.availabilityBattery >= 3 && props.availabilityBattery <= 4) {
    batteryColor = 'green';
  }
  const bars = Array.from({ length: props.availabilityBattery }, (_, index) => (
    <div className="battery-bar" style={{backgroundColor:`${batteryColor}`}} key={index}></div>
  ));
  useEffect(() => {
    if (location.pathname === "/services/voice") setShowAudio(true);
    else setShowAudio(false);
  }, [location.pathname]);

  const onClickAudioHandler = () => {
    const audioElement = audioElementRef.current;
    if (audioElement.paused) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const onAudioEnded = () => {
    setIsPlaying(false);
  };
  return (
    <div className="card-container">
      <div className="card-img">
        <div
          className="card-photo"
          style={{ backgroundImage: `url(${cardPhoto})` }}
        ></div>
        <div className="buttons-card-container">
          <button onClick={ctx.onChatNowClickHandler}>CHAT NOW!</button>

          {showAudio && props.voiceClip && (
            <>
              <button id="playButton" onClick={onClickAudioHandler}>
                {isPlaying ? <FaPause /> : <FaMicrophoneAlt />}
              </button>{" "}
              <audio
                id="audioElement"
                src={props.voiceClip}
                ref={audioElementRef}
                onEnded={onAudioEnded}
              ></audio>
            </>
          )}
        </div>
      </div>
      <div className="card-fullname-container">
        <div className="battery">
          {bars}
        </div>
        <div className="fullname">
          <p style={{ position: "relative", top: "-9px" }}>Translator</p>
          <h2>{props.lastname} </h2>
          <h3>{props.firstname}</h3>
        </div>
      </div>
      <div className="card-description-container">
        <ul>
          <li>
            <span
              style={{
                marginLeft: "-6px",
                fontSize: "14px",
                fontWeight: "800",
              }}
            >
              {props.type}
            </span>
          </li>
          <li>
            <AiOutlineTranslation />
            <span>{props.languages}</span>
          </li>
          <li>
            <IoMdMail />
            <span>{props.email}</span>
          </li>
          <li>
            <FaPhoneAlt />
            <span>{props.phoneNumber}</span>
          </li>
          <li>
            <FaLocationDot />
            <span
              style={{
                fontSize: "11px",
                fontWeight: "500",
              }}
            >
              {props.location}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
