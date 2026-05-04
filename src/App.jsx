import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <main>
        <Outlet context={{ query }} />
      </main>
    </>
  );
}

export default App;
