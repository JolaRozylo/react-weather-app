import React from "react";

export default function Search() {
  return (
    <div className="Wrapper">
      <header>What's the weather like in...</header>
      <div className="row">
        <div className="col-8">
          <form className="SearchCity">
            <input type="text" placeholder="" autocomplete="off" className="SearchInput" />
          </form>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-light" id="btn-search">
            <i className="fas fa-search icons"></i>
          </button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-light" id="btn-mylocation">
            <i className="fas fa-search-location icons"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
