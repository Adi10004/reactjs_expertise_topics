import  { useEffect, useState } from 'react'

const useProducts = () => {
    const[productData,setProductData]=useState([])
    const getProductsApi=async()=>{
    const res=await fetch(`https://dummyjson.com/products`);
    const data=await  res.json();
    setProductData(data.products)
    console.log(data)
    }

    useEffect(()=>{
getProductsApi()
    },[])
  return {productData}
}

export default useProducts