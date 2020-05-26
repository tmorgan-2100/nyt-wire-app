import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ArticleStore from '../../app/stores/articleStore';
import { Icon, Card, Image } from 'semantic-ui-react';
import 'mobx-react-lite/batchingForReactDom'


const ArticleList: React.FC = () => {
    const articleStore = useContext(ArticleStore);
    const { listArticles } = articleStore;

    return (
        <div>
            <Card.Group>
                {listArticles.map(article => (
                    <Card key={article.url}>
                        <Card.Content>
                            <Image src={article.multimedia[0].url} alt={article.multimedia[0].caption} size="small" centered />
                            <Card.Header><h3>{article.title}</h3></Card.Header>
                            <Card.Meta>{article.byline}</Card.Meta>
                            <Card.Description>{article.abstract}</Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign='right'>
                            <Card.Meta textAlign='left'>{article.section}</Card.Meta>
                            <a href={article.url}><Icon name='newspaper' /></a>
                          
                           
                        </Card.Content>
                </Card>
                ))}
            </Card.Group>
            
        </div>
    );
}

export default observer(ArticleList);