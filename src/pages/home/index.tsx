import React, { useMemo } from 'react';
import { List, Spin } from 'antd';
import { useCallback, useState } from 'react';
import { useGetReposQuery } from '../../services/githubApi';
import { ListItem } from './components';
import { useGetApodQuery } from '../../services/nasaApi';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';

const defaultPerPage = 10;

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setReposPerPage] = useState(defaultPerPage);

    const { isLoading: isGetReposLoading, data: resultFromGetReposQuery } = useGetReposQuery({
        currentPage,
        perPage: reposPerPage,
        // TODO: query from url param
        repositoryName: 'node',
    });

    const { isLoading: isGetApodLoading, data: resultFromGetApodQuery } = useGetApodQuery(
        process.env.NEXT_PUBLIC_NASA_APOD_KEY
            ? {
                  apiKey: process.env.NEXT_PUBLIC_NASA_APOD_KEY,
                  count: reposPerPage,
              }
            : skipToken
    );

    const handlePaginationChange = useCallback((page: number, pageSize?: number | undefined) => {
        setCurrentPage(page);
        pageSize && setReposPerPage(pageSize);
    }, []);

    console.log('here yo: ', resultFromGetApodQuery);

    return (
        <>
            {isGetReposLoading ? (
                <Spin />
            ) : (
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        defaultCurrent: 1,
                        current: currentPage,
                        onChange: handlePaginationChange,
                        pageSize: reposPerPage,
                        total: resultFromGetReposQuery?.total_count,
                    }}
                    dataSource={resultFromGetReposQuery?.items}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={(repositoryData, index) => (
                        <ListItem
                            repositoryData={repositoryData}
                            apodIsLoading={isGetApodLoading}
                            apodData={resultFromGetApodQuery?.[index]}
                        />
                    )}
                />
            )}
        </>
    );
}
