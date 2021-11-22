import { GET_USER, LOGOUT } from '../actions/types';

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case GET_USER:
			
			window.localStorage.setItem("user", action.username)
			window.localStorage.setItem("id", action.id)
			return { ...state, user: action.username, id: action.id };
		case LOGOUT:
			window.localStorage.removeItem("user")
			window.localStorage.removeItem("id")
			return { ...state, user: null, id:null };
		default:
			return state;
	}
}
