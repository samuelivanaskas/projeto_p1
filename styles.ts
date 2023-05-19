import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${cores.rosaclaro};
  position: absolute;
  width: 2032px;
  height: 384px;
  left: 0px;
  top: -24px;
  align-items: center;
`;

export const Ilogo = styled.image`
  position: absolute;
  width: 126px;
  height: 58px;
  left: 622px;
  top: 40px;
`;

export const Text = styled.p`
  position: absolute;
  width: 539px;
  height: 84px;
  left: 414px;
  top: 236px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${cores.rosa};
`;
