import { TTask, TTaskList, TTaskStatus } from '../core/TTask';

export const taskMock1: TTask = {
  title: 'Купить кошачьего корму',
  description: 'С курой либо с крольчатиной',
  status: TTaskStatus.TODO,
};

export const taskMock2: TTask = {
  title: 'Позвонить Воланду',
  description: 'Рассказать анекдот вчерашний',
  status: TTaskStatus.IN_PROGRESS,
};

export const taskMock3: TTask = {
  title: 'Починить примус',
  status: TTaskStatus.DONE,
};

export const taskListMock: TTaskList = [
  taskMock1,
  taskMock2,
  taskMock3,
];
