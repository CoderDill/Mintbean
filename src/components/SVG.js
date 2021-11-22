import React, { useState, useEffect, useRef } from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch} from 'react-redux'
import * as saveSvgAsPng from 'save-svg-as-png';
import 'external-svg-loader';
import '../styles/SVG.css';
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
	useEffect(
		() => {
			setLoading(true);
			const importIcon = async () => {
				try {
					const namedImport = await import(`../assets/images/${bookName}/${name}.svg`);
					ImportedIconRef.current = namedImport.default;
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
