import {Text} from "react-native"

const SongArtist = ( { songArtist } ) => {
    return (
        <Text>{SongArtists.map(
            ({name}) => `${name}`
        ).join(", ")}
        </Text>
    );
};

export default SongArtist;