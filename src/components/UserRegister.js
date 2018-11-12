//引入react框架
import React from 'react';
//引入路由
import { withRouter } from 'react-router-dom';
//引入Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faRetweet, faLock } from '@fortawesome/free-solid-svg-icons';
library.add(faMobile);
library.add(faRetweet);
library.add(faLock);

class UserRegister extends React.Component {
	//手机号码格式及是否注册验证
	handleCheckPhone() {
		let phone = this.refs.phoneInput.value;
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			alert('手机号码格式不正确');
			this.refs.phoneInput.value = '';
		} else if(/^1[34578]\d{9}$/.test(phone)) {
			let self = this;
			let statusCode = [200, 304];
			let xhr = new XMLHttpRequest();
			xhr.onload = function() {
				if(statusCode.indexOf(xhr.status) >= 0) {
					if(xhr.responseText === 'no') {
						alert('该手机号码已被注册');
						self.refs.phoneInput.value = '';
					}
				}
			}
			xhr.open('post', 'http://localhost:9999/checkphone', true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send('phone=' + phone);
		}
	}
	//密码格式验证
	handleCheckPassword() {
		let password = this.refs.passwordInput.value;
		if(!(/^[\w.]{6,16}$/.test(password))) {
			alert('密码由6-16位字母、数字或者.组成');
			this.refs.passwordInput.value = '';
		}
	}
	//再次确认密码验证
	handleAffirmPassword() {
		let password = this.refs.passwordInput.value;
		let affirm = this.refs.affirmInput.value;
		if(affirm !== password) {
			alert('两次输入密码不一致');
			this.refs.affirmInput.value = '';
		}
	}
	//保存注册信息
	handleRegister() {
		let phone = this.refs.phoneInput.value;
		let password = this.refs.passwordInput.value;
		let self = this;
		let statusCode = [200, 304];
		let xhr = new XMLHttpRequest();
		xhr.onload = function() {
			if(statusCode.indexOf(xhr.status) >= 0) {
				if(xhr.responseText === 'no') {
					alert('很遗憾，注册失败');
					self.props.history.push('/register');
				} else if(xhr.responseText === 'yes') {
					alert('恭喜您，注册成功');
					self.props.history.push('/user');
				}
			}
		}
		xhr.open('post', 'http://localhost:9999/saveinformation', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send('phone=' + phone + '&password=' + password);
	}
	render() {
		return(
			<div className="reg">
				<div className="inputbox">
					<div className="phone">
						<FontAwesomeIcon icon="mobile" />
						<input ref="phoneInput" type="phone" placeholder="手机号" onBlur={this.handleCheckPhone.bind(this)} />
					</div>
					<div className="imgcode">
						{/*<img src={} alt="" />*/}
						<FontAwesomeIcon icon="retweet" />
					</div>
					<div className="numcode">
						<input type="text" placeholder="请输入校验码" />
						<button>获取校验码</button>
					</div>
					<div className="password">
						<FontAwesomeIcon icon="lock" />
						<input ref="passwordInput" type="password" placeholder="请输入密码" onBlur={this.handleCheckPassword.bind(this)} />
					</div>
					<div className="affirm">
						<FontAwesomeIcon icon="lock" />
						<input ref="affirmInput" type="password" placeholder="再次输入密码" onBlur={this.handleAffirmPassword.bind(this)} />
					</div>
					<button className="loginbutton" onClick={this.handleRegister.bind(this)}>确认注册</button>
				</div>
			</div>
		)
	}
}

UserRegister = withRouter(UserRegister);

export default UserRegister;