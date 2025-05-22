import React, { useState, useEffect } from 'react';

const SingleCartItem = ({
  item,
  removeItem,
  updateQuantity,
  isBundled = false,
  mainItemQuantity,
  updateAddons,
  addonData = {},
  updateProductOptions,
  optionsData = {}
}) => {
  const [hasAddon, setHasAddon] = useState(addonData.addon || false);
  const [selectedOptions, setSelectedOptions] = useState(optionsData || {});

  useEffect(() => {
    setHasAddon(addonData.addon || false);
  }, [addonData]);

  useEffect(() => {
    if (item.options) {
      const initialOptions = {};
      Object.entries(item.options).forEach(([optionKey, optionData]) => {
        initialOptions[optionKey] = optionsData[optionKey] || optionData.selected;
      });
      setSelectedOptions(initialOptions);
    }
  }, [item.options, optionsData]);

  const toggleAddon = () => {
    const newState = !hasAddon;
    setHasAddon(newState);
    updateAddons(item.id, { addon: newState });
  };

  const handleOptionChange = (optionKey, value) => {
    const newOptions = {
      ...selectedOptions,
      [optionKey]: value
    };

    setSelectedOptions(newOptions);
    updateProductOptions(item.id, newOptions);
  };

  const showAddonOption = !isBundled && item.addonPrice && item.addonText;

  const addonCost = hasAddon && item.addonPrice ? item.addonPrice : 0;

  const hasOptions = !isBundled && item.options && Object.keys(item.options).length > 0;

  return (
    <div className={`grid py-3  grid-cols-12 gap-4 items-center py-${isBundled ? '4' : '6'} border-b border-gray-300 ${isBundled ? 'pl-6' : ''}`}>
      <div className="col-span-12 md:col-span-6 flex gap-4 items-center">
        <div className={`${isBundled ? 'w-16 h-16' : 'w-20 h-20'} flex-shrink-0 p-2 rounded-md`}>
          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h2 className={`font-medium text-sm`}>{item.brand}</h2>
          <h3 className={`font-bold text-xl`}>{item.name}</h3>
          <h3 className={`font-bold text-xl text-orange-500`}>{item.highlight}</h3>
          {item.description && <p className={` ${isBundled && 'text-sm'}`}>{item.description}</p>}

          {/* Product Options */}
          {hasOptions && (
            <div className="mt-2">
              {Object.entries(item.options).map(([optionKey, optionData]) => (
                <div key={optionKey}>
                  <p className="text-sm text-gray-600">{optionData.label}: {selectedOptions[optionKey]}</p>
                  <button
                    onClick={() => {
                      // Open a modal or toggle dropdown visibility
                      // For now, we'll just cycle through options
                      const currentIndex = optionData.choices.indexOf(selectedOptions[optionKey]);
                      const nextIndex = (currentIndex + 1) % optionData.choices.length;
                      handleOptionChange(optionKey, optionData.choices[nextIndex]);
                    }}
                    className="text-sm text-orange-500 hover:text-orange-700"
                  >
                    Change
                  </button>
                </div>
              ))}
            </div>
          )}

          {showAddonOption && (
            <div className="mt-3">
              <button
                onClick={toggleAddon}
                className={`border rounded px-3 py-1.5 text-sm transition ${hasAddon
                  ? 'bg-orange-50 border-orange-500 text-orange-700'
                  : 'border-orange-300 text-orange-600 hover:border-orange-400'
                  }`}
              >
                {hasAddon ? '✓ ' : ''}{item.addonText} ${item.addonPrice.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-4 md:col-span-2 text-left">
        <span className={`md:hidden text-gray-600 ${isBundled && 'text-sm'}`}>Price: </span>
        <span className="text-gray-700">
          ${item.price.toFixed(2)}
          {hasAddon && (
            <div className="text-sm text-gray-600">+ ${item.addonPrice.toFixed(2)}</div>
          )}
        </span>
      </div>

      <div className="col-span-4 md:col-span-2 flex justify-center">
        {!isBundled && item.price > 0 ? (
          <div className="flex border-2 rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 border-r-2"
            >
              -
            </button>
            <input
              type="text"
              value={item.quantity}
              readOnly
              className="w-12 text-center"
            />
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 border-l-2"
            >
              +
            </button>
          </div>
        ) : (
          <div className="text-gray-400 font-bold border-b-2 border-t-2 border-black px-4 py-1 w-16 text-center">
            <span className="text-sm">{mainItemQuantity * item.quantity}</span>
          </div>
        )}
      </div>

      <div className="col-span-4 md:col-span-2 text-right font-medium">
        <span className={`md:hidden text-gray-600 ${isBundled && 'text-sm'}`}>Total: </span>
        ${((item.price * (item.quantity || 1)) + addonCost).toFixed(2)}
        {!isBundled && item.price > 0 && (
          <button
            onClick={() => removeItem(item.id)}
            className="ml-2 text-gray-600 bg-gray-300 rounded-full cursor-pointer w-4 h-4 inline-flex items-center justify-center text-xs"
          >
            <span className="transform -translate-y-0.5">×</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleCartItem;
