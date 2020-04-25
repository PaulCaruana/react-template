import React from "react";
import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

import {
    Card,
    CardHeader,
    FormHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    FormButton,
    CardLink
} from "../../components/Widgets";
import "../../index.css";


const SampleForm = () => (
    <div className="App">
        <Card>
            <FormHeading>
                Sample Heading
            </FormHeading>
            <Box display="flex" justifyContent="space-evenly">
                <div>Widget1</div>
                <div>Widget4</div>
            </Box>
            <Box display="flex" justifyContent="space-evenly">
                <TextField
                    label="None"
                    id="margin-none2"
                    fullWidth
                    defaultValue="Default Value"
                    helperText="Some important text"
                    margin="normal"
                />

            </Box>
            <Box display="flex" justifyContent="flex-start">
                <FormButton type="button">Sign Up</FormButton>
                <FormButton color="secondary" type="button">Sign Up</FormButton>
            </Box>
        </Card>
    </div>
);

export default SampleForm;
