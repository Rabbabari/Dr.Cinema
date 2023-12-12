import React from "react";
import AppContainer from "./src/routes";
import { Provider } from "react-redux";
import store from "./src/redux/features/store";

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}
