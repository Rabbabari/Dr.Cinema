// actions/authActions.js
import axios from "axios";
import { encode } from "base-64";

import Constants from "expo-constants";

const username = Constants.expoConfig.extra.REACT_APP_USERNAME;
const password = Constants.expoConfig.extra.REACT_APP_PASSWORD;
// const username = process.env.REACT_APP_USERNAME;
// const password = process.env.REACT_APP_PASSWORD;
if (!username || !password) {
	throw new Error("Username or password not provided in enviorment variable");
}

const credentials = `${username}:${password}`;
const base64Credentials = encode(credentials);

const API_URL = "https://api.kvikmyndir.is";

export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const fetchToken = () => async (dispatch) => {
	try {
		const response = await axios.post(
			`${API_URL}/authenticate`,
			{},
			{
				headers: {
					Authorization: `Basic ${base64Credentials}`,
				},
			}
		);

		dispatch({
			type: FETCH_TOKEN_SUCCESS,
			payload: response.data.token,
		});
	} catch (error) {
		console.error("Error fetching token:", error.message);
	}
};

export const setAccessToken = (token) => ({
	type: SET_ACCESS_TOKEN,
	payload: token,
});

export const getAccessToken = (state) => state.auth.accessToken;
