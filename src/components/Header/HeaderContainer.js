import {connect} from 'react-redux'
import Header from './Header.js'
import {setGifActionCreator, toggleIsRequestAC} from '../../redux/gif-reducer.js'



let mapStateToProps = (state) => {
	return {
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setGif: (gifData) => { dispatch( setGifActionCreator(gifData) ) },
		toggleIsRequest: (isRequest) => { dispatch(toggleIsRequestAC(isRequest)) }
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)