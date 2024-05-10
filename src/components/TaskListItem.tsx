
// define a type TaskItem as an object with two keys both strings
export type TaskItem = {
  title: string
  date: string
}

// define type Props which is exactly the same as type TaskItem
type Props = TaskItem

// React Function Component and receives props of type Props
export const TaskListItem: React.FC<Props> = ({ title, date }) => 
  <>
    <p>{title}</p>
    <p>{date}</p>
  </>