import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => setCounter(counter+1)}>
                <Text style={styles.text}>Incrementar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    },
    counter: {
        color: 'crimson',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 50,
    }
})

export default CounterScreen;