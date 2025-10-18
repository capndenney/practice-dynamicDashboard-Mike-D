import sampleData from "../sampleData/sampleData"

const TaskCount = () => {
    const trueCount = sampleData.filter(task => task.completed === true).length
    const falseCount = sampleData.filter(task => task.completed === false).length

    return <p>There are {trueCount} completed task(s), and {falseCount} task(s) to be completed</p>
}

export default TaskCount