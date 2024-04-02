import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import voiveCover from "../../images/voiceCard.png";
import emergingbooksCover from "../../images/emergingbooksCard.png";
import professionalCover from "../../images/professionalCard.png";
import interpretationCover from "../../images/interpretationCard.png";


export default function Services() {
  const navigate = useNavigate();
  function onClickPTHandler() { //Professional translation
    navigate("/services/professional");
  }
  function onClickVTHandler() { //voice translation
    navigate("/services/voice");
  }
  function onClickITHandler() { //Interpretation translation
    navigate("/services/interpretation");
  }
  function onClickEBHandler() { //Emerging books translation
    navigate("/services/emergingbooks");
  }

  return (
    <>
      <div className="services_page">
        <div className="services-container">
          <h1 className="services-caption">Expert in every industry</h1>
          <p>
            Our professional online translation services cover any kind of
            translation. No matter the project type, we've got an expert ready
            to help.
          </p>
        </div>
        <section className="articles">
          <article onClick={onClickPTHandler}>
            <div className="article-wrapper">
              <figure>
                <img src={professionalCover} alt="" />
              </figure>
              <div className="article-body">
                <h2>Professional translation</h2>
                <ul className="industries--list">
                  <li>
                    <a href="/">Legal documents</a>
                  </li>
                  <li>
                    <a href="/">Technical documents</a>
                  </li>
                  <li>
                    <a href="/">certified documents</a>
                  </li>
                </ul>
                <a href="/" className="read-more" style={{ bottom: "-10px" }}>
                  Read more{" "}
                  <span className="sr-only">about this is some title</span>
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
          </article>
          <article onClick={onClickVTHandler}>
            <div className="article-wrapper">
              <figure>
                <img src={voiveCover} alt="" />
              </figure>
              <div className="article-body">
                <h2>Voice translation</h2>
                <ul className="industries--list">
                  <li>
                    <a href="/">Voice over</a>
                  </li>
                  <li>
                    <a href="/">Subtitles translation</a>
                  </li>
                </ul>
                <a href="/" className="read-more" style={{ bottom: "-38px" }}>
                  Read more{" "}
                  <span className="sr-only">about this is some title</span>
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
          </article>
          <article onClick={onClickITHandler}>
            <div className="article-wrapper">
              <figure>
                <img src={interpretationCover} alt="" />
              </figure>
              <div className="article-body">
                <h2>Interpretation translation</h2>
                <ul className="industries--list">
                  <li>
                    <a href="/">Online translation</a>
                  </li>
                  <li>
                    <a href="/">Attendance translation</a>
                  </li>
                </ul>
                <a href="/" className="read-more" style={{ bottom: "-38px" }}>
                  Read more{" "}
                  <span className="sr-only">about this is some title</span>
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
          </article>
          <article onClick={onClickEBHandler}>
            <div className="article-wrapper">
              <figure>
                <img src={emergingbooksCover} alt="" />
              </figure>
              <div className="article-body">
                <h2>Emerging books translation</h2>
                <ul className="industries--list">
                  <li>
                    <a href="/">Unpublished books, novels... </a>
                  </li>
                </ul>
                <a href="/" className="read-more" style={{ bottom: "-48px" }}>
                  Read more{" "}
                  <span className="sr-only">about this is some title</span>
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
          </article>
        </section>
      </div>
    </>
  );
}
