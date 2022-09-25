import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function CharacterCard({ name, airDate, episode }) {

  return (
    <View style={styles.container}>
      <Text style={styles.font}>{name}</Text>
      <Text style={styles.font}>{airDate}</Text>
      <Text style={styles.font}>{episode}</Text>
    </View>
  );
}