import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function TextButtonIcon({ onPress, text, iconName }) {
    return (
        <TouchableOpacity onPress={onPress} style={textButtonIconStyles.textButtonIcon}>
            <Icon name={iconName} size={16}/>
            <Text style={textButtonIconStyles.textButtonIconText}>{text}</Text>
        </TouchableOpacity>
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