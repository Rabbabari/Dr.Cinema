import { configureStore } from "@reduxjs/toolkit";
import { cinemaApi } from "../../services/cinemaApi";
import authReducer from "./auth/authReducer";

export default configureStore({
	reducer: {
		auth: authReducer,
		[cinemaApi.reducerPath]: cinemaApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(cinemaApi.middleware),
});
