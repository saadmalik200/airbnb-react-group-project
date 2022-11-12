import { useContext } from "react";
import { Context } from "../../context/Context";
import "./header-styles/SearchExtension.css";

const SearchExtension = () => {
  const { popup, handleWhere, handleWho } = useContext(Context);

  return (
    <div className="search-extension-container">
      <div
        onClick={handleWhere}
        className={`request-box where ${
          popup.where ? "request-box-onclick" : ""
        }`}
      >
        <p className="request">Where</p>
        <input
          className={`search-input ${
            popup.where ? "search-input-onclick " : ""
          } `}
          type="text"
          placeholder="Search destinations"
        />
      </div>
      <div className="request-box">
        <p className="request">Check in</p>
        <span className="request-info">Add dates</span>
      </div>
      <div className="request-box">
        <p className="request">Check out</p>
        <span className="request-info">Add dates</span>
      </div>
      <div
        onClick={handleWho}
        className={`request-box request-icon-box ${
          popup.who ? "request-box-onclick " : ""
        } `}
      >
        <div className="who">
          <p className="request">Who</p>
          <span className="request-info">Add guets</span>
        </div>
        <span className="search-extension-icon-box">
          <i className="fa-solid fa-magnifying-glass search-extension-icon"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchExtension;
