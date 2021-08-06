import React, { useContext, useState } from 'react';
import Context from '../../context.js';

const Cart = props => {

  const { selectedStyle } = useContext(Context);
  const [itemInv, setInv] = useState(undefined);
  const [itemSize, setSize] = useState(undefined);
  const [error, setError] = useState("none");
  const inventory = selectedStyle.skus;
  const sku = Object.keys(inventory).map((item) => ({ id: item, size: inventory[item].size, quantity: inventory[item].quantity }))
  // const submission = (itemInv, )
  const handleChange = (e) => {
    let chosenSize = sku[e.target.selectedIndex - 1];
    // 如果库存大于15， 则设为15，反之设为本身
    setInv(chosenSize.quantity > 15 ? 15 : chosenSize.quantity);
    setSize(chosenSize.size);
  }

  return (
    <div className="cart-selector">
      <select onChange={handleChange} name="size-selector" id="size-selector">
        <option value="disabled" hidden>Select Size</option>
        {sku.map((inv) => {
          return (
            <option key={inv.id} value={inv.size} count={inv.quantity}>{inv.size}</option>
          )
        })}
      </select>
      <select name="quantity-selector" id="quantity-selector">
        <option defaultValue="disabled" hidden>-</option>
        {
          [...Array(itemInv).keys()].map((item) => {
            return (
              <option key={item + 1} value={item + 1}>{item + 1}</option>
            )
          })
        }
      </select>
      <div className="cart">
        {/* {renderAdd()} */}
       { itemSize === undefined ? <span className="errorMsg" style={{display: error}}> Please Select Size </span> : null }
       {/*
       如果尺寸未被选择 || 库存大于0， 显示按钮，并进行第二次判断，如果尺寸未被选择，显示报错，如果尺寸被选择，以及数量 > 0，即提交Post请求
        */}
       { itemSize === undefined || itemInv > 0 ? <button onClick={() => itemSize === undefined ? setError("block") : () => {}}> ADD TO CART </button> : null }
      </div>
    </div>
  )
}

export default Cart;