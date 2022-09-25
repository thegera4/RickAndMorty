import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function CharacterCard({image, name, id }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {id: id})}>
			<Image style={styles.image} source={image} />
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}