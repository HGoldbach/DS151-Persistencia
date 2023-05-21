import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function Form() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [media, setMedia] = useState('');

    const calcMedia = () => {
        const mediaFinal = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        setMedia(mediaFinal);
    }

    return (
        <View>
            <View>
                <View>
                    <Text>Nota 1</Text>
                    <TextInput style={styles.input} keyboardType='numeric' onChangeText={valor => setNota1(valor)} value={nota1} />
                </View>
                <View>
                    <Text>Nota 2</Text>
                    <TextInput style={styles.input} keyboardType='numeric' onChangeText={valor => setNota2(valor)} value={nota2} />
                </View>
            </View>
            <Button title="Calcular" onPress={calcMedia} />
            <Text style={styles.media}>Média : {media}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 200,
        borderWidth: 1,
        marginBottom: 20,
        textAlign: 'center'

    },
    media: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    },
})