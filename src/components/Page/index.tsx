import React from "react";
import styled from "styled-components";

const Base = styled.div`
  margin-left: 8.333%;
`;

const Page = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Page;
