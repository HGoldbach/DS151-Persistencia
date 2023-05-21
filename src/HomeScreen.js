import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const HomeScreen = ({navigation}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function verificarAutenticacao() {
        const resposta = await LocalAuthentication.hasHardwareAsync();
        console.log(resposta);
        const tipos = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(tipos);
    }

    async function lidarAutenticacao() {
        const biometriaCadastrada = await LocalAuthentication.isEnrolledAsync();
        if(!biometriaCadastrada) {
            return Alert.alert('biometria', 'Nenhum biometria encontrada');
        }

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login',
            fallbackLabel: 'Biometria não reconhecida'
        });

        setIsAuthenticated(auth.success);

        if (isAuthenticated) {
            const autenticacao = 'sim';
            navigation.navigate('Autenticacao', {autenticacao});
        }
    }

    useEffect(() => {
        verificarAutenticacao();
    },[])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Form')}>
                <Text style={styles.text}>Calcula Média</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Contador')}>
                <Text style={styles.text}>Contador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Imagem')}>
                <Text style={styles.text}>Troca Imagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Galeria')}>
                <Text style={styles.text}>Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Filmes')}>
                <Text style={styles.text}>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={lidarAutenticacao}>
                <Text style={styles.text}>Autenticacao</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 300,
        height: 50,
        margin: 10,
        backgroundColor: 'crimson',
        padding: 10,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
    }
})



export default HomeScreen;