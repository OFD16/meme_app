import { StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function IconButton({ onPress, iconName }) {
    return (
        <Pressable onPress={onPress} style={iconButtonStyles.iconButton} android_ripple={{color: 'rgba(13, 13, 11, .2)'}}>
            <Icon color={appColors.secondaryColor} name={iconName} size={24}/>
        </Pressable>
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