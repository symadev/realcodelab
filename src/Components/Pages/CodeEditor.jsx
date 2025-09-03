import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { MonacoBinding } from "y-monaco";


export default function CodeEditor({ roomId, onGetCode }) {
  const providerRef = useRef(null);
  const bindingRef = useRef(null);
  const editorRef = useRef(null);
  const disposableRef = useRef(null); // for editor change listener
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialize Yjs doc and provider
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(import.meta.env.VITE_YWS_URL, roomId, ydoc);
    providerRef.current = provider;

    // Track connection status
    provider.on("status", (event) => {
      console.log("Yjs WebSocket status:", event.status);
      setReady(event.status === "connected");
    });

    

    return () => {
      // Clean up MonacoBinding
      if (bindingRef.current) {
        bindingRef.current.destroy();
        bindingRef.current = null;
      }

      // Clean up editor change listener
      if (disposableRef.current) {
        disposableRef.current.dispose();
        disposableRef.current = null;
      }

      // Destroy provider & Yjs doc
      provider.destroy();
      ydoc.destroy();
      setReady(false);
    };
  }, [roomId]);

  function onMount(editor) {
    editorRef.current = editor;

    if (!providerRef.current) return console.warn("Provider not ready yet");

    const ytext = providerRef.current.doc.getText("monaco");
    const awareness = providerRef.current.awareness;

    // Destroy previous binding if exists
    if (bindingRef.current) {
      bindingRef.current.destroy();
      bindingRef.current = null;
    }

    // Create new binding
    bindingRef.current = new MonacoBinding(
      ytext,
      editor.getModel(),
      new Set([editor]),
      awareness
    );

    // Dispose previous editor listener
    if (disposableRef.current) disposableRef.current.dispose();

    // Listen to editor changes
    disposableRef.current = editor.onDidChangeModelContent(() => {
      if (onGetCode) onGetCode(() => editor.getValue());
    });

    // Assign initial getter for code
    if (onGetCode) onGetCode(() => editor.getValue());
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
