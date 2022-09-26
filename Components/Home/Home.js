import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';

const BASE_URL = "https://rickandmortyapi.com/api"

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/character`)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    search ?
    axios.get(`${BASE_URL}/character/?name=${search}`)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false)) :
     axios.get(`${BASE_URL}/character`)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [search])

  /*function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${BASE_URL}/character`)
        .then(response => setData(response.data))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }*/

  return (
    <View>
      <Searchbar
        placeholder="Search character..."
        onChangeText={value => setSearch(value)}
        value={search}
        //onIconPress={searchCharacter}
        //onSubmitEditing={searchCharacter}
      />
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data.results}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                id = {item.id}
                image={item.image} 
                name={item.name} />
            )}
          />
        )
      }
    </View>
  );
}