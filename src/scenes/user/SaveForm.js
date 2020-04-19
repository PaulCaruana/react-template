import React, {Fragment} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Card, FormHeading, FormButton} from "../../components/atoms/Widgets";

const SaveForm = ({title, register, errors, handleSubmit, onSubmit, onCancel}) => (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Card width={"500"}>
                    <FormHeading>
                        {title}
                    </FormHeading>
                    <Box display="flex" justifyContent="space-evenly">
                        <TextField
                            id="outlined-email-input-required"
                            label="Name"
                            fullWidth
                            autoFocus={true}
                            name="name"
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            inputRef={register({required: {value: true, message: "Name is required"}})}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-evenly">
                        <TextField
                            id="outlined-email-input-required"
                            label="User name"
                            fullWidth
                            name="username"
                            margin="normal"
                            error={!!errors.username}
                            helperText={errors?.username?.message}
                            inputRef={register({required: {value: true, message: "User name is required"}})}
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-start">
                        <FormButton type="submit">Save</FormButton>
                        <FormButton color="secondary" onClick={() => onCancel()} type="button">
                            Cancel
                        </FormButton>
                    </Box>
                </Card>
            </form>
        </Fragment>

    );

export default SaveForm;
