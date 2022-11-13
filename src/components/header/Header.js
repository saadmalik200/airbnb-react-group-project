import "./header-styles/HeaderIcons.css";
import HeaderIcons from "./HeaderIcons";
import HomePageHeader from "./HomePageHeader";
import Popup from "./Popup";

const Header = () => {
  return (
    <div>
      <HomePageHeader />
      <Popup />
      <HeaderIcons />
    </div>
  );
};
export default Header;
