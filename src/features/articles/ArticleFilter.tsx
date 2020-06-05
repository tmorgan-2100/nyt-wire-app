import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ArticleStore from '../../app/stores/articleStore';
import { Rail, Segment, Checkbox, Form, Header } from 'semantic-ui-react';
import 'mobx-react-lite/batchingForReactDom';

const ArticleFilter: React.FC = () => {
	const articleStore = useContext(ArticleStore);
	const { listFilters } = articleStore;

	return (
		<Rail position='left' style={{ paddingTop: '15em' }}>
			<Header center>Filters</Header>
			<Form color='grey' raised style={{ overflowY: 'scroll', maxHeight: '40em' }}>
				{listFilters.map(filter => (
					<Segment style={{ width: '80%'}}>
							<Form.Field key={filter.section}>
								<Checkbox label={filter.display_name} value={filter.section} />
                            </Form.Field>
                        </Segment>
							))
						}
						
					</Form>
			</Rail>
	);
}


export default observer(ArticleFilter);