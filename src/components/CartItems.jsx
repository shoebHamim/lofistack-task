import React from 'react'
import SingleCartItem from './SingleCartItem'

const CartItems = ({ items, removeItem, updateQuantity, updateAddons, addons = {} }) => {
  return (
    <div className="">
      <div className="hidden md:grid grid-cols-12 gap-4 font-medium   pb-2 border-b border-gray-300">
        <div className="col-span-6">Item</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-right">Total</div>
      </div>

      {items.map(item => (
        <div key={item.id} className=''>
          <SingleCartItem
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            updateAddons={updateAddons}
            addonData={addons[item.id] || {}}
          />

          {item.bundledItems?.map(bundledItem => (
            <SingleCartItem
              key={bundledItem.id}
              item={bundledItem}
              mainItemQuantity={item.quantity}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
              updateAddons={updateAddons}
              addonData={addons[bundledItem.id] || {}}
              isBundled={true}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CartItems