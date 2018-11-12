//引入react框架
import React from 'react';
//引入路由
import { withRouter } from 'react-router-dom';
//引入axios
import axios from 'axios';

class HomeGoodsList extends React.Component {
	constructor() {
		super();
		this.state = {
			goodslist: [],
			isLoading: false,
			isLoadingMore: false,
			page: 1
		}
	}

	//生命周期，发送请求
	componentWillMount() {
		axios.get('http://localhost:9999/goodslist?page=' + this.state.page).then(res => {
			this.setState({
				goodslist: res.data.promoList
			});
		}).catch(err => {
			console.log(err);
		});
	}

	componentDidMount() {
		let wrapper = this.refs.wrapper; //操作DOM节点
		let loadMoreDataFn = this.loadMoreDataFn;
		let that = this; //为解决不同context的问题
		let timeCount;

		function callback() {
			//获取标识点距顶部距离
			let top = wrapper.getBoundingClientRect().top;
			//获取屏幕高度
			let windowHeight = window.screen.height;
			if(top && top < windowHeight) {
				//当wrapper滚动到页面可视范围内触发请求函数
				loadMoreDataFn(that);
			}
		}

		//监听屏幕滚动
		window.addEventListener('scroll', function() {
			if(this.state.isLoadingMore) {
				return;
			}
			if(timeCount) {
				clearTimeout(timeCount);
			}
			timeCount = setTimeout(callback, 50);
		}.bind(this), false);
	}

	//发送请求加载更多
	loadMoreDataFn(that) {
		if(that.state.page >= 7) {
			return;
		}
		that.setState({
			isLoading: true,
			page: that.state.page + 1
		});
		axios.get('http://localhost:9999/goodslist?page=' + that.state.page).then(res => {
			that.setState({
				isLoading: false,
				goodslist: that.state.goodslist.concat(res.data.promoList)
			});
		}).catch(err => {
			console.log(err);
		});
	}

	handleSkip(params) {
		this.props.history.push(params.path + '?page=' + params.page + '&id=' + params.id);
	}

	render() {
		return(
			<div className="goodslist">
				<p>爆款推荐</p>
				<ul>
					{
						this.state.goodslist.map((item,index) => {
							let res = item.commonProductInfo;
							let page;
							switch(true) {
								case (index>=0&&index<=9): 
									page = 1;
									break;
								case index>=10&&index<=19:
									page = 2;
									break;
								case index>=20&&index<=29:
									page = 3;
									break;
								case index>=30&&index<=39:
									page = 4;
									break;
								case index>=40&&index<=49:
									page = 5;
									break;
								case index>=50&&index<=59:
									page = 6;
									break;
								case index>=60&&index<=69:
									page = 7;
									break;
								default:
									break;
							}
							return (
								<li key={res.pid} onClick={this.handleSkip.bind(this,{path:'/detile',page:page,id:res.pid})}>
									<img src={res.imgPath} alt="" />
									<h4>{res.pname}</h4>
									<p>
										<span>￥{res.actPrice}</span>
										<del>￥{res.jxPrice}</del>
									</p>
								</li>
							)
						})
					}
				</ul>
				<div className="loadMore" ref="wrapper" onClick={this.loadMoreDataFn.bind(this,this)}></div>
				<div className="loading" style={this.state.isLoading?{"display":"block"}:{"display":"none"}}>
					<i className="el-icon-loading"></i>
					<p>玩命加载中...</p>
				</div>
				<div className="copy" style={this.state.page===7?{"display":"block"}:{"display":"none"}}>
					<p>北京酒仙网络科技有限公司版权所有</p>
					<p>北京市北京经济技术开发区经海五路58号院8幢4层</p>
					<p>400-617-9999</p>
					<p>关于我们</p>
				</div>
			</div>
		)
	}
}

HomeGoodsList = withRouter(HomeGoodsList);

export default HomeGoodsList;