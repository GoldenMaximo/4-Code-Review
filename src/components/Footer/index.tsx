import { memo } from 'react';
import { Typography } from 'antd';
const { Text } = Typography;

import Colors from '../../constants/colors';
import * as S from './styles';

const texts = Object.freeze({
    a: `© ${new Date().getFullYear()} Gustavo Máximo`,
    b: 'https://github.com/GoldenMaximo',
});

// Had to set the style here because Next.js kept throwing:
// "Warning: Expected server HTML to contain a matching <span> in X (random element)."
// when I tried to use Styled-Components. I do not know the reason why...
// https://stackoverflow.com/questions/46443652/react-16-warning-expected-server-html-to-contain-a-matching-div-in-body
const textStyle = Object.freeze({
    color: Colors.white,
});

const FooterComponent = () => (
    <S.StyledFooter>
        <a href={texts.b} target="_blank">
            <Text style={textStyle}>{texts.a}</Text>
        </a>
    </S.StyledFooter>
);

export const Footer = FooterComponent;
