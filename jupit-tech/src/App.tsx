import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/UI/Loader";

const HomePageOne = lazy(() => import("./pages/HomePageOne"));
const HomePageTwo = lazy(() => import("./pages/HomePageTwo"));
const HomePageThree = lazy(() => import("./pages/HomePageThree"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" index element={<HomePageOne />} />
        <Route path="homepage-2" index element={<HomePageTwo />} />
        <Route path="homepage-3" index element={<HomePageThree />} />
      </Routes>
    </Suspense>
  );
}
