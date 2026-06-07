import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import WalletPage from './WalletPage'; // ← YE ADD KAR

// ... PLAYERS_DATA aur MATCHES same rahega

function HomePage() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState(100);
  
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-white p-4 shadow-lg border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">T11</span>
            </div>
            <h1 className="text-gray-800 font-black text-xl">True11</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/my-contests">
              <div className="bg-gray-100 px-3 py-1.5 rounded-full">
                <span className="text-gray-700 font-bold text-xs">My Contests</span>
              </div>
            </Link>
            <Link to="/wallet"> {/* ← YE WRAP KAR DE */}
              <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full cursor-pointer">
                <GoldCoin />
                <span className="text-red-600 font-black">{coins}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* ... baaki HomePage same */}
    </div>
  );
}

// ... baaki saare functions same

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet" element={<WalletPage />} /> {/* ← YE ADD KAR */}
        <Route path="/my-contests" element={<MyContestsPage />} />
        <Route path="/contests/:matchId" element={<ContestPage />} />
        <Route path="/create-team/:matchId" element={<CreateTeamPage />} />
        <Route path="/captain-vc/:matchId" element={<CaptainViceCaptainPage />} />
        <Route path="/my-team" element={<MyTeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;