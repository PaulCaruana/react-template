import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

export const AddUserForm = ({createUser}) => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (user, e) => {
        createUser(user);
        e.target.reset();
    };
    return UserForm(register, errors, handleSubmit, onSubmit);
};

export const EditUserForm = ({user, updateUser}) => {
    const {register, setValue, getValues, errors, handleSubmit} = useForm({
        defaultValues: user,
    });
    useEffect(() => {
        const fields = getValues();
        for (const fieldName in fields) {
            setValue(fieldName, user[fieldName]);
        }
    }, [user, setValue, getValues]);

    const onSubmit = (form, e) => {
        const updatedUser = {...user, ...form};
        updateUser(updatedUser, setValue);
        e.target.reset();
    };

    return UserForm(register, errors, handleSubmit, onSubmit);
};

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
