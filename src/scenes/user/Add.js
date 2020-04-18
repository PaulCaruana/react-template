import React from "react";
import {useNavigate} from "react-router-dom";

export default function Add() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Add User</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
}