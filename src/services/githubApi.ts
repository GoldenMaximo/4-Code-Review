import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IRepoIssuesQueryResponse } from '../interfaces/repositories/IRepoIssuesQueryResponse';
import { IRepository } from '../interfaces/repositories/IRepository';
import { IRepositoryQueryResponse } from '../interfaces/repositories/IRepositoryQueryResponse';
import { IUser } from '../interfaces/user/IUser';

interface IRepositoryQueryData {
    repositoryName: IRepository['name'];
    perPage: number;
    currentPage: number;
}

interface IRepoIssuesData {
    userName: IUser['login'];
    repositoryName: IRepository['name'];
    perPage: number;
    currentPage: number;
}

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_GITHUB_SEARCH_ENDPOINT,
    }),
    endpoints: builder => ({
        getRepos: builder.query<IRepositoryQueryResponse, IRepositoryQueryData>({
            query: ({ repositoryName, perPage, currentPage }: IRepositoryQueryData) =>
                `repositories?q=${repositoryName}&per_page=${perPage}&page=${currentPage}`,
        }),
        getIssues: builder.query<IRepoIssuesQueryResponse, IRepoIssuesData>({
            query: ({ userName, repositoryName, perPage, currentPage }: IRepoIssuesData) =>
                `issues?q=repo:${userName}/${repositoryName}&per_page=${perPage}&page=${currentPage}`,
        }),
    }),
});

export const { useGetIssuesQuery, useGetReposQuery } = githubApi;
