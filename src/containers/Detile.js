//引入react框架
import React from 'react';
//引入样式
import '../css/header.css';
import '../css/detile.css';
//引入组件
import CommonHeader from '../components/CommonHeader.js';
import DetileContent from '../components/DetileContent.js';
import DetileOrder from '../components/DetileOrder.js';

class Detile extends React.Component {
	render() {
		return (
			<div className="detile">
				<CommonHeader />
				<DetileContent search={this.props.location.search} />
				<DetileOrder />
			</div>
		)
	}
}

export default Detile;
