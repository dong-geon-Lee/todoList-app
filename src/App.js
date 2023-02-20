import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TodoList from "./pages/TodoList/TodoList";

const App = () => {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
