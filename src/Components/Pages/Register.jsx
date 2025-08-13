import { useState } from "react";
import { useNavigate } from "react-router-dom";

function shortId(n = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < n; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return s;
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [copyLabel, setCopyLabel] = useState("📋");
  const navigate = useNavigate();

  const canProceed = name.trim().length >= 2;

  function goToRoom(id) {
    localStorage.setItem("rcl:name", name.trim());
    navigate(`/code/${id}`);
  }

  function createRoom() {
     console.log("Create Room clicked");
    if (!canProceed) return;
    const id = shortId();
    setRoomId(id);
    goToRoom(id);
  }

  function joinRoom() {
    if (!canProceed) return;
    const id = roomId.trim();
    if (!id) return;
    goToRoom(id);
  }

  function copyId() {
    if (!roomId) return;
    navigator.clipboard.writeText(roomId);
    setCopyLabel(" Copied!");
    setTimeout(() => setCopyLabel("📋"), 1000);
  }

  return (
    <div className="min-h-screen grid place-items-center bg-black">
      <div className="w-[420px] max-w-[92vw] rounded-xl bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white border border-slate-700 p-6 shadow-2xl">
        <h2 className="text-center text-2xl font-semibold text-indigo-300">
          Register
        </h2>

        <label className="block text-slate-300 text-sm mt-6 mb-2">Your name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="w-full bg-gray-800/50 text-slate-100 rounded-lg px-3 py-2 outline-none border border-slate-700 focus:border-indigo-500"
        />

        <label className="block text-slate-400 text-sm mt-4 mb-2">
          Room ID <span className="opacity-60">(Optional if you create new)</span>
        </label>
        <div className="flex gap-2">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value.toUpperCase())}
            placeholder="Enter existing Room ID"
            className="flex-1 bg-gray-800/50 text-slate-100 rounded-lg px-3 py-2 outline-none border border-slate-700 focus:border-indigo-500"
          />
          <button
            onClick={copyId}
            className="px-3 rounded-lg bg-gray-800/50 border border-slate-700 hover:bg-slate-700 text-lg"
            title="Copy Room ID"
          >
            {copyLabel}
          </button>
        </div>

        <button
          onClick={createRoom}
          disabled={!canProceed}
          className="w-full mt-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 font-medium"
        >
          Create New Room
        </button>

        <button
          onClick={joinRoom}
          disabled={!canProceed}
          className="w-full mt-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 font-medium"
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
