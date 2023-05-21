import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const Galeria = () => {
    const [images, setImages] = useState([
        require('../../../assets/images/1.jpg'),
        require('../../../assets/images/2.jpg'),
        require('../../../assets/images/3.jpg'),
        require('../../../assets/images/4.jpg'),
        require('../../../assets/images/5.jpg'),
        require('../../../assets/images/7.jpg'),

    ])
    return (
        <View >
            <FlatList style={{backgroundColor: 'black'}} data={images} renderItem={({ item, index }) => (
                <Image source={item} key={index} style={{width: 200+(index*(Math.random() * 30)), height: 100+(index*(Math.random() * 40)), margin: 5, borderWidth: 4, borderColor: '#43C6DB', marginLeft: 40}} />
            )} />
        </View>
    )
}




export default Galeria;






