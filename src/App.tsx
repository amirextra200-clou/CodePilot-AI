import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExplainCode from "./pages/ExplainCode";
import Debugger from "./pages/Debugger";
import CodeGenerator from "./pages/CodeGenerator";
import Learning from "./pages/Learning";
import Projects from "./pages/Projects";
import Errors from "./pages/Errors";
import HistoryPage from "./pages/HistoryPage";
import Dashboard from "./pages/Dashboard";

import "./styles/Layout.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="main-layout">
                <Sidebar />

                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/explain"
                            element={<ExplainCode />}
                        />

                        <Route
                            path="/debugger"
                            element={<Debugger />}
                        />

                        <Route
                            path="/generator"
                            element={<CodeGenerator />}
                        />

                        <Route
                            path="/learning"
                            element={<Learning />}
                        />

                        <Route
                            path="/Projects"
                            element={<Projects />}
                        />

                        <Route
                            path="/errors"
                            element={<Errors />}
                        />

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/history"
                            element={<HistoryPage />}
                        />
                    </Routes>

                    <Footer />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
