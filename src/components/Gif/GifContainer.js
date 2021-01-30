import { connect } from "react-redux";
import GifAPIComponent from "./GifAPIComponent.js";
import {
  getGifActionCreator,
  toggleIsFetchingAC,
  addOffsetCountAC,
} from "../../redux/gif-reducer.js";

let mapStateToProps = (state) => {
  return {
    gifData: state.gif.gifData,
    offsetCount: state.gif.offsetCount,
    isFetching: state.gif.isFetching,
    searchText: state.gif.searchText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getGif: (gifData) => {
      dispatch(getGifActionCreator(gifData));
    },
    setFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
    addOffsetCount: (offsetCount) => {
      dispatch(addOffsetCountAC(offsetCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifAPIComponent);
