import { Text, View, ImageBackground, StyleSheet, Pressable, ActivityIndicator, Button } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { appColors } from '../../constants';

import * as React from 'react';
import { Audio } from 'expo-av';

export default function CircleSoundCard({ source, duration }) {
    const SampleTrack = require('../..//../assets/sütbalyumurta.mp3');

    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const [Playing, SetPlaying] = React.useState(false);
    const sound = React.useRef(new Audio.Sound());

    React.useEffect(() => {
        LoadAudio();
    }, []);

    const PlayAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    sound.current.playAsync();
                    console.log('started');
                    SetPlaying(true);
                }
                console.log(result.isPlaying);
            }
        } catch (error) { }
    };

    const PauseAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.pauseAsync();
                    console.log('paused');
                    SetPlaying(false);
                }
                console.log(result.isPlaying);
            }
        } catch (error) { }
    };
    const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
            try {
                const result = await sound.current.loadAsync(SampleTrack, {}, true);
                if (result.isLoaded === false) {
                    SetLoading(false);
                    console.log('Error in Loading Audio');
                } else {
                    SetLoading(false);
                    SetLoaded(true);
                }
            } catch (error) {
                console.log(error);
                SetLoading(false);
            }
        } else {
            SetLoading(false);
        }
    };

    return (
            <View>
                {Loading ? (
                    <ActivityIndicator size={'small'} color={'red'} />
                ) : (
                    <>
                        {Loaded === false ? (
                            <>
                                <ActivityIndicator />
                                <Text>Loading Song</Text>
                            </>
                        ) : (
                            <>
                                <Pressable onPress={Playing ? PauseAudio : PlayAudio}>
                                    <ImageBackground
                                        style={circleSoundCardStyles.circleSoundCard}
                                        imageStyle={{ borderRadius: 40, borderWidth: 2, borderColor: appColors.secondaryColor }}
                                        source={source}>
                                        <View style={circleSoundCardStyles.circleSoundCardInsider}>
                                            <Icon color={Playing ? "#54bfff" : appColors.primaryColor} name= {Playing ? "pause" : "play"} size={24} />
                                            <Text style={Playing ? circleSoundCardStyles.circleSoundCardDurationActive : circleSoundCardStyles.circleSoundCardDuration}>{duration}</Text>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                            </>
                        )}
                    </>
                )}
            </View>
    );
}



const circleSoundCardStyles = StyleSheet.create({
    circleSoundCard: {
        width: 80,
        height: 80,
        marginBottom: 10
    },
    circleSoundCardInsider: {
        flex: 1,
        borderRadius: 40,
        backgroundColor: "rgba(13, 13, 11, 0.6)",
        alignItems: "center",
        justifyContent: "center",
    },
    circleSoundCardDuration: {
        color: appColors.secondaryColor,
        position: "absolute",
        bottom: -8,
        alignSelf: "center",
        backgroundColor: appColors.greyColor,
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        borderColor: appColors.primaryColor,
        borderWidth: 1,
    },
    circleSoundCardDurationActive: {
        color: appColors.primaryColor,
        position: "absolute",
        bottom: -8,
        alignSelf: "center",
        backgroundColor: "#54bfff",
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        borderColor: appColors.primaryColor,
        borderWidth: 1,
    }
})