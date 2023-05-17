import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaclaro: '#FFEBD9',
  rosa: '#E66767',
  branco: '#F5F5F5',
  preto: '#000000'
}

export const Globalcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.rosa};
    padding-top: 40px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
