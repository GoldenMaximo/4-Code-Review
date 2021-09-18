import styled from 'styled-components';

export const IllustrationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const EmptyIllustration = styled.img`
    width: 25%;
    margin: 2rem;

    @media (max-width: 768px) {
        width: 75%;
    }
`;
