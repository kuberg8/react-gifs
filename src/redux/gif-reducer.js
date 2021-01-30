const GET_GIF = "GET-GIF";
const SET_GIF = "SET-GIF";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const ADD_OFFSET_COUNT = "ADD-OFFSET-COUNT";
const CHANGE_SEARCH_TEXT = "CHANGE-SEARCH-TEXT";

let initialState = {
  gifData: [],
  offsetCount: 25,
  isFetching: false,
  searchText: "",
};

function gifReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GIF:
      return {
        ...state,
        gifData: [...state.gifData, ...action.gifData],
      };
    case SET_GIF:
      return {
        ...state,
        gifData: [...action.gifData],
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_OFFSET_COUNT:
      return {
        ...state,
        offsetCount: state.offsetCount + action.offsetCount,
      };
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.newSearchText,
      };
    default:
      return state;
  }
}

export const getGifActionCreator = (gifData) => {
  return {
    type: GET_GIF,
    gifData,
  };
};

export const setGifActionCreator = (gifData) => {
  return {
    type: SET_GIF,
    gifData,
  };
};

export function toggleIsFetchingAC(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}

export function addOffsetCountAC(offsetCount) {
  return {
    type: ADD_OFFSET_COUNT,
    offsetCount,
  };
}

export function changeSearchTextAC(newSearchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    newSearchText,
  };
}

export default gifReducer;
