import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';
import { userinfo_reducer } from './Redux/Signin_reducer';

Amplify.configure(awsExports);

const middleware = applyMiddleware();

const rootReducer = combineReducers({
	userinfo_reducer,
});

const store = createStore(rootReducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
