import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useService from "../../services/user/Service";
import SaveForm from "./SaveForm";
import {USERS_HOME_PAGE} from ".";


export default function Edit() {
    const params = useParams();
    const navigate = useNavigate();

    const {user, selectEdit, updateUser, error} = useService();
    useEffect(() => {
        selectEdit(params.id);
    }, [params, selectEdit]);

    const {register, setValue, getValues, errors, handleSubmit} = useForm();
    useEffect(() => {
        const fields = getValues();
        for (const fieldName in fields) {
            setValue(fieldName, user[fieldName]);
        }
    }, [user, setValue, getValues]);

    if (error) {
        return <div>Error: {error}, please go back to list page</div>;
    }
    if (!user) {
        return null;
    }

    const onSubmit = (form, e) => {
        const {id} = user;
        const data = {...user, ...form};
        const payload = {id, data};
        updateUser(payload);
        e.target.reset();
        navigate(USERS_HOME_PAGE);
    };

    const onCancel = () => navigate(USERS_HOME_PAGE);
    const props = {title: "Edit user", register, errors, handleSubmit, onSubmit, onCancel};

    return <SaveForm {...props} />;
}
