//引入react框架
import React from 'react';
import ReactDOM from 'react-dom';
//引入路由
import { HashRouter } from 'react-router-dom';
//引入样式
import './css/base.css';
//引入组件
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
