import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View,TextInput, Button, Pressable,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";


export default function LoginScreen() {

  const localImage = require("../../assets/Login.png");
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  return (
    
    <ImageBackground resizeMode = 'stretch'source={localImage} style={styles.container}>

      <SafeAreaView style={styles.safeAreaStyle}>

      <Text style={styles.welcomeStyle}>Hoş Geldiniz</Text>
      <Text style={styles.labelStyle}>Giriş yapmak için email  şifrenizi giriniz.</Text>

      <View style={styles.inputContainer}>
        <Icon name='md-mail-outline' color={'rgba(52, 52, 52, 1)'} size={25} style={styles.iconStyle}/> 
        <TextInput 
        style={styles.search}
        placeholder='E-Mail'
        placeholderTextColor={'rgba(13, 13, 11, 0.6)'}
        onChangeText={(val) => setEmail(val)}
        />
      </View>

      <View style={styles.inputContainer}>
      <Icon name='ios-key-outline' color={'rgba(13, 13, 11, 0.6)'} size={25} style={styles.iconStyle}/> 
        <TextInput 
        style={styles.search}
        placeholder='Şifre'
        placeholderTextColor={'rgba(13, 13, 11, 0.6)'}
        onChangeText={(val) => setPassword(val)}
        />
        <Icon name='eye-outline' color={'rgba(13, 13, 11, 0.6)'} size={25} style={styles.iconStyle}/> 
      </View>
      <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>

      <View style={styles.inputRow}>
      <Icon name='square-outline'color={'rgba(13, 13, 11, 0.6)'} size={20} /> 
        <Text style={styles.labelStyle}>  Beni Hatırla</Text>
      </View>

     
      
      <View style={styles.buttonView}>
              <Pressable
                onPress={() => {}}
                android_ripple={{color: 'rgba(242, 242, 242, 1)',}}
                style={styles.loginButton}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
              </Pressable>
            </View>
          
            <Text style={styles.labelStyleMarginT}>Hesabınız yok mu? Kaydolmak için tıklayınız</Text>

            <View style={styles.buttonViewCenter}>
              
              <Pressable
                onPress={() => {}}
                android_ripple={{color: 'white',}}
                style={styles.loginButton}>
                  <Icon name='person-outline'color={'white'} size={20} /> 
                <Text style={styles.buttonText2}>Misafir Olarak Giriş Yap</Text>
              </Pressable>
            </View>

            
          


            

      <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  inputRow:{
    marginTop:7,
    display: 'flex',
    flexDirection: 'row',
    
  },

  forgotPasswordText:{
    color:'#0D0D0B',
    fontSize:12,
    alignSelf:'flex-end',
    fontWeight:'bold'
  },

  safeAreaStyle:{
    marginTop:64,
    alignItems:'center',
    justifyContent:'center'
  },

  iconStyle:{
    marginHorizontal:8,
  },
  
  

  inputContainer: { 
    borderColor: '#0D0D0B',
    borderWidth: 1,
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width:328,
  },
  search: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex:1
  },

 input:{
  borderWidth:1,
  borderColor:'#0D0D0B',
  borderRadius:8,
  padding:8,
  margin:10,
  width:328,
  height:41,
  marginTop:32,
 },

  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeStyle: {
    color:'#0D0D0B',
    textAlignVertical: "center",
    textAlign:"center",
    fontWeight:'bold',
    fontSize:16,
    marginBottom:8
    },
  labelStyle:{
    color:'#0D0D0B',
    textAlignVertical: "center",
    textAlign:"center",
    fontSize:14
    },

    labelStyleMarginT:{
      color:'#0D0D0B',
      textAlignVertical: "center",
      textAlign:"center",
      fontSize:14,
      marginTop:32
      },

      
    buttonView: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      borderRadius: 8,
      marginTop:65,
      marginRight:16,
      height: 33,
      width:91,
      
    },
    buttonViewCenter: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 8,
      marginTop:65,
      height: 35,
      
    },
    loginButton: {
      flex:1,
      borderRadius:8,
      backgroundColor: '#0D0D0B',
      padding: 6,
      alignItems: 'center',
      justifyContent: 'center',
      display:'flex',
      flexDirection:'row',
    },
    
    buttonText: {
      color: 'rgba(242, 242, 242, 1)',
      fontSize: 14,
    },
    buttonText2: {
      color: 'rgba(242, 242, 242, 1)',
      fontSize: 14,
      marginRight:8,
      marginLeft:10
    },
});
