import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import axios from 'axios';

const BASE_URL = "https://rickandmortyapi.com/api";

export default function Episodes({episodes}) {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    const promisesArray = episodes.map(episode => axios.get(episode));
    Promise.all(promisesArray)
      .then(response => setData(response.map(item => item.data)))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? 
      <ActivityIndicator size="large" color="#00ff00" /> :
      <FlatList
        data={data}
        //contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={({ id }) => id.toString()}
        //horizontal
        renderItem={({ item }) => (
          <EpisodeCard
            name={item.name}
            airDate={item.air_date}
            episode={item.episode}
          />
        )}
      />
      }
    </View>
  );
}