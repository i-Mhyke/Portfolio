import React from "react";
import styled from "styled-components";

const Page = styled.div.attrs((props) => ({
  className: "",
}))`
  @media (min-width: ${(props) => props.theme.size.laptop}) {
    height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
`;

export const Section = styled.div.attrs((props) => ({
  className: "",
}))`
  padding-left: 9%;
  scroll-snap-align: center;
  height: 100vh;
`;

export default Page;
