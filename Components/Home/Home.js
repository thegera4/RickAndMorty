import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import axios from 'axios';
import apiParams from '../../config';

export default function Home(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
          />
        )
      }
    </View>
  );
}