import React, { memo } from "react";

const Search = ({ icon, size, placeholder, search, handleSearch, styles }) => {
  return (
    <React.Fragment>
      <div className="form-group input-icons">
        <i className={icon} style={{ fontSize: size }}></i>
        <input
          type="text"
          id="search"
          placeholder={placeholder}
          className="form-control shadow-none"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          style={styles}
        />
      </div>
    </React.Fragment>
  );
};

export default memo(Search);
