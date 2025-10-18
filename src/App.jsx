import './App.css'
import DynamicDashboard from './components/DynamicDashboard'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Premium from './components/Premium'
import TaskCount from './components/TaskCount'

function App() {
 
  return (
    <>
      <div>
        <Header />
        <Greeting />
        <DynamicDashboard />
        <Premium />
        <TaskCount />
      </div>
    </>
  )
}

export default App
