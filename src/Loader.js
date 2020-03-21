import React from "react";
import { styled } from "@material-ui/core";

const LoaderStyled = styled(`div`)({
  display: `flex`,
  alignItems: `center`,
  flexDirection: `column`
});

const Inner = styled(`div`)({
  "&::before": {
    backgroundColor: `#ff0000`,
    width: `100%`,
    height: `50%`,
    position: `absolute`,
    top: `0`,
    left: `0`,
    content: `""`,
    borderRadius: `50px 50px 0 0`
  },
  width: `100px`,
  height: `100px`,
  border: `1px solid #000`,
  borderRadius: `50%`,
  display: `flex`,
  alignItems: `center`,
  position: `relative`,
  animation: `pokeball 2s linear infinite`
});

const Bar = styled(`div`)({
  "&::after": {
    content: `""`,
    position: `absolute`,
    width: `20px`,
    height: `20px`,
    border: `5px solid #000`,
    borderRadius: `50%`,
    top: `-11px`,
    backgroundColor: `#fff`,
    left: `15px`
  },
  width: `100%`,
  height: `6px`,
  backgroundColor: `#000`,
  zIndex: `2`,
  position: `relative`
});

const Loader = () => {
  return (
    <LoaderStyled>
      <Inner>
        <Bar />
      </Inner>
    </LoaderStyled>
  );
};

export default Loader;
