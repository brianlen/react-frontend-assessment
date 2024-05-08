
// define datatype Props
// Props is an object with one key "toggleModal"
type Props = {
  // toggleModal is a function that returns void
  toggleModal: () => void
}

// AddTaskButton is of type React Function Component
// expects to take in props Props
// function parameters is destructuring toggleModal from an input object
export const AddTaskButton: React.FC<Props> = ({ toggleModal }) => 
  <button onClick={toggleModal}>Add Task</button>
