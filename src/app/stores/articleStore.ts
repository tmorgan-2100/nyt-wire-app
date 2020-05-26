import { observable, action, computed, runInAction } from 'mobx';
import { createContext } from 'react';
import { IArticle } from '../models/article';
import agent from '../api/agent';

class ArticleStore {
    @observable articleRegistry = new Map();
    @observable articles: IArticle[] = [];
    @observable loadingInitial = false;

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

    @computed get listArticles() {
        return Array.from(this.articleRegistry.values());
    }
}

export default createContext(new ArticleStore());