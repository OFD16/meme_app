import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { appColors } from "../../constants";

export default function TextButton({ onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={textButtonStyles.textButton}>
            <Text style={textButtonStyles.textButtonText}>{text}</Text>
        </TouchableOpacity>
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