import { FlatList, InteractionManager, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import SongItem from "./SongItem";

const SongList = ({tracks}) => {
    return (
        //<View>
        //<ScrollView style={styles.scrollView}>
        <FlatList
            data={tracks}
            renderItem={({ item, index }) => (
                <SongItem 
                item={item}
                index={index}
                />
        )}
        />
       // </ScrollView>
        //</View>
       
    )
}



export default SongList;