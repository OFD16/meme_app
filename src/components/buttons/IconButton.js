import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function IconButton({ onPress, iconName }) {
    return (
        <TouchableOpacity onPress={onPress} style={iconButtonStyles.iconButton}>
            <Icon color={appColors.secondaryColor} name={iconName} size={24}/>
        </TouchableOpacity>
    );
};

const iconButtonStyles = StyleSheet.create({
    iconButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    }
});