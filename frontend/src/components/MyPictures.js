import '../styles/MyPictures.css';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
	getUserColoringsFromAPI,
	deleteColoringFromAPI
} from '../actions/actions';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import * as saveSvgAsPng from 'save-svg-as-png';
export default function MyPictures() {
	const userId = useSelector((store) => store.userReducer.id);
	const svgs = useRef(null);
	const navigate = useNavigate();
	const [ isLoading, setLoading ] = useState(true);
	const [ colorings, setColorings ] = useState(null);
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
				setColorings(svgs.current);
				if (svgs.current !== null) setLoading(false);
			};
			getColorings();
		},
		[ userId, isLoading ]
	);

	const handleClick = (e) => {
		const div = e.target.closest('div');
		const childDiv = div.firstChild;
		const svg = childDiv.firstChild;
		const name = svg.dataset.name;
		saveSvgAsPng.saveSvg(svg, name);
	};
	const handleDelete = async (e) => {
		const res = await deleteColoringFromAPI(e.target.dataset.id);

		setLoading(true);
		setLoading(false);
	};
	return (
		<Box className="MyPictures">
			{svgs.current ? (
				svgs.current.map((el) => (
					<Box>
						<div
							className="MyPictures-svg"
							dangerouslySetInnerHTML={{ __html: el.image }}
						/>
						<Button onClick={handleClick} variant="contained">
							Download
						</Button>
						<Button
							data-id={el.id}
							onClick={handleDelete}
							variant="contained"
						>
							Delete
						</Button>
					</Box>
				))
			) : null}
		</Box>
	);
}
