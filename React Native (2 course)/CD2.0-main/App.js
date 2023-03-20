import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text>
      Hello world!
    </Text>
     <Button
        title="Hello world!"
        onPress={() => alert('Кнопка работает')}
      />
  </View>
  );
}
export default YourApp;