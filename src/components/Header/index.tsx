import { Text, HeaderBar, Ilogo } from "./styles";

import logo from "../../assets/Images/logo.svg";

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <nav>
      <Text>
        Viva experiências gastronômicas no conforto da sua casa
      </Text>
    </nav>
  </HeaderBar>
);

export default Header;
