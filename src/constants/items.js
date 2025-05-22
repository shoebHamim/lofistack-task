export const CART_ITEMS = [
  {
    id: 1,
    brand: '',
    name: 'Pi Pizza Oven',
    highlight: '(Estimated Ship Date: June 6th)',
    description: 'Fuel Source: Wood Only',
    price: 469.99,
    quantity: 1,
    image: 'images/pi-pizza-oven.jpg'
  },
  {
    id: 2,
    brand: 'Solo Stove',
    name: 'Grill Ultimate Bundle',
    description: '',
    addonText: 'Add accident protection for',
    addonPrice: 79.99,
    price: 549.99,
    quantity: 1,
    image: 'images/solo-stove.jpeg',
    bundledItems: [
      {
        id: 'b1',
        brand: 'Solo Stove',
        name: 'Starters',
        description: '',
        highlight: '(4 pack)',
        price: 0,
        quantity: 1,
        image: 'images/solo-stove-starters.png'
      },
      {
        id: 'b2',
        brand: 'Solo Stove',
        name: 'Charcoal Grill Pack',
        description: '',
        price: 0,
        quantity: 1,
        image: '/images/charcoal-pack.png'
      }
    ]
  }
]