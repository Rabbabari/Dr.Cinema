import { WebView } from "react-native-webview";
import styles from "./styles";

const Trailer = ({ trailer }) => {
	return <WebView source={{ uri: trailer }} style={styles.video} />;
};

export default Trailer;
