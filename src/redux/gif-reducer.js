const GET_GIF = "GET-GIF"
const SET_GIF = "SET-GIF"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_REQUEST = "TOGGLE-IS-REQUEST"
const ADD_OFFSET_COUNT = "ADD-OFFSET-COUNT"


let initialState = {
	gifData: [],
	offsetCount: 25,
	isFetching: false,
	isRequest: false,

}



function gifReducer(state = initialState, action) {
	if(action.type === GET_GIF) {
		return {
			...state,
			gifData: [ ...state.gifData, ...action.gifData  ],			
		}
	} else if(action.type === SET_GIF) {
		return {
			...state,
			gifData: [ ...action.gifData  ],			
		}		
	} else if(action.type === TOGGLE_IS_FETCHING) {
		return {
			...state,
			isFetching: action.isFetching
		}
	} else if(action.type === TOGGLE_IS_REQUEST) {
		return {
			...state,
			isRequest: action.isRequest
		}
	} else if(action.type === ADD_OFFSET_COUNT) {
		return {
			...state,
			offsetCount: state.offsetCount + action.offsetCount
		}
	} 
	return state
}




export const getGifActionCreator = (gifData) => {
	return {
		type: GET_GIF,
		gifData
	}
}


export const setGifActionCreator = (gifData) => {
	return {
		type: SET_GIF,
		gifData
	}
}

export function toggleIsFetchingAC(isFetching) {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export function toggleIsRequestAC(isRequest) {
	return {
		type: TOGGLE_IS_REQUEST,
		isRequest
	}
}


export function addOffsetCountAC(offsetCount) {
	return {
		type: ADD_OFFSET_COUNT,
		offsetCount
	}
}


export default gifReducer