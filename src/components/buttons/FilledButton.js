import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { appColors } from "../../constants";

export default function FilledButton({ onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={filledButtonStyles.filledButton}>
            <Text style={filledButtonStyles.filledButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const filledButtonStyles = StyleSheet.create({
    filledButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: appColors.secondaryColor,
    },
    filledButtonText: {
        fontSize: 14,
        fontWeight: "500",
        color: appColors.primaryColor,
    }
});