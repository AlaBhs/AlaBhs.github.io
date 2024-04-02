import React from "react";
import TranslatorCard from "./TranslatorCard";
// import "./VoiceServices.css";

export default function MySwiperSlide(props) {
  return (
    <div className="swiper-slide">
      <div className="swiper-image " data-swiper-parallax-y="35%">
        <div
          className="swiper-image-inner swiper-image-left"
          style={{
            backgroundImage: `url(${props.backgroundImage})`,
          }}
        >
          <h1 className="swiper_h1">
            <span className="emphasis">{props.titleEmphasis}</span>
            <br />
            {props.title}
            <br />
            <span>
              {props.span}
            </span>
          </h1>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="swiper-image swiper-content" data-swiper-parallax-y="35%">
        <div className="swiper-image-inner-translators swiper-image-right ">
          {props.translatorsCards.map((translator, index) => (
            <TranslatorCard
              firstname={translator.firstname}
              lastname={translator.lastname}
              type={translator.type}
              email={translator.email}
              phoneNumber={translator.phoneNumber}
              location={translator.location}
              languages={translator.languages}
              photoUrl={translator.photoUrl}
              voiceClip={translator.voiceClip}
              availabilityBattery={translator.availabilityBattery}
              key={index}
            />
          ))}
        </div>
        <a href={`${props.allTranslatorsLink}`} className="show-more-link">
          Show more translators
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
