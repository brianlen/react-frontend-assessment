import { TaskItem, TaskListItem } from './TaskListItem'

type Props = {
  tasks: TaskItem[]
}

export const TaskList: React.FC<Props> = ({ tasks }) =>

<>
{
tasks.length > 0 ?
tasks.map(item => <TaskListItem title={item.title} date={item.date} />)
: "No tasks have been added yet."
}
</>
