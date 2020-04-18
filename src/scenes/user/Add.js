import React from "react";
import {useForm} from "react-hook-form";

import {useNavigate} from "react-router-dom";
import useService from "../../services/user/Service";
import {USERS_HOME} from ".";
import SaveForm from "./SaveForm";

export default function Add() {
    const navigate = useNavigate();
    const {register, errors, handleSubmit} = useForm();
    const {createUser, error} = useService();

    if (error) {
        return <div>Error: {error}, please go back to list page</div>;
    }
    const onSubmit = (user, e) => {
        const payload = {data: user};
        createUser(payload);
        e.target.reset();
        navigate(USERS_HOME);
    };

    const onCancel = () => navigate(USERS_HOME);

    return SaveForm(register, errors, handleSubmit, onSubmit, onCancel);
}
