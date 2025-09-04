import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import HomePage from "./pages/HomePage/HomePage";
// import CampersPage from "./pages/CampersPage/CampersPage";
// import NotFound from "./pages/NotFound/NotFound";
// import CamperPage from "./pages/CamperPage/CamperPage";
import Layout from "./components/Layout/Layout";
import { ClipLoader } from "react-spinners";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const CampersPage = lazy(() => import("./pages/CampersPage/CampersPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage.jsx"));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div className="loadPage"><ClipLoader size={52} color="#D84343"/></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />} />
            <Route path="/catalog/:id" element={<CamperPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
