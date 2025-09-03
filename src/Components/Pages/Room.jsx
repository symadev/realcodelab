import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Sidebar from "../../Components/Pages/Sidebar";
import CodeEditor from "./CodeEditor";

function Room() {
  const { id: roomId } = useParams();
  const getCodeRef = useRef(() => "");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState(63); // JS default

  // Save code snapshot every 15 sec
  useEffect(() => {
    const t = setInterval(async () => {
      const code = getCodeRef.current();
      await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}/snapshot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: code })
      });
    }, 15000);
    return () => clearInterval(t);
  }, [roomId]);

  async function run(stdin) {
    setOutput("Running...");
    const code = getCodeRef.current();

    try {
      // Step 1: create submission
      const response = await fetch(`${import.meta.env.VITE_API_URL}/compile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language_id: lang,
          source_code: code,
          stdin: stdin || "",
        }),
      });

      const res = await response.json();

      if (!res.token) {
        setOutput("Error: No token received");
        return;
      }

      const token = res.token;

      // Step 2: poll result until finished
      let result;
      for (let i = 0; i < 20; i++) { // max ~10s (20 * 500ms)
        const check = await fetch(
          `${import.meta.env.VITE_API_URL}/submissions/${token}`
        );
        result = await check.json();

        if (result.status && result.status.id >= 3) {
          break; // 1: In Queue, 2: Processing, >=3 means Done //
        }
        await new Promise((r) => setTimeout(r, 500));
      }

      setOutput(
        (result.stdout || result.stderr || result.compile_output || result.message || "No output").trim()
      );
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  }

  return (
  <div className="p-6 md:p-8 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow">
        Code Together
      </h2>
      <select
        className="bg-slate-700 text-white px-3 py-2 rounded-lg shadow-md 
                   hover:bg-slate-600 focus:outline-none focus:ring-2 
                   focus:ring-slate-400 transition"
        value={lang}
        onChange={(e) => setLang(Number(e.target.value))}
      >
        <option value={63}>JavaScript (Node)</option>
        <option value={71}>Python 3</option>
        <option value={54}>C++</option>
        <option value={62}>Java</option>
      </select>
    </div>

    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-slate-900/80 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
        <CodeEditor roomId={roomId} onGetCode={(fn) => (getCodeRef.current = fn)} />
      </div>

        <Sidebar roomId={roomId} run={run} output={output} clear={() => setOutput("")} />
      
    </div>
  </div>
);


}

export default Room;
