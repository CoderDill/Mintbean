import React, { useState, useEffect, useRef } from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch} from 'react-redux'
import * as saveSvgAsPng from 'save-svg-as-png';
import 'external-svg-loader';
import '../styles/SVG.css';
const goodnightMoon_blank = require('../assets/images/GoonightMoon/goodnightMoon_blank.svg')
const goodnightMoon_cover = require('../assets/images/GoonightMoon/goodnightMoon_cover.svg')
const goodnightMoon_page1 = require('../assets/images/GoonightMoon/goodnightMoon_page1.svg')
const goodnightMoon_page2 = require('../assets/images/GoonightMoon/goodnightMoon_page2.svg')
const goodnightMoon = {
	goodnightMoon_blank: goodnightMoon_blank,
	goodnightMoon_cover: goodnightMoon_cover, 
	goodnightMoon_page1: goodnightMoon_page1, 
	goodnightMoon_page2: goodnightMoon_page2, 
}
const SVG = ({
	name,
	currentColor, 
	bookName, 
	text, 
	pageClass
}) => {
	
	const dispatch = useDispatch()
	const svgRef = useRef(null);
	const filename = 'mycreation.svg';
	const ImportedIconRef = useRef(null);
	const [ loading, setLoading ] = useState(false);
	const [toggle, setToggle] = useState(true)
	const handleToggle = () => {
		setToggle(prevState => !prevState)
	}
	useEffect(
		() => {
			setLoading(true);
			const importIcon = async () => {
				try {
					if(bookName === "goodnightMoon"){
						
						const namedImport = goodnightMoon[name]
						ImportedIconRef.current = namedImport.default
						console.log(namedImport.default)
						handleToggle()
					} else {
					const namedImport = await import(`../assets/images/${bookName}/${name}.svg`);
					ImportedIconRef.current = namedImport.default;
					console.log(namedImport.default)
					}
				} catch (err) {
					throw err;
				}
				setLoading(false);
			};
			importIcon();
		},
		[ bookName, name ]
	);
	const handleClick = (e) => {
		if(e.target.style.cssText.includes("fill: rgb(0, 0, 0);")) return
		e.target.style.fill = currentColor;
		const coloring = e.target.closest("svg").outerHTML
		dispatch({type:"ADD_COLORING_TO_STATE", coloring:coloring, name: name  })
	};

	if (!loading && ImportedIconRef.current) {
		return ImportedIconRef.current ? (
			<>
			<Box className={`SVG-${pageClass}`} >
				<svg
					onClick={handleClick}
					ref={svgRef}
					data-name={name}
					id="my-svg"
					className="SVG"
					data-src={`${ImportedIconRef.current}`}
					width="90%"
					height="90%"
				/>
				<p className="SVG-text">{text}</p>
			</Box>
			<Box sx={{display:"flex", justifyContent:"space-evenly"}}>
				<Button
					variant="contained"
					onClick={() =>
						saveSvgAsPng.saveSvg(svgRef.current, filename)}
				>
				Download
				</Button>
			</Box>
					</>
		) : null;
	}
	return null;
};

export default SVG;
