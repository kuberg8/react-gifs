import {connect} from 'react-redux'
import GifAPIComponent from './GifAPIComponent.js'
import {getGifActionCreator, toggleIsFetchingAC, addOffsetCountAC} from '../../redux/gif-reducer.js'



let mapStateToProps = (state) => {
	return {
		gifData: state.gif.gifData,
		offsetCount: state.gif.offsetCount,
		isFetching: state.gif.isFetching,
		isRequest: state.gif.isRequest
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		getGif: (gifData) => { dispatch( getGifActionCreator(gifData) ) },
		toggleIsFetchingAC: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},
		addOffsetCount: (offsetCount) => { dispatch( addOffsetCountAC(offsetCount) ) },
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(GifAPIComponent)