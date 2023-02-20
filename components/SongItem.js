import { Themes } from "../assets/Themes";
import { StyleSheet, Text, Image, View } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { SongArtist } from "./SongArtist"

const SongItem = ({item, index}) => {
    //console.log(item.SongArtist[0].name);

    return (
        <View style={styles.songContainer}>  
            <Text style={styles.indexText}>{index}</Text>
            <Image style={styles.image} source={ {uri: item.imageUrl} } />
            <View style={styles.titleArtist}>
                <Text numberOfLines={1} style={styles.titleText}>{item.songTitle}</Text>
                {/* why doens't {item.songArtist[0].name} work} */ }
                <Text numberOfLines={1} style={styles.artistText}>{item.songArtist}</Text>
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
    indexText: {
        color: 'white',
        paddingRight: 10,
        with: '5%',
    },
    image: {
        aspectRatio: 1,
        width: '15%',
        padding: 8,
        resizeMode: 'contain'
    },
    titleArtist: {   
        width: '40%',
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