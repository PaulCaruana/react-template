import React, {memo} from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {PanelHeader as Header} from "./CardPanelStyles";

export {Panel} from "./CardPanelStyles";

export const FormHeader = memo(({children, title, onCancel, text, background}) => (
    <Header text={text} background={background}>
        <div>
            {title && (<h4>{title}</h4>)}
            {children}
        </div>
        {onCancel && (
            <IconButton onClick={onCancel}>
                <CloseIcon style={{ color: text }} fontSize="large"/>
            </IconButton>
        )}
    </Header>
));

FormHeader.displayName = "FormHeader";

export {PanelBody} from "./CardPanelStyles";