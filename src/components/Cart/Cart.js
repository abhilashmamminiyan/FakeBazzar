import { useContext} from "react";
import CartContext from "../../Contexts/CartContext";
import { Link } from "react-router-dom";


function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    
    const totalPrice = cart.reduce(
        (sum, item)=> sum + item.price * item.qty, 0 
    );

    return ( 
        <div className="container my-4">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center p-5 border rounded shadow-sm bg-light">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            alt="Empty Cart"
            style={{ width: "120px", marginBottom: "20px" }}
          />
          <h4>Your Fake Bazzar Cart is empty</h4>
          <p className="text-muted">Looks like you haven’t added anything yet!</p>
          <Link to="/products" className="btn btn-primary mt-3">
            🛒 Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/products/${item.id}`}>
                    <div className="d-flex align-items-center" >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "60px", height: "60px", objectFit: "contain" }}
                        className="me-3"
                      />
                      <div className="cartTitle"><a style={{textDecoration:"none"}}>{item.title}</a></div>
                     
                    </div>
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {cart.length > 0 && (
        <div className="text-end mt-4">
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-warning btn-lg mt-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );

}

export default Cart;