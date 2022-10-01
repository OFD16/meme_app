import { StyleSheet, Text, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from "../../constants";

export default function FilledButtonIcon({ onPress, text, iconName }) {
    return (
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
            <Pressable onPress={onPress} style={filledButtonIconStyles.filledButtonIcon} android_ripple={{ color: 'rgba(242, 242, 242, .6)' }}>
                <Icon color={appColors.primaryColor} name={iconName} size={16} />
                <Text style={filledButtonIconStyles.filledButtonIconText}>{text}</Text>
            </Pressable>
        </View>
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