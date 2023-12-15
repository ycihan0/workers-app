import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = ({ addNewWorker }) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const minimumWage = 5000;
  const [error, setError]=useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredWorkerName.trim().length === 0 || enteredWage.trim().length === 0) {
      setError({
        title:"Required name",
        message:"You need to enter name"
      })
      return;
    }
    if (+enteredWage < minimumWage) {
      setError({
        title:"Required wage",
        message:`please enter a major salary value of ${minimumWage}`
      })
      return;
    }
    const newWorker = {
      id: Math.floor(Math.random() * 1000),
      enteredWorkerName,
      enteredWage,
    }
    addNewWorker(newWorker);
    setEnteredWorkerName("");
    setEnteredWage("");
  }
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal  onConfirm={errorHandler} error={error}/>}
      <Card className={"mt-10"} >
        <form className="flex flex-col gap-y-2" onSubmit={submitHandler} >
          <label htmlFor="name" className="font-medium">
            Employee Name
          </label>
          <input
            type="text"
            placeholder="write the name of the employee"
            id="name"
            className="max-w-[40rem] w-full mx-auto border p-2"
            onChange={(e) => { setEnteredWorkerName(e.target.value) }}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Salary Amount
          </label>
          <input
            type="number"
            placeholder="Enter the salary amount"
            id="wage"
            className="max-w-[40rem] w-full mx-auto border p-2"
            onChange={(e) => { setEnteredWage(e.target.value) }}
            value={enteredWage}
          />
          <Button className="mt-2" type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;
