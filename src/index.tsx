import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import ErrorBoundary from './components/ErrorBoundary';

const store = setupStore()

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: #fefefe
  }
`

ReactDOM.render(
	<Provider store={store}>
		<Router basename='/'>
			<ErrorBoundary>
				<GlobalStyles/>
				<App/>
			</ErrorBoundary>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
