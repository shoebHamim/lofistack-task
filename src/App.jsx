import React from 'react';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Cart />
        <Toaster />
      </main>
    </div>
  )
}

export default App
