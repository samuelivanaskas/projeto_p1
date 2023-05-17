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
  width: 82px;
  height: 24px;
  left: 732px;
  top: 806px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
`

export const Titulo = styled.h3`
  position: absolute;
  width: 92px;
  height: 21px;
  left: 180px;
  top: 665px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  position: absolute;
  width: 456px;
  height: 88px;
  left: 180px;
  top: 702px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
