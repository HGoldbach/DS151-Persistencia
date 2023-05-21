import { TextInput, View, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import { buscarFilme } from '../../services/api';

const Filmes = () => {
    const [filme, setFilme] = useState('');

    const buscar = async titulo => {
        titulo = titulo.length == 0 ? 'A' : titulo;
        const data = await buscarFilme(titulo);
        console.log(data);
        setFilme(data);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Pesquisar filme...' onChangeText={titulo => buscar(titulo)} />

            <Text style={styles.titulo}>Título: <Text style={styles.texto}>{filme.title}</Text></Text>
           
            <Text style={styles.titulo}>Ano de Lançamento: <Text style={styles.texto}>{filme.release_date}</Text></Text>

            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${filme.poster_path}` }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25
    },
    input: {
        height: 40,
        width: 300,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'cyan',
        color: 'black',
        fontSize: 20,
        padding: 5
    },
    titulo: {
        alignSelf: 'flex-start',
        marginLeft: 40,
        fontSize: 20
    }, 
    texto: {
        fontSize: 15
    }, 
    image: {
        marginTop: 20,
        width: 300,
        height: 400
    }
})

export default Filmes;