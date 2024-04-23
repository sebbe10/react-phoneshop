import { useContext } from "react";
import CartItem from "./CartItem";
import allProducts from "./products";
import ShopContext from "./Shopcontext";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  const navigate = useNavigate();

  const uppdateCartCost = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let infoCost = allProducts.find(
          (product) => product.id === Number(item)
        );

        totalAmount += cartItems[item] * infoCost.price;
      }
    }
    return totalAmount;
  };

  const totalAmount = uppdateCartCost();
  return (
    <>
      <h1>Cart</h1>

      <div className="theInfoInCart">
        <p className="totalCost">Totalsub: {totalAmount} kr</p>
        {totalAmount > 0 ? (
          <div>
            <button onClick={() => navigate("/")}>Countinue shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>The cart is empty</h1>
        )}
      </div>

      <div className="cartItem">
        {allProducts.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>
    </>
  );
}

export default Cart;
