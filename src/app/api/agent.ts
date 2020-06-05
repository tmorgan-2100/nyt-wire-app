import axios, { AxiosResponse } from 'axios';
import { IArticleList } from '../models/articleList';
import { IFilterList } from '../models/filterList';

//const url = '/int-api/wire.php';
const articleUrl = 'https://www.timmorgan.us/int-api/wire.php';
const filterUrl = 'https://www.timmorgan.us/int-api/wire-sections.php';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: () => axios.get(articleUrl).then(sleep(1000)).then(responseBody),
    filters: () => axios.get(filterUrl).then(sleep(1000)).then(responseBody)
}

const Articles = {
    list: (): Promise<IArticleList> => requests.get(),
    filters: (): Promise<IFilterList> => requests.filters()
}

export default {Articles}