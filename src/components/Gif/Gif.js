import React, { useState } from "react";
import style from "./gif.module.css";
import preloader from "./preloader.svg";

function Gif_item(props) {
  let [isFetching, setIsFetching] = useState(true);

  return (
    <div className={style.gif_item}>
      <img
        src={preloader}
        style={isFetching ? { display: "block" } : { display: "none" }}
      />
      <img
        onLoad={() => setIsFetching(false)}
        src={props.gif}
        style={
          isFetching ? { visibility: "hidden" } : { visibility: "visible" }
        }
      />
    </div>
  );
}

function Gif(props) {
  let gifElements = props.gifData.map((item) => {
    return <Gif_item key={item.id} gif={item.images.downsized_large.url} />;
  });

  let onScrollList = (event) => {
    const scrollBottom =
      event.target.scrollTop + event.target.offsetHeight ==
      event.target.scrollHeight;

    if (scrollBottom) {
      props.moreGif();
    }
  };

  if (props.isFetching) {
    return (
      <div className={style.gifBlock}>
        <img className={style.preloader} src={preloader} />
      </div>
    );
  }

  return (
    <div className={style.gifBlock} onScroll={(event) => onScrollList(event)}>
      {gifElements}
      {/* <button onClick={props.moreGif}>more</button> */}
    </div>
  );
}

export default Gif;
