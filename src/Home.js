import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Home.css";
import World from "./World.png";
function Content() {
  return (
    <div className="Content">
      <div className="Content__text">
        <h2>CORONAVIRUS</h2>
        <h1>COVID - 19</h1>
        <p>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Most people who fall sick with COVID-19
          will experience mild to moderate symptoms and recover without special
          treatment.
        </p>
        <div className="Content__more">
          <button>
            <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">
              <ArrowForwardIcon />
            </a>
          </button>
          <h2>See More</h2>
        </div>
      </div>
      <div className="Content__Img">
        <img src={World} alt="" />
      </div>
    </div>
  );
}

export default Content;
