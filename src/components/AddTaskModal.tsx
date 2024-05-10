import { useState } from 'react';
import { TaskItem } from './TaskListItem';

type Props = {
  onSubmit: (taskItem: TaskItem) => void
  closeModal: () => void
}

export const AddTaskModal: React.FC<Props> = ({ onSubmit, closeModal }) => {
  const [taskItem, setTaskItem] = useState<TaskItem>({ title: '', date: new Date().toDateString() });
  
  const onClickHandler = () => {
    onSubmit(taskItem);
    setTaskItem(prevState => ({...prevState, title: ''}));
  }

  const onCancelHandler = () => {closeModal()}

  return (
  <>


    <form>
      <label>
        Task Title
        <input
          type="text" 
          value={taskItem.title}
          onChange={(e) => setTaskItem(prevState => ({...prevState, title: e.target.value}))} 
        />
      </label>



      <button
        type="submit"
        disabled={taskItem.title.length <= 0}
        onClick={onClickHandler}
      >
        Submit
      </button>
    



      <button onClick={onCancelHandler}>
        Cancel
      </button>
    </form>



  </>
  )
}
