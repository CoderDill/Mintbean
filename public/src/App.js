import './App.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Modal } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';
import UserRoutes from './components/UserRoutes';
import Navbar from './components/Navbar';
function App() {
	const [ isOpenLogin, setIsOpenLogin ] = useState(false);
	const [ isOpenRegister, setIsOpenRegister ] = useState(false);
	const dispatch = useDispatch()
	
	const user = window.localStorage.getItem("user") || null;
	const id = window.localStorage.getItem("id") || null; 
	if(user && id) dispatch({type:"GET_USER", username: user, id: id})
	const toggleLoginModal = () => {
		setIsOpenLogin((isOpenLogin) => !isOpenLogin);
	};
	const toggleRegisterModal = () => {
		setIsOpenRegister((isOpenRegister) => !isOpenRegister);
	};
  const notifyLoginSuccess = (username) => toast.success(`Welcome Back, ${username}!`, {
    position: toast.POSITION.TOP_CENTER
  })
  const notifyLogoutSuccess = () => toast.success("You have successfully logged out", {
    position: toast.POSITION.TOP_CENTER
  })
  const notifyRegisterSuccess = (username) => toast.success(`Welcome, ${username}!`)
	return (
		<div className="App">
      <ToastContainer/>
			<Navbar
				toggleLogin={toggleLoginModal}
				toggleRegister={toggleRegisterModal}
				notify={notifyLogoutSuccess}
			/>
			<Modal className="App-modal" open={isOpenLogin} onClose={toggleLoginModal}>
				<div>
					<LoginForm toggle={toggleLoginModal} notify={notifyLoginSuccess} />
				</div>
			</Modal>
			<Modal className="App-modal" open={isOpenRegister} onClose={toggleRegisterModal}>
				<div>
					<RegistrationForm toggle={toggleRegisterModal} notify={notifyRegisterSuccess} />
				</div>
			</Modal>
			<UserRoutes />
		</div>
	);
}

export default App;
