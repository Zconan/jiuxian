//引入react框架
import React, { Component } from 'react';
//引入路由
import { withRouter } from 'react-router-dom';
//引入Element-React
import 'element-theme-default';
//引入Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faHome);
library.add(faShoppingCart);
library.add(faUser);

class HomeTabs extends Component {
	constructor() {
		super();
		this.state = {
			tabs: [{
				id: 1,
				path: '/home',
				name: '首页',
				icon: 'home',
				elIcon: ''
			}, {
				id: 2,
				path: '/classify',
				name: '分类',
				icon: 'home',
				elIcon: 'el-icon-menu'
			}, {
				id: 3,
				path: '/sale',
				name: '',
				icon: 'home',
				elIcon: ''
			}, {
				id: 4,
				path: '/cart',
				name: '购物车',
				icon: 'shopping-cart',
				elIcon: ''
			}, {
				id: 5,
				path: '/user',
				name: '我的酒仙',
				icon: 'user',
				elIcon: ''
			}]
		}
	}
	handleChangeTab(path) {
		//编程式导航
		this.props.history.push(path);
	}
	render() {
		return(
			<div className="tabs">
		        <ul>
		        	{
		        		this.state.tabs.map(item=>{
		        			return (
		        				<li key={item.id} onClick={this.handleChangeTab.bind(this,item.path)}>
		        					<i className={item.elIcon}></i>
		        					<FontAwesomeIcon className="icon" icon={item.icon} style={(item.id===2||item.id===3)?{"display":"none"}:{"display":"inline-block"}} />
		        					<p>{item.name}</p>
		        				</li>
		        			)
		        		})
		        	}
		        </ul>
      		</div>
		);
	}
}

//高阶组件
HomeTabs = withRouter(HomeTabs);

export default HomeTabs;