import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroP,
  VideoBg,
} from "./HeroElements";
import React, { useState } from "react";

import { Button } from "../ButtonElement";
import Logo from "../../images/drop1.svg";
import Video from "../../video/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
      <img src={Logo} alt="Logo" style={{height:'12vh'}} />
        <HeroP> Your first Juno transaction! </HeroP>
        <HeroBtnWrapper>
          <Button to="address" onMouseEnter={onHover} onMouseLeave={onHover}>
            Enter your Juno Address {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
