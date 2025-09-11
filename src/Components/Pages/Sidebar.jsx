import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Copy } from "lucide-react";
import { socket } from "../../utils/socket";

function Sidebar({ roomId, run, output, clear }) {
  const [stdin, setStdin] = useState("");
  const { user } = useContext(AuthContext);

  const [copied, setCopied] = useState(false);
  const [users, setUsers] = useState([]);

  // join room & listen for users
  useEffect(() => {
    const handleRoomUsers = (usersList) => {
      console.log("room_users event received:", usersList);
      setUsers(usersList); 
    };

    // get name from localStorage info 
    const localName = localStorage.getItem("rcl:name") || user?.name || "Guest";
    console.log("Joining room:", roomId, "with name:", localName);

    socket.emit("join_room", { room_id: roomId, name: localName });
    socket.on("room_users", handleRoomUsers);

    return () => {
      socket.off("room_users", handleRoomUsers);
    };
  }, [roomId]); // dependency only roomId

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full md:w-1/3 space-y-6">

      {/* Users Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 rounded-lg border border-slate-700 shadow-lg">
        <h3 className="font-semibold text-lg flex items-center mb-2">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          Users : {user?.name || "guest"}
        </h3>

        <ul className="ml-6 mt-2 list-disc text-sm">
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>

        {/* Invitation Code */}
        <div className="text-right mt-4">
          <div className="text-sm text-purple-200 opacity-80 mb-1">Invitation Code</div>
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-mono bg-purple-700 px-3 py-1 rounded-md text-green-300 font-semibold">
              {roomId}
            </span>
            <button
              onClick={handleCopy}
              className="p-1 rounded-md bg-purple-700 hover:bg-purple-600 text-green-300"
              title="Copy code"
            >
              <Copy size={16} />
            </button>
          </div>
          {copied && <div className="text-xs text-green-400 mt-1">Copied!</div>}
        </div>
      </div>

      {/* Input (stdin) */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 rounded-lg border border-slate-700 shadow-lg">
        <div className="mb-3 text-sm text-slate-300 font-medium flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Input (stdin)
        </div>
        <textarea
          className="w-full h-32 bg-slate-700 border border-slate-600 p-3 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 font-mono text-sm resize-none"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          placeholder="Enter your input here..."
        />
        <button
          className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-md"
          onClick={() => run(stdin)}
        >
          Submit Code
        </button>
      </div>

      {/* Output Section */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 rounded-lg border border-slate-700 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-slate-300 font-medium flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Output
          </div>
          <button
            className="text-red-400 text-xs font-medium hover:text-red-300 bg-red-900 bg-opacity-20 px-3 py-1 rounded-md hover:bg-opacity-30 transition-all duration-200"
            onClick={clear}
          >
            Clear
          </button>
        </div>
        <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 max-h-64 overflow-y-auto">
          <pre className="text-xs whitespace-pre-wrap text-slate-200 font-mono">
            {output || <span className="text-slate-400 italic">No output yet...</span>}
          </pre>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
