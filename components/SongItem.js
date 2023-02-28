import { Themes } from "../assets/Themes";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const SongItem = ({item}) => {
    //console.log(item.SongArtist[0].name);
    const navigation = useNavigation();

    return (
        <View style={styles.songContainer}>  
            <Pressable onPress={() => navigation.navigate('PreviewScreen', {previewUrl: item.previewUrl})}>
                <Ionicons style={styles.playButton} name="play-circle" size={30}></Ionicons>
            </Pressable>
            
            <Image style={styles.image} source={ {uri: item.imageUrl} } />
            <View style={styles.titleArtist}>
                <Text numberOfLines={1} style={styles.titleText}>{item.songTitle}</Text>
                {/* why doens't {item.songArtist[0].name} work} */ }
                <Text numberOfLines={1} style={styles.artistText}>{item.songArtists[0].name}</Text>
            </View>
            
            <Text numberOfLines={1} style={styles.albumText}>{item.albumName}</Text>
            <Text numberOfLines={1} style={styles.durationText}>{millisToMinutesAndSeconds(item.duration)}</Text>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    songContainer: {
        backgroundColor: Themes.colors.background,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10
    },
    playButton: {
        color: 'green',
        paddingRight: 10,
    },
    image: {
        aspectRatio: 1,
        width: '12%',
        padding: 8,
        resizeMode: 'contain'
    },
    titleArtist: {   
        width: '38%',
        paddingLeft: 10,
    },
    titleText: {
        width: '95%',
        color: 'white',
        paddingBottom: 10,
    },
    artistText: {
        width: '95%',
        color: Themes.colors.gray,
    },
    albumText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        paddingLeft: 5,
        paddingRight: 8,
    },
    durationText: {
        color: Themes.colors.gray,
        width: '10%',
    },
})

export default SongItem;