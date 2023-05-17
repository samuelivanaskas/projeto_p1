import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderPe = styled.header`
  position: absolute;
  width: 2032px;
  height: 186px;
  left: 0px;
  top: -23px;
`
export const LogoPerfil = styled.image`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 621px;
  top: 40px;
  background-color: ${cores.rosa};
`

export const TextCenter = styled.p`
  position: absolute;
  width: 109px;
  height: 21px;
  left: 171px;
  top: 59px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${cores.rosa};
`

export const TextRight = styled.p`
  position: absolute;
  width: 256px;
  height: 21px;
  left: 939px;
  top: 59px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  identical to box height
  text-align: right;
  color: ${cores.rosa};
`
