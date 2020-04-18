import React from "react";

const SaveForm = (register, errors, handleSubmit, onSubmit) => (
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

export default SaveForm;
