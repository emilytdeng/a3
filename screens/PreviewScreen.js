
import { WebView } from 'react-native-webview';

const PreviewScreen = ( {route} ) => {
    return (
        <WebView source={{uri: route.params.previewUrl}} />
    )
};

export default PreviewScreen;
