import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function FilledButtonIcon({ onPress, text, iconName }) {
    return (
        <TouchableOpacity onPress={onPress} style={filledButtonIconStyles.filledButtonIcon}>
            <Icon color={appColors.primaryColor} name={iconName} size={16}/>
            <Text style={filledButtonIconStyles.filledButtonIconText}>{text}</Text>
        </TouchableOpacity>
    );
};

const filledButtonIconStyles = StyleSheet.create({
    filledButtonIcon: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: appColors.secondaryColor,
    },
    filledButtonIconText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: "500",
        color: appColors.primaryColor,
    }
});