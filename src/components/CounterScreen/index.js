import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button title='Incrementa' onPress={() => setCounter(counter+1)}/>
            <Text>{counter}</Text>
        </View>
    )
}

export default CounterScreen;