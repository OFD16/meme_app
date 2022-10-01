import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from '../../constants';

export default function SquareSoundCard({ source, title, duration}) {
    return (
        <ImageBackground
            style={squareSoundCardStyles.squareSoundCard}
            imageStyle={{ borderRadius: 8 }}
            source={source}>
            <View style={squareSoundCardStyles.squareSoundCardInsider}>
                <Text style={squareSoundCardStyles.squareSoundCardTitle} numberOfLines={1}>{title}</Text>
                <Icon style={squareSoundCardStyles.squareSoundCardPlayIcon} name="play" size={24} />
                <View style={squareSoundCardStyles.squareSoundCardPlayLineContainer}>
                    <View style={squareSoundCardStyles.squareSoundCardPlayLine}>
                        <View style={squareSoundCardStyles.squareSoundCardPlayLineCircle} />
                    </View>
                    <Text style={squareSoundCardStyles.squareSoundCardDuration}>{duration}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const squareSoundCardStyles = StyleSheet.create({
    squareSoundCard: {
        width: 104,
        height: 104,
    },
    squareSoundCardInsider: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: "rgba(13, 13, 11, 0.6)",
        padding: 8,
        paddingBottom: 4,
        // alignItems: "center",
        justifyContent: "space-between",
    },
    squareSoundCardTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: appColors.primaryColor,
    },
    squareSoundCardPlayIcon: {
        alignSelf: 'center',
        color: appColors.primaryColor,
    },
    squareSoundCardPlayLineContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
    },
    squareSoundCardPlayLine: {
        flex: 1,
        height: 2,
        marginRight: 8,
        backgroundColor: appColors.primaryColor,
        justifyContent: 'center',
    },
    squareSoundCardPlayLineCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: appColors.primaryColor,
    },
    squareSoundCardDuration: {
        fontSize: 12,
        fontWeight: '500',
        color: appColors.primaryColor,
    },
})