import React from "react";
import Gif from "./Gif.js";
import * as axios from "axios";

class GifAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G"
      )
      .then((response) => {
        this.props.getGif(response.data.data);
        this.props.setFetching(false);
      });
  }

  moreGif = () => {
    axios
      .get(
        this.props.searchText && this.props.searchText != ""
          ? `https://api.giphy.com/v1/gifs/search?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&q=${this.props.searchText}&limit=25&offset=${this.props.offsetCount}&rating=G&lang=en`
          : `https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G&offset=${this.props.offsetCount}`
      )
      .then((response) => {
        this.props.getGif(response.data.data);
      });
    this.props.addOffsetCount(25);
  };

  render() {
    return (
      <Gif
        gifData={this.props.gifData}
        moreGif={this.moreGif}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default GifAPIComponent;
