import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="mt-28 p-5">
      <h1 className="text-3xl mb-5">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      <div className="flex flex-col gap-5">
        {cart.map((item) => (
          <div key={item.id} className="shadow p-4 flex justify-between items-center">
            <div className='flex items-center gap-4'>
              {item.img && <img src={item.img} alt={item.name} className='w-20 h-20 object-cover' />}
              <div>
                <div className='font-medium'>{item.name}</div>
                <div className='text-sm text-gray-600'>{item.price}</div>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;