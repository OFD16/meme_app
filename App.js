import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Omar
import HomeScreen from './src/screens/HomeScreen';

//Furkan
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

//Abdulkadir
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
//import { View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import TextButton from './src/components/buttons/TextButton';
import OutlinedButton from './src/components/buttons/OutlinedButton';
import FilledButton from './src/components/buttons/FilledButton';
import IconButton from './src/components/buttons/IconButton';
import TextButtonIcon from './src/components/buttons/TextButtonIcon';
import OutlinedButtonIcon from './src/components/buttons/OutlinedButtonIcon';
import FilledButtonIcon from './src/components/buttons/FilledButtonIcon';
import CustomTextInput from './src/components/inputs/CustomTextInput';
import { useState } from 'react';
import CircleSoundCard from './src/components/cards/CircleSoundCard';
import SquareSoundCard from './src/components/cards/SquareSoundCard';

import * as React from 'react';
import { Audio } from 'expo-av';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import Constants from 'expo-constants';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function Test() {

  const SampleTrack = require('./assets/sütbalyumurta.mp3');

  
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
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
          }
        }
      } catch (error) {}
    };
  
    const PauseAudio = async () => {
      try {
        const result = await sound.current.getStatusAsync();
        if (result.isLoaded) {
          if (result.isPlaying === true) {
            sound.current.pauseAsync();
            console.log('paused');
          }
        }
      } catch (error) {}
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

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      AudioPLayer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
      },
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.AudioPLayer}>
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
                  <Button title="Play Song" onPress={PlayAudio} />
                  <Button title="Pause Song" onPress={PauseAudio} />
                </>
              )}
            </>
          )}
        </View>
      </View>
    );
  















  // const [sound, setSound] = React.useState();

  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync( require('./assets/sütbalyumurta.mp3')
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }

  // async function pauseSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync( require('./assets/sütbalyumurta.mp3')
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.pauseAsync();
  // }

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // return (
  //   <View >
  //     <Button title="Play Sound" onPress={playSound} />
  //     <View style={{marginTop: 10}}></View>
  //     <Button title="pause Sound" onPress={pauseSound} />
  //   </View>
  // );







  // const [passVisibility, setPassVisibility] = useState(true);
  // function changeVisibility() {
  //   setPassVisibility(!passVisibility);
  // };

  // const [passVisibility2, setPassVisibility2] = useState(true);
  // function changeVisibility2() {
  //   setPassVisibility2(!passVisibility2);
  // };

  // return (
  //   <ScrollView contentContainerStyle={{
  //     padding: 16,
  //     alignItems: "center",
  //   }}>
  //     <TextButton onPress={() => {}} text="Hello World"/>
  //     <OutlinedButton onPress={() => {}} text="Hello World"/>
  //     <FilledButton onPress={() => {}} text="Hello World"/>
  //     <IconButton onPress={() => {}} iconName="play"/>
  //     <TextButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
  //     <OutlinedButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
  //     <FilledButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>

  //     <CustomTextInput placeholder="Email" isLeading={true} leadingIconName="mail-outline" keyboardType="email-address"/>
  //     <CustomTextInput placeholder="Telefon numarası" isLeading={true} leadingIconName="call-outline" keyboardType="phone-pad"/>
  //     <CustomTextInput placeholder="Sadece sayılar" isLeading={true} leadingIconName="podium-outline" keyboardType="numeric"/>
  //     <CustomTextInput placeholder="Şifre" isTrailing={true} isPassword={true} isVisible={passVisibility} onPress={changeVisibility}/>
  //     <CustomTextInput placeholder="Şifre" isLeading={true} leadingIconName="lock-closed-outline" isTrailing={true} isPassword={true} isVisible={passVisibility2} onPress={changeVisibility2}/>
  //     <CustomTextInput placeholder="Meme ara..." isTrailing={true} trailingIconName="search-outline" keyboardType="web-search"/>

  //     <CircleSoundCard source={require("./assets/sound-background.jpg")} duration="2:40"/>
  //     <SquareSoundCard source={require("./assets/sound-background.jpg")} duration="2:40" title="Togg Otomobilimiz Yerli ve Milli"/>
  //   </ScrollView>
  // );
}