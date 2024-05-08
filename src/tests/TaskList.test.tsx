import { TaskList } from '../components/TaskList'
import {
  makeRandomDateString,
  makeRandomTaskText,
  render,
  screen,
} from '../utils/test-utils'

describe('TaskList', () => {
  // TODO: Step 4. Done.
  it('displays a default message when no tasks have been provided', () => {
    render(<TaskList tasks={[]} />)

    expect(screen.getByText('No tasks have been added yet.'))
  })

  // TODO: Step 5. Done.
  it('correctly renders a list of TaskItems when provided', async () => {
    const randomDate1 = makeRandomDateString()
    const randomDate2 = makeRandomDateString()
    const randomTaskText1 = makeRandomTaskText()
    const randomTaskText2 = makeRandomTaskText()

    render(
      <TaskList
        tasks={[
          { title: randomTaskText1, date: randomDate1 },
          { title: randomTaskText2, date: randomDate2 },
        ]}
      />
    )

    expect(screen.getByText(randomTaskText1)).toBeInTheDocument()
    expect(screen.getByText(randomDate1)).toBeInTheDocument()
    expect(screen.getByText(randomTaskText2)).toBeInTheDocument()
    expect(screen.getByText(randomDate2)).toBeInTheDocument()
    expect(
      screen.queryByText('No tasks have been added yet.')
    ).not.toBeInTheDocument()
  })
})
