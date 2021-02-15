import React from "react";
import Image from "next/image";
import styled from "styled-components";
import theme from "../Theme";

import { Icon, InlineIcon } from "@iconify/react";
import bxHomeSmile from "@iconify/icons-bx/bx-home-smile";
import windowDevTools20Regular from "@iconify/icons-fluent/window-dev-tools-20-regular";
import profileIcon from "@iconify/icons-gg/profile";
import outlineContactPhone from "@iconify/icons-ic/outline-contact-phone";
import portfolioIcon from "@iconify/icons-bytesize/portfolio";
import sunIcon from "@iconify/icons-heroicons-outline/sun";
import moonIcon from "@iconify/icons-heroicons-outline/moon";

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 8.33%;
  height: 100vh;
  padding: 2.5rem 0rem;
  background: #232323;
  z-index: 50;
  @media (max-width: ${theme.size.laptop}) {
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 1rem 0rem;
    position: fixed;
    top: 0;
    background: transparent;
    ul {
      display: flex;
      gap: 1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image
          src="/static/icons/my-logo.svg"
          alt="MMI"
          width="50"
          height="50"
        />
      </div>
      <div className="navItems">
        <ul id="money">
          <ListItem>
            <Icon
              icon={bxHomeSmile}
              style={{ color: "#f4f4f4", fontSize: "30px" }}
              hFlip={true}
            />
          </ListItem>
          <ListItem>
            <Icon
              icon={profileIcon}
              style={{ color: "#f4f4f4", fontSize: "30px" }}
              hFlip={true}
            />
          </ListItem>
          <ListItem>
            <Icon
              icon={windowDevTools20Regular}
              style={{ color: "#f4f4f4", fontSize: "30px" }}
              hFlip={true}
            />
          </ListItem>
          <ListItem>
            <Icon
              icon={portfolioIcon}
              style={{ color: "#f4f4f4", fontSize: "30px" }}
              hFlip={true}
            />
          </ListItem>
          <ListItem>
            <Icon
              icon={outlineContactPhone}
              style={{ color: "#f4f4f4", fontSize: "30px" }}
              hFlip={true}
            />
          </ListItem>
        </ul>
      </div>
      <div>
        <Icon
          icon={sunIcon}
          style={{ color: "#f4f4f4", fontSize: "30px" }}
          hFlip={true}
        />
        <Icon
          icon={moonIcon}
          style={{ color: "#f4f4f4", fontSize: "30px", display: "none" }}
          hFlip={true}
        />
      </div>
    </Nav>
  );
};

export default Navbar;
