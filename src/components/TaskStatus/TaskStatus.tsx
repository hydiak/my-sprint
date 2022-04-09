import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { TTaskStatus } from '../../core/TTask';

interface TaskStatusProps {
  status: TTaskStatus
}

const statusToColorMap = {
  [TTaskStatus.TODO]: 'default',
  [TTaskStatus.IN_PROGRESS]: 'primary',
  [TTaskStatus.DONE]: 'success',
};

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => (
  // @ts-ignore
  <Chip sx={{ mt: 1 }} label={status} color={statusToColorMap[status]} />
);
