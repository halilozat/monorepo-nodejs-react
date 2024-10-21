import api from '../api';
import { ApiSuccessResponse } from '../types.ts';
import {
    ListResponse,
    ViewResponse,
} from './types';

type ListRes = ApiSuccessResponse<ListResponse>;
const list = (page: number, role?: string) =>
    api.get<ListRes>('/books', {
        params: {
            page,
            filter: {
                role,
            },
        },
    });

type ViewRes = ApiSuccessResponse<ViewResponse>;
const view = (id: string) => api.get<ViewRes>(`/books/${id}`);

export default {
    list,
    view,
};
