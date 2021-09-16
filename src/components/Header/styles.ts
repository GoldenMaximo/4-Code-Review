import styled from 'styled-components';

import { Layout, Menu } from 'antd';
import Colors from '../../constants/colors';
const { Header } = Layout;

export const AppNameContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    margin-right: 1rem;
`;

export const StyledTitle = styled.h4`
    color: ${Colors.white};
    margin: 0 auto;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HomeIconContainer = styled(Menu.Item)`
    float: right;
`;

export const StyledMenu = styled(Menu)`
    display: flex;
    justify-content: flex-end;
`;

export const StyledHeader = styled(Header)`
    width: 100%;
`;
