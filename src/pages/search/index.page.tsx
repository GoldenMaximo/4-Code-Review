import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';
import { Spin } from 'antd';

import { useGetReposQuery } from '../../services/githubApi';
import { useGetApodQuery } from '../../services/nasaApi';
import { ListItem } from './components/ListItem';
import { SearchLayout } from './components/SearchLayout';
import { ListFooter } from './components/ListFooter';

import * as S from './styles';
import { IRepository } from '../../interfaces/repositories/IRepository';

const defaultPerPage = 10;

export default function Search() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(defaultPerPage);
    const [repositoryName, setRepositoryName] = useState('');

    const texts = useMemo(() => {
        return Object.freeze({
            a: 'Results page',
            b: `Showing results for: ${repositoryName}`,
        });
    }, [repositoryName]);

    useEffect(() => {
        if (!router.isReady) return;

        setRepositoryName(
            // Checks if there's more than one param being used
            // and picks the first position if it's the case.
            // E.g.: /search?repository-name=node&repository-name=react
            typeof router.query['repository-name'] === 'string'
                ? router.query['repository-name']
                : router.query['repository-name']?.[0] ?? ''
        );
    }, [router.query, router.isReady]);

    const {
        isLoading: isGetReposLoading,
        data: resultFromGetReposQuery,
        refetch: refetchReposQuery,
    } = useGetReposQuery(
        repositoryName
            ? {
                  currentPage,
                  perPage: reposPerPage,
                  repositoryName,
              }
            : skipToken
    );

    useEffect(() => {
        repositoryName && refetchReposQuery();
    }, [repositoryName]);

    const {
        isLoading: isGetApodLoading,
        data: resultFromGetApodQuery,
        refetch: refetchApodQuery,
    } = useGetApodQuery(
        process.env.NEXT_PUBLIC_NASA_APOD_KEY && resultFromGetReposQuery
            ? {
                  apiKey: process.env.NEXT_PUBLIC_NASA_APOD_KEY,
                  count: resultFromGetReposQuery.items.length,
              }
            : skipToken
    );

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_NASA_APOD_KEY && resultFromGetReposQuery && !isGetApodLoading) {
            refetchApodQuery();
        }
    }, [resultFromGetReposQuery]);

    const handlePaginationChange = useCallback((page: number, pageSize?: number | undefined) => {
        setCurrentPage(page);
        pageSize && setReposPerPage(pageSize);
        process.env.NEXT_PUBLIC_NASA_APOD_KEY && refetchApodQuery();
    }, []);

    const listPagination = useMemo(() => {
        return {
            defaultCurrent: 1,
            current: currentPage,
            onChange: handlePaginationChange,
            pageSize: reposPerPage,
            total: resultFromGetReposQuery?.total_count,
        };
    }, [currentPage, reposPerPage, resultFromGetReposQuery?.total_count]);

    return (
        <SearchLayout pageDescription={texts.a} pageTitle={texts.b}>
            {isGetReposLoading ? (
                <Spin />
            ) : (
                <S.StyledList
                    itemLayout="vertical"
                    size="large"
                    pagination={listPagination}
                    dataSource={resultFromGetReposQuery?.items}
                    footer={<ListFooter />}
                    renderItem={(repositoryData, index) => (
                        <ListItem
                            // renderItem params cannot be typed with custom types
                            // hence the manual typing here
                            repositoryData={repositoryData as IRepository}
                            apodIsLoading={isGetApodLoading}
                            apodData={resultFromGetApodQuery?.[index]}
                        />
                    )}
                />
            )}
        </SearchLayout>
    );
}
