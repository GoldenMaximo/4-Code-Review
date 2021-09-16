import styled from 'styled-components';

import { Layout } from 'antd';
const { Footer } = Layout;

import Colors from '../../constants/colors';

export const StyledFooter = styled(Footer)`
    background-color: ${Colors.darkBackground};
    width: 100%;
`;
