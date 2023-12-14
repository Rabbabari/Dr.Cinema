// reducers/authReducer.js
import { FETCH_TOKEN_SUCCESS, SET_ACCESS_TOKEN } from "./authActions";

const initialState = {
	accessToken: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOKEN_SUCCESS:
		case SET_ACCESS_TOKEN:
			return {
				...state,
				accessToken: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
