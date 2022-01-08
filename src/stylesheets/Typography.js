import { Link } from "react-router-dom";
import styled from "styled-components";

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Duplicate sans';
    color: ${ props => props.primary ? '#182CD1' : "#101010"} !important;
    opacity: 0.6;
    margin: 0;
    
    & a {
        color: ${ props => props.primary ? '#182CD1' : "#101010"} !important;
        text-decoration: underline;
    }
`



