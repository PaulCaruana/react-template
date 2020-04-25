import React from "react";
import {Panel, PanelBody} from "../cardPanels/CardPanels";
import {FormHeader, FieldSet, FieldSet2} from "./Form";


export default {
    title: "Forms",
    component: Panel,
};

export const ToForms = () => (
    <>
        <Panel>
            <FormHeader title="Horizontal Form" onCancel={() => console.log("Cancelled")}/>
            <PanelBody>
                <>
                    <FieldSet inline={"true"}>
                        <div>Widget1</div>
                        <div>Widget2</div>
                    </FieldSet>
                    <FieldSet2 inline={"true"}>
                        <div>Widget1</div>
                        <div>Widget2</div>
                    </FieldSet2>
                </>
            </PanelBody>
        </Panel>
    </>
);

ToForms.story = {
    name: "Forms",
};
