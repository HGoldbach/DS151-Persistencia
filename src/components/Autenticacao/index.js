import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function Autenticacao({ navigation, route }) {
    const image = {uri: 'https://4kwallpapers.com/images/wallpapers/matrix-program-falling-data-illustration-green-code-black-1284x2778-3292.jpg'}
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>
                    Usuário conectado: {route.params.autenticacao}
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 25,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
      },
})