import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	FormGroup,
	Box,
	Button
} from '../components/node_modules/@mui/material';
import { object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromAPI } from '../actions/actions';
import { useDispatch} from 'react-redux';

function LoginForm({ toggle, notify }) {
	const initialValues = {
		username : '',
		password : ''
	};
	const dispatch = useDispatch();

	const notifyError = () =>
		toast.error('Sorry, incorrect login information', {
			position : toast.POSITION.TOP_RIGHT
		});

	return (
		<div style={{ textAlign: 'center' }}>
			<ToastContainer autoClose={2000} hideProgressBar={true} />
			<Card sx={{ margin: 'auto' }}>
				<CardContent>
					<Typography variant="h4" mb={2}>
						Login
					</Typography>
					<Formik
						validationSchema={object({
							username : string().required().min(3).max(15),
							password : string().required().min(5).max(20)
						})}
						initialValues={initialValues}
						onSubmit={async (values) => {
							try {
								let res = await dispatch(
									getUserFromAPI(values)
								);

								if (res.username) {
									//** not navigating here to save any progress in picture */
									toggle();
									notify(res.username);
								}
							} catch (err) {
								console.log(err);
								notifyError();
							}
						}}
					>
						{({ values, errors }) => (
							<Form>
								<FormGroup>
									<Box mb={2}>
										<Field
											name="username"
											as={TextField}
											label="Username"
										/>
										<ErrorMessage
											name="username"
											render={(msg) => (
												<div style={{ color: 'red' }}>
													{msg}
												</div>
											)}
										/>
									</Box>

									<Box mb={2}>
										<Field
											name="password"
											type="password"
											as={TextField}
											label="Password"
										/>
										<ErrorMessage
											name="password"
											render={(msg) => (
												<div style={{ color: 'red' }}>
													{msg}
												</div>
											)}
										/>
									</Box>
								</FormGroup>
								<Button
									style={{ backgroundColor: '#81c784' }}
									variant="contained"
									type="submit"
									color="success"
								>
									Login
								</Button>
							</Form>
						)}
					</Formik>
				</CardContent>
			</Card>
		</div>
	);
}

export default LoginForm;
