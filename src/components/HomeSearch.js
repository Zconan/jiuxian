//引入react框架
import React from 'react';
//引入Element-React
import 'element-theme-default';

class HomeSearch extends React.Component {
	render() {
		return (
			<div className="search">
				<a href="#/home">首页</a>
				<div>
					<i className="el-icon-search"></i>
					<input type="text" placeholder="自营满509元送法国原瓶进口XO" />
				</div>
			</div>
		)
	}
}

export default HomeSearch;
