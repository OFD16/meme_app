import {Text, View, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function CircLeSoundCard(){
    return (
    <View style={{alignSelf: "baseline"}}>
        <ImageBackground style={{
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', 
            width: 80,
            height: 80,
            borderRadius: 400/ 2,
            borderWidth: 2,
            borderColor: '#0D0D0B',
            marginTop: 16,
            marginRight: 8,
        }}  source={require('../../assets/images/photo.png')}>
        <View style={{
            backgroundColor: 'rgba(13, 13, 1, 0.6)',
            height: "100%",
            width: "100%",
            justifyContent: 'center',
        }}> 
        <Icon style={{
            color: "#E8E8E8",
            alignSelf: "center",
        }} name="play" size={24}/>
        </View>
        </ImageBackground>
        <View style={
            {
            padding: 4,
            marginTop: -10,
            backgroundColor: "#E8E8E8",
            borderColor: "#F2F2F2",
            borderWidth: 2,
            borderRadius: 4,
            alignSelf: "center",
            }
        }>
        <Text style={{
                fontSize: 10,
                alignSelf: "center",
        }}>2:40</Text>
        </View>
        </View>
    )
}