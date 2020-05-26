import axios, { AxiosResponse } from 'axios';
import {IArticleList} from '../models/articleList'

const url = '/int-api/wire.php';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: () => axios.get(url).then(sleep(1000)).then(responseBody)
}

const Articles = {
    list: (): Promise<IArticleList> => requests.get()
}

export default {Articles}