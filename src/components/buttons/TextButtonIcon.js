import { StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function TextButtonIcon({ onPress, text, iconName }) {
    return (
        <Pressable onPress={onPress} style={textButtonIconStyles.textButtonIcon} android_ripple={{color: 'rgba(13, 13, 11, .2)'}}>
            <Icon name={iconName} size={16}/>
            <Text style={textButtonIconStyles.textButtonIconText}>{text}</Text>
        </Pressable>
    );
};

const textButtonIconStyles = StyleSheet.create({
    textButtonIcon: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        // backgroundColor: "red",
    },
    textButtonIconText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: "500",
        color: appColors.secondaryColor,
    }
});