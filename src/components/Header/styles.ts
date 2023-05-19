import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${cores.rosaclaro};
  position: absolute;
  width: 1024px;
  height: 380px;
  left: 0px;
  align-items: center;
`;

export const Ilogo = styled.image`
  position: absolute;
  width: 126px;
  height: 60px;
  left: 622px;
  top: 40px;
`;

export const Text = styled.p`
  position: absolute;
  width: 200px;
  height: 60px;
  left: 22px;
  top: 80px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${cores.rosa};
`;
