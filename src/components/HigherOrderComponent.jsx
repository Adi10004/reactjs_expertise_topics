import React, { useEffect, useState } from 'react'

const HigherOrderComponent = (Post) => {
    const innerHoc=()=>{
        const[usersData,setUsersData]=useState([])
        const getApiData=async()=>{
         const res=await fetch('https://jsonplaceholder.typicode.com/users');
         const data=await res.json();
         console.log(data);
         setUsersData(data)
        }
      
        useEffect(()=>{
      getApiData()
        },[])
        return(
            <Post usersData={usersData}/>
        )
    }
  return innerHoc;
   
  
}

export default HigherOrderComponent