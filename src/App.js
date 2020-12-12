import React,{useState,useEffect} from 'react';
import axios from 'axios';
import GridTable from './components/persons';
import {Button} from '@material-ui/core';

const App = () =>{
  const [show,setShow] = useState(false)
  const [data,setData] = useState("")
  useEffect(()=>{
    axios.get('http://localhost:4000').then((res)=>{
      setData(res.data)
    })
  },[])
  return(
    <div>
      <p>{data.name}</p>
      <img src={data.img} alt={data.name} style={{width:'200px',height:'200px'}}/>
      <p>{data.occup}</p>
      <p>{data.age}</p>
    </div>
  )
}
/*
<div style={{alignContent:'center',textAlign:'center'}}>
      <Button variant="contained" color="primary" size="large" onClick={()=>{
        setShow(!show)
      }}>Show</Button>
      <GridTable data={data} show={show} />
    </div>
    */
export default (App)
