import axios from 'axios';
import { GET_USER } from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:9000';

function getUser(username, id) {
	return {
		type     : GET_USER,
		username, id
	};
}

export function getUserFromAPI(data) {
	return async function(dispatch) {
		const response = await axios({
			method : 'post',
			url    : `${BASE_URL}/users/login`,
			data   : {
				username : `${data.username}`,
				password : `${data.password}`
			}
		});
		console.log(response)
		return dispatch(getUser(response.data.username, response.data.id));
	};
}

export function registerUser(data) {
	return async function(dispatch) {
		const response = await axios({
			method : 'post',
			url    : `${BASE_URL}/users`,
			data   : {
				username : data.username,
				password : data.password
			}
		});
		return dispatch(getUser(response.data.username, response.data.id));
	};
}

export async function postColoringsToAPI(name, image, userId) {
		const response = await axios({
			method : 'post',
			url    : `${BASE_URL}/colorings`,
			data   : {
				name : name,
				image : image, 
				user_id: userId
			}
		});
		return response.data
	
}

export async function getUserColoringsFromAPI(user_id){
	const response = await axios({
		method: 'get', 
		url : `${BASE_URL}/colorings/${user_id}`,

	})
	return response.data
}

export async function deleteColoringFromAPI(id){
	const response = await axios({
		method:"delete", 
		url: `${BASE_URL}/colorings/${id}`
	})
	return response
}

