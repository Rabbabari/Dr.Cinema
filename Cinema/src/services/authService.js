// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		accessToken: null,
		// Other authentication-related state...
	},
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		// Other authentication-related reducers...
	},
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;

// const authenticateUser = async () => {
// 	const response = await fetch("https://api.kvikmyndir.is/authenticate", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			username: "testuser",
// 			password: "testpass",
// 		}),
// 	});

// 	const data = await response.json();

// 	if (response.ok) {
// 		// Handle successful authentication here
// 		// Typically, you would store the token received in response
// 		console.log("Authentication successful:", data);
// 	} else {
// 		// Handle errors here
// 		console.log("Authentication failed:", data);
// 	}
// };

// export default authenticateUser;
