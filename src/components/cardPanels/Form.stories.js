import React from "react";
import TextField from "@material-ui/core/TextField";

import {Panel, WindowHeader, PanelBody, PanelRow as Row } from "./CardPanels";

export default {
    title: "Forms",
    component: Panel,
};

export const ToForms = () => (
    <>
        <Panel>
            <WindowHeader title="Horizontal Form" onCancel={() => console.log("Cancelled")}/>
            <PanelBody>
                <>
                    <Row inline="true" >
                        <TextField
                            label="None"
                            id="margin-none"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                        <TextField
                            label="None"
                            id="margin-none2"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                        <TextField
                            label="None"
                            id="margin-none32"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                    </Row>
                    <Row inline="true">
                        <TextField
                            label="None"
                            id="margin-none3"
                            fullWidth
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                        <TextField
                            label="None"
                            id="margin-none4"
                            fullWidth
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                    </Row></>
            </PanelBody>
        </Panel>
    </>
);

ToForms.story = {
    name: "Forms",
};
