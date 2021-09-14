import { IUser } from '../user/IUser';

export interface IRepoIssuesQueryResponse {
    total_count: number;
    incomplete_results: boolean;
    items: [
        {
            url: string;
            repository_url: string;
            labels_url: string;
            comments_url: string;
            events_url: string;
            html_url: string;
            id: number;
            node_id: string;
            number: number;
            title: string;
            user: IUser;
            labels: [
                {
                    id: number;
                    node_id: string;
                    url: string;
                    name: string;
                    color: string;
                    default: boolean;
                    description: string;
                }
            ];
            state: string;
            locked: boolean;
            assignee: IUser;
            assignees: IUser[];
            comments: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            author_association: string;
            active_lock_reason: string;
            draft: boolean;
            pull_request: {
                url: string;
                html_url: string;
                diff_url: string;
                patch_url: string;
            };
            body: string;
            performed_via_github_app: boolean;
            score: number;
        }
    ];
}
