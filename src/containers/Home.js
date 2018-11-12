//引入react框架
import React from 'react';
//引入样式
import '../css/home.css';
//引入组件
import HomeSearch from '../components/HomeSearch.js';
import HomeSlideShow from '../components/HomeSlideShow.js';
import HomeNavsList from '../components/HomeNavsList.js';
import HomeBarList from '../components/HomeBarList.js';
import HomeGoodsList from '../components/HomeGoodsList.js';
import HomeTabs from '../components/HomeTabs.js';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<HomeSearch />
				<HomeSlideShow />
				<HomeNavsList />
				<HomeBarList />
				<HomeGoodsList />
				<HomeTabs/>
			</div>
		)
	}
}

export default Home;
