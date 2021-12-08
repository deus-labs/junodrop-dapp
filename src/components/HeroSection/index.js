import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { StaticImage } from "gatsby-plugin-image";
import Logo from "../../images/drop1.svg";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

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
      <StaticImage height={50} src="../images/drop1.svg" alt="Logo" />
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
