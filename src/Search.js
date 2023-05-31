import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="Wrapper">
      <div className="row">
        <div className="col-8">
          <form className="SearchCity">
            <input type="text" placeholder="" autocomplete="off" className="SearchInput" />
          </form>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-light" id="btn-search">
            <i>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="FAicons" />
            </i>
          </button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-light" id="btn-mylocation">
            <FontAwesomeIcon icon={faLocationDot} className="FAicons" />
          </button>
        </div>
      </div>
    </div>
  );
}
