import { IRepository } from './IRepository';

export interface IRepositoryQueryResponse {
    total_count: number;
    incomplete_results: boolean;
    items: IRepository[];
}
