import styled from "styled-components"

export const StyledRegister = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 114px 12px 50px;

    main {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 35px;
        padding: 42px 22px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;    
        max-width: 304px;
    }

    nav > figure{
        height: 50px;
        width: 150px;
    }

    nav > .gray-button{
        width: fit-content;
    }

    main > h2 {
        color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin-bottom: 28px;
    }

    main > form > div {
        display: flex;
        justify-content: center;
    }

    .p {
        color: var(--grey-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-6);
        margin: 0 0 22px 0;
    }

    .p-error {
        color: var(--alert);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin: 22px 0;
    }

`