import React from "react";
import Box from "../Box";

export default {
    title: "Boxes",
    component: Box,
};

export const ToStorybook = () => <Box />;

ToStorybook.story = {
    name: "to Storybook",
};
