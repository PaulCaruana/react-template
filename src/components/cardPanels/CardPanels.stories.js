import React from "react";
import {Panel, WindowHeader, PanelBody} from "./CardPanels";
import {Row} from "../common/Common";

export default {
    title: "Cards and Panels",
    component: Panel,
};

const widgets = () => (
    <>
        <div style={{backgroundColor: "red"}}>Widget1</div>
        <div style={{backgroundColor: "green", width: "100px"}}>Widget Type 2</div>
        <div style={{backgroundColor: "orange", width: "80px"}}>Widget3</div>
    </>
);

export const ToCardPanels = () => (
    <>
        <Panel>
            <WindowHeader title="Title" onCancel={() => console.log("Cancelled")}/>
            <PanelBody>
                <>
                    <h6>Left</h6>
                    <Row>
                        {widgets()}
                    </Row>
                    <h6>Equal</h6>
                    <Row align="equal">
                        {widgets()}
                    </Row>
                    <h6>Between</h6>
                    <Row align="between">
                        {widgets()}
                    </Row>
                    <h6>Evenly</h6>
                    <Row align="evenly">
                        {widgets()}
                    </Row>
                    <h6>Around</h6>
                    <Row align="around">
                        {widgets()}
                    </Row>
                    <h6>Center</h6>
                    <Row align="center">
                        {widgets()}
                    </Row>
                    <h6>Center no gap</h6>
                    <Row align="center" gap={"0"}>
                        {widgets()}
                    </Row>
                    <h6>Right</h6>
                    <Row align="right">
                        {widgets()}
                    </Row>
                    <h6>Gap 10px</h6>
                    <Row align="equal" gap={"10px"}>
                        {widgets()}
                    </Row>
                    <h6>Wrap</h6>
                    <Row align="wrap">
                        {widgets()}{widgets()}{widgets()}{widgets()}{widgets()}{widgets()}
                    </Row>
                    <h6>Wrap no gap</h6>
                    <Row align="wrap" gap={"unset"}>
                        {widgets()}{widgets()}{widgets()}{widgets()}{widgets()}{widgets()}
                    </Row>
                    <h6>Block Right</h6>
                    <Row align="right" block="true">
                        {widgets()}
                    </Row>
                    <h6>Block</h6>
                    <Row block>
                        {widgets()}
                    </Row>
                    <h6>Block Center</h6>
                    <Row align="center" block={true}>
                        {widgets()}
                    </Row>
                </>
            </PanelBody>
        </Panel>
    </>
);

ToCardPanels.story = {
    name: "Panels",
};
