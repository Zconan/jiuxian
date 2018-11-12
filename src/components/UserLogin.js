//引入react框架
import React from 'react';
//引入Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faRetweet, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
library.add(faMobile);
library.add(faRetweet);
library.add(faUser);
library.add(faLock);

class UserLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			tabs: [{
				id: 1,
				name: '账号登录'
			}, {
				id: 2,
				name: '手机动态密码登录'
			}],
			currentTab: 2
		}
	}
	handleChangeTab(id) {
		this.setState({
			currentTab: id
		});
	}
	render() {
		return (
			<div className="login">
				<ul>
					{
						this.state.tabs.map(item => {
							return (
								<li className={item.id===this.state.currentTab?"active":""} key={item.id} onClick={this.handleChangeTab.bind(this,item.id)}>{item.name}</li>
							)
						})
					}
				</ul>
				<div className="inputbox" style={this.state.currentTab===1?{"display":"block"}:{"display":"none"}}>
					<div className="username">
						<FontAwesomeIcon icon="user" />
						<input type="text" placeholder="用户名/邮箱/手机号" />
					</div>
					<div className="password">
						<FontAwesomeIcon icon="lock" />
						<input type="password" placeholder="密码" />
					</div>
					<div className="imgcode">
						{/*<img src={} alt="" />*/}
						<FontAwesomeIcon icon="retweet" />
					</div>
					<button className="loginbutton">立即登录</button>
				</div>
				<div className="inputbox" style={this.state.currentTab===2?{"display":"block"}:{"display":"none"}}>
					<div className="phone">
						<FontAwesomeIcon icon="mobile" />
						<input type="phone" placeholder="请输入手机号，新用户将自动注册" />
					</div>
					<div className="imgcode">
						{/*<img src={} alt="" />*/}
						<FontAwesomeIcon icon="retweet" />
					</div>
					<div className="numcode">
						<input type="text" placeholder="请输入校验码" />
						<button>获取校验码</button>
					</div>
					<button className="loginbutton">立即登录</button>
				</div>
				<div className="link">
					<a href="#/register">免费注册</a>
					<a href="#/user">找回密码</a>
				</div>
			</div>
		)
	}
}

export default UserLogin;
