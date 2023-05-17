import { Text, HeaderBar, Ilogo } from './styles'

import logo from '../../assets/Images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Ilogo>
      <img src={logo} alt="EPLAY" />
    </Ilogo>
    <nav>
      <ul>
        <Text>
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </Text>
      </ul>
    </nav>
  </HeaderBar>
)

export default Header
