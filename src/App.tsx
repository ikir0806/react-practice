import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home"
import { Movies } from "src/pages/Movies/Movies";
import { Music } from "./pages/Music/Music";
import { Info } from "./pages/Info";
import { Header } from "./components/Header/Header";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="music" element={<Music />} />
                <Route path="info" element={<Info />} />
            </Route>
        </Routes>
    );
}

export default App;