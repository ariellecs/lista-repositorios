import styled from 'styled-components';

export const Paragraph = styled.p`
    font-family: "Lucida Console", "Courier New", monospace;

`;

export const H1Style = styled.h1`
    text-shadow: 2px 2px 5px blue;
    font-family: "Lucida Console", "Courier New", monospace;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: rgb(14,17,14);
    background: linear-gradient(180deg, rgba(14,17,14,0.8281687675070029) 0%, rgba(80,97,95,0.8029586834733894) 32%, rgba(193,212,207,0.9150035014005602) 76%);
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 5px;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: gainsboro;
    color: #000;
    border-radius: 5px;
    margin-top: 10px;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;