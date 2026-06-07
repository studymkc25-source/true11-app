import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation, Link } from 'react-router-dom';

const PLAYERS_DATA = [
  { id: 1, name: 'Rohit Sharma', team: 'IND', role: 'BAT', credits: 10.5, sel: 85.2, img: 'https://i.pravatar.cc/200?img=1', points: 95 },
  { id: 2, name: 'Virat Kohli', team: 'IND', role: 'BAT', credits: 10, sel: 92.1, img: 'https://i.pravatar.cc/200?img=2', points: 88 },
  { id: 3, name: 'David Warner', team: 'AUS', role: 'BAT', credits: 9.5, sel: 78.9, img: 'https://i.pravatar.cc/200?img=3', points: 76 },
  { id: 4, name: 'Steve Smith', team: 'AUS', role: 'BAT', credits: 9, sel: 76.2, img: 'https://i.pravatar.cc/200?img=4', points: 65 },
  { id: 5, name: 'KL Rahul', team: 'IND', role: 'WK', credits: 9, sel: 81.5, img: 'https://i.pravatar.cc/200?img=5', points: 72 },
  { id: 6, name: 'Alex Carey', team: 'AUS', role: 'WK', credits: 8.5, sel: 65.3, img: 'https://i.pravatar.cc/200?img=6', points: 45 },
  { id: 7, name: 'Hardik Pandya', team: 'IND', role: 'AR', credits: 9.5, sel: 88.4, img: 'https://i.pravatar.cc/200?img=7', points: 82 },
  { id: 8, name: 'Glenn Maxwell', team: 'AUS', role: 'AR', credits: 9, sel: 79.1, img: 'https://i.pravatar.cc/200?img=8', points: 69 },
  { id: 9, name: 'Jasprit Bumrah', team: 'IND', role: 'BWL', credits: 9, sel: 90.2, img: 'https://i.pravatar.cc/200?img=9', points: 91 },
  { id: 10, name: 'Mitchell Starc', team: 'AUS', role: 'BWL', credits: 8.5, sel: 82.7, img: 'https://i.pravatar.cc/200?img=10', points: 78 },
  { id: 11, name: 'Kuldeep Yadav', team: 'IND', role: 'BWL', credits: 8.5, sel: 75.8, img: 'https://i.pravatar.cc/200?img=11', points: 67 },
  { id: 12, name: 'Adam Zampa', team: 'AUS', role: 'BWL', credits: 8, sel: 71.4, img: 'https://i.pravatar.cc/200?img=12', points: 58 },
];

const MATCHES = [
  { id: 1, team1: 'IND', team2: 'AUS', team1Logo: 'https://flagcdn.com/w80/in.png', team2Logo: 'https://flagcdn.com/w80/au.png', time: '7:30 PM', date: 'Today' },
];

function GoldCoin() {
  return (
    <div className="animate-bounce">
      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-black text-xs">₹</span>
      </div>
    </div>
  );
}

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
            <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full">
              <GoldCoin />
              <span className="text-red-600 font-black">{coins}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-xl mb-4 relative overflow-hidden">
          <div className="absolute top-2 right-2"><GoldCoin /></div>
          <p className="text-white/80 text-sm font-bold">FREE MEGA CONTEST</p>
          <p className="text-white text-3xl font-black mt-1">₹10 Crores</p>
          <p className="text-white/90 text-xs mt-2">No Entry Fee • Win Real Cash</p>
          <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-lg font-black text-sm">
            Watch Ad + Join Free
          </button>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 text-center">
          <p className="text-white/60 text-xs mb-1">Advertisement</p>
          <div className="bg-white/10 h-16 rounded-lg flex items-center justify-center">
            <p className="text-white/40 text-sm">Ad Banner Slot 320x50</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-lg font-black text-gray-800 mb-3">Upcoming Matches</h2>
        <div className="space-y-3">
          {MATCHES.map(match => (
            <div key={match.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img src={match.team1Logo} alt={match.team1} className="w-8 h-6 rounded object-cover" />
                  <span className="font-black text-gray-800">{match.team1}</span>
                </div>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">VS</span>
                <div className="flex items-center gap-2">
                  <span className="font-black text-gray-800">{match.team2}</span>
                  <img src={match.team2Logo} alt={match.team2} className="w-8 h-6 rounded object-cover" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{match.date}</span>
                <span>{match.time}</span>
              </div>
              <Link to={`/contests/${match.id}`}>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-black text-sm">
                  Join FREE Contest
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MyContestsPage() {
  const navigate = useNavigate();
  const joinedContests = [
    { id: 1, match: 'IND vs AUS', prize: '1 Crore', rank: 1234, points: 456 },
    { id: 2, match: 'IND vs AUS', prize: '50 Lakhs', rank: 567, points: 521 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-50 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <h1 className="text-lg font-black text-gray-800">My Contests</h1>
      </div>
      <div className="p-4 space-y-3">
        {joinedContests.map(contest => (
          <div key={contest.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-black text-gray-800">{contest.match}</p>
                <p className="text-xs text-gray-500">Prize: ₹{contest.prize}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-black px-2 py-1 rounded">LIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-blue-50 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500">Rank</p>
                <p className="text-lg font-black text-blue-600">#{contest.rank}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500">Points</p>
                <p className="text-lg font-black text-green-600">{contest.points}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContestPage() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  
  const contests = [
    { id: 1, prize: '1 Crore', entry: 0, spots: 2000000, filled: 1456789, type: 'FREE' },
    { id: 2, prize: '50 Lakhs', entry: 0, spots: 500000, filled: 234567, type: 'FREE' },
    { id: 3, prize: '10 Lakhs', entry: 0, spots: 100000, filled: 87654, type: 'FREE' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-2xl">←</button>
          <div>
            <h1 className="text-lg font-black text-gray-800">FREE Contests</h1>
            <p className="text-xs text-gray-500">IND vs AUS</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 flex items-center gap-2">
          <GoldCoin />
          <p className="text-sm text-yellow-800 font-bold">Watch Ad to Join • No Entry Fee</p>
        </div>
      </div>

      <div className="px-4 space-y-3">
        {contests.map(contest => (
          <div key={contest.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs text-gray-500">Prize Pool</p>
                <p className="text-2xl font-black text-gray-800">₹{contest.prize}</p>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-700 text-xs font-black px-2 py-1 rounded">FREE</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(contest.filled / contest.spots) * 100}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>{contest.filled.toLocaleString()} joined</span>
              <span>{contest.spots.toLocaleString()} spots</span>
            </div>
            <button 
              onClick={() => {
                alert('Ad dikhega yahan. Phir team banegi');
                navigate(`/create-team/${matchId}`);
              }}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-black text-sm"
            >
              Watch Ad & Join Free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateTeamPage() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('BAT');

  const totalCredits = selectedPlayers.reduce((sum, id) => {
    const player = PLAYERS_DATA.find(p => p.id === id);
    return sum + (player?.credits || 0);
  }, 0);

  const creditsLeft = 100 - totalCredits;
  const teamCount = { IND: 0, AUS: 0 };
  selectedPlayers.forEach(id => {
    const player = PLAYERS_DATA.find(p => p.id === id);
    if (player) teamCount[player.team]++;
  });

  const togglePlayer = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      if (selectedPlayers.length >= 11) return;
      const player = PLAYERS_DATA.find(p => p.id === playerId);
      if (creditsLeft - player.credits < 0) return;
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const filteredPlayers = PLAYERS_DATA.filter(p => p.role === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)} className="text-2xl">←</button>
          <div>
            <h1 className="text-lg font-black text-gray-800">Create Team</h1>
            <p className="text-xs text-gray-500">IND vs AUS</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 rounded-lg p-2 text-center">
            <p className="text-xs text-gray-500">Players</p>
            <p className="text-lg font-black text-blue-600">{selectedPlayers.length}/11</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2 text-center">
            <p className="text-xs text-gray-500">Credits Left</p>
            <p className="text-lg font-black text-green-600">{creditsLeft.toFixed(1)}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-2 text-center">
            <p className="text-xs text-gray-500">Teams</p>
            <p className="text-lg font-black text-orange-600">{teamCount.IND}-{teamCount.AUS}</p>
          </div>
        </div>
      </div>

      <div className="bg-white sticky top-[124px] z-40 shadow-sm">
        <div className="flex">
          {[
            { key: 'WK', label: 'WK (2)' },
            { key: 'BAT', label: 'BAT (4)' },
            { key: 'AR', label: 'AR (2)' },
            { key: 'BWL', label: 'BWL (3)' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 text-sm font-bold border-b-2 ${
                activeTab === tab.key ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-2">
        {filteredPlayers.map(player => {
          const isSelected = selectedPlayers.includes(player.id);
          return (
            <div
              key={player.id}
              onClick={() => togglePlayer(player.id)}
              className={`bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm ${isSelected ? 'ring-2 ring-green-500' : ''}`}
            >
              <img src={player.img} alt={player.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-bold text-gray-800">{player.name}</p>
                <p className="text-xs text-gray-500">{player.team} • Sel {player.sel}%</p>
              </div>
              <div className="text-right">
                <p className="font-black text-gray-800">{player.credits}</p>
                <p className="text-xs text-gray-500">Credits</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl border-t">
        <button
          disabled={selectedPlayers.length !== 11}
          onClick={() => navigate(`/captain-vc/${matchId}`, { state: { team: selectedPlayers } })}
          className="w-full bg-green-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-black text-lg shadow-lg"
        >
          {selectedPlayers.length === 11 ? 'Continue' : `Select ${11 - selectedPlayers.length} More Players`}
        </button>
      </div>
    </div>
  );
}

function CaptainViceCaptainPage() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const location = useLocation();
  const selectedPlayers = location.state?.team || [];
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const teamPlayers = PLAYERS_DATA.filter(p => selectedPlayers.includes(p.id));
  
  const handleSave = () => {
    if (!captain || !viceCaptain) return alert('Captain aur VC select karo');
    navigate('/my-team', { state: { team: selectedPlayers, captain, viceCaptain, matchId } });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-50 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <h1 className="text-lg font-black">Choose Captain & VC</h1>
      </div>
      <div className="p-4 space-y-2">
        {teamPlayers.map(player => (
          <div key={player.id} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <img src={player.img} alt={player.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <p className="font-bold text-gray-800">{player.name}</p>
              <p className="text-xs text-gray-500">{player.team} • {player.credits} Cr</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setCaptain(player.id); if(viceCaptain === player.id) setViceCaptain(null); }}
                className={`w-10 h-10 rounded-full font-black text-xs ${captain === player.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >C</button>
              <button
                onClick={() => { setViceCaptain(player.id); if(captain === player.id) setCaptain(null); }}
                className={`w-10 h-10 rounded-full font-black text-xs ${viceCaptain === player.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}
              >VC</button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl border-t">
        <button
          disabled={!captain || !viceCaptain}
          onClick={handleSave}
          className="w-full bg-green-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-black text-lg"
        >
          Save Team
        </button>
      </div>
    </div>
  );
}

function MyTeamPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { team, captain, viceCaptain } = location.state || {};
  const teamPlayers = PLAYERS_DATA.filter(p => team?.includes(p.id));
  
  const getPlayerPoints = (playerId) => {
    const player = PLAYERS_DATA.find(p => p.id === playerId);
    let points = player?.points || 0;
    if (captain === playerId) points = points * 2;
    if (viceCaptain === playerId) points = points * 1.5;
    return points;
  };

  const totalPoints = teamPlayers.reduce((sum, p) => sum + getPlayerPoints(p.id), 0);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate('/')} className="text-2xl">←</button>
          <h1 className="text-lg font-black text-gray-800">My Team</h1>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-4 text-white">
          <p className="text-sm opacity-90">Total Points</p>
          <p className="text-3xl font-black">{totalPoints.toFixed(0)}</p>
        </div>
      </div>

      <div className="p-4 space-y-2">
        {teamPlayers.map(player => (
          <div key={player.id} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
            <img src={player.img} alt={player.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-gray-800">{player.name}</p>
                {captain === player.id && <span className="bg-blue-600 text-white text-xs font-black px-2 py-0.5 rounded">C</span>}
                {viceCaptain === player.id && <span className="bg-orange-500 text-white text-xs font-black px-2 py-0.5 rounded">VC</span>}
              </div>
              <p className="text-xs text-gray-500">{player.team} • {player.role}</p>
            </div>
            <div className="text-right">
              <p className="font-black text-gray-800">{getPlayerPoints(player.id).toFixed(0)}</p>
              <p className="text-xs text-gray-500">Points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
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