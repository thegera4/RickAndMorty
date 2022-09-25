import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CharacterCard({image, name, navigation}) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Detail')}>
			<Image style={styles.image} source={image} />
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}