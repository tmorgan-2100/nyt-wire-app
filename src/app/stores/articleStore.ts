import { observable, action, computed, runInAction } from 'mobx';
import { createContext } from 'react';
import { IArticle } from '../models/article';
import { IFilterList } from '../models/filterList';
import agent from '../api/agent';

class ArticleStore {
    @observable articleRegistry = new Map();
    @observable filterRegistry = new Map();
    @observable articles: IArticle[] = [];
    @observable loadingInitial = false;
    @observable filters: IFilterList[] = [];

    @action loadArticles = async () => {
        this.loadingInitial = true;
        try {
            const articles = await agent.Articles.list();
            runInAction('loading articles', () => {
                let i = 1;
                articles.results.forEach(article => {
                    this.articleRegistry.set(i, article);
                    i++;
                })
                this.loadingInitial = false;
            })
        } catch (error) {
            runInAction('article load error', () => {
                console.log(error);
                this.loadingInitial = false;
            })
        }
        
    }

    @action loadFilters = async () => {
        this.loadingInitial = true;
        try {
            const filters = await agent.Articles.filters();
            runInAction('loading filters', () => {
                let i = 1;
                filters.results.forEach(filter => {
                    this.filterRegistry.set(i, filter);
                    i++;
                })
                this.loadingInitial = false;
            })
        } catch (error) {
            runInAction('filter load error', () => {
                console.log(error);
                this.loadingInitial = false;
            })
        }
    }

    @computed get listArticles() {
        return Array.from(this.articleRegistry.values());
    }

    @computed get listFilters() {
        return Array.from(this.filterRegistry.values());
    }
}

export default createContext(new ArticleStore());