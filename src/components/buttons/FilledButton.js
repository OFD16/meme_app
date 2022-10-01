import { StyleSheet, Text, Pressable, View } from "react-native";
import { appColors } from "../../constants";

export default function FilledButton({ onPress, text }) {
    return (
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
            <Pressable onPress={onPress} style={filledButtonStyles.filledButton} android_ripple={{ color: 'rgba(242, 242, 242, .6)' }}>
                <Text style={filledButtonStyles.filledButtonText}>{text}</Text>
            </Pressable>
        </View>
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