import styled from "styled-components";

export const ParagraphStyled = styled.p`
    color: white;
    border: 1px solid white;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: .5rem 0;
    margin-top: 10px;
    border-radius: 5px;
    padding: .5rem;
    background: #aaeeff40;
    width: 600px;

    @media (max-width: 400px) {
        width: 300px;
    }
`