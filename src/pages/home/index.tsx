import { Typography } from 'antd';
const { Title } = Typography;

import { Footer, PageTitleAndDescription, SearchBar } from '../../components';

const texts = Object.freeze({
    a: 'GitHub Repo Search - 4-Code-Review',
    b: 'Search for repositories',
});

import * as S from './styles';

export default function Home() {
    return (
        <>
            <PageTitleAndDescription pageDescription={texts.a} pageTitle={texts.b} />
            <S.HomeLayout>
                <S.ContentContainer>
                    <Title>{texts.a}</Title>
                    <S.InputContainer>
                        <SearchBar size="large" />
                    </S.InputContainer>
                </S.ContentContainer>
                <Footer />
            </S.HomeLayout>
        </>
    );
}
