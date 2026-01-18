import { useEffect, useState } from "react";
import { fetchWorkers } from "../services/workerService";
import {useNavigate} from "react-router-dom"
function WorkerList() {
  const [workers, setWorkers] = useState([]);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  // Event handler function
  const handleButton= () => {
    navigate("/");
  }
  useEffect(() => {
    fetchWorkers()
      .then(data => setWorkers(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>You have reached in line 15 of WorkerList.jsx    {error}</p>;
  }

  return (
    <div>
      
	  <h2>Worker List</h2>
      
      {workers.length === 0 ? (
        <p>No workers found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
			  <th>Department</th>
			  <th>Email</th>
              <th>Name</th>
              
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {workers.map(worker => (
              <tr key={worker.id}>
                <td>{worker.id}</td>
				<td>{worker.department}</td>
				 <td>{worker.email}</td>
                <td>{worker.name}</td>               
                <td>{worker.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
		
      )}
	  <button onClick={handleButton}>
        Return Back
      </button> 
    </div>
  );
}

export default WorkerList;
