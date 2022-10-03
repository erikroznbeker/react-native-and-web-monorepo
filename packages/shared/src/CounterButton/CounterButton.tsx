import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterButton = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text>--- module from shared ----</Text>
            <Text>COUNTER: {counter}</Text>
            <Button
                title={'increase counter by 1'}
                onPress={() => setCounter(counter + 1)}
            />
        </View>
    );
};
