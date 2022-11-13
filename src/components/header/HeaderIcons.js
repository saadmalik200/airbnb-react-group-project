import { icons } from "../localdata/Icons";

const HeaderIcons = () => {
  const sliderLeft = () => {
    const slider = document.querySelector(".icons-container");
    slider.scrollLeft += 500;
  };

  const sliderRight = () => {
    const slider = document.querySelector(".icons-container");
    slider.scrollLeft -= 500;
  };

  return (
    <div className="icons-container">
      <i onClick={sliderLeft} class="fa-solid fa-chevron-left"></i>
      {icons.map((icon, i) => {
        return (
          <div className="icon-box">
            <img className="icon" src={icon.icon} alt="icons" />
            <p className="icon-title"> {icon.name} </p>
          </div>
        );
      })}
      <i onClick={sliderRight} class="fa-solid fa-chevron-right"></i>
    </div>
  );
};
export default HeaderIcons;
