import {StyleSheet, Text} from 'react-native';

export default function Title() {
    return (
        <Text style={styles.title}>Calcula Média</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 20,
        textTransform: 'uppercase'
    }
})