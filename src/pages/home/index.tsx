import { Typography } from 'antd';
const { Title } = Typography;

import { Footer, PageTitleAndDescription, SearchBar } from '../../components';

const texts = Object.freeze({
    a: '4-Code-Review',
    b: 'GitHub Repo Search',
    c: 'Search for repositories',
});

import * as S from './styles';

export default function Home() {
    return (
        <>
            <PageTitleAndDescription pageDescription={texts.a} pageTitle={texts.b} />
            <S.HomeLayout>
                <S.ContentContainer>
                    <Title>{texts.a}</Title>
                    <Title level={3}>{texts.b}</Title>
                    <S.InputContainer>
                        <SearchBar size="large" />
                    </S.InputContainer>
                </S.ContentContainer>
                <Footer />
            </S.HomeLayout>
        </>
    );
}
