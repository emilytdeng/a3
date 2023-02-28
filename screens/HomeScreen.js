import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import Header from "../components/Header";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";


export default function HomeScreen() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    console.log("tracks", tracks);
  
    let contentDisplayed = null;
    let header = null;

    if (token) {
      contentDisplayed =  <SongList tracks={tracks}/>;
      header = <Header />
    } else {
      contentDisplayed = (
        <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
      );
    }
  
    return (
      <SafeAreaView style={styles.container}> 
          {header}
          {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    authButton: {
      backgroundColor: Themes.colors.spotify,
      padding: 12,
      borderRadius: 999999
    },
    authText: {
      color: 'white'
    },
    scrollView: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
      height: 10,
    }
  });
  