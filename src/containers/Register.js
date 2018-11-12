//引入react框架
import React from 'react';
//引入样式
import '../css/register.css';
//引入组件
import CommonHeader from '../components/CommonHeader.js';
import UserRegister from '../components/UserRegister.js';

class Register extends React.Component {
	render() {
		return (
			<div className="register">
				<CommonHeader />
				<UserRegister />
			</div>
		)
	}
}

export default Register;
