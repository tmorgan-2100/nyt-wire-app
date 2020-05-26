import React, { useEffect, useContext } from 'react';
import ArticleList from '../../features/articles/ArticleList';
import { Container, Image } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ArticleStore from '../stores/articleStore';
import LoadingComponent from './LoadingComponent';
import 'semantic-ui-css/semantic.min.css'

function App() {
    const articleStore = useContext(ArticleStore)

    useEffect(() => {
        articleStore.loadArticles()
    }, [articleStore]);

    if (articleStore.loadingInitial) return <LoadingComponent content='Loading activities' />

    return (
        <div className="App">
            <Container>
                <h1>Demo: The New York Times Wire Feed</h1>
                <a href='https://developer.nytimes.com/'><Image src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1568441068443" alt='Data provided by The New York Times' /></a>
                <p>This app retrieves a real-time feed of the newest stories published by The New York Times. It accesses a RESTful web service, retrieving the latest articles and displaying them using
                    React (written in Typescript) and Semantic UI.</p>
            </Container>
            
            <Container>
                 <ArticleList />
            </Container>
        </div>
    );
}

export default observer(App);
