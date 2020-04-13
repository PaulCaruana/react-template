import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

const AddUserForm = ({createUser}) => {
    const {register, reset, handleSubmit} = useForm();
    useEffect(() => {
        reset();
    }, [reset]);

    const onSubmit = (user, e) => {
        createUser(user);
        //e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref={register}/>
            <label htmlFor="username">User name</label>
            <input type="text" name="username" ref={register}/>
            <input type="submit"/>

        </form>
    );
};

export default AddUserForm;