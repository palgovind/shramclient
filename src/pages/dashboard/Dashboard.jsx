import {useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
const Dashboard =()=>{
					  const [workers,setWorkers]=useState([]);
					  const [worker,onDeleted]=useState([]);
					  
					  useEffect(()=>{
								   const fetchWorkers=async()=>
																{
																	try { const response=await fetch("http://localhost:8080/workers");
																		  const data=await response.json();
																		  console.log("The data from backend is"+data);
																		 setWorkers(data);
																		}
																	catch(error)
																		{console.error("Error fetching workers",error.message);
																		}
																}
																console.log("I am trying to fetch workers");
																fetchWorkers();
									},[]);  
								   const handleDelete=async (id)=>
																{
																try {
																	   const response = await fetch(`http://localhost:8080/worker/${id}`, { method: "DELETE" });
																		if (!response.ok) {
																							throw new Error(`Failed with status ${response.status}`);
																						  }
																		if (response.ok)
																						{ console.log("Worker deleted successfully"); 
																					       // update state to remove worker from list 
																					        setWorkers((prev) => prev.filter((w) => w.id !== id)); } 
																		else { console.error("Failed to delete worker:", response.status); }
																		}
           														catch (error) {
																		console.error("Error deleting worker:", error);
																				}

																}
							
							      const handleDeleted=(id)=>{
															setWorkers((prev)=>prev.filter((w)=>w.id!==id));
															};
																
									
					   return (<>
								<div><span>{worker.name}</span></div>
							   <Container className="mt-5">
							   <Row>
							   <Col><h1 className="text-center">Workers</h1>
								 <Table striped bordered hover responsive>
									<thead>
										<tr>
											<th>Id</th>
											<th>Department</th>
											<th>Email</th>
											<th>Name</th>
											<th>Phone</th>
											<th>Action</th>				
										</tr>
									</thead>
				                    <tbody>
										{workers.map((worker)=>(
																<tr key={worker.id}>
																<td>{worker.id}</td>
																<td>{worker.department}</td>
																<td>{worker.email}</td>
																<td>{worker.name}</td>
																<td>{worker.phone}</td>
																<td> <Button variant="outline-secondary">Update</Button>{""}
																	 <Button variant="outline-danger" onClick={() => handleDelete(worker.id)}>Delete</Button>
																</td>
																</tr>
																))
										}
				                    </tbody>				
								 </Table>
							    </Col>
							    </Row>
				                </Container>
		                       </>
                              )
					
}
export default Dashboard;