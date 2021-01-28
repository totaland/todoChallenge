import React from 'react';
import Task from './components/Task';
import './App.css';
import {Todo} from './components/todoReducer';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

interface Props {
  initialState: Todo[],
  onState: (_: any, state: []) => void
}
function App({initialState}: Props) {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <div className="App">
      <Task todos={initialState} />
    </div>
    </ChakraProvider>
  );
}

export default App;
