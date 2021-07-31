import React, { useContext, useState } from 'react';
import Context from '../../context.js';

const Cart = props => {

  const { selectedStyle } = useContext(Context);
  const [itemInv, setInv] = useState(0);
  const inventory = selectedStyle.skus;
  const sku = Object.keys(inventory).map((item) => ({ id: item, size: inventory[item].size, quantity: inventory[item].quantity }))
  const addCart = () => {

  }
  if (itemInv > 15) {
    setInv(15);
  }
  //setInv(sku[e.target.selectedIndex-1].quantity)
  // console.log(sku);
  return (
    <div className="cart-selector">
      <select onChange={(e) => setInv(sku[e.target.selectedIndex-1].quantity)} name="size-selector" id="size-selector">
        <option defaultValue="disabled" hidden>Select Size</option>
        {sku.map((inv) => {
          // console.log(inv.quantity)
          return (
            <option key={inv.id} value={inv.size} count={inv.quantity}>{inv.size}</option>
          )
        })}
      </select>
      <select name="quantity-selector" id="quantity-selector">
        <option defaultValue="disabled" hidden>-</option>
        {
          [...Array(itemInv).keys()].map((item) => {
            // console.log(item);
            return (
              <option key={item + 1} value={item + 1}>{item + 1}</option>
            )
          })
        }
      </select>
      <div className="cart">
        <button> ADD TO CART </button>
      </div>
    </div>
  )
}

export default Cart;