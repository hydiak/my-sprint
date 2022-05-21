import React, { FC } from 'react';
import { Container } from '@mui/material';
import { TTaskList } from '../core/TTask';
import { Task } from './Task';

interface TaskListProps {
  taskList: TTaskList
}

export const TaskList: FC<TaskListProps> = ({
  taskList = [],
}) => (
  <Container maxWidth="sm">
    {
      taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))
    }
  </Container>

);
