import {memo} from "react";
import styled from "styled-components";
import {colors, mainRGBColor, borderShadow} from "../CommonStyles";

export const Panel = memo(styled.div`
    background: ${props => `${mainRGBColor(props.background, 1, colors.background.main)}`};
    border-radius: 6px;
    border: 0;
    box-shadow: ${props => `${borderShadow(props.borderColor)}`};
    color: ${props => `${mainRGBColor(props.text, 0.87, colors.text.main)}`};
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 30px;
    min-width: 0;
    position: relative;
    width: 100%;
    word-wrap: break-word;
  }
`);


export const PanelHeader = memo(styled.div`
    align-items: center;
    min-height: 2.14em;
    background: ${props => `${mainRGBColor(props.background, 1, "inherit")}`};
    color: ${props => `${mainRGBColor(props.text, 0.87, "inherit")}`};
    padding: 0 1.07em;
    border: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    &:last-child {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
  }
`);


export const PanelBody = memo(styled.div`
    background: ${props => `${mainRGBColor(props.background, 1, "inherit")}`};
    color: ${props => `${mainRGBColor(props.text, 0.87, "inherit")}`};
    padding: 1.0em 1.43em;
    border: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    &:last-child {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
  }
`);
