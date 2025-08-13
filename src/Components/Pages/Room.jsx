import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Editor from "../../Components/Pages/Editor";
import Sidebar from "../../Components/Pages/Sidebar";
import { compile } from "../../utils/compile";

function Room() {
  const { id: roomId } = useParams();
  const getCodeRef = useRef(() => "");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState(63); // JS (Judge0 id)


// for save the changes and save to the mongodb
  useEffect(()=>{
  const t = setInterval(async ()=>{
    const code = getCodeRef.current();
    await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}/snapshot`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ text: code })
    });
  }, 15000);
  return ()=> clearInterval(t);
}, [roomId]);


  async function run(stdin) {
    setOutput("Running...");
    const code = getCodeRef.current();
    const res = await compile({ language_id: lang, source_code: code, stdin });
    setOutput((res.stdout || res.stderr || res.status || "").trim());
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-white">Code Together</h2>
        <div className="space-x-3">
          <select
            className="bg-purple-950 text-white p-2 rounded"
            value={lang}
            onChange={(e) => setLang(Number(e.target.value))}
          >
            <option value={63}>JavaScript (Node)</option>
            <option value={71}>Python 3</option>
            <option value={54}>C++</option>
            <option value={62}>Java</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-purple-950 rounded">
          <Editor
            roomId={roomId}
            onGetCode={(fn) => (getCodeRef.current = fn)}
          />
        </div>
        <Sidebar
          roomId={roomId}
          run={run}
          output={output}
          clear={() => setOutput("")}
        />
      </div>
    </div>
  );
}

export default Room;
