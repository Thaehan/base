import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {multiply} from './modules/screen-brightness/src';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const onPressMinus = () => {
    const a = Math.random() * 10;
    const b = Math.random() * 10;
    console.log(a, b, multiply(a, b));
  };

  const onPressAdd = () => {};

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity onPress={onPressMinus}>
          <Text>Minus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
