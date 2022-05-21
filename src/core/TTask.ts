export interface TTask {
  id: string;
  title: string;
  description?: string;
  status: TTaskStatus;
}

export const enum TTaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type TTaskList = TTask[];
