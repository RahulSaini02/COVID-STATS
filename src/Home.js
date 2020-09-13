import React from "react";
import "./Home.css";
import Circle from "./illustration.png";
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
              Learn More
            </a>
          </button>
        </div>
      </div>
      <div className="Content_Img">
        <img src={Circle} alt="" />
      </div>
    </div>
  );
}

export default Content;
