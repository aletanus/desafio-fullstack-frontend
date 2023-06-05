import React from "react";
import logo from "../../../assets/Logo_Contact_Hub.svg";
import { StyledButton } from "../../../Styles/buttons-style";
import { StyledLogo } from "./style";
export const Navbar = ({ onClick, buttonTitle, type, hidden }) => {
  return (
    <StyledLogo>
      <figure>
        <img className="logo" src={logo} alt="Contact Hub logo" />
      </figure>
      <StyledButton
        className="gray-button"
        onClick={onClick}
        type={type}
        hidden={hidden}
      >
        {buttonTitle}
      </StyledButton>
    </StyledLogo>
  );
};
