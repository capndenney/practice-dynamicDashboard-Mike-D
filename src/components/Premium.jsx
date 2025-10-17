import sampleUser from "../sampleData/sampleUser"

const Premium = () => {
    const premiumStatus = sampleUser.isPrem

    return <h3>{premiumStatus ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</h3>
}

export default Premium