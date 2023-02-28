import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';


const DetailsScreen = ( {route} ) => {
   return (
        <WebView source={ {uri: route.params.externalUrl} } />
   )
};

export default DetailsScreen;

const styles = StyleSheet.create({})