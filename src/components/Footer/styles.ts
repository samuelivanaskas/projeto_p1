import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaclaro};
  padding-top: 32px 0;
`
export const SectionLogo = styled.image`
  position: absolute;
  width: 125px;
  height: 58px;
  left: 620px;
  top: 1366px;
`

export const Logos = styled.div`
  display: flex;
  margin-right; 8px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 0.05fr 0.05fr 0.05fr;
`

export const TextFooter = styled.p`
  position: absolute;
  width: 480px;
  height: 24px;
  left: 443px;
  top: 1560px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${cores.rosa};
`
