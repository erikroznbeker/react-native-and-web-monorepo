import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {CounterButton} from "@my-app/shared";
//import CounterButton from './modules/CounterButton/CounterButton';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello world mobile</Text>
          <CounterButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
