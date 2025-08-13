import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { MonacoBinding } from "y-monaco";
import { socket } from "../../utils/socket";

export default function CodeEditor({ roomId, onGetCode }) {
  const editorRef = useRef(null);
  const providerRef = useRef(null);
  const bindingRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(import.meta.env.VITE_YWS_URL, roomId, ydoc);

    providerRef.current = provider;

    provider.on("status", (event) => {
      console.log(event.status); // "connected" or "disconnected"
      setReady(event.status === "connected");
    });

    socket.emit("join_room", { room_id: roomId, name: "You" });

    return () => {
      if (bindingRef.current) {
        bindingRef.current.destroy();
        bindingRef.current = null;
      }
      provider.destroy();
      ydoc.destroy();
      setReady(false);
    };
  }, [roomId]);

  function onMount(editor) {
    editorRef.current = editor;

    if (!providerRef.current) {
      console.warn("Provider not ready yet");
      return;
    }

    const ytext = providerRef.current.doc.getText("monaco");

   //new binding here 
    if (bindingRef.current) bindingRef.current.destroy();

    bindingRef.current = new MonacoBinding(
      ytext,
      editor.getModel(),
      new Set([editor]),
      editor
    );

    // Call onGetCode with current editor content
    if (onGetCode) onGetCode(editor.getValue());

    editor.onDidChangeCursorPosition((e) => {
      socket.emit("cursor_update", { room_id: roomId, cursor: e.position });
    });

    editor.onDidChangeModelContent(() => {
      if (onGetCode) onGetCode(editor.getValue());
    });
  }

  if (!ready) return <div>Loading editor and syncing...</div>;

  return (
    <Editor
      height="calc(100vh - 140px)"
      defaultLanguage="javascript"
      theme="vs-dark"
      onMount={onMount}
      options={{ minimap: { enabled: false }, fontSize: 14 }}
    />
  );
}
