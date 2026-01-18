import{useState} from "react";
import "./PostWorker.css";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useNavigate} from "react-router-dom"

const PostWorker=()=>{

                       const[formData,setFormData]=useState({
	
															name:"",
															email:"",
															phone:"",
															department:""
	
															});
					   const handleInputChange=(event)=>{
										const{name,value}=event.target;
										setFormData({...formData,[name]:value})
										};
										
						const navigate=useNavigate();
										const handleSubmit=async (e)=>{
											
											e.preventDefault();
											console.log("Upto here i am fine. I m from PostWorker.jsx line 26");
											console.log(formData);
									
											try{
											const response= await fetch("http://localhost:8080/worker",
														                              {method:"POST",
																					   headers:{
																					   "Content-Type":"application/json"
																					   },
														                                body:JSON.stringify(formData) 
																					});
																		if (!response.ok) {
																			throw new Error("Failed to save worker");
																							}
											console.log("Waiting json data from backend");
											
											const data=await response.json();
											
											console.log("worker created:",data);
											navigate("/workers");  // Navigates to '/path'
												
											}
											catch(error){
												console.log("My dear error u have reached upto here..but error creating worker",error.message);
											}
											
										}
					    return(
								<div className="center-form">
								      <h1>नया श्रमिक का रुपमा दर्ता हुनुहोस <br/>Post As a New Worker</h1>
								         <Form onSubmit={handleSubmit}>
     										 <Form.Group controlId="formBasicName">
<Form.Control type="text" name="name" placeholder="नाम लेख्नुहोस्  Enter Name" value={formData.name}
												    onChange={handleInputChange}/>
										     </Form.Group>
											 <Form.Group controlId="formBasicName">
											      <Form.Control type="email" name="email" placeholder="इमेल लेख्नुहोस् Enter email" value={formData.email}
												    onChange={handleInputChange}/>
										     </Form.Group>
											<Form.Group controlId="formBasicName">
											      <Form.Control type="text" name="phone" placeholder="फोन नम्बर लेख्नुहोस् Enter Phone Number" value={formData.phone}
												    onChange={handleInputChange}/>
										    </Form.Group>
											 <Form.Group controlId="formBasicName">
											      <Form.Control type="text" name="department" placeholder="तपाइको काम लेख्नुहोस् Enter your worktype" value={formData.worktype}
												    onChange={handleInputChange}/>
										       
								           
										    </Form.Group>
										  <Button variant="primary"type="submit"className="w-100">
								            पेश गर्नुहोस Post Worker
								          </Button>
                                       </Form>
							    </div>
								
                                );






}

export default PostWorker;