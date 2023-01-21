import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/UI/Loader";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./HomePage"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="homepage/*" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}
