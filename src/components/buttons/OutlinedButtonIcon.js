import { StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function OutlinedButtonIcon({ onPress, text, iconName }) {
    return (
        <Pressable onPress={onPress} style={outlinedButtonIconStyles.outlinedButtonIcon} android_ripple={{color: 'rgba(13, 13, 11, .2)'}}>
            <Icon color={appColors.secondaryColor} name={iconName} size={16}/>
            <Text style={outlinedButtonIconStyles.outlinedButtonIconText}>{text}</Text>
        </Pressable>
    );
};

const outlinedButtonIconStyles = StyleSheet.create({
    outlinedButtonIcon: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: appColors.secondaryColor,
        borderWidth: 1,
        // backgroundColor: "red",
    },
    outlinedButtonIconText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: "500",
        color: appColors.secondaryColor,
    }
});