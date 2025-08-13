import { useState } from "react";

function Sidebar({ roomId, run, output, clear }) {
  const [stdin, setStdin] = useState("");

  return (
    <aside className="w-full md:w-1/3 space-y-4">


      {/* Users & Invitation Code */}
      <div className="bg-purple-950 text-white p-4 rounded">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Users</h3>
          <span className="text-bold  text-green-500 opacity-70">Invitation Code: {roomId}</span>
        </div>
      </div>



      {/* Input (stdin) */}
      <div className="bg-slate-900 text-white p-4 rounded">
        <div className="mb-2 text-sm opacity-80">Input (stdin)</div>
        <textarea
          className="w-full h-32 bg-purple-950 p-2 rounded"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
        />
        <button
          className="mt-3 px-4 py-2 bg-yellow-400 text-black rounded"
          onClick={() => run(stdin)}
        >
          Submit Code
        </button>
      </div>

      

      {/* Output */}
      <div className="bg-slate-900 text-white p-4 rounded">
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-80">Output</div>
          <button className="text-red-300 text-xs" onClick={clear}>
            Clear
          </button>
        </div>
        <pre className="mt-2 text-xs whitespace-pre-wrap">{output}</pre>
      </div>
    </aside>
  );
}

export default Sidebar;
