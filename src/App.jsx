import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

const PLAYERS_DATA = [
  { id: 1, name: 'Rohit Sharma', team: 'IND', role: 'BAT', credits: 10.5, sel: 85.2, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', points: 95, matchId: 1 },
  { id: 2, name: 'Virat Kohli', team: 'IND', role: 'BAT', credits: 10, sel: 92.1, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/1413.png', points: 88, matchId: 1 },
  { id: 3, name: 'David Warner', team: 'AUS', role: 'BAT', credits: 9.5, sel: 78.9, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/214.png', points: 72, matchId: 1 },
  { id: 4, name: 'Steve Smith', team: 'AUS', role: 'BAT', credits: 9, sel: 76.2, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2023/271.png', points: 65, matchId: 1 },
  { id: 5, name: 'KL Rahul', team: 'IND', role: 'WK', credits: 9, sel: 81.5, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/19.png', points: 78, matchId: 1 },
  { id: 6, name: 'Alex Carey', team: 'AUS', role: 'WK', credits: 8.5, sel: 65.3, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/236.png', points: 60, matchId: 1 },
  { id: 7, name: 'Hardik Pandya', team: 'IND', role: 'AR', credits: 9.5, sel: 88.4, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/2740.png', points: 90, matchId: 1 },
  { id: 8, name: 'Glenn Maxwell', team: 'AUS', role: 'AR', credits: 9, sel: 79.1, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/28.png', points: 70, matchId: 1 },
  { id: 9, name: 'Jasprit Bumrah', team: 'IND', role: 'BWL', credits: 9, sel: 90.2, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/9.png', points: 85, matchId: 1 },
  { id: 10, name: 'Mitchell Starc', team: 'AUS', role: 'BWL', credits: 8.5, sel: 82.7, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/101.png', points: 80, matchId: 1 },
  { id: 11, name: 'Kuldeep Yadav', team: 'IND', role: 'BWL', credits: 8.5, sel: 75.8, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/14.png', points: 76, matchId: 1 },
  { id: 12, name: 'Adam Zampa', team: 'AUS', role: 'BWL', credits: 8, sel: 71.4, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/125.png', points: 68, matchId: 1 },
  { id: 13, name: 'Jos Buttler', team: 'ENG', role: 'WK', credits: 9.5, sel: 88.1, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/509.png', points: 82, matchId: 2 },
  { id: 14, name: 'Quinton de Kock', team: 'SA', role: 'WK', credits: 9, sel: 79.2, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/170.png', points: 75, matchId: 2 },
  { id: 15, name: 'Ben Stokes', team: 'ENG', role: 'AR', credits: 9, sel: 81.2, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/1154.png', points: 78, matchId: 2 },
  { id: 16, name: 'Kagiso Rabada', team: 'SA', role: 'BWL', credits: 8.5, sel: 80.1, img: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/1664.png', points: 79, matchId: 2 },
];

const MATCHES = [
  {
    id: 1,
    team1: 'IND',
    team2: 'AUS',
    team1Logo: 'https://flagcdn.com/w80/in.png',
    team2Logo: 'https://flagcdn.com/w80/au.png',
    time: '7:30 PM',
    date: 'Today',
    deadline: '2026-06-07T19:30:00'
  },
  {
    id: 2,
    team1: 'ENG',
    team2: 'SA',
    team1Logo: 'https://flagcdn.com/w80/gb-eng.png',
    team2Logo: 'https://flagcdn.com/w80/za.png',
    time: '7:30 PM',
    date: 'Tomorrow',
    deadline: '2026-06-08T19:30:00'
  },
];

function GoldCoin() {
  return (
    <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full shadow-lg flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-40 rounded-full"></div>
      <span className="text-yellow-900 text-xs font-black z-10">₹</span>
    </div>
  );
}

function Header() {
  const [coins] = useState(100);
  const navigate = useNavigate();
  return (
    <div className="bg-red-600 px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-black text-sm">T11</span>
          </div>
          <h1 className="text-white font-black text-xl tracking-tight">True11</h1>
        </div>
        <div onClick={() => navigate('/wallet')} className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-lg cursor-pointer">
          <GoldCoin />
          <span className="font-black text-gray-800 text-sm">{coins}</span>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = {};
      MATCHES.forEach(match => {
        const diff = new Date(match.deadline) - new Date();
        if (diff > 0) {
          const hours = Math.floor(diff / 1000 / 60 / 60);
          const minutes = Math.floor(diff / 1000 / 60) % 60;
          const seconds = Math.floor(diff / 1000) % 60;
          newTimeLeft[match.id] = `${hours}h ${minutes}m ${seconds}s`;
        } else {
          newTimeLeft[match.id] = 'LIVE';
        }
      });
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-4">
        <div className="bg-white/10 backdrop-blur rounded-xl p-4">
          <p className="text-white/80 text-xs font-bold mb-1">TOTAL WINNINGS</p>
          <div className="flex items-center gap-2">
            <GoldCoin />
            <span className="text-white font-black text-2xl">₹0</span>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4">
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
              <div className="bg-red-50 rounded-lg p-2 mb-3 text-center">
                <p className="text-xs text-red-600 font-bold">
                  {timeLeft[match.id] === 'LIVE'? '🔴 MATCH LIVE' : `⏰ ${timeLeft[match.id]} Left`}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{match.date}</span>
                <span>{match.time}</span>
              </div>
              <Link to={`/contests/${match.id}`}>
                <button
                  disabled={timeLeft[match.id] === 'LIVE'}
                  className="w-full bg-green-600 disabled:bg-gray-400 text-white py-3 rounded-lg font-black text-sm"
                >
                  {timeLeft[match.id] === 'LIVE'? 'Deadline Over' : 'Join FREE Contest'}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContestListPage() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const match = MATCHES.find(m => m.id == matchId);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-red-600 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate('/')} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white font-black text-lg">{match?.team1} vs {match?.team2}</h1>
      </div>
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 font-bold mb-1">PRIZE POOL</p>
              <div className="flex items-center gap-2">
                <GoldCoin />
                <span className="text-gray-800 font-black text-xl">₹10,000</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-bold mb-1">ENTRY</p>
              <div className="flex items-center gap-1">
                <GoldCoin />
                <span className="text-green-600 font-black text-lg">FREE</span>
              </div>
            </div>
          </div>
          <Link to={`/create-team/${matchId}`}>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-black text-sm">
              JOIN CONTEST
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CreateTeamPage() {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('BAT');

  const MATCH_PLAYERS = PLAYERS_DATA.filter(p => p.matchId == matchId);
  const match = MATCHES.find(m => m.id == matchId);
  const isDeadlineOver = new Date() > new Date(match?.deadline);

  if (isDeadlineOver) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-black text-red-600 mb-2">Deadline Over!</p>
          <p className="text-gray-600">Team nahi bana sakte</p>
          <button onClick={() => navigate('/')} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-bold">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const totalCredits = selectedPlayers.reduce((sum, id) => {
    const player = MATCH_PLAYERS.find(p => p.id === id);
    return sum + (player?.credits || 0);
  }, 0);

  const filteredPlayers = MATCH_PLAYERS.filter(p => p.role === activeTab);

  const togglePlayer = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id!== playerId));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-red-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(`/contests/${matchId}`)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-white font-black text-lg">Create Team</h1>
            <p className="text-white/80 text-xs font-bold">{selectedPlayers.length}/11 Players</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-1.5">
          <p className="text-white/80 text-xs font-bold">CREDITS</p>
          <p className="text-white font-black text-sm">{totalCredits.toFixed(1)}/100</p>
        </div>
      </div>
      <div className="bg-white px-4 py-3 border-b sticky top-0 z-10">
        <div className="flex gap-2">
          {['WK', 'BAT', 'AR', 'BWL'].map(role => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`flex-1 py-2 rounded-lg font-black text-sm transition ${
                activeTab === role? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="space-y-2">
          {filteredPlayers.map(player => {
            const isSelected = selectedPlayers.includes(player.id);
            return (
              <div
                key={player.id}
                onClick={() => togglePlayer(player.id)}
                className={`bg-white rounded-xl p-3 shadow-sm border-2 transition ${
                  isSelected? 'border-green-600' : 'border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-black text-gray-800 text-sm">{player.name}</p>
                    <p className="text-xs text-gray-500 font-bold">{player.team} • {player.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold">SEL BY</p>
                    <p className="text-sm font-black text-gray-800">{player.sel}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold">CREDITS</p>
                    <p className="text-sm font-black text-gray-800">{player.credits}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected? 'bg-green-600 border-green-600' : 'border-gray-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button
          onClick={() => navigate('/select-captain', { state: { selectedPlayers, matchId } })}
          disabled={selectedPlayers.length!== 11 || totalCredits > 100}
          className="w-full bg-green-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-black text-base shadow-lg"
        >
          {selectedPlayers.length!== 11
        ? `SELECT ${11 - selectedPlayers.length} MORE PLAYERS`
            : totalCredits > 100
        ? 'CREDITS EXCEEDED'
            : 'CONTINUE'}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contests/:matchId" element={<ContestListPage />} />
        <Route path="/create-team/:matchId" element={<CreateTeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;