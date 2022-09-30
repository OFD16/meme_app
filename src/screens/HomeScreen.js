import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import CircleSoundCard from '../components/CircleSoundCard'

function SoundCard() {
    return (
        <ImageBackground
            style={styles.soundCard}
            source={require('../../assets/images/photo.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 8 }}
        >
            <View style={styles.soundCardInsider}>
                <Text style={styles.soundCardTitle} numberOfLines={1}>Togg Otomobilimiz Yerli ve Milli</Text>
                <Icon style={styles.soundCardPlayIcon} name="play" size={24} />
                <View style={styles.soundCardPlayLineContainer}>
                    <View style={styles.soundCardPlayLine}>
                        <View style={styles.soundCardPlayLineCircle} />
                    </View>
                    <Text style={styles.soundCardDuration}>2:40</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: '#F2F2F2' }}>
            <ScrollView style={{ padding: 16 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        color: "#0D0D0B",
                        fontSize: 20,
                        //fontfamily eklenecek
                    }}>MEMEapp</Text>
                    <Image style={{
                        width: 32,
                        height: 32,
                        borderRadius: 400 / 2,
                        overflow: 'hidden',
                    }} source={require('../../assets/images/profileImg.png')} />
                </View>
                <Text style={{
                    color: "#0D0D0B",
                    fontSize: 14,
                    marginTop: 24,
                    //fontfamily eklenecek
                }} >Hoş Geldin, Ömer Faruk</Text>

                <View style={{
                    borderColor: '#0D0D0B',
                    borderWidth: 1,
                    marginTop: 24,
                    borderRadius: 8,
                    alignItems: 'center',
                    paddingRight: 16,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            width: 270,
                        }}
                        onChangeText={() => { }}
                        value={2}
                        placeholder="Meme ara..."
                    />
                    <Icon style={styles.searchIcon} name="search-outline" size={24} />
                </View>

                <Text style={{
                    color: "#0D0D0B",
                    fontSize: 14,
                    marginTop: 20,
                }}>Son Eklenenler</Text>
                <FlatList
                    nestedScrollEnabled
                    style={{ flexGrow: 0 }}
                    horizontal={true}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    renderItem={({ item }) => <CircleSoundCard />}
                    keyExtractor={item => item}
                />

                <Text style={{
                    color: "#0D0D0B",
                    fontSize: 14,
                    marginTop: 20,
                }}>Popüler Sesler</Text>
                <FlatList
                    nestedScrollEnabled
                    style={{ flexGrow: 0 }}
                    horizontal={true}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    renderItem={({ item }) => <CircleSoundCard />}
                    keyExtractor={item => item}
                />
                <Text style={{
                    color: "#0D0D0B",
                    fontSize: 14,
                    marginTop: 20,
                }}>Sizin için seçtiklerimiz</Text>
                <FlatList
                    nestedScrollEnabled
                    numColumns={3}
                    style={{
                        // flexGrow: 0,
                        marginTop: 16,
                    }}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={({ item }) => <SoundCard />}
                    keyExtractor={item => item}
                />
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Sound Card //
    soundCard: {
        width: 104,
        height: 104,
        margin: 4,
    },
    soundCardInsider: {
        width: 104,
        height: 104,
        padding: 8,
        paddingBottom: 4,
        borderRadius: 8,
        backgroundColor: 'rgba(13, 13, 11, 0.6)',
        justifyContent: 'space-between',
    },
    soundCardTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
    },
    soundCardPlayIcon: {
        alignSelf: 'center',
        color: 'white'
    },
    soundCardPlayLineContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    soundCardPlayLine: {
        width: 55,
        height: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    soundCardPlayLineCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    soundCardDuration: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white'
    },
});