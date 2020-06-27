import React from 'react';
import style from './gif.module.css'
import preloader from './preloader.svg'



function Gif_item(props) {
	return (
		<div className={style.gif_item}>
			<img src={props.gif} />
		</div>
	)
}


function Gif(props) {
	
	let gifElements = props.gifData.map( (f) => {
		return (<Gif_item key={f.id} gif={f.images.downsized_large.url} />)
	});

 
	return (
		<div className={style.gifBlocks}>
			{gifElements}
			{props.isRequest ? null : <button onClick={props.moreGig}>more</button>}
		</div>
	)
}


export default Gif