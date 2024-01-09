import { useParams } from "react-router-dom";
import React from "react";


const Dashboard =() =>{
    const {id} = useParams()
    return (
      <div>Dashboard</div>
    )
  }
  
  export default Dashboard