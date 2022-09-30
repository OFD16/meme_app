import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function EditProfileScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ flex: 1, padding: 16 }}>
                <View style={styles.partTop}>
                    <ImageBackground
                        style={styles.partTopAvatar}
                        source={require('../../assets/sound-background.jpg')}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 54 }}
                    >
                        <View style={styles.partTopAvatarInsider}>
                            <Icon style={{color: 'white'}} name="create-outline" size={24} />
                        </View>
                    </ImageBackground>
                    <View style={styles.partTopInputs}>
                        <View style={styles.searchInputContainer}>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={() => { }}
                                value={2}
                                placeholder="İsim"
                                defaultValue='Abdulkadir'
                            />
                        </View>
                        <Space size={24}/>
                        <View style={styles.searchInputContainer}>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={() => { }}
                                value={2}
                                placeholder="Soyisim"
                                defaultValue='Eyigül'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.partBottom}>
                    <Space size={24}/>
                    <View style={styles.searchInputContainer}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={() => { }}
                            value={2}
                            placeholder="Email"
                            defaultValue='abdulkadir@domain.com'
                        />
                    </View>
                    <Space size={24}/>
                    <View style={styles.searchInputContainer}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={() => { }}
                            value={2}
                            placeholder="Şifre"
                            defaultValue='deneme4348mnk2^^'
                            secureTextEntry={true}
                        />
                        <Icon style={styles.searchInputIcon} name="eye-off-outline" size={24} />
                    </View>
                </View>
                <Space size={32}/>
                <TouchableOpacity onPress={() => { }} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </ScrollView>
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

function Space({size}) {
    return (
        <View style={{height: size}}/>
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
    partTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    partTopInputs: {
        flex: 1,
        justifyContent: 'center'
    },
    partBottom: {
        
    },
    partTopAvatar: {
        width: 108,
        height: 108,
        borderRadius: 54,
        marginRight: 16,
    },
    partTopAvatarInsider: {
        width: 108,
        height: 108,
        borderRadius: 54,
        backgroundColor: 'rgba(13, 13, 11, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Search Input //
    searchInputContainer: {
        borderColor: '#0D0D0B',
        borderWidth: 1,
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
    },
    saveButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'black',
        borderRadius: 8,
        alignSelf: 'flex-end',
    },
    saveButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
})
