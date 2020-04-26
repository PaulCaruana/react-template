import React from "react";
import TextField from "@material-ui/core/TextField";

import {Panel, WindowHeader as Header, PanelBody as Body} from "./CardPanels";
import {Row} from "../common/Common";
import {Button} from "../buttons/ButtonStyles";

export default {
    title: "Forms",
    component: Panel,
};

export const ToForms = () => (
    <>
        <Panel>
            <Header title="Horizontal Form" onCancel={() => console.log("Cancelled")}/>
            <Body>
                <>
                    <Row align={"equal"}>
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
                    <Row >
                        <TextField
                            label="None"
                            id="margin-none3"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                        <TextField
                            label="None"
                            id="margin-none4"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                        />
                    </Row>
                    <Row>
                        <Button color="action" type="submit">Save</Button>
                    </Row>
                </>
            </Body>
        </Panel>
    </>
);

ToForms.story = {
    name: "Forms",
};
