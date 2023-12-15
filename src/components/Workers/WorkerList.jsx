import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;
  if (workers.length < 1) {
    return;
  }
  const deleteWorker=(id)=>{
    setWorkers(workers.filter((item)=>item.id!==id));
    console.log(id);
  }
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">Name</span>
          <span className="font-bold">Wage</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            key={worker.id}
            onClick={()=>deleteWorker(worker.id)}
          >
            <span>{worker.enteredWorkerName}</span>
            <span>{worker.enteredWage}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
