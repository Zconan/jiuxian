//引入react框架
import React from 'react';
//引入样式
import '../css/header.css';
import '../css/user.css';
//引入组件
import CommonHeader from '../components/CommonHeader.js';
import UserLogin from '../components/UserLogin.js';
import UserPartner from '../components/UserPartner.js';

class User extends React.Component {
	render() {
		return (
			<div className="user">
				<CommonHeader />
				<UserLogin />
				<UserPartner />
			</div>
		)
	}
}

export default User;
