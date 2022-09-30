import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
    const contents = [
        <SoundContent />,
        <SavedContent />,
        <LikedContent />,
    ]
    const [contentIndex, setContentIndex] = useState(0)
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <ProfileCard />
                <View style={styles.menus}>
                    <TouchableOpacity onPress={() => setContentIndex(0)} style={contentIndex == 0 ? styles.activeMenu : styles.menu}>
                        <Text style={styles.menuText}>Seslerim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setContentIndex(1)} style={contentIndex == 1 ? styles.activeMenu : styles.menu}>
                        <Text style={styles.menuText}>Kaydedilenler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setContentIndex(2)} style={contentIndex == 2 ? styles.activeMenu : styles.menu}>
                        <Text style={styles.menuText}>Beğenilenler</Text>
                    </TouchableOpacity>
                </View>
                {contents[contentIndex]}
            </ScrollView>
            <TouchableOpacity onPress={() => { }} style={styles.floatingButton}>
                <Icon style={styles.soundCardPlayIcon} name="add" size={24} />
            </TouchableOpacity>
        </View>
    );
}

function Header() {
    return (
        <View style={styles.header}>
            <Icon name="arrow-back-outline" size={24} />
            <Text style={styles.title}>MEMEapp</Text>
        </View>
    );
}

function ProfileCard() {
    return (
        <View style={styles.profileCard}>
            <View style={styles.profileContext}>
                <View style={styles.avatar} />
                <View style={styles.fullname}>
                    <Text style={styles.firstname}>Abdulkadir</Text>
                    <Text style={styles.lastname}>Eyigül</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }} style={styles.profileButton}>
                <Text style={styles.profileButtonText}>Düzenle</Text>
            </TouchableOpacity>
        </View>
    );
}

function SearchInput() {
    return (
        <View style={styles.searchInputContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={() => { }}
                value={2}
                placeholder="Meme ara..."
            />
            <Icon style={styles.searchInputIcon} name="search-outline" size={24} />
        </View>
    );
}

function SoundCard() {
    return (
        <ImageBackground
            style={styles.soundCard}
            source={require('../../assets/sound-background.jpg')}
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

function SoundContent() {
    return (
        <View>
            <SearchInput />
            <View style={styles.main}>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                        return <SoundCard key={item} />;
                    })
                }
            </View>
        </View>
    );
}

function SavedContent() {
    return (
        <View>
            <SearchInput />
            <View style={styles.main}>
                {
                    [0, 1, 2, 3, 4].map(item => {
                        return <SoundCard key={item} />;
                    })
                }
            </View>
        </View>
    );
}

function LikedContent() {
    return (
        <View>
            <SearchInput />
            <View style={styles.main}>
                {
                    [0, 1, 2].map(item => {
                        return <SoundCard key={item} />;
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    title: {
        marginLeft: 16,
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 8
    },
    profileContext: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        backgroundColor: '#E8E8E8',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    fullname: {
        justifyContent: 'center'
    },
    firstname: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lastname: {
        fontSize: 16
    },
    profileButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8
    },
    profileButtonText: {
        fontSize: 14,
        fontWeight: '500'
    },
    menus: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8
    },
    menu: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#E8E8E8',
        borderRadius: 8,
    },
    activeMenu: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#E8E8E8',
        borderRadius: 8,
        borderTopWidth: 2,
        borderTopColor: 'rgba(13, 13, 11, 0.6)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(13, 13, 11, 0.6)',
    },
    menuText: {
        fontSize: 12,
        fontWeight: '500',
    },
    // Search Input //
    searchInputContainer: {
        borderColor: '#0D0D0B',
        borderWidth: 1,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchInput: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 270
    },
    // Main //
    main: {
        width: '100%',
        paddingHorizontal: 12,
        paddingBottom: 32,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
    },
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
    floatingButton: {
        width: 60,
        height: 60,
        backgroundColor: 'black',
        position: 'absolute',
        right: 32,
        bottom: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#0D0D0B",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    }
})
