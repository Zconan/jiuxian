//引入react框架
import React from 'react';
//引入axios
import axios from 'axios';
//引入Element-React
import 'element-theme-default';

class HomeBarList extends React.Component {
	constructor() {
		super();
		this.state = {
			goodslist: []
		}
	}
	componentWillMount() {
		axios.get('http://localhost:9999/barlist').then(res => {
			this.setState({
				goodslist: res.data.killProList
			});
		}).catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div className="barlist">
				<div className="top">
					<h4>掌上秒拍</h4>
					<p>
						<span>更多商品等你来抢!</span>
						<i className="el-icon-arrow-right"></i>
					</p>
				</div>
				<div className="bottom">
					<ul>
						{
							this.state.goodslist.map((item,index)=>{
								return (
									<li key={index}>
										<img src={item.proImg} alt="" />
										<p>{item.proName}</p>
										<span>￥{item.proPrice.toFixed(2)}</span>
										<del>￥{item.jxPrice.toFixed(2)}</del>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default HomeBarList;
