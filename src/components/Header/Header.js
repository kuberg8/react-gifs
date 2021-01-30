import React from "react";
import * as axios from "axios";
import { debounce } from "throttle-debounce";

function Header(props) {
  let onSearchChange = (e) => {
    let inputValue = e.currentTarget.value;
    const request = debounce(300, () => {
      props.setFetching(true);
      if (inputValue === "") {
        axios
          .get(
            "https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G"
          )
          .then((response) => {
            props.setGif(response.data.data);
            props.setFetching(false);
          });
      } else {
        axios
          .get(
            `https://api.giphy.com/v1/gifs/search?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&q=${inputValue}&limit=25&offset=0&rating=G&lang=en`
          )
          .then((response) => {
            props.setGif(response.data.data);
            props.setFetching(false);
          });
      }
    });

    request();
    props.setSearchText(inputValue);
  };

  return (
    <header>
      <div className="head">
        <div className="logo">GIF</div>
        <input
          placeholder="Поиск.."
          onChange={onSearchChange}
          value={props.searchText}
        />
      </div>
    </header>
  );
}

export default Header;
