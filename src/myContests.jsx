import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyContestsPage() {
  const navigate = useNavigate();
  
  const myContests = [
    { 
      id: 1, 
      match: "IND vs AUS", 
      team: "True 11 User T1", 
      rank: 1, 
      prize: "₹1,00,000", 
      entry: "₹49",
      status: "Won"
    },
    { 
      id: 2, 
      match: "CSK vs MI", 
      team: "True 11 User T2", 
      rank: 245, 
      prize: "₹0", 
      entry: "₹19",
      status: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white p-4 shadow-sm flex items-center gap-3 sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <h1 className="text-xl font-bold">My Contests</h1>
      </div>

      <div className="p-4 space-y-3">
        {myContests.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-gray-500 font-semibold">No contests joined yet</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-bold"
            >
              Join Contest Now
            </button>
          </div>
        ) : (
          myContests.map(contest => (
            <div key={contest.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-sm text-gray-500">{contest.match}</p>
                  <p className="font-bold text-gray-800">{contest.team}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  contest.status === 'Won' ? 'bg-green-100 text-green-700' : 
                  contest.status === 'Live' ? 'bg-red-100 text-red-700 animate-pulse' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {contest.status}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-lg p-3">
                <div>
                  <p className="text-xs text-gray-500">Rank</p>
                  <p className="font-black text-lg text-green-600">#{contest.rank}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Prize Won</p>
                  <p className="font-black text-lg text-yellow-600">{contest.prize}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Entry</p>
                  <p className="font-bold text-gray-700">{contest.entry}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyContestsPage;