import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  position: absolute;
  left: 8%;
  right: 8%;
  top: 16%;
  bottom: 16%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${cores.rosa};
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.rosa};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
