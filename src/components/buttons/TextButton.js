import { StyleSheet, Text, Pressable } from "react-native";
import { appColors } from "../../constants";

export default function TextButton({ onPress, text }) {
    return (
        <Pressable onPress={onPress} style={textButtonStyles.textButton} android_ripple={{color: 'rgba(13, 13, 11, .2)'}}>
            <Text style={textButtonStyles.textButtonText}>{text}</Text>
        </Pressable>
    );
};

const textButtonStyles = StyleSheet.create({
    textButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    textButtonText: {
        fontSize: 14,
        fontWeight: "500",
        color: appColors.secondaryColor,
    }
});