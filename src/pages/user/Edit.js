import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useService from "../../services/user/Service";


export default function Edit() {
    const params = useParams();
    const navigate = useNavigate();

    const {selectedItem: user, selectEdit, updateItem: updateUser, error} = useService();
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
    //console.log(user, ready)
    if (!user) {
        return null;
    }

    const onSubmit = (form, e) => {
        const {id} = user;
        const data = {...user, ...form};
        const payload = {id, data};
        updateUser(payload);
        e.target.reset();
        navigate("/");
    };

    return UserForm(register, errors, handleSubmit, onSubmit);
}

const UserForm = (register, errors, handleSubmit, onSubmit) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={register({required: {value: true, message: "Name is required"}})}/>
        <div>{errors?.name?.message}</div>
        <label htmlFor="username">User name</label>
        <input type="text" name="username" ref={register({required: {value: true, message: "User name is required"}})}/>
        <div>{errors?.username?.message}</div>

        <input type="submit"/>
    </form>
);
