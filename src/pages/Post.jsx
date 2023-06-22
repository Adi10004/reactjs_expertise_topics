import React from 'react'
import UsersData from '../components/UsersData'
import UsersDetails from '../components/UsersDetails'
import ProductsHook from '../components/CustomHooks/ProductsHook'

const Post = () => {
  return (
    <div >
      <UsersData/>
      <hr/>
      <UsersDetails/>
      <ProductsHook/>
    </div>
  )
}

export default Post