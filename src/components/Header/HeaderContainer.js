import { connect } from "react-redux";
import Header from "./Header.js";
import {
  setGifActionCreator,
  changeSearchTextAC,
  toggleIsFetchingAC,
} from "../../redux/gif-reducer.js";

let mapStateToProps = (state) => {
  return {
    searchText: state.gif.searchText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setGif: (gifData) => {
      dispatch(setGifActionCreator(gifData));
    },
    setSearchText: (newSearchText) => {
      dispatch(changeSearchTextAC(newSearchText));
    },
    setFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
