function CartPage(props) {
    const cartItems = props.cartItems;
  
    return (
      <div className="CartPage">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="CartList">
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - Price: {item.price}₪
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default CartPage;
  