import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector(state=> state.auth.isLoggedIn);
  console.log();
  return (
    <div className="App">
      <Auth />
      {/* <Layout /> */}
    </div>
  );
}

export default App;
