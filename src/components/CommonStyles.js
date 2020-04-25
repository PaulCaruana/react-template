import styled from "styled-components";
import { palette, spacing } from "@material-ui/system";

export const Box = styled.div`${spacing}${palette}`;
console.log("spacing=", spacing)
console.log("palette=", palette)
const gray = [
    "#999999",
    "#777777",
    "#3c4858",
    "#aaaaaa",
    "#d2d2d2",
    "#dddddd",
    "#b4b4b4",
    "#555555",
    "#333333",
    "#a9afbb",
    "#eeeeee",
    "#e7e7e7"
];
const black = "#000000";
const white = "#ffffff";

export const colors = {
    primary: {main: "#9c27b0", light: "#ab47bc", dark: "#8e24aa", mid: "#af2cc5"},
    info: {main: "#00acc1", light: "#26c6da", dark: "#00acc1", mid: "#00d3ee"},
    action: {main: "#e91e63", light: "#ec407a", dark: "#d81b60", mid: "#eb3573"},
    warning: {main: "#ff9800", light: "#ffa726", dark: "#fb8c00", mid: "#ffa21a"},
    danger: {main: "#f44336", light: "#ef5350", dark: "#e53935", mid: "#f55a4e"},
    success: {main: "#4caf50", light: "#66bb6a", dark: "#43a047", mid: "#5cb860"},
    text: {main: black},
    background: {main: white},
    black: {main: black},
    white: {main: white},
    border: {main: black},
};


export const RGB = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)
    ].join(", ") : null;
};

export const mainColor = (color, dftColor = colors.primary.main) =>
    ((colors[color]) ? colors[color].main : dftColor);

export const mainRGBColor = (color, opacity, dftColor = colors.primary.main) => {
    const colorSelected = (colors[color] && colors[color].main) || dftColor;
    console.log(color)
    if (colorSelected === "inherit") {
        return colorSelected;
    }
    const result = `rgba(${RGB(colorSelected)}, ${opacity})`;
    return result;
};

export const boxShadow = (color, dftColor = colors.primary.main) => {
    const colorSelected = (colors[color] && colors[color].main) || dftColor;
    const colorRGB = RGB(colorSelected);
    return `
        0 2px 2px 0 rgba(${colorRGB},0.14), 
        0 3px 1px -2px rgba(${colorRGB},0.2), 
        0 1px 5px 0 rgba(${colorRGB},0.12)
    `;
};

export const boxShadowHilite = (color, dftColor = colors.primary.main) => {
    const colorSelected = (colors[color] && colors[color].main) || dftColor;
    const colorRGB = RGB(colorSelected);
    const blackRGB = RGB(black);
    return `
        0 14px 26px -12px rgba(${colorRGB},0.42), 
        0 4px 23px 0px rgba(${blackRGB},0.12), 
        0 8px 10px -5px rgba(${colorRGB},0.2)
    `;
};

export const borderShadow = (color, dftColor = colors.border.main) => {
    const colorSelected = (colors[color] && colors[color].main) || dftColor;
    const colorRGB = RGB(colorSelected);
    return `0 1px 4px 0 rgba(${colorRGB}, 0.14)`;
};
