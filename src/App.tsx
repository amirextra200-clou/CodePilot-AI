import { useState } from "react";
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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleSidebar() {
        setSidebarOpen((prev) => !prev);
    }

    function closeSidebar() {
        setSidebarOpen(false);
    }

    return (
        <BrowserRouter>
            <Navbar onMenuClick={toggleSidebar} />

            <div className="main-layout">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={closeSidebar}
                />

                {sidebarOpen && (
                    <div
                        className="sidebar-overlay"
                        onClick={closeSidebar}
                    />
                )}

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