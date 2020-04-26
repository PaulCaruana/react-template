import React, {Fragment} from "react";
import TextField from "@material-ui/core/TextField";
import {Panel, WindowHeader, PanelBody} from "../../components/cardPanels/CardPanels";
import {Row} from "../../components/common/Common";
import Box from "@material-ui/core/Box";
import {Card, FormHeading, FormButton} from "../../components/Widgets";
import {Button} from "../../components/buttons/ButtonStyles";

const SaveForm = ({title, register, errors, handleSubmit, onSubmit, onCancel}) => (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Panel width={"500"}>
                <WindowHeader title={title} onCancel={() => onCancel()}/>
                <PanelBody>
                    <Row block>
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
                    </Row>
                    <Row>
                        <Button color="action" type="submit">Save</Button>
                    </Row>
                </PanelBody>
            </Panel>
        </form>
    </Fragment>

);

export default SaveForm;
