import "../../App.css";
import Search from "./Search";

const HomePageHeader = () => {
  return (
    <nav className="nav">
      <i class="fa-brands fa-airbnb"></i>
      <Search />
      <div className="home-page-header-right">
        <h3 className="host-text">Become a host</h3>
        <i class="fa-solid fa-globe"></i>
        <div className="bars-user">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </nav>
  );
};
export default HomePageHeader;
