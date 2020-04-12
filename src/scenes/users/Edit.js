import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

const EditUserForm = ({user, updateUser}) => {
    const {register, reset, handleSubmit} = useForm();
    useEffect(() => {
        reset();
    }, [reset]);

    const onSubmit = (data, e) => {
        alert(JSON.stringify(data));
        //e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" defaultValue={user.name} name="name" ref={register}/>
            <label htmlFor="username">User name</label>
            <input type="text" defaultValue={user.username} name="username" ref={register}/>
            <input type="submit"/>

        </form>
    );
};

export default EditUserForm;