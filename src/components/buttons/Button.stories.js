import React from "react";
import {Button} from "./ButtonStyles";

export default {
    title: "Buttons",
    component: Button,
};

export const ToButtons = () => (
    <>
        <Button>Button</Button>
        <Button color="primary">Button</Button>
        <Button color="info">Button</Button>
        <Button color="action">Button</Button>
        <Button color="warning">Button</Button>
        <Button color="danger">Button</Button>
        <Button color="success">Button</Button>

    </>
);

ToButtons.story = {
    name: "Button styles",
};
