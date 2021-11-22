import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Navbar.css';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import logo from '../assets/images/StoryPaint2.png'
export default function Navbar({ toggleLogin, toggleRegister, notify }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.userReducer.user);
	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		notify()
		navigate('/');
	};
	const loginButtons = (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
			<Typography
				onClick={toggleLogin}
				sx={{ marginRight: '1rem' }}
				className="Navbar-link"
			>
				Login
			</Typography>
			<Typography onClick={toggleRegister} className="Navbar-link">
				Register
			</Typography>
		</Box>
	);
	const logoutButtons = (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
			<Typography onClick={logout} sx={{ marginRight: '1rem' }} className="Navbar-link">
				Logout
			</Typography>
			<Typography className="Navbar-link" sx={{ marginRight: '1rem' }} onClick={()=> navigate('/color')} >Coloring Page</Typography>
			<Typography onClick={()=> navigate('/my-pictures')} className="Navbar-link">My Pictures</Typography>
		</Box>
	);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar className="Navbar" position="static">
				<Toolbar>
					<Typography
						className="Navbar-link"
						onClick={() => navigate('/')}
						align="left"
						variant="h6"
						component="div"
					>
						<img className="Navbar-logo" src={logo} /> 
					</Typography>
					{user ? logoutButtons : loginButtons}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
