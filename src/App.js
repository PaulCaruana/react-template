import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

import ListUsers from "./scenes/user/List";
import AddUser from "./scenes/user/Add";
import EditUser from "./scenes/user/Edit";

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