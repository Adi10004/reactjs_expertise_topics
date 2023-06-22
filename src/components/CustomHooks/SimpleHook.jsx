import useProducts from './useProducts'

const SimpleHook = () => {
    const {productData}=useProducts()
   
  return (
    <div>
      {productData.map((items)=>{
        return(
            <div key={items.id} className='text-center'>
                <h6>{items.title}</h6>
            </div>
        )
      })}
    </div>
  )
}

export default SimpleHook