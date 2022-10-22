import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home/Home.jsx"));

function App() {
  return (
    <React.Suspense fallback={<h2> 加载中...</h2>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
