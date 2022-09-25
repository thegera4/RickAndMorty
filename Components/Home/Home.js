import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import axios from 'axios';

const BASE_URL = "https://rickandmortyapi.com/api"

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/character`)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data.results}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                image={item.image} 
                name={item.name} />
            )}
          />
        )
      }
    </View>
  );
}