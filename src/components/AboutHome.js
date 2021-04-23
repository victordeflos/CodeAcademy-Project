import React from "react";
import home1 from "../img/home1.png";

import { BesicLeyout, Description, Image, Hide } from "../styles";

const AboutHome = () => {
  return (
    <BesicLeyout>
      <Description>
        <div className="title">
          <Hide>
            <h1>We work to Make</h1>
          </Hide>
          <br></br>
          <Hide>
            <h1>
              <span>World</span> 2 by <span>Yours</span>
            </h1>
          </Hide>
          <Hide>
            <h2>
              Forever ? <span>Forever Ever.</span>
            </h2>
          </Hide>
        </div>
        <br></br>
        <h4>
          Consult us For Any Digital Transformation and ideas that You have, we
          have more than <span>30 years</span> of experience.
        </h4>
        <br></br>
        <br></br>
        <div>
          <button>КОН ЗНАЕЊЕ</button>
        </div>
      </Description>

      <Image>
        <img src={home1} alt="EkoCities" />
      </Image>
    </BesicLeyout>
  );
};

export default AboutHome;
