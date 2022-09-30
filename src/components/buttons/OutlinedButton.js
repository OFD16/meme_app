import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { appColors } from "../../constants";

export default function OutlinedButton({ onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={outlinedButtonStyles.outlinedButton}>
            <Text style={outlinedButtonStyles.outlinedButtonText}>{text}</Text>
        </TouchableOpacity>
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