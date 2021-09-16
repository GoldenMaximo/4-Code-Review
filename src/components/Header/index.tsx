import { useCallback } from 'react';
import router from 'next/router';
import { Tooltip } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { SearchBar } from '../SearchBar';

import * as S from './styles';

const texts = Object.freeze({
    a: 'Go back Home',
    b: '4-Code-Review',
});

// Even though currently this component is only being used @ /search
// I still decided to leave it here as it would make more sense
// if (and only if) there were going to be more pages to be
// implemented later on, which is likely as the /issues page
// is still something to think about
export const Header = () => {
    const handleClick = useCallback(() => router.push('/'), []);

    return (
        <S.StyledHeader>
            <S.AppNameContainer>
                <Tooltip title={texts.a}>
                    <S.StyledTitle onClick={handleClick}>{texts.b}</S.StyledTitle>
                </Tooltip>
            </S.AppNameContainer>
            <S.SearchContainer>
                <SearchBar size="middle" />
            </S.SearchContainer>
            <S.StyledMenu theme="dark" mode="horizontal">
                <S.HomeIconContainer key="1" icon={<HomeOutlined />} onClick={handleClick}>
                    {texts.a}
                </S.HomeIconContainer>
            </S.StyledMenu>
        </S.StyledHeader>
    );
};
