import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, ImageBackground, Button } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function UploadSoundScreen() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, padding: 16 }}>
                <View style={styles.partTop}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{
                            backgroundColor: "#E8E8E8",
                            borderRadius: 8,
                            borderStyle: "dashed",
                            borderColor: "#1E1E1E",
                            borderWidth: 1,
                            alignSelf: "baseline",
                            padding: 44,
                            marginRight: 16,
                        }}>
                            <Icon style={styles.soundCardPlayIcon} name="image-outline" size={25} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.partTopInputs}>
                        <View style={styles.searchInputContainer}>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={() => { }}
                                value={2}
                                placeholder="Başlık"
                            />
                        </View>
                        <Space size={24} />
                        <View style={{
                            alignItems: "flex-start",
                            //justifyContent: "flex-start",
                        }}>
                            <View style={styles.searchInputContainer}>
                                <TextInput
                                    style={styles.searchInput}
                                    onChangeText={() => { }}
                                    value={2}
                                    placeholder="Etiketler"
                                />
                            </View>
                            <Text style={{
                                textAlign: "right",
                                fontSize: 10,
                                color: "#0D0D0B",
                                opacity: 0.6,
                                marginLeft: 4,
                            }}>
                                Etiketleri ayırmak içi virgül kullanın.
                            </Text>
                        </View>
                    </View>
                </View>
                <Space size={24}/>
                <View style={{
                    flexDirection: "row",
                }}>
                    <TouchableOpacity onPress={() => { }} style={{
                        borderColor: "#0D0D0B",
                        borderWidth: 1,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        paddingVertical: 12,
                        paddingHorizontal: 9,
                        flexDirection: "row",
                        //alignSelf: "flex-start"
                    }}>
                        <Icon style={{
                            marginRight: 10,
                        }} name="cloud-upload-outline" size={20} />
                        <Text style={{
                            color: "#0D0D0B",
                            fontSize: 14,
                        }}>Ses Yükle</Text>
                    </TouchableOpacity>
                    <View style={{
                        borderColor: '#0D0D0B',
                        borderWidth: 1,
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        display: 'flex',
                        flex: 1,
                    }}>
                        <TextInput
                            editable={false}
                            style={styles.searchInput}
                            onChangeText={() => { }}
                            value={2}
                            placeholder="dosya seçilmedi..."
                        />
                    </View>
                </View>
                <Space size={32} />
                <TouchableOpacity onPress={() => { }} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Kaydet</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function Space({ size }) {
    return (
        <View style={{ height: size }} />
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
        flex: 1,
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
