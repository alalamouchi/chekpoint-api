import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="posts/:id" element={<Posts />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
