import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

import ListUsers from "./pages/user/List";
import AddUser from "./pages/user/Add";
import EditUser from "./pages/user/Edit";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListUsers />} />
                <Route path="/add" element={<AddUser />} />
                <Route path="/:id/edit" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    );
}