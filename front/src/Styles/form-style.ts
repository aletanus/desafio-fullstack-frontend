import styled from "styled-components"

export const StyledForm = styled.form`
    
    fieldset {
        display: flex;
        flex-direction: column;
        margin-bottom: 22px;
        gap: 16px;
    }

    fieldset > label {
        color: var(--grey-0);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);
    }

    fieldset > input {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
        border-radius: var(--radius-1);
        display: flex;

        color: var(--grey-0);
        font-size: var(--unit-rem-16);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);

        height: 48px;
        padding: 0 16px;

    }

    fieldset > select {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
        border-radius: var(--radius-1);
        display: flex;

        color: var(--grey-1);
        font-size: var(--unit-rem-16);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);

        height: 48px;
        padding: 0 16px;

    }

    .p-error {
        color: var(--alert);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin: 22px 0;
    }

`