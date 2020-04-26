import React, {memo} from "react";
import {RowStyle} from "./CommonStyles";

// eslint-disable-next-line import/prefer-default-export
export const Row = memo((props) => {
    const {align = "left", block = false, gap} = props;
    const isBlock = block || block === "true" || block === "";
    const direction = (isBlock) ? "column" : "row";
    const className = `dir-${direction}-rowtype align-${align}-rowtype`;
    const wrap = (align === "wrap") ? "wrap" : "nowrap";
    const display = (isBlock && align === "right")? "block" : "flex";
    const justifyContentTypes = {
        left: "flex-start",
        equal: "space-between",
        between: "space-between",
        evenly: "space-evenly",
        around: "space-around",
        center: "center",
        right: "flex-end",
        wrap: "flex-start"
    };
    const justifyContent = justifyContentTypes[align];

    return (
        <RowStyle
            align={align}
            display={display}
            className={className}
            flexDirection={direction}
            justifyContent={justifyContent}
            flexWrap={wrap}
            gap={gap}
        >
            {props.children}
        </RowStyle>
    );
});
Row.displayName = "Row";
