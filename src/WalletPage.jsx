import React, { useState } from 'react';
import { ArrowLeft, Plus, Download, History } from 'lucide-react';

const WalletPage = ({ onBack }) => {
  const [balance, setBalance] = useState(100);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Bonus', amount: 100, date: '07 Jun 2026' }
  ]);

  const handleAddMoney = () => {
    if (amount && parseInt(amount) > 0) {
      setBalance(balance + parseInt(amount));
      setTransactions([
        { id: Date.now(), type: 'Added', amount: parseInt(amount), date: '07 Jun 2026' },
        ...transactions
      ]);
      setAmount('');
      setShowAddMoney(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center shadow-sm">
        <ArrowLeft onClick={onBack} className="mr-3 cursor-pointer" />
        <h1 className="text-xl font-bold">My Wallet</h1>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white mb-6">
          <p className="text-sm opacity-80">Total Balance</p>
          <h2 className="text-4xl font-bold mt-2">₹{balance}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => setShowAddMoney(true)}
            className="bg-green-500 text-white p-4 rounded-xl flex flex-col items-center"
          >
            <Plus size={24} />
            <span className="mt-1 font-semibold">Add Money</span>
          </button>
          <button className="bg-blue-500 text-white p-4 rounded-xl flex flex-col items-center">
            <Download size={24} />
            <span className="mt-1 font-semibold">Withdraw</span>
          </button>
        </div>

        {showAddMoney && (
          <div className="bg-white p-4 rounded-xl mb-6 shadow">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="w-full p-3 border rounded-lg mb-3"
            />
            <div className="flex gap-2">
              <button onClick={handleAddMoney} className="flex-1 bg-green-500 text-white p-3 rounded-lg font-semibold">
                Add ₹{amount || 0}
              </button>
              <button onClick={() => setShowAddMoney(false)} className="px-4 bg-gray-200 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex items-center mb-4">
            <History size={20} className="mr-2" />
            <h3 className="font-bold text-lg">Transactions</h3>
          </div>
          {transactions.map(tx => (
            <div key={tx.id} className="flex justify-between py-3 border-b">
              <div>
                <p className="font-semibold">{tx.type}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>
              <p className={`font-bold ${tx.type === 'Added' || tx.type === 'Bonus' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type === 'Added' || tx.type === 'Bonus' ? '+' : '-'}₹{tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;