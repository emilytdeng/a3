import {View, Image, StyleSheet, Text } from 'react-native'
import { Themes } from "../assets/Themes"

const Header = () => {
    return (
      <View style={styles.Header}>
        <Image source={require("../assets/spotify-logo.png")} style={styles.logo}>
        </Image>
        <Text style={styles.connectText}>My Top Tracks</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },
    connectText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 8,
    },
})

export default Header;