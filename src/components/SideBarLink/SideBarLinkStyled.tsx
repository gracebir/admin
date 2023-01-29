import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideLink = styled(NavLink)`
    height: 3.5em;
    width: 100%;
    color: #A4A6B3;
    display: flex;
    padding-left: 1.8125em;
    align-items: center;
    gap: 1.4em;
    text-decoration: none;
    background-color: #363740;
    transition: .3s ease-in-out;
    &:active{
        background-color: #9FA2B4;
        border-left: #DDE2FF 3px solid;
    }

    &:hover{
        background-color: #9FA2B4;
        color: #DDE2FF;
        border-left: #DDE2FF 3px solid;
    }
`

export const LinkText = styled.p`
    font-weight: 400;
    font-size: 1rem;
`