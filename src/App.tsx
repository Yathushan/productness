import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Welcome to Tauri + React
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {/*  Made images responsive and limited width */}
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/vite.svg"
            className="logo vite w-24 h-auto"
            alt="Vite logo"
          />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/tauri.svg"
            className="logo tauri w-24 h-auto"
            alt="Tauri logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="logo react w-24 h-auto"
            alt="React logo"
          />
        </a>
      </div>

      <p className="text-center my-4">
        Click on the Tauri, Vite, and React logos to learn more.
      </p>

      <form
        className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        {/* Added responsive input styling */}
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="w-full sm:w-auto" // Full width on small, auto on sm and up
        />
        <Button type="submit">Greet Person</Button>
      </form>

      <p className="text-center mt-4">{greetMsg}</p>
    </main>
  );
}

export default App;
