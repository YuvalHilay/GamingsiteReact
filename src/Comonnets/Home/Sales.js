import React, { useState } from 'react';
import './Sales.css';
import Counter from '../../Tuts/Counter';
import ColorDisplay from '../../Tuts/ColorDisplay';
import ColorApp from '../../Tuts/ColorApp';
import CartPage from './CartPage'; // Import the CartPage component

function Sales(props) {
  const items = props.items;
  const [cartItems, setCartItems] = useState([]); // Initialize the cart as an empty array

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(item.name + ' that costs ' + item.price + '₪ was added to your cart');
  };

  return (
    <div className="SalesContainer">
      <ul className="SalesList">
        {items && items.map(item => (
          <li key={item.id} className="SalesItem">
            <img src={item.src} alt={item.name} />
            {item.name} - מחיר באתר {item.price}
            <button onClick={() => addToCart(item)}>Buy Now</button>
            <Counter />
          </li>
        ))}
      </ul>

      {/* Render the cart page component and pass the cartItems as a prop */}
      <CartPage cartItems={cartItems} />
    </div>
  );
}

export default Sales;
