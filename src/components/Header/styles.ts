import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${cores.rosaclaro};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  position: relative;
  font-size: 32px;
  margin-left: 8px;
  color: ${cores.rosa};
`;
