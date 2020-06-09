import axios, { AxiosPromise } from 'axios';

export function executeGetRequest<R>(
    path: string,
    headers: any = {}
): AxiosPromise<R> {
    return axios.get(path, headers);
}
