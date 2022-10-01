import { StyleSheet, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function IconButton({ onPress, iconName }) {
    return (
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
            <Pressable onPress={onPress} style={iconButtonStyles.iconButton} android_ripple={{ color: 'rgba(13, 13, 11, .2)' }}>
                <Icon color={appColors.secondaryColor} name={iconName} size={24} />
            </Pressable>
        </View>
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