import React from "react";
import "./App.css";
import AppContent from "./AppContent";
import { ChatBoxProvider } from "./components/store/chatBoxStore";

function App() {
  return (
    <div className="app">
      <ChatBoxProvider>
        <AppContent></AppContent>
      </ChatBoxProvider>
    </div>
  );
}

export default App;
