//引入react框架
import React from 'react';
//引入axios
import axios from 'axios';
//引入Element-React
import { Carousel } from 'element-react';
import 'element-theme-default';

class DetileContent extends React.Component {
	constructor(props) {
		super();
		let obj = {};
		props.search.slice(1).split('&').forEach(item => {
			item = item.split('=');
			obj[item[0]] = item[1];
		});
		this.state = {
			page: obj.page,
			id: obj.id,
			img: '',
			good: {}
		}
	}
	componentWillMount() {
		axios.get('http://localhost:9999/detile?page=' + this.state.page + '&id=' + this.state.id).then(res => {
			this.setState({
				good: res.data.commonProductInfo,
				img: res.data.commonProductInfo.imgPath
			});
		}).catch(err => {
			console.log(err);
		})
	}
	render() {
		let img = this.state.img;
		return(
			<div>
				<div className="slideshow">
					<Carousel height="320px">
			          	{
			            	[img,img,img].map((item, index) => {
			              		return (
			                		<Carousel.Item key={index}>
			                  			<img style={{"width":"100%"}} src={item} alt="" />
			                		</Carousel.Item>
			              		)
			            	})
			          	}
	        		</Carousel>
				</div>
				<div className="content">
					<h4>{this.state.good.pname}</h4>
					<p>爆款补货来袭 畅销口粮特惠 低价疯抢</p>
					<div>
						<span>￥{this.state.good.actPrice}</span>
						<del>酒仙价:{this.state.good.jxPrice}</del>
						<p>会员下单再享98折,可省{(this.state.good.actPrice*0.02).toFixed(2)}元</p>
					</div>
				</div>
				<div className="club">
					<p>购买CLUB会员享受更多优惠</p>
					<i className="el-icon-arrow-right"></i>
				</div>
				<div className="gold">
					<span>金币</span>
					<p>赠送<i>14</i>个金币</p>
				</div>
			</div>
		)
	}
}

export default DetileContent;