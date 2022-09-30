import { StyleSheet, Text, Pressable } from "react-native";
import { appColors } from "../../constants";

export default function OutlinedButton({ onPress, text }) {
    return (
        <Pressable onPress={onPress} style={outlinedButtonStyles.outlinedButton} android_ripple={{color: 'rgba(13, 13, 11, .2)'}}>
            <Text style={outlinedButtonStyles.outlinedButtonText}>{text}</Text>
        </Pressable>
    );
};

const outlinedButtonStyles = StyleSheet.create({
    outlinedButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: appColors.secondaryColor,
        borderWidth: 1,
    },
    outlinedButtonText: {
        fontSize: 14,
        fontWeight: "500",
        color: appColors.secondaryColor,
    }
});