import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home/Home.jsx"));

const LessonList = React.lazy(() =>
  import("./Lesson/LessonList/LessonList.jsx")
);
const LessonDetail = React.lazy(() =>
  import("./Lesson/LessonDetail/LessonDetail.jsx")
);
const ClassHour = React.lazy(() => import("./Lesson/ClassHour/ClassHour.jsx"));

const BlogList = React.lazy(() => import("./Blog/BlogList/BlogList.jsx"));
const BlogDetail = React.lazy(() => import("./Blog/BlogDetail/BlogDetail.jsx"));

const Creative = React.lazy(() => import("./Creative/Creative/Creative.jsx"));

function App() {
  return (
    <React.Suspense fallback={<h2> 加载中...</h2>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/LessonList" element={<LessonList />}></Route>
        <Route path="/LessonDetail/:Id" element={<LessonDetail />}></Route>
        <Route path="/ClassHour/:Id" element={<ClassHour />}></Route>

        <Route path="/BlogList" element={<BlogList />}></Route>
        <Route path="/BlogDetail/:Id" element={<BlogDetail />}></Route>

        <Route path="/Creative" element={<Creative />}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
