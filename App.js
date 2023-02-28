import { StyleSheet, SafeAreaView, Text, Pressable, ScrollView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import Header from "./components/Header";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="DetailsScreen" 
        component={DetailsScreen}
        options={{title: 'Song Details', headerTitleStyle: {color: 'white'}, headerStyle: {backgroundColor: 'black'}}}/>
      <Stack.Screen 
        name="PreviewScreen" 
        component={PreviewScreen}
        options={{title: 'Song Preview', headerTitleStyle: {color: 'white'}, headerStyle: {backgroundColor: 'black'}}}/>
    </Stack.Navigator>

  </NavigationContainer>
}

