import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View} from 'react-native';
import Box from '@material-ui/core/Box';


export default function App() {

  const [todosData, setTodosData] = useState([])
  const [newTodo, setnewTodo] = useState("");

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
      
      <input placeholder="new to-do" onChange={() => setnewTodo(event.target.value)}></input>
      <button onClick={() => addTodo(newTodo)} > Add To-Do </button>

      <Box p={1} margin="10px" textAlign="center" fontFamily="sans-serif">
        <h2>{"Current to-dos"}</h2>
      </Box>
      <div>{
        todosData.map(todo => 
          <Box bgcolor="#D6EBEF" p={1} margin="10px" textAlign="center" fontFamily="sans-serif">
            <p>{todo.data + " "}<button onClick={deleteTodo(todo.data)}> X </button></p>
          </Box>
        )
      }</div>

    </Box>
  );
}

  function deleteTodo(content) {
    console.log('delete')
    console.log(content)
    // todo: delete in local list
    // todo: delete in db 
  }
  
  function addTodo(content) {
    console.log('add')
    console.log(content)
    // todo: delete in local list
    // todo: delete in db 
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