 import { IArticle } from '../models/article';

export interface IArticleList {
    copyright: string,
    num_results: number,
    results: IArticle[],
    prototype: {}
}