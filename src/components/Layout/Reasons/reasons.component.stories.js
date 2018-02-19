import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import Reason from './reasons.component.js';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('ReasonsList', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Reason', () => (
		<div>
			<Reason />
		</div>
	));
