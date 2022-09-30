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
import { View, Text } from 'react-native';
import TextButton from './src/components/buttons/TextButton';
import OutlinedButton from './src/components/buttons/OutlinedButton';
import FilledButton from './src/components/buttons/FilledButton';
import IconButton from './src/components/buttons/IconButton';
import TextButtonIcon from './src/components/buttons/TextButtonIcon';
import OutlinedButtonIcon from './src/components/buttons/OutlinedButtonIcon';
import FilledButtonIcon from './src/components/buttons/FilledButtonIcon';

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
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <TextButton onPress={() => {}} text="Hello World"/>
      <OutlinedButton onPress={() => {}} text="Hello World"/>
      <FilledButton onPress={() => {}} text="Hello World"/>
      <IconButton onPress={() => {}} iconName="play"/>
      <TextButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
      <OutlinedButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
      <FilledButtonIcon onPress={() => {}} iconName="play" text="Hello World"/>
    </View>
  );
}