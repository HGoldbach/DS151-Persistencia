import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import Aluno from '../../services/sqlite/Aluno';

export default function Media() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [media, setMedia] = useState('');
    const [nome, setNome] = useState('');



    const calcMedia = () => {
        const mediaFinal = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        setMedia(mediaFinal);

        const aluno = {
            nome: nome,
            media: media
        }

        inserirAluno(aluno);

    }

    const inserirAluno = aluno => {
        Aluno.create({ nome: aluno.nome, media: aluno.media })
            .then(id => console.log(`Aluno criado com o id: ${id}, Nome: ${aluno.nome}`))
            .catch(erro => console.error(erro))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Media</Text>
            <View>
                <Text>Nome</Text>
                <TextInput style={styles.inputNome} onChangeText={valor => setNome(valor)} value={nome} />
            </View>
            <View style={styles.inputNota}>
                <View>
                    <Text>Nota 1</Text>
                    <TextInput style={styles.input} keyboardType='numeric' onChangeText={valor => setNota1(valor)} value={nota1} />
                </View>
                <View>
                    <Text>Nota 2</Text>
                    <TextInput style={styles.input} keyboardType='numeric' onChangeText={valor => setNota2(valor)} value={nota2} />
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={calcMedia}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.media}>Média : {media}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: 50
    },
    inputNota: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: 300
    },
    inputNome: {
        height: 40,
        width: 300,
        borderWidth: 2,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 40,
        width: 140,
        borderWidth: 2,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    },
    media: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
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
    }
})