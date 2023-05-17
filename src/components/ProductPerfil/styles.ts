import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.rosaclaro};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Botao = styled.button`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`

export const Titulo = styled.h3`
  position: absolute;
  width: 124px;
  height: 19px;
  left: 179px;
  top: 681px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${cores.rosaclaro};
`

export const Descricao = styled.p`
  position: absolute;
  width: 304px;
  height: 88px;
  left: 179px;
  top: 708px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosaclaro};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
