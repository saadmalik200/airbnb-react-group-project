import "./header-styles/SearchExtension.css";

const SearchExtension = () => {
  return (
    <div className="search-extension-container">
      <div className="request-box where">
        <p className="request">Where</p>
        <input
          className="search-input"
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
      <div className="request-box request-icon-box ">
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
