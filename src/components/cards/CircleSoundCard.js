import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from '../../constants';

export default function CircleSoundCard({ source, duration }) {
    return (
        <ImageBackground
            style={circleSoundCardStyles.circleSoundCard}
            imageStyle={{borderRadius: 40, borderWidth: 2, borderColor: appColors.secondaryColor}}
            source={source}>
            <View style={circleSoundCardStyles.circleSoundCardInsider}>
                <Icon color={appColors.primaryColor} name="play" size={24}/>
                <Text style={circleSoundCardStyles.circleSoundCardDuration}>{duration}</Text>
            </View>
        </ImageBackground>
    );
}

const circleSoundCardStyles = StyleSheet.create({
    circleSoundCard: {
        width: 80,
        height: 80,
        marginBottom: 10
    },
    circleSoundCardInsider: {
        flex: 1,
        borderRadius: 40,
        backgroundColor: "rgba(13, 13, 11, 0.6)",
        alignItems: "center",
        justifyContent: "center",
    },
    circleSoundCardDuration: {
        color: appColors.secondaryColor,
        position: "absolute",
        bottom: -8,
        alignSelf: "center",
        backgroundColor: appColors.greyColor,
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        borderColor: appColors.primaryColor,
        borderWidth: 1,
    }
})