import { memo } from "react";
import styled from "styled-components";
import {mainColor, boxShadow, boxShadowHilite} from "../CommonStyles";


// eslint-disable-next-line import/prefer-default-export
export const FormButton = memo(styled.button`
  color: #fff;
  background-color: ${props => `${mainColor(props.color)}`};
  border: 0;
  border-radius: 3px;
  box-shadow: ${props => `${boxShadow(props.color)}`};
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.428571;
  letter-spacing: 0;
  margin: 16px 8px 0px 0px;
  min-height: auto;
  min-width: auto;
  position: relative;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
  vertical-align: middle;
  white-space: nowrap;
  will-change: box-shadow,transformwhit;
  &:hover {
    box-shadow: ${props => `${boxShadowHilite(props.color)}`};
  }
`);
