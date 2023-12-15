import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";


function App() {
  const[workers, setWorkers]=useState([]);
  const addNewWorker=(newWorker)=>{setWorkers([newWorker, ...workers])}
 
  return (
    <div className="App">
      <h1 className="text-white text-center mt-6 text-3xl">Salary Automation</h1>
     <AddWorker addNewWorker={addNewWorker}/>
     <WorkerList workers={workers} setWorkers={setWorkers}/>
    </div>
  );
}

export default App;
