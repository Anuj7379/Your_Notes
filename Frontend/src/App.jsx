import React from "react";
import Home from "./Home/home";

import { Routes , Route } from "react-router-dom";
import CoursePage from "./coursepage/CoursePage";

import Signup from "./component/Signup";
import Login from "./component/Login";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CoursePage/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
    </>
  );
};

export default App;
