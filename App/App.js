import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Box from '@material-ui/core/Box';

export default function App() {
  const [todos, setTodos] = useState([]); // local list of to-dos
  const [newTodo, setnewTodo] = useState(''); // new to-do (that user adds currently)
  const [showMeme, setShowMeme] = useState(false); 
  // fetches to dos from the database and sets local list
  function fetchTodosData() {
    var tempTodos = [];
    fetch('http://localhost:8000/api/todos')
      .then((response) => response.json())
      .then((json) =>
        json.data.map((todo) => {
          tempTodos = [...tempTodos, todo.data];
          setTodos(tempTodos);
        })
      )
      .catch((error) => console.error(error));
  }

  // delete to-do with content = content
  function deleteTodo(content) {

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: {},
    };
    fetch('http://localhost:8000/api/todos/' + content, requestOptions)
      .then(() => console.log('console.'))
      .then(setTodos([...todos.filter((todo) => todo !== content)]));
  }

  // add new to-do w content that is described
  function addTodo(content) {
    document.getElementById('newTodo').value = ''; // clears input field
    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: {},
    };
    fetch('http://localhost:8000/api/todos/' + content, requestOptions)
      .then(() => console.log('console.'))
      .then(setTodos([...todos, content]));
  }

  // runs when app starts, the point is that todos is filled w info from db
  useEffect(() => {
    fetchTodosData();
  }, []);

  if(showMeme) {
    return (
    <Box position='absolute' top='15%' left='15%'>
      <img src={require("./meme.jpeg")} style={{width: '40%'}} alt="fun meme"/>
      <button onClick={() => setShowMeme(false)}> Back to main page </button>
    </Box>
    )
    
  } else return (
    <Box>

      <Box position='absolute' top='15%' left='15%'>
        
        <input
          id='newTodo'
          placeholder='new to-do'
          onChange={() => setnewTodo(event.target.value)}
        ></input>

        <button onClick={() => addTodo(newTodo)}> Add To-Do </button>

        <Box p={1} margin='5%' textAlign='center' fontFamily='sans-serif'>
          <h2>{'Current to-dos'}</h2>
        </Box>

        <div>
          {todos.map((todo) => (
            <Box
              bgcolor='#D6EBEF'
              p={1}
              margin='5%'
              textAlign='center'
              fontFamily='sans-serif'
            >
              <p>
                {todo + ' '}
                <button onClick={() => deleteTodo(todo)}> X </button>
              </p>
            </Box>
          ))}
        </div>
      
      </Box>

      <Box p={1} margin='75%' textAlign='right'>
        <button onClick={() => setShowMeme(true)}> ? </button>
      </Box>

    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
