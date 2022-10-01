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
import { View, Text, ScrollView } from 'react-native';
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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Deneme} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function Deneme() {
  const [passVisibility, setPassVisibility] = useState(true);
  function changeVisibility() {
    setPassVisibility(!passVisibility);
  };

  const [passVisibility2, setPassVisibility2] = useState(true);
  function changeVisibility2() {
    setPassVisibility2(!passVisibility2);
  };

  return (
    <ScrollView contentContainerStyle={{
      padding: 16,
      alignItems: "center",
    }}>
      <TextButton onPress={() => {}} text="Hello World"/>
      <OutlinedButton onPress={() => {}} text="Hello World"/>
      <FilledButton onPress={() => {}} text="Hello World"/>
      <IconButton onPress={() => {}} iconName="play"/>
      <TextButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
      <OutlinedButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
      <FilledButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>

      <CustomTextInput placeholder="Email" isLeading={true} leadingIconName="mail-outline" keyboardType="email-address"/>
      <CustomTextInput placeholder="Telefon numarası" isLeading={true} leadingIconName="call-outline" keyboardType="phone-pad"/>
      <CustomTextInput placeholder="Sadece sayılar" isLeading={true} leadingIconName="podium-outline" keyboardType="numeric"/>
      <CustomTextInput placeholder="Şifre" isTrailing={true} isPassword={true} isVisible={passVisibility} onPress={changeVisibility}/>
      <CustomTextInput placeholder="Şifre" isLeading={true} leadingIconName="lock-closed-outline" isTrailing={true} isPassword={true} isVisible={passVisibility2} onPress={changeVisibility2}/>
      <CustomTextInput placeholder="Meme ara..." isTrailing={true} trailingIconName="search-outline" keyboardType="web-search"/>

      <CircleSoundCard source={require("./assets/sound-background.jpg")} duration="2:40"/>
      <SquareSoundCard source={require("./assets/sound-background.jpg")} duration="2:40" title="Togg Otomobilimiz Yerli ve Milli"/>
    </ScrollView>
  );
}