import { Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";

const HomePage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePageOne />} />
        <Route path="2" element={<HomePageTwo />} />
        <Route path="3" element={<HomePageThree />} />
      </Routes>
    </Layout>
  );
};

export default HomePage;
