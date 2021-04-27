
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList,View  } from 'react-native';
export default function App() {

  const [todosData, setTodosData] = useState([])
  function fetchTodosData() {
    fetch('http://localhost:8000/api/todos')
      .then((response) => response.json())
      .then((json) => setTodosData(json.data))
      .catch((error) => console.error(error))
  }
  useEffect(()=> {
    fetchTodosData();
  })
console.log(todosData)

  return (
    <FlatList
      data={todosData}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.id}
      renderItem={({item})=> <Text style={styles.text}>{item.id}:{item.data} {item.completed?"[x]":"[ ]"}</Text>}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    margin: 10
  },
});