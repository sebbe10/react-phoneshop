import TheProducts from "./TheProducts";

import allProducts from "./products";
import "./products.css";

function Shop() {
  return (
    <div className="products">
      {allProducts.map((product, index) => (
        <TheProducts data={product} key={index} />
      ))}
    </div>
  );
}

export default Shop;
