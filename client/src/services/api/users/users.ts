import api from '../api';
import { ApiSuccessResponse } from '../types.ts';
import {
    ListResponse,
    ViewResponse,
} from './types';

type ListRes = ApiSuccessResponse<ListResponse>;
const list = () =>
    api.get<ListRes>('/users', {});

type ViewRes = ApiSuccessResponse<ViewResponse>;
const view = (id: string) => api.get<ViewRes>(`/users/${id}`);

export default {
    list,
    view,
};