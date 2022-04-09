import React, { FC } from 'react';
import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import { TTask } from '../core/TTask';
import { TaskStatus } from './TaskStatus/TaskStatus';

interface TaskProps {
  task: TTask;
}

export const Task: FC<TaskProps> = ({ task }) => {
  const { status, title, description } = task;
  return (
    <Box
      sx={{
        margin: 4,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          {description && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
          )}
          <TaskStatus status={status} />
        </CardContent>
      </Card>
    </Box>
  );
};
