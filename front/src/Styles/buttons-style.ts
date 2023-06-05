import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledButton = styled.button`
    
    &.pink-button {
        background-color: var(--color-primary);
        border: solid 1px var(--color-primary);
        border-radius: var(--radius-1);

        color: var(--grey-0);
        font-size: var(--unit-rem-16);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);

        height: 48px;
        width: 100%;
        margin: 0 0 22px;
        padding: 0 16px;
    }

    &.pink-button:hover {
        background-color: var(--color-primary-focus);
        border: solid 1px var(--color-primary-focus);
    }

    &.pink-button:active {
        background-color: var(--color-primary-negative);
        border: solid 1px var(--color-primary-negative);
    }

    &.pink-button:disabled {
        background-color: var(--grey-1);
        border: solid 1px var(--grey-1);
    }

    /* GRAY BUTTON */

    &.gray-button {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);

        color: var(--grey-0);
        font-size: var(--unit-rem-16);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);

        height: 48px;
        width: 100%;
        margin: 0 0 22px;
        padding: 0 16px;
    }

    &.gray-button:hover {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
    }

`

export const StyledLink = styled(Link)`
        
    &.grey-Link {
        background-color: var(--grey-1);
        border: solid 1px var(--grey-1);
        border-radius: var(--radius-1);

        display: flex;
        align-items: center;
        justify-content: center;
    
        color: var(--grey-0);
        font-size: var(--unit-rem-16);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);

        height: 48px;
        width: 100%;
        padding: 0 16px;
    }

    &.grey-Link:hover {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
    }

`