import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'iExpo',
    });
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='go detail'
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
