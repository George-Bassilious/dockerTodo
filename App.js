import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View} from 'react-native';
import Box from '@material-ui/core/Box';


export default function App() {

  const [todosData, setTodosData] = useState([])

  // fetches all current to dos 
  function fetchTodosData() {
    fetch('http://localhost:8000/api/todos')
      .then((response) => response.json())
      .then((json) => setTodosData(json.data))
      .catch((error) => console.error(error))
  }

  useEffect(()=> {
    fetchTodosData();
  }, [])

  return (
    <Box position="absolute" top="15%" left="15%">
      <Box p={1} margin="10px" textAlign="center" fontFamily="sans-serif">
        <h2>{"Current to-dos"}</h2>
      </Box>
      <div>{
        todosData.map(todo => 
          <Box bgcolor="#D6EBEF" p={1} margin="10px" textAlign="center" fontFamily="sans-serif">
            <div>{todo.data}</div><button onClick={deleteTodo(todo.data)}> X </button>
          </Box>
        )
      }</div>
    </Box>
  );
}

function deleteTodo(content) {
  // TO DO 
  console.log('hej')
  console.log(content)
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