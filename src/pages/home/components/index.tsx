import React, { FunctionComponent, useMemo } from 'react';
import { Avatar, List, Space, Image, Tooltip, Spin } from 'antd';
import {
    ExclamationCircleOutlined,
    ForkOutlined,
    StarOutlined,
    AuditOutlined,
} from '@ant-design/icons';

import * as S from './styles';

import { IRepository } from '../../../interfaces/repositories/IRepository';
import { IApod } from '../../../interfaces/apod/IApod';

const texts = Object.freeze({
    a: 'Stargazers Count',
    b: 'Number of Forks',
    c: 'Open Issues',
    d: 'License',
    e: 'No license',
});

const Icon = ({
    label,
    icon,
    content,
}: {
    label: string;
    icon: FunctionComponent;
    content: string | number;
}) => (
    <Tooltip title={label}>
        <Space>
            {React.createElement(icon)}
            {content}
        </Space>
    </Tooltip>
);

export const ListItem = ({
    repositoryData,
    apodIsLoading,
    apodData,
}: {
    repositoryData: IRepository;
    apodIsLoading: boolean;
    apodData?: IApod;
}) => {
    return (
        <List.Item
            key={repositoryData.id}
            actions={[
                <Icon
                    label={texts.a}
                    icon={StarOutlined}
                    content={repositoryData.stargazers_count}
                    key="stargazersCount"
                />,
                <Icon
                    label={texts.b}
                    icon={ForkOutlined}
                    content={repositoryData.forks_count}
                    key="forksCount"
                />,
                <Icon
                    label={texts.c}
                    icon={ExclamationCircleOutlined}
                    content={repositoryData.open_issues_count}
                    key="issuesCount"
                />,
                <Icon
                    label={texts.d}
                    icon={AuditOutlined}
                    content={repositoryData.license?.name ?? texts.e}
                    key="license"
                />,
            ]}
            extra={
                apodIsLoading ? (
                    <S.SpinContainer>
                        <Spin />
                    </S.SpinContainer>
                ) : (
                    apodData && (
                        <>
                            {apodData.media_type === 'video' ? (
                                <iframe width={272} src={apodData.url} />
                            ) : (
                                <Tooltip title={apodData.title}>
                                    <Image
                                        about={apodData.explanation}
                                        width={272}
                                        alt={apodData.title}
                                        src={apodData.url}
                                    />
                                </Tooltip>
                            )}
                        </>
                    )
                )
            }
        >
            <List.Item.Meta
                avatar={<Avatar src={repositoryData.owner.avatar_url} />}
                title={<a href={repositoryData.owner.url}>{repositoryData.owner.login}</a>}
                description={repositoryData.description}
            />
            {repositoryData.description}
        </List.Item>
    );
};
