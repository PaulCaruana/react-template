import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = ({user={}, updateUser}) => {
    console.log(user)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: user.name,
            username: user.username,
        }
    });

    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref={register} />
            <label htmlFor="username">User name</label>
            <input type="text" name="username" ref={register} />
            <input type="submit" />
        </form>
    );
}

export default EditUserForm;