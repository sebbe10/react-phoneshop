import { useContext } from "react";
import ShopContext from "./Shopcontext";

function CartItem(props) {
  const { id, name, price, img } = props.data;

  const { addToCart, removeToCart, cartItems, getTotalAmount } =
    useContext(ShopContext);

  return (
    <>
      <div className="singleCartItem">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p className="thePrice">{price}</p>
        </div>
        <div className="inputAndButtons">
          <button className="deleteInCart" onClick={() => removeToCart(id)}>
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => getTotalAmount(Number(e.target.value), id)}
          />
          <button className="addInCart" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
