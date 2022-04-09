import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Task } from './components/Task';
import { taskMock1, taskMock2, taskMock3 } from './__mocks__/taskMocks';

const App = () => (
  <Container maxWidth="sm">
    <Task task={taskMock1} />
    <Task task={taskMock2} />
    <Task task={taskMock3} />
  </Container>
);

export default App;
