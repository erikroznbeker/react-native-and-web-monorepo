import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const CounterButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>COUNTER: {counter}</Text>
      <Button
        title={'increase counter by 1'}
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  );
};

export default CounterButton;
