import React, {useState} from 'react';
import * as axios from 'axios'



function Header(props) {

	let [search, setSearch] = useState("")



	let onSearchChange = (e) => {
		setSearch(e.currentTarget.value)
		if(e.currentTarget.value === "") {
			axios.get("https://api.giphy.com/v1/gifs/trending?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&limit=25&rating=G").then( response => {
				props.setGif(response.data.data)
			})		
			props.toggleIsRequest(false)	
		} else {
			props.toggleIsRequest(true)
			axios.get(`https://api.giphy.com/v1/gifs/search?api_key=mTweuzAM6GLdLGsSoiIRzJE8IdId1iAI&q=${e.currentTarget.value}&limit=25&offset=0&rating=G&lang=en`).then( response => {
				props.setGif(response.data.data)
			})			
		}
	}


	return (
        <header className="header">
          <div className="head">  
            <div className="logo">GIF</div> 
            <input 
            	placeholder="поиск" 
            	onChange={onSearchChange}
            	value={search} />
           </div>
        </header>
	)
}


export default Header