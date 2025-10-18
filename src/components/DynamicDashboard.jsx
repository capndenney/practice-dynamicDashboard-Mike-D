import sampleData from "../sampleData/sampleData";

const DynamicDashboard = () => {
    return (
    <ul>
        {sampleData.map((item) => (
            <li key={item.Id} className={item.completed ? "task-complete" : "task-incomplete"}>{item.completed ? '\u2705' : '\u274C' } {item.taskName}</li>
        ))}
    </ul>
)}

export default DynamicDashboard