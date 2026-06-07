import React from 'react';
import { useNavigate } from 'react-router-dom';

function WalletPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6">
        <button onClick={() => navigate(-1)} className="text-2xl mb-4">←</button>
        <p className="text-white/80 text-sm">Total Balance</p>
        <h1 className="text-4xl font-black animate-pulse">₹1,250.00</h1>
      </div>
      
      <div className="p-4 -mt-6">
        <div className="bg-white rounded-2xl p-4 shadow-xl grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs text-gray-500">Deposits</p>
            <p className="font-bold text-green-600">₹500</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Winnings</p>
            <p className="font-bold text-yellow-600">₹750</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Bonus</p>
            <p className="font-bold text-blue-600">₹0</p>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-green-600 text-white py-4 rounded-xl font-black text-lg shadow-lg">
          + Add Cash
        </button>
      </div>
    </div>
  );
}

export default WalletPage;