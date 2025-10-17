import sampleUser from "../sampleData/sampleUser"


const Greeting = () => {
    const userName = sampleUser.Salutation + " " + sampleUser.LastName

    return <h1 className="greeting">Hello, {userName}!</h1>
}

export default Greeting