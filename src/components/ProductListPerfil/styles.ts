import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'rosa' ? cores.rosa : cores.rosaclaro};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosaclaro' ? cores.rosaclaro : cores.rosa};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8px;
  margin-top: 64px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
