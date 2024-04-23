import ShopContext from "./Shopcontext";
import { useContext } from "react";
function TheProducts(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, name, price, img } = props.data;

  const cartAmount = cartItems[id];
  return (
    <>
      <div className="products">
        <div className="product">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <p>{name}</p>
          </div>
          <div>
            <p>{price} kr</p>
          </div>
          <div>
            <button className="addToCart" onClick={() => addToCart(id)}>
              Add to cart {cartAmount > 0 && <>({cartAmount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheProducts;
