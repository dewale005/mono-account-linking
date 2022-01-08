import styled from "styled-components";
import { Input } from 'semantic-ui-react'


export const TextInput = styled(Input)`
    margin: 10px 0;
    width: 360px;
    height: 55px;

    &::placeholder {
        font-size: 1px
    }

    & :focus {
        border-color: #182CD1 !important
    }
`