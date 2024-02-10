import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./components/pages/IndexPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>}></Route>
        <Route path={"/login"} element={<LoginPage/>} ></Route>
        <Route path={"/register"} element={<RegisterPage/>} ></Route>

      </Route>
    </Routes>
  );
}

export default App;
