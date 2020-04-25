import React from "react";
import {FormButton} from "./ButtonStyles";

export default {
    title: "Buttons",
    component: FormButton,
};

export const ToButtons = () => (
    <>
        <FormButton>Button</FormButton>
        <FormButton color="primary">Button</FormButton>
        <FormButton color="info">Button</FormButton>
        <FormButton color="action">Button</FormButton>
        <FormButton color="warning">Button</FormButton>
        <FormButton color="danger">Button</FormButton>
        <FormButton color="success">Button</FormButton>

    </>
);

ToButtons.story = {
    name: "Button styles",
};

