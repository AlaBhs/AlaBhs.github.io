import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
// import { IoClose, IoMenu } from "react-icons/io5";
import "./MyNavbar.css";
import { VscTriangleUp } from "react-icons/vsc";
import { PaginationContext } from "../store/paginationStore";

const MyNavbar = () => {
  const ctx = useContext(PaginationContext);
  const navigate = useNavigate();
  const [openServicesDropdown, setopenServicesDropdown] = useState(false);
  const [openIndustriesDropdown, setopenIndustriesDropdown] = useState(false);
  const [navColor, setNavColor] = useState(""); // Initial color class
  const onClickIndustry = (event) => {
    const id = event.target.id;
    setopenIndustriesDropdown(false);
    if (id.toUpperCase() === "LEGAL") {
      navigate("/services/professional");
      ctx.onNavigateIndustryHandler(0);
    } else if (id.toUpperCase() === "TECHNICAL") {
      navigate("/services/professional");
      ctx.onNavigateIndustryHandler(1);
    } else if (id.toUpperCase() === "MORE") {
      navigate("/services");
      ctx.onNavigateIndustryHandler(0);
    } else if (id.toUpperCase() === "SUBTITLES") {
      navigate("/services/voice");
      ctx.onNavigateIndustryHandler(1);
    } else if (id.toUpperCase() === "ONLINE") {
      navigate("/services/interpretation");
      ctx.onNavigateIndustryHandler(1);
    } else if (id.toUpperCase() === "ATTENDANCE") {
      navigate("/services/interpretation");
      ctx.onNavigateIndustryHandler(0);
    } else if (id.toUpperCase() === "LITERATURE") {
      navigate("/services/emergingbooks");
      ctx.onNavigateIndustryHandler(0);
    }
  };

  const onClickServicesHandler = () => {
    setopenServicesDropdown(false);
  };
  const openServicesHandler = () => {
    if (openIndustriesDropdown)
      setopenIndustriesDropdown(!openIndustriesDropdown);
    setopenServicesDropdown(!openServicesDropdown);
  };
  const openIndustriesHandler = () => {
    if (openServicesDropdown) setopenServicesDropdown(!openServicesDropdown);
    setopenIndustriesDropdown(!openIndustriesDropdown);
  };

  // this code is for changing nav color when in services/:anypath because of the background colour

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/services/")) {
      setNavColor("dark-color"); // Add black-color class when pathname starts with '/services/'
    } else {
      setNavColor(""); // Reset to default class when pathname does not match
    }
  }, [location]);

  return (
    <header className="header bg_blur">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Transnation
        </NavLink>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className={`nav__link ${navColor}`}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/services"
                className={`nav__link ${navColor}`}
                onMouseEnter={openServicesHandler}
              >
                Services
                <GoTriangleDown className="GoTriangleDown"></GoTriangleDown>
              </NavLink>
              {openServicesDropdown && (
                <div className="dropdown" onMouseLeave={openServicesHandler}>
                  <ul>
                    <li>
                      <Link
                        to="/services/professional"
                        onClick={onClickServicesHandler}
                      >
                        Professional translation services
                      </Link>
                      
                    </li>
                    <li>
                      <Link
                        to="/services/voice"
                        onClick={onClickServicesHandler}
                      >
                        Voice services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/interpretation"
                        onClick={onClickServicesHandler}
                      >
                        Interpretation services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/emergingbooks"
                        onClick={onClickServicesHandler}
                      >
                        Emerging book translation services
                      </Link>
                    </li>
                  </ul>
                  <p id="more" onClick={onClickIndustry}>
                    Learn more ...
                  </p>
                  <VscTriangleUp className="triangle" />
                </div>
              )}
            </li>

            <li className="nav__item">
              <NavLink
                to="#"
                className={`nav__link ${navColor}`}
                onMouseEnter={openIndustriesHandler}
              >
                Industries
                <GoTriangleDown className="GoTriangleDown"></GoTriangleDown>
              </NavLink>
              {openIndustriesDropdown && (
                <div className="dropdown" onMouseLeave={openIndustriesHandler}>
                  <ul>
                    <li id="Legal" onClick={onClickIndustry}>
                      Legal
                    </li>
                    <li id="Technical" onClick={onClickIndustry}>
                      Technical
                    </li>
                    <li id="Subtitles" onClick={onClickIndustry}>
                      Subtitles
                    </li>
                    <li id="Online" onClick={onClickIndustry}>
                      Online interpretation
                    </li>
                    <li id="Attendance" onClick={onClickIndustry}>
                      Attendance interpretation
                    </li>
                    <li id="Literature" onClick={onClickIndustry}>
                      Literature
                    </li>
                  </ul>
                  <p id="more" onClick={onClickIndustry}>
                    Learn more ...
                  </p>
                  <VscTriangleUp className="triangle" />
                </div>
              )}
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className={`nav__link ${navColor}`}>
                About Us
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/get-started"
                className={`nav__link nav__cta ${navColor}`}
              >
                Get Started
              </NavLink>
            </li>
          </ul>
          {/* <div className="nav__close" id="nav-close">
           <IoClose />
         </div> */}
        </div>

        {/* <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div> */}
      </nav>
    </header>
  );
};

export default MyNavbar;
