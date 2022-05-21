import { nanoid } from 'nanoid';
import { TTask, TTaskList, TTaskStatus } from '../core/TTask';

export const taskMock1: TTask = {
  id: nanoid(),
  title: 'Купить кошачьего корму',
  description: 'С курой либо с крольчатиной',
  status: TTaskStatus.TODO,
};

export const taskMock2: TTask = {
  id: nanoid(),
  title: 'Позвонить Воланду',
  description: 'Рассказать анекдот вчерашний',
  status: TTaskStatus.IN_PROGRESS,
};

export const taskMock3: TTask = {
  id: nanoid(),
  title: 'Починить примус',
  status: TTaskStatus.DONE,
};

export const taskListMock: TTaskList = [
  taskMock1,
  taskMock2,
  taskMock3,
];
