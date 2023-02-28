import { FlatList, InteractionManager, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native";
import SongItem from "./SongItem";
import { useNavigation } from "@react-navigation/native";

const SongList = ({tracks}) => {
    const navigation = useNavigation();

    return (
        //<ScrollView>
            <FlatList
                data={tracks}
                renderItem={({ item, index }) => (
                    <Pressable onPress={()=> navigation.navigate('DetailsScreen', {externalUrl: item.externalUrl})}>
                        <SongItem 
                            item={item}
                            index={index}
                        />
                    </Pressable>
                )}
            />
        //</ScrollView>
       
    )
}

export default SongList;