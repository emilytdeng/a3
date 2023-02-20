import { StyleSheet, SafeAreaView, Text, Pressable, ScrollView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongLIst";
import Header from "./components/Header";

export default function App() {
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
