import React, { useEffect, useState } from "react";
const PostAllData = () => {
  const[postData,setPostData]=useState([])
  const[page,setPage]=useState(1);
  const getApiData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setPostData((pre)=>{
      return [...pre,...data];
    })
    console.log(data);
  };


  const handleInfiniteScroll=async()=>{
    // console.log(`scrollHeight is ${document.documentElement.scrollHeight}`)
    // console.log(`windowInnerHeight is ${window.innerHeight}`)
    // console.log(`scrollTop is ${document.documentElement.scrollTop}`)

    try {
    if(document.documentElement.scrollTop + window.innerHeight +1>=document.documentElement.scrollHeight){
      setPage((prev)=>{
        return prev+1;
      })
    }

      
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getApiData();
  }, [page]);

  

  useEffect(()=>{
   window.addEventListener("scroll",handleInfiniteScroll)
  },[])
  return (
   
    <>
    <h2>Post Cards</h2>
    <div className='main-container'>
    <div className="grid-template-columns grid col-4">
    {
     postData.map((post)=>{
      return (
        <div className='cards' key={post.id}>
        <button>{post.id}</button>
        <div className='title'>
         <p>{post.title}</p>
        </div>
        </div>
      )
     })
    }
    </div>
    </div>
  </>
  )

};

export default PostAllData;