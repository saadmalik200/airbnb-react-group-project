import "../../App.css";
import Search from "./Search";

const HomePageHeader = () => {
  return (
    <nav className="nav">
      <div className="logo-box">
        <i class="fa-brands fa-airbnb"></i>
        <h3 className="logo-name">airbnb</h3>
      </div>
      <Search />
      <div className="home-page-header-right">
        <span className="text-background">
          <h3 className="host-text">Become a host</h3>
        </span>
        <span className="globe-background">
          <i class="fa-solid fa-globe"></i>
        </span>
        <div className="bars-user">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </nav>
  );
};
export default HomePageHeader;
