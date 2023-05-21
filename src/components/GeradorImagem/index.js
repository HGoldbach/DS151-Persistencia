import React, { useState } from 'react';
import { View, Image, Button, SafeAreaView} from 'react-native';



export default function GeradorImagem() {

    const images = [
        { id: 1,  image: 'cO4NGxG' },
        { id: 2,  image: 'V5GrJLa' },
        { id: 3,  image: 'FqAS4Mh' },
        { id: 4,  image: 'ycHWPMc' },
        { id: 5,  image: 'HKQ9XU9' },
        { id: 6,  image: 'C2oI4yL' },
        { id: 7,  image: 'Z1N0KJv' },
        { id: 8,  image: '2UueVK3' },
        { id: 9,  image: '3JoR6lI' },
        { id: 10, image: 'oUqGclF' },
    ]

    const [imagemId, setImagemId] = useState(images[0].image);

    const gerarId = () => {
        const id = Math.floor(Math.random() * 10);
        setImagemId(images[id].image);
    }
    return (

        <SafeAreaView>
            <View>
                <Image source={{uri: `https://i.imgur.com/${imagemId}.jpg`}} style={{ width: 400, height: 400 }} />
                <Button title='Trocar Imagem' onPress={gerarId}/>
            </View>
        </SafeAreaView>

        
        /*
        Tentei utilizar o template literals para tentar mudar com as imagens localmente mas não consegui, sempre dava problema com symbolicated.
        
        <View>
            <Image source={require(`../../../assets/images/${imagemId}.jpg`)} style={{width: 400, height: 400}}/>
            <Button title='Trocar Imagem' onPress={gerarId}/>
        </View>
        */
    )
}

