import styled from 'styled-components';
import { Layout } from 'antd';
import Colors from '../../constants/colors';

const { Content } = Layout;

export const HomeLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`;

export const ContentContainer = styled(Content)`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: ${Colors.lightBackground};
`;

export const InputContainer = styled.div`
    width: clamp(min(95%, 335px), 45%, 999px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`;
