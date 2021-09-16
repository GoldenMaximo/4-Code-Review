import { Typography } from 'antd';
const { Title } = Typography;

import { Footer } from '../../components';
import { SearchBar } from '../../components';

const texts = Object.freeze({
    a: 'GitHub Repo Search - 4-Code-Review',
    b: 'Search for repositories',
});

import * as S from './styles';

export default function Home() {
    return (
        <S.HomeLayout>
            <S.ContentContainer>
                <Title>{texts.a}</Title>
                <S.InputContainer>
                    <SearchBar size="large" />
                </S.InputContainer>
            </S.ContentContainer>
            <Footer />
        </S.HomeLayout>
    );
}
