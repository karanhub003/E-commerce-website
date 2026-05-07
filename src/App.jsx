import { useState } from "react";

import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sorting from "./components/Sorting";

function App() {
  const [category, setCategory] = useState("");
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
        
        <Outlet context={{ query,category,setCategory,setQuery,setInputValue }} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
