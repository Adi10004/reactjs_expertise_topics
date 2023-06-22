import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Headers from "./Layouts/Headers";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
     <Headers/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/post" Component={Post} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
