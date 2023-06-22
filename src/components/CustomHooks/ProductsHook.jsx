import useProducts from "./useProducts";

const ProductsHook = () => {
  const { productData } = useProducts();

  return (
    <div>
      <h4 className="text-center">Products</h4>
      {productData.map((items) => {
        return (
          <div
            key={items.id}
            className="text-center d-grid justify-content-center"
          >
            <img
              src={items.thumbnail}
              alt={items.products}
              style={{ height: "100px", width: "100px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsHook;
