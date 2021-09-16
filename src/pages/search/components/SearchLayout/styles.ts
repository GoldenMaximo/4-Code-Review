import styled from 'styled-components';

import { Layout } from 'antd';
import Colors from '../../../../constants/colors';

const { Content } = Layout;

export const ContentContainer = styled(Content)`
    width: 100%;
    background: ${Colors.lightBackground};
`;

export const ContentSubContainer = styled.div`
    min-height: 78.5vh;
    height: fit-content;
    width: 98%;
    margin: 1% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: white;
`;

export const HeaderContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex: 0;
    flex-direction: row;
    align-items: flex-start;
`;

export const ChildElementsContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`;
