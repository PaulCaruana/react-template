import React, {memo} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {PanelHeader as Header} from "../cardPanels/CardPanelStyles";
import Box from "@material-ui/core/Box";
import {Box as Box2} from "../CommonStyles";


export const FormHeader = memo(({children, title, onCancel, text, background}) => (
    <Header text={text} background={background}>
        <div>
            {title && (<h4>{title}</h4>)}
            {children}
        </div>
        {onCancel && (
            <IconButton onClick={onCancel}>
                <CloseIcon style={{color: text}} fontSize="large"/>
            </IconButton>
        )}
    </Header>
));

FormHeader.displayName = "FormHeader";

export const FieldSet = (props) => {
    const inline = props.inline || false;
    const flexDirection = (inline) ? "row" : "column";
    console.log(flexDirection)
    const justifyContent = props.justifyContent || "space-evenly";
    return (
        <>
            <Box display="flex" style={{width: "100%"}} flexDirection={flexDirection} justifyContent={justifyContent}>
                <div>Widget1</div>
                <div>Widget4</div>
            </Box>
        </>
    );
};

export const FieldSet2 = (props) => {
    const inline = props.inline || false;
    const flexDirection = (inline) ? "row" : "column";
    console.log(flexDirection)
    const justifyContent = props.justifyContent || "space-evenly";
    return (
        <>
            <Box2 display="flex" flexDirection={flexDirection} justifyContent={justifyContent}>
                <div>Widget1</div>
                <div>Widget4</div>
            </Box2>
        </>
    );
};