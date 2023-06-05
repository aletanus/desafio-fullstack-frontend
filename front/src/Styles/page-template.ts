import styled from "styled-components"

export const StyledPageTemplate = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 12px 50px;
    
    main {
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        flex-direction: column;
        border-top: solid 1px var(--grey-3);
        padding-top: 18px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: solid 1px var(--grey-3);
        margin-bottom: 18px;
        margin-top: 18px;
    }

    nav > figure{
        display: flex;
        height: 21px;
    }

    nav > .gray-button {
        width: fit-content;
    }
    
    #h2 {
        color: var(--grey-0);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        margin-bottom: 28px;
    }

    header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;

        .p-zero{
        margin-bottom: 0px;
    }
    } 

    main {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    main > header {
        display: flex;
        flex-direction: row;
    }

    main > header > button {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);

        color: var(--grey-0);
        font-size: var(--unit-rem-20);
        font-weight: var(--font-weight-5);
        line-height: var(--font-line-height-1);

        height: 32px;
        width: 32px;
    }

    main > header > button:hover {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
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

    section {
        background-color: var(--grey-3);
        border: solid 1px var(--grey-3);
        border-radius: var(--radius-1);
        padding:22px;
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
        gap: 16px;
    }

    
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--grey-4);
        border: solid 1px var(--grey-4);
        border-radius: var(--radius-1);
        padding: 13px 22px;
    }

    li:hover {
        background-color: var(--grey-2);
        border: solid 1px var(--grey-2);
        transition: 0.4s;
    }


    li >  h3 {
        color: var(--grey-0);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
    }

    li >  div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    li  {
        display: flex;
        gap: 10px;

        height: 47px;
    }

    li > div > p {
        color: var(--grey-1);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);
    }

    li > div > div {
        display: flex;
        gap: 2px;
    }

    li > div > div > button {
        
        border: solid 1px var(--total-opacity);
    }

    li > div > div > button:hover {
        border-radius: var(--radius-1);
        border: solid 1px var(--grey-1);
        transition: 0.4s;
    }

    li > div > div > button > figure {
        margin: 3px;
        height: 14px;
    }

    li > div > div > button > figure > img {
        height: 100%;
    }

    @media (min-width: 425px) {  
        margin: 0px 10% 50px;
    }

    @media (min-width: 525px) {  
        margin: 0px 15% 50px;
    }

    @media (min-width: 768px) {  
        margin: 0px 20% 50px;
        header {
            flex-direction: row;
        } 
    }

    @media (min-width: 1024px) {
        margin: 0px 25% 50px;
    }

    @media (min-width: 1200px){
        margin: 0px 30% 50px;
    }

    @media (min-width: 2700px){
    }

`