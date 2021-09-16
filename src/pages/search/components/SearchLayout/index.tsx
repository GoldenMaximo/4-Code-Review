import { ReactChild } from 'react';
import { PageHeader } from 'antd';

import { PageTitleAndDescription } from '../../../../components/Head';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';

import * as S from './styles';

export const SearchLayout = ({
    children,
    pageTitle,
    pageDescription,
}: {
    children: ReactChild;
    pageTitle: string;
    pageDescription: string;
}) => {
    return (
        <>
            <PageTitleAndDescription pageTitle={pageTitle} pageDescription={pageDescription} />
            <S.StyledLayout>
                <Header />
                <S.ContentContainer>
                    <S.ContentSubContainer>
                        <S.HeaderContainer>
                            <PageHeader title={pageTitle} />
                        </S.HeaderContainer>
                        <S.ChildElementsContainer>{children}</S.ChildElementsContainer>
                    </S.ContentSubContainer>
                </S.ContentContainer>
                <Footer />
            </S.StyledLayout>
        </>
    );
};
