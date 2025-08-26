import React, { useState } from "react";

const ProductInfo = () => {
  const [product] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });

  return (
    <div >
      <div>
        <h2 >Thông tin sản phẩm</h2>
        <div>
          Id: {product.id} <br />
          Name: {product.name} <br />
          Price: {product.price} $ <br />
          Quantity: {product.quantity}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;