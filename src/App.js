//引入react框架
import React, { Component } from 'react';
//引入路由
import { Switch, Route } from 'react-router-dom';
//引入样式
import './css/app.css';
//引入组件
import Home from './containers/Home.js';
import Classify from './containers/Classify.js';
import Sale from './containers/Sale.js';
import Cart from './containers/Cart.js';
import User from './containers/User.js';
import Detile from './containers/Detile.js';
import Register from './containers/Register.js';
//引入Element-React
import 'element-theme-default';

class App extends Component {
	render() {
		return(
			<div className="app">
		      	<Switch>
		      		<Route path="/home" component={Home} />
		      		<Route path="/classify" component={Classify} />
		      		<Route path="/sale" component={Sale} />
		      		<Route path="/cart" component={Cart} />
		      		<Route path="/user" component={User} />
		      		<Route path="/detile" component={Detile} />
		      		<Route path="/register" component={Register} />
		      		<Route path="/" component={Home} />
		      	</Switch>
      		</div>
		);
	}
}

export default App;