import React, { useState } from 'react';
import { CART_ITEMS } from '../constants/items';
import OrderSummary from '../components/OrderSummary';
import CartItems from '../components/CartItems';

const Cart = () => {
  const [items, setItems] = useState(CART_ITEMS);
  const [discount, setDiscount] = useState(0);
  const [addons, setAddons] = useState({});
  const [productOptions, setProductOptions] = useState({});

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    const remainingItems = items.filter(item => item.id !== id);
    setItems(remainingItems);
    if(remainingItems.length == 0){
      setItems([])
      setAddons({})
      setProductOptions({})
      setDiscount(0)
    }
    // Also remove any addons for this item
    const newAddons = { ...addons };
    delete newAddons[id];
    setAddons(newAddons);

    // Remove product options
    const newOptions = { ...productOptions };
    delete newOptions[id];
    setProductOptions(newOptions);
  };

  const updateAddons = (itemId, addonData) => {
    setAddons({
      ...addons,
      [itemId]: addonData
    });
  };

  const updateProductOptions = (itemId, options) => {
    setProductOptions({
      ...productOptions,
      [itemId]: options
    });
  };

  const calculateSubtotal = () => {
    // Base price of items
    const itemsTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Add addon costs
    const addonTotal = Object.entries(addons).reduce((sum, [itemId, itemAddons]) => {
      const item = items.find(i => i.id.toString() === itemId.toString());
      if (!item || !item.addonPrice) return sum;

      let addonCost = 0;
      if (itemAddons.addon && item.addonPrice) {
        addonCost += item.addonPrice;
      }

      return sum + addonCost;
    }, 0);


    return itemsTotal + addonTotal;
  };

  const subtotal = calculateSubtotal();
  const taxRate = 0.10;
  const tax = subtotal * taxRate;
  const total = subtotal + tax - discount;

  const applyCoupon = (couponCode) => {
    if(items.length == 0){
      return false;
    }
    if (couponCode === 'LOFI10') {
      setDiscount(subtotal * 0.1);
      return true;
    } else {
      setDiscount(0);
      return false;
    }
  };

  const totalItemCount = items.reduce((count, item) => {
    return count + 1 + (item.bundledItems?.length || 0);
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart ({totalItemCount} items)</h1>
      <div className="flex flex-col gap-6 ">
        <CartItems
          items={items}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
          updateAddons={updateAddons}
          addons={addons}
          updateProductOptions={updateProductOptions}
          productOptions={productOptions}
        />
        <OrderSummary subtotal={subtotal} tax={tax} total={total} applyCoupon={applyCoupon} />
      </div>
    </div>
  );
};

export default Cart;