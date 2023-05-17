import logo from '../../assets/Images/logo.svg'

import { HeaderPe, LogoPerfil, TextCenter, TextRight } from './styles'

const HeaderPerfil = () => (
  <HeaderPe>
    <LogoPerfil>
      <img src={logo} alt="Logo Perfil" />
      <nav>
        <ul>
          <TextCenter>Restaurantes</TextCenter>
          <TextRight>0 produto(s) no carrinho</TextRight>
        </ul>
      </nav>
    </LogoPerfil>
  </HeaderPe>
)

export default HeaderPerfil
