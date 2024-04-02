import React, { useContext, useEffect } from "react";
import "./ProfessionalServices.css";
import Swiper from "swiper";
import { PaginationContext } from "../store/paginationStore";
import MySwiperSlide from "./SweeperSlide";
import { useLocation } from "react-router-dom";

export default function ServicesIndustries(props) {
  const location = useLocation();
  const ctx = useContext(PaginationContext);
  let loop;
  if (props.pageData.length === 1) loop = false;
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      loop: loop,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination", // CSS selector of the pagination element
        clickable: true, // Enable pagination clickable
      },
      parallax: true,
      autoplay: false,
      effect: "slide",
      mousewheel: true,
    });
    // mySwiper.on('slideChange', () => {
    //   ctx.setToSlideIndex(mySwiper.activeIndex);
    // });
    mySwiper.slideTo(ctx.toSlideIndex, 1000, true);
    // Cleanup function
    return () => {
      mySwiper.destroy(); // Destroy Swiper instance when component unmounts
    };
  }, [ctx.toSlideIndex, location,loop]);
  return (
    <div className="page-wrap">
      <div id="home-slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {props.pageData.map((slide,index) => (
              <MySwiperSlide
                backgroundImage={slide.backgroundImage}
                titleEmphasis={slide.titleEmphasis}
                title={slide.title}
                span={slide.span}
                description={slide.description}
                translatorsCards={slide.translatorsCards}
                allTranslatorsLink={slide.allTranslatorsLink}
                key={index}
              />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
