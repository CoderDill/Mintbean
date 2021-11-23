import '../styles/MyPictures.css';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getUserColoringsFromAPI } from '../actions/actions';
import { Box, Button } from '@mui/material';
import * as saveSvgAsPng from 'save-svg-as-png';

export default function MyPictures() {
  const INITIAL_STATE = {SVGS:[]}
	const userId = useSelector((store) => store.userReducer.id);
	const svgs = useRef(null);
	const [ isLoading, setLoading ] = useState(true);
  const [svgEls, setSvgEls] = useState(INITIAL_STATE)

	useEffect(
		() => {
			const getColorings = async () => {
				const response = await getUserColoringsFromAPI(userId);

				svgs.current = response.map((svg) => {
					const image = new Buffer.from(svg.image.data).toString(
						'ascii'
					);

					const svgEl = document.createElement('svg');
					svgEl.innerHtml = image;
          
					return { image: image, id: svg.id, name: svg.name };
				});
        if(svgs.current !== null) setLoading(false)
			};
			getColorings();
      

		},
		[userId]
	);
	
  const click = function(e){
    const svg = e.target.closest('div')
    const selectedSvg = svg.querySelector('.SVG')
    const name = selectedSvg.dataset.name
    saveSvgAsPng.saveSvg(selectedSvg, name )
    console.log(name)
    }
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => button.addEventListener("click", click))
  
	if (isLoading) return <h1>Loading...</h1>;
  const createElement = (string)=>{
   
    const svgEl = document.createElement('div')
    const button = document.createElement('button')
    button.classList.add("MyPictures-button")
    button.textContent = "Download"
    svgEl.innerHTML = string
    svgEl.setAttribute("width", "20rem")
    svgEl.classList.add("MyPictures-svg")
    
    svgEl.append(button)
    document.querySelector('.MyPictures-container').append(svgEl)
    
    return svgEl
  } 
  const svgElements = svgs.current.map(el => createElement(el.image))
  
  // console.log(svgs.current, svgElements)
	return (
		<div className="MyPictures">
			
		</div>
	);
}
