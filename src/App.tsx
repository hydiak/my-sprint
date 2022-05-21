import React from 'react';
import './App.css';
import { taskListMock } from './__mocks__/taskMocks';
import { TaskList } from './components/TaskList';

const App = () => (
  <TaskList taskList={taskListMock} />
);

export default App;
