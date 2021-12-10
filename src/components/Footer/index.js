import React from "react";
import Logo from "../../images/drop1.svg";

import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems></FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems></FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Discord</FooterLink>
              <FooterLink to="/">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo 
            to="/" onClick={toggleHome}  src={Logo}>
              Junodrop
            </SocialLogo>
            <WebsiteRights>Junoddrop © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                href1="https://www.twitter.com/junodrop"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Discord"
                href2="https://discord.com/channels/816256689078403103/915265063470895155"
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                href="//tbc"
                target="_blank"
                aria-label="Github"
                href3="https://github.com/Highlander-maker/junodrop.com"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
