import React, {memo} from "react";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {PanelHeader as Header} from "../cardPanels/CardPanelStyles";
import {RowBox} from "../CommonStyles";


export const FormHeader = memo(({children, title, onCancel, text, background}) => (
    <Header text={text} background={background}>
        <div>
            {title && (<h4>{title}</h4>)}
            {children}
        </div>
        {onCancel && (
            <IconButton onClick={onCancel}>
                <CloseIcon style={{color: text}} />
            </IconButton>
        )}
    </Header>
));

FormHeader.displayName = "FormHeader";

export const FieldSet = (props) => {
    const inline = props.inline || props.inline === "true";
    const flexDirection = (inline) ? "row" : "column";
    const justifyContent = props.justifyContent || "space-between";
    const flexDft = (justifyContent === "space-between")? "auto" : "none";
    const flex = props.flex || flexDft;

    return (
        <RowBox display="flex" flex={flex} flexDirection={flexDirection} justifyContent={justifyContent}>
            {props.children}
        </RowBox>
    );
};
