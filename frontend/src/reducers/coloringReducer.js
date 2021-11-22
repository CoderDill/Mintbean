import { ADD_COLORING_TO_STATE, LOGOUT } from '../actions/types';

export default function coloringReducer(state = {}, action) {
	switch (action.type) {
		
        case ADD_COLORING_TO_STATE:
            window.localStorage.setItem(action.name, action.coloring)
            return {...state, [action.name]:action.coloring}
		case LOGOUT: 
			return {}
		default:
			return state;
	}
}
