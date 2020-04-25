import React from "react";
import {Panel, FormHeader, PanelBody} from "./CardPanels";


export default {
    title: "Cards and Panels",
    component: Panel,
};

export const ToCardPanels = () => (
    <>
        <Panel>
            <FormHeader title="Horizontal Form" onCancel={() => console.log("Cancelled")}/>
            <PanelBody>Body</PanelBody>
        </Panel>
    </>
);

ToCardPanels.story = {
    name: "Panels",
};
