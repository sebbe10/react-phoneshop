import { Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { ShopContextProvider } from "./Shopcontext";
function MyRouter() {
  return (
    <>
      <Navbar />

      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </ShopContextProvider>
    </>
  );
}
export default MyRouter;
