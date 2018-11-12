//引入react框架
import React from 'react';
//引入路由
import { withRouter } from 'react-router-dom';
//引入Element-React
import 'element-theme-default';
//引入Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class DetileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			path: ''
		}
	}
	componentWillMount() {
		this.setState({
			path: this.props.location.pathname
		});
	}
	handleSkip(path) {
		this.props.history.push(path);
	}
	render() {
		let path = this.state.path;
		return (
			<div className="header">
				<i className="el-icon-arrow-left" onClick={this.handleSkip.bind(this,'/home')}></i>
				<p style={path==='/detile'?{"display":"block"}:{"display":"none"}}>商品详情</p>
				<p style={path==='/user'?{"display":"block"}:{"display":"none"}}>用户登录</p>
				<p style={path==='/register'?{"display":"block"}:{"display":"none"}}>用户注册</p>
				<FontAwesomeIcon icon="bars" />
			</div>
		)
	}
}

DetileHeader = withRouter(DetileHeader);

export default DetileHeader;
