import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";

const doc = new Y.Doc();
const provider = new WebsocketProvider(
  import.meta.env.VITE_YWS_URL,
    roomId, 
  doc
);
