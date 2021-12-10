import Image1 from '../../images/juno-1.svg';
import Image2 from '../../images/juno-2.svg';
import Image3 from '../../images/svg-1.svg';


export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Get some Juno",
  headline: "Claim Juno from the faucet with zero fees",
  description:
    "Junodrop offers devs a small amount of Juno they need to start developing and interacting with Juno mainnet",
  buttonLabel: "Claim Juno >",
  imgStart: false,
  img: Image1,
  alt: "Juno",
  dark: false,
  primary: false,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  DarkTextDesc: true,
  topLine: "Discover dApps",
  headline: "See what else is being built on Juno-Network",
  description:
    "Discover a wide variety of dapps, contracts and tools, built in the Junø ecosystem by developers and contributors from across the globe.",
  buttonLabel: "Take me to Juno Ecosystem >",
  imgStart: true,
  img: Image2,
  alt: "Juno",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjThree = {
  id: "Dev",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Developer Services",
  headline: " Check out some useful tools for development ",
  description:
    " Cosmwasm is the toolset Juno uses for smart contract development, Click the button below for a look at Cosmwasm Docs to find out all you need to know about it",
  buttonLabel: "Take me to Cosmwasm >",
  imgStart: false,
  img: Image3,
  alt: "Juno",
  dark: false,
  primary: false,
  darkText: false,
};
