import { useState } from 'react';
import { AddTaskButton } from './components/AddTaskButton';
import { TaskItem } from './components/TaskListItem';
import { AddTaskModal } from './components/AddTaskModal';
import { TaskList } from './components/TaskList';

export default function App() {
  const addTaskHandler = (taskItem: TaskItem) => {};
  const [isVisible, setIsVisible] = useState(true);
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const handleSubmit = (taskItem:TaskItem) => {
    setTasks([...tasks, taskItem]);
    setIsVisible(!isVisible);
  }

  return (
  <>
    <div className="App">Task Tracker</div>

    <TaskList tasks={tasks} />

    {
    isVisible ?
    <AddTaskButton 
      toggleModal={() => setIsVisible(!isVisible)} />
    :
    <AddTaskModal
      onSubmit={(taskItem) => handleSubmit(taskItem)}
      closeModal={() => setIsVisible(!isVisible)} />
    }


  </>
  )
}
