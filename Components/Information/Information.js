import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default function Information({name, image, status, species, gender}) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{status}</Text>
      <Text style={styles.title}>{species}</Text>
      <Text style={styles.title}>{gender}</Text>
    </View>
  );
}