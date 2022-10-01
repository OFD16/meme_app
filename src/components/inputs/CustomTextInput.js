import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { appColors } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomTextInput({ placeholder, isLeading, isTrailing, leadingIconName, trailingIconName, keyboardType, isPassword, onPress, isVisible}) {
    return (
        <View style={customTextInputStyles.customTextInputContainer}>
            {isLeading ? <Icon name={leadingIconName} size={24} style={customTextInputStyles.customTextInputLeadingIcon}/> : undefined}
            <TextInput
                keyboardType={keyboardType}
                secureTextEntry={isVisible}
                placeholderTextColor="rgba(13, 13, 11, .6)"
                cursorColor={appColors.secondaryColor}
                style={customTextInputStyles.customTextInput}
                placeholder={placeholder}/>
            {isTrailing ? (
                isPassword ? <Pressable onPress={onPress} android_ripple={{borderless: true, color: 'rgba(13, 13, 11, .2)' }} style={{marginRight: 16}}>
                    {isVisible ? <Icon name="eye-off-outline" size={24}/> : <Icon name="eye-outline" size={24}/>}
                </Pressable> : <Icon name={trailingIconName} size={24} style={customTextInputStyles.customTextInputTrailingIcon}/>
            ) : undefined}
        </View>
    );
};

const customTextInputStyles = StyleSheet.create({
    customTextInputContainer: {
        // backgroundColor: "red", 
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: appColors.secondaryColor,
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        width: "100%",
        // marginBottom: 16, // denemeden sonra silmeyi unutma
    },
    customTextInput: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontSize: 14,
        // width: "100%",
        flex: 1,
        // backgroundColor: "green",
    },
    customTextInputLeadingIcon: {
        marginLeft: 16,
        // backgroundColor: "blue",
    },
    customTextInputTrailingIcon: {
        marginRight: 16,
        // backgroundColor: "pink",
    }
});