import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import CarItem from './components/index';

export default function App() {
  return (
    <View>
        <CarItem />
    </View>
  );
}
