import sampleData from "../sampleData/sampleData";

const DynamicDashboard = () => {
    return (
    <ul>
        {sampleData.map((item) => (
            <li key={item.Id}>{item.completed ? '\u2705' : '\u274C' } {item.taskName}</li>
        ))}
    </ul>
)}

export default DynamicDashboard