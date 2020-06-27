import React from 'react';
import Gif from './Gif.js'
import * as axios from 'axios'


class GifAPIComponent extends React.Component {
	componentDidMount() {
		axios.get("https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G").then( response => {
			this.props.getGif(response.data.data)
		})
	}


	moreGig = () => {
		axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G&offset=${this.props.offsetCount}`).then( response => {
			this.props.getGif(response.data.data)
		})
		this.props.addOffsetCount(25)
	}

	moreSearchGif = () => {

	}

	render() {
		return (
			<Gif gifData={this.props.gifData} moreGig={this.moreGig} isRequest={this.props.isRequest} />
		)
	}
}


export default GifAPIComponent